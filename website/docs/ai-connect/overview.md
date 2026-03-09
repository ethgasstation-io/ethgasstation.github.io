---
title: Overview
---

# AI Connect (MCP)

AI Connect exposes EthGasStation over the Model Context Protocol (MCP) so compatible AI clients can read live gas context and manage alerts for your account.

## What you can do

- request current gas conditions and lane guidance
- compare current values against recent ranges
- create, list, disable, and delete alerts from chat
- use the same account context you use in the main app

## Current transport details

The current product exposes MCP using:

- SSE endpoint: `/mcp/sse`
- message endpoint: `/mcp/message`
- OAuth protected resource metadata: `/.well-known/oauth-protected-resource`

## Security model

- production MCP access uses OAuth
- supported scopes are currently `stats:read`, `alerts:read`, and `alerts:write`
- API keys are for API/dev usage and legacy testing, not the preferred production MCP model

## Where to verify configuration

The signed-in `API & MCP Console` and the public MCP status endpoint expose live readiness details for the current environment.

## Next steps

- Complete [Install & Setup](./install-setup.md)
- Validate your connection with [Usage](./usage.md)
- Resolve connector issues in [Troubleshooting](./troubleshooting.md)
