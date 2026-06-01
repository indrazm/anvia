import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export type EventStreamFormat = "jsonl" | "sse";

export type TransportOptions = {
  signal?: AbortSignal;
  headers?: HeadersInit;
};

export type EventTransport<TRequest, TEvent> = {
  send(request: TRequest, options?: TransportOptions): AsyncIterable<TEvent>;
};

export type FetchEventStreamOptions = Omit<RequestInit, "headers"> & {
  format?: EventStreamFormat;
  fetch?: typeof fetch;
  headers?: HeadersInit;
};

export type CreateFetchTransportOptions<TRequest, TEvent> = {
  endpoint: string | URL | ((request: TRequest) => string | URL);
  method?: string;
  format?: EventStreamFormat;
  fetch?: typeof fetch;
  headers?: HeadersInit | ((request: TRequest) => HeadersInit | Promise<HeadersInit>);
  body?: (request: TRequest) => BodyInit | null | undefined | Promise<BodyInit | null | undefined>;
  init?: Omit<RequestInit, "body" | "headers" | "method" | "signal">;
  mapEvent?: (event: unknown) => TEvent;
};

export type ChatRole = "system" | "user" | "assistant" | "tool";

export type ChatMessage = {
  id: string;
  role: ChatRole;
  content: string;
  metadata?: unknown;
};

export type DefaultChatRequest = {
  message: string;
  history: ChatMessage[];
  stream: true;
};

export type UseChatStatus = "idle" | "streaming" | "error";

export type UseChatOptions<
  TRequest = DefaultChatRequest,
  TEvent = unknown,
  TMessage extends ChatMessage = ChatMessage,
> = {
  transport?: EventTransport<TRequest, TEvent>;
  endpoint?: string | URL;
  format?: EventStreamFormat;
  initialMessages?: TMessage[];
  createRequest?: (input: string, messages: TMessage[]) => TRequest;
  eventToDelta?: (event: TEvent) => string | undefined;
  eventToFinal?: (event: TEvent) => string | undefined;
  onEvent?: (event: TEvent) => void;
  onError?: (error: unknown) => void;
};

export type UseChatResult<TEvent = unknown, TMessage extends ChatMessage = ChatMessage> = {
  messages: TMessage[];
  events: TEvent[];
  input: string;
  setInput(input: string): void;
  send(input?: string): Promise<void>;
  stop(): void;
  reset(messages?: TMessage[]): void;
  status: UseChatStatus;
  error: unknown;
  text: string;
};

export class EventStreamHttpError extends Error {
  constructor(
    readonly response: Response,
    readonly body: string,
  ) {
    super(`Event stream request failed with status ${response.status}`);
    this.name = "EventStreamHttpError";
  }
}

export async function* readJsonlStream<TEvent>(
  stream: ReadableStream<Uint8Array>,
): AsyncIterable<TEvent> {
  const reader = stream.getReader();
  const decoder = new TextDecoder();
  let buffer = "";

  try {
    while (true) {
      const next = await reader.read();
      if (next.done === true) {
        break;
      }

      buffer += decoder.decode(next.value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() ?? "";

      for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed.length > 0) {
          yield JSON.parse(trimmed) as TEvent;
        }
      }
    }

    buffer += decoder.decode();
    const trimmed = buffer.trim();
    if (trimmed.length > 0) {
      yield JSON.parse(trimmed) as TEvent;
    }
  } finally {
    reader.releaseLock();
  }
}

export async function* readSseStream<TEvent>(
  stream: ReadableStream<Uint8Array>,
): AsyncIterable<TEvent> {
  const reader = stream.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  let event = createEmptySseEvent();

  try {
    while (true) {
      const next = await reader.read();
      if (next.done === true) {
        break;
      }

      buffer += decoder.decode(next.value, { stream: true });
      const lines = buffer.split(/\r?\n/);
      buffer = lines.pop() ?? "";

      for (const line of lines) {
        const parsed = parseSseLine(line, event);
        event = parsed.event;
        if (parsed.complete === true && parsed.data !== undefined) {
          yield JSON.parse(parsed.data) as TEvent;
        }
      }
    }

    buffer += decoder.decode();
    if (buffer.length > 0) {
      const parsed = parseSseLine(buffer, event);
      event = parsed.event;
      if (parsed.complete === true && parsed.data !== undefined) {
        yield JSON.parse(parsed.data) as TEvent;
      }
    }
    const data = flushSseEvent(event);
    if (data !== undefined) {
      yield JSON.parse(data) as TEvent;
    }
  } finally {
    reader.releaseLock();
  }
}

