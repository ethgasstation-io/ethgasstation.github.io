---
title: Troubleshooting
---

# Troubleshooting

Use this checklist when AI Connect cannot authenticate or return data.

## Authentication failed

- Confirm you completed OAuth consent in the same account you expect to use
- Remove the connection from your client and authorize again
- Verify system clock drift is not invalidating token timestamps

## MCP server unreachable

- Confirm the MCP URL exactly matches your EthGasStation endpoint
- Check firewall or proxy rules blocking outbound HTTPS
- Test endpoint reachability from your network

## Tools return permission errors

- Your token may be missing required scopes
- Ask an admin to enable API or alert permissions for your workspace role
- Reconnect after role changes to refresh scopes

## No alert actions visible

- Ensure alerts are enabled on your plan
- Confirm your client supports MCP tool invocation, not read-only mode

If issues persist, include timestamp, workspace ID, and failing prompt in your support request.
