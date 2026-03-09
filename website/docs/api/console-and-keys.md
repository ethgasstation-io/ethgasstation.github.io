---
title: Console & API Keys
---

# Console & API Keys

The current app includes a dedicated `API & MCP Console` in the signed-in developer area.

Use it to:

- create API keys
- rotate or revoke existing keys
- monitor daily usage
- check your active plan and current headroom
- inspect MCP readiness values
- open the API playground

## Where keys come from

API keys are created from the EthGasStation app, not from the docs site.

In the app:

1. Open `Developer`
2. Go to `API & MCP Console`
3. Create a named key
4. Copy it immediately, because the full key is shown once

## Key management

The developer console supports:

- `Create`
- `Rotate`
- `Revoke`

Rotation is the right default when a key may have leaked but you still want to preserve the integration name and replace credentials cleanly.

## Usage view

The usage panel shows:

- active plan
- daily limit
- used today
- remaining today
- active key count

This is the most reliable place to check consumption before you hit a plan boundary.

## Playground

The current backend exposes a public API playground redirect at:

```text
/api-playground
```

This opens the Scalar/OpenAPI surface for API v1. Use it when you want to inspect request and response shapes before wiring code.

## MCP panel

The same console also includes an MCP panel. It is useful when you need:

- the current SSE URL
- the MCP message endpoint
- OAuth protected resource metadata
- supported scopes

For setup details, continue with [AI Connect overview](../ai-connect/overview.md).