export async function* fetchEventStream<TEvent>(
  input: string | URL | Request,
  options: FetchEventStreamOptions = {},
): AsyncIterable<TEvent> {
  const fetchImpl = options.fetch ?? globalThis.fetch;
  if (fetchImpl === undefined) {
    throw new Error("fetchEventStream requires a fetch implementation");
  }

  const response = await fetchImpl(input, fetchOptions(options));
  if (!response.ok) {
    throw new EventStreamHttpError(response, await response.text());
  }
  if (response.body === null) {
    throw new Error("Event stream response does not include a body");
  }

  const format = options.format ?? inferEventStreamFormat(response.headers.get("content-type"));
  if (format === "sse") {
    yield* readSseStream<TEvent>(response.body);
    return;
  }

  yield* readJsonlStream<TEvent>(response.body);
}

export function createFetchTransport<TRequest, TEvent = unknown>(
  options: CreateFetchTransportOptions<TRequest, TEvent>,
): EventTransport<TRequest, TEvent> {
  return {
    async *send(request, transportOptions = {}) {
      const endpoint =
        typeof options.endpoint === "function" ? options.endpoint(request) : options.endpoint;
      const requestHeaders = await resolveHeaders(options.headers, request);
      const headers = mergeHeaders(requestHeaders, transportOptions.headers);
      const method = options.method ?? "POST";
      const body = await resolveBody(options.body, request, headers);
      const init: FetchEventStreamOptions = {
        ...(options.init ?? {}),
        method,
        headers,
        format: options.format ?? "jsonl",
      };

      if (body !== undefined) {
        init.body = body;
      }
      if (transportOptions.signal !== undefined) {
        init.signal = transportOptions.signal;
      }
      if (options.fetch !== undefined) {
        init.fetch = options.fetch;
      }

      for await (const event of fetchEventStream<unknown>(endpoint, init)) {
        yield options.mapEvent === undefined ? (event as TEvent) : options.mapEvent(event);
      }
    },
  };
}

export function createChatTransport<TRequest = DefaultChatRequest, TEvent = unknown>(
  options: CreateFetchTransportOptions<TRequest, TEvent>,
): EventTransport<TRequest, TEvent> {
  return createFetchTransport(options);
}

export function useChat<
  TRequest = DefaultChatRequest,
  TEvent = unknown,
  TMessage extends ChatMessage = ChatMessage,
>(options: UseChatOptions<TRequest, TEvent, TMessage> = {}): UseChatResult<TEvent, TMessage> {
  const [messages, setMessages] = useState<TMessage[]>(() => [...(options.initialMessages ?? [])]);
  const [events, setEvents] = useState<TEvent[]>([]);
  const [input, setInput] = useState("");
  const [status, setStatus] = useState<UseChatStatus>("idle");
  const [error, setError] = useState<unknown>();
  const abortRef = useRef<AbortController | undefined>(undefined);
  const messagesRef = useRef(messages);

  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  useEffect(() => {
    return () => {
      abortRef.current?.abort();
    };
  }, []);

  const transport = useMemo(() => {
    if (options.transport !== undefined) {
      return options.transport;
    }
    if (options.endpoint === undefined) {
      return undefined;
    }

    return createChatTransport<TRequest, TEvent>({
      endpoint: options.endpoint,
      format: options.format ?? "jsonl",
    });
  }, [options.transport, options.endpoint, options.format]);

  const createRequest = options.createRequest ?? defaultCreateRequest<TRequest, TMessage>;
  const eventToDelta = options.eventToDelta ?? defaultEventToDelta<TEvent>;
  const eventToFinal = options.eventToFinal ?? defaultEventToFinal<TEvent>;

  const appendAssistantText = useCallback((assistantId: string, text: string) => {
    setMessages((current) =>
      current.map((message) =>
        message.id === assistantId
          ? ({ ...message, content: `${message.content}${text}` } as TMessage)
          : message,
      ),
    );
  }, []);

  const replaceAssistantText = useCallback((assistantId: string, text: string) => {
    setMessages((current) =>
      current.map((message) =>
        message.id === assistantId ? ({ ...message, content: text } as TMessage) : message,
      ),
    );
  }, []);

  const send = useCallback(
    async (nextInput?: string) => {
      if (transport === undefined) {
        throw new Error("useChat requires either transport or endpoint");
      }

      const content = nextInput ?? input;
      if (content.trim().length === 0) {
        return;
      }

      abortRef.current?.abort();
      const abortController = new AbortController();
      abortRef.current = abortController;

      const userMessage = createMessage<TMessage>("user", content);
      const assistantMessage = createMessage<TMessage>("assistant", "");
      const requestMessages = [...messagesRef.current, userMessage];
      const request = createRequest(content, requestMessages);

      setInput("");
      setError(undefined);
      setStatus("streaming");
      setEvents([]);
      setMessages([...requestMessages, assistantMessage]);

      try {
        for await (const event of transport.send(request, { signal: abortController.signal })) {
          setEvents((current) => [...current, event]);
          options.onEvent?.(event);

          const delta = eventToDelta(event);
          if (delta !== undefined && delta.length > 0) {
            appendAssistantText(assistantMessage.id, delta);
          }

          const final = eventToFinal(event);
          if (final !== undefined) {
            replaceAssistantText(assistantMessage.id, final);
          }
        }

        if (!abortController.signal.aborted) {
          setStatus("idle");
        }
      } catch (caught) {
        if (isAbortError(caught)) {
          setStatus("idle");
          return;
        }

        setError(caught);
        setStatus("error");
        options.onError?.(caught);
      } finally {
        if (abortRef.current === abortController) {
          abortRef.current = undefined;
        }
      }
    },
    [
      appendAssistantText,
      createRequest,
      eventToDelta,
      eventToFinal,
      input,
      options,
      replaceAssistantText,
      transport,
    ],
  );

  const stop = useCallback(() => {
    abortRef.current?.abort();
    abortRef.current = undefined;
    setStatus("idle");
  }, []);

  const reset = useCallback((nextMessages?: TMessage[]) => {
    const resetMessages = nextMessages ?? [];
    messagesRef.current = resetMessages;
    abortRef.current?.abort();
    abortRef.current = undefined;
    setMessages(resetMessages);
    setEvents([]);
    setError(undefined);
    setInput("");
    setStatus("idle");
  }, []);

  const text = messages
    .filter((message) => message.role === "assistant")
    .map((message) => message.content)
    .join("");

  return {
    messages,
    events,
    input,
    setInput,
    send,
    stop,
    reset,
    status,
    error,
    text,
  };
}

