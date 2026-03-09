---
title: Authentication
---

# Authentication

EthGasStation API v1 uses an API key header, not a bearer token.

## Header format

```http
x-api-key: <your_api_key>
```

## How to get a key

Create keys in the signed-in app:

1. Open `Developer`
2. Open `API & MCP Console`
3. Create a named key
4. Copy the full key immediately

## Key handling guidance

- store keys in a secret manager or deployment environment, not source control
- rotate keys when an integration changes ownership or a credential may have leaked
- revoke keys you no longer need
- prefer one key per integration or service owner

## Example request

```bash
curl -s https://ethgasstation.io/be/api/v1/gas/current \
  -H "x-api-key: $EGS_API_KEY" \
  -H "Accept: application/json"
```

## MCP is different

AI Connect / MCP does not use `x-api-key` in its normal production flow. MCP uses OAuth and bearer tokens for user-scoped access.

Use API keys for server-side integrations and testing. Use OAuth for MCP clients.

Requests without a valid API key return `401 Unauthorized`.
