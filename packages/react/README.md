# @anvia/react

React hooks and client transports for Anvia applications.

```tsx
import { useChat } from "@anvia/react";

export function Chat() {
  const chat = useChat({ endpoint: "/api/chat" });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        void chat.send();
      }}
    >
      <div>{chat.text}</div>
      <input value={chat.input} onChange={(event) => chat.setInput(event.target.value)} />
      <button disabled={chat.status === "streaming"}>Send</button>
    </form>
  );
}
```

## Exports

- `readJsonlStream(stream)` parses newline-delimited JSON streams.
- `readSseStream(stream)` parses Server-Sent Events with JSON `data:` payloads.
- `fetchEventStream(url, options)` fetches JSONL or SSE streams as `AsyncIterable`.
- `createFetchTransport(options)` creates an `EventTransport`.
- `createChatTransport(options)` creates the default fetch-backed chat transport.
- `useChat(options)` manages React chat state from any `EventTransport`.

The shared boundary is:

```ts
type EventTransport<TRequest, TEvent> = {
  send(request: TRequest, options?: TransportOptions): AsyncIterable<TEvent>;
};
```