function fetchOptions(options: FetchEventStreamOptions): RequestInit {
  const { format: _format, fetch: _fetch, ...init } = options;
  return init;
}

function inferEventStreamFormat(contentType: string | null): EventStreamFormat {
  return contentType?.toLowerCase().includes("text/event-stream") ? "sse" : "jsonl";
}

function createEmptySseEvent(): { data: string[] } {
  return { data: [] };
}

function parseSseLine(
  line: string,
  event: { data: string[] },
): { event: { data: string[] }; complete?: true; data?: string } {
  if (line === "") {
    const data = flushSseEvent(event);
    return data === undefined
      ? { event: createEmptySseEvent(), complete: true }
      : { event: createEmptySseEvent(), complete: true, data };
  }

  if (line.startsWith(":")) {
    return { event };
  }

  const separator = line.indexOf(":");
  const field = separator === -1 ? line : line.slice(0, separator);
  const value = separator === -1 ? "" : line.slice(separator + 1).replace(/^ /, "");

  if (field === "data") {
    event.data.push(value);
  }

  return { event };
}

function flushSseEvent(event: { data: string[] }): string | undefined {
  if (event.data.length === 0) {
    return undefined;
  }

  return event.data.join("\n");
}

async function resolveHeaders<TRequest>(
  headers: CreateFetchTransportOptions<TRequest, unknown>["headers"],
  request: TRequest,
): Promise<HeadersInit | undefined> {
  return typeof headers === "function" ? headers(request) : headers;
}

async function resolveBody<TRequest>(
  body: CreateFetchTransportOptions<TRequest, unknown>["body"],
  request: TRequest,
  headers: Headers,
): Promise<BodyInit | null | undefined> {
  if (body !== undefined) {
    return body(request);
  }

  if (!headers.has("content-type")) {
    headers.set("content-type", "application/json");
  }

  return JSON.stringify(request);
}

function mergeHeaders(...values: (HeadersInit | undefined)[]): Headers {
  const headers = new Headers();

  for (const value of values) {
    if (value === undefined) {
      continue;
    }
    new Headers(value).forEach((headerValue, key) => {
      headers.set(key, headerValue);
    });
  }

  return headers;
}

function defaultCreateRequest<TRequest, TMessage extends ChatMessage>(
  input: string,
  messages: TMessage[],
): TRequest {
  return {
    message: input,
    history: messages.slice(0, -1),
    stream: true,
  } as TRequest;
}

function createMessage<TMessage extends ChatMessage>(role: ChatRole, content: string): TMessage {
  return {
    id: createId(),
    role,
    content,
  } as TMessage;
}

function createId(): string {
  return globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2);
}

function defaultEventToDelta<TEvent>(event: TEvent): string | undefined {
  if (!isRecord(event)) {
    return undefined;
  }

  return event.type === "text_delta" && typeof event.delta === "string" ? event.delta : undefined;
}

function defaultEventToFinal<TEvent>(event: TEvent): string | undefined {
  if (!isRecord(event)) {
    return undefined;
  }

  return event.type === "final" && typeof event.output === "string" ? event.output : undefined;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isAbortError(error: unknown): boolean {
  return error instanceof DOMException && error.name === "AbortError";
}
