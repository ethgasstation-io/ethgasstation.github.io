---
title: Troubleshooting
---

# Troubleshooting

Use this checklist when AI Connect cannot authenticate, connect, or perform actions.

## Authentication failed

- confirm you completed OAuth consent in the same EthGasStation account you expect to use
- remove the connection from your client and authorize again
- verify system clock drift is not invalidating timestamps

## MCP server unreachable

- confirm the MCP URL is the SSE endpoint and not a generic site root
- verify you are using `/mcp/sse`
- Check firewall or proxy rules blocking outbound HTTPS
- Test endpoint reachability from your network

## Metadata or OAuth discovery issues

- verify `/.well-known/oauth-protected-resource` is reachable from the same base URL
- confirm your deployment routes `/.well-known`, `/oauth2`, `/connect`, and `/mcp` to the backend
- compare the live environment values against the MCP panel in the developer console

## Tools return permission errors

- your granted scopes may not include the action you are trying to perform
- reconnect after permissions or role changes so tokens are refreshed
- if reads work but writes fail, check for missing `alerts:write`

## No alert actions visible

- confirm your client supports MCP tool invocation instead of read-only context
- ensure you granted alert scopes during OAuth
- verify your account and plan can create alerts in the app itself

If issues persist, include the failing prompt, timestamp, client name, and whether the problem is auth, connection, or tool execution.
