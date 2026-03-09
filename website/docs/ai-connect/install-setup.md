---
title: Install & Setup
---

# Install & Setup

Use these steps to connect a current MCP-compatible AI client to EthGasStation.

## Prerequisites

- an EthGasStation account
- an MCP-compatible client such as ChatGPT
- browser access for OAuth consent

## 1. Use the SSE endpoint

The current MCP server URL is the SSE endpoint:

```text
https://ethgasstation.io/mcp/sse
```

Internally, MCP messages are sent to:

```text
https://ethgasstation.io/mcp/message
```

## 2. Add the server in your AI client

Configure a new MCP server entry and point it to the SSE URL above.

## 3. Authorize access

When prompted:

1. Sign in to EthGasStation
2. Approve the requested scopes
3. Return to your AI client

The current scope set is:

```text
stats:read
alerts:read
alerts:write
```

If your client supports dynamic OAuth client registration, you may not need to enter a fixed client id and client secret manually.

## 4. Verify the connection

Run a quick read-only prompt:

```text
What’s gas right now (slow/average/fast), and how does it compare to the 24h range?
```

If values return, setup is complete.
