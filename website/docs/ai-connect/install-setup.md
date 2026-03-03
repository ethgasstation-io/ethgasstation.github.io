---
title: Install & Setup
---

# Install & Setup

Use these steps to connect an MCP-compatible AI client to EthGasStation.

## Prerequisites

- EthGasStation account with AI Connect enabled
- Access to an MCP-compatible client
- Browser session available for OAuth login and consent

## 1. Get your MCP endpoint

From the EthGasStation dashboard, copy your workspace MCP URL.

Example:

```text
https://api.ethgasstation.io/mcp
```

## 2. Add the server in your AI client

Configure an MCP server entry using your endpoint.

```json
{
  "name": "ethgasstation",
  "url": "https://api.ethgasstation.io/mcp"
}
```

## 3. Authorize access

When prompted:

1. Sign in to EthGasStation
2. Approve requested scopes
3. Return to your AI client

## 4. Verify the connection

Run a quick read-only prompt:

```text
Show current Ethereum gas lanes and the 24h low/high.
```

If values return, setup is complete.
