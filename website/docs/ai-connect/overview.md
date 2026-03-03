---
sidebar_position: 1
title: Overview
---

# AI Connect (MCP)

AI Connect lets you connect ChatGPT to EthGasStation via the **Model Context Protocol (MCP)**.

With AI Connect you can:
- Ask for **current gas snapshot** and trend context
- **Create and manage alerts** from chat (personalized to your account)

## How it works (high level)

ChatGPT connects to your MCP server and authenticates with **OAuth + PKCE**. On first use, you’ll be redirected to EthGasStation to **log in and consent**.

## Common prompts

- “What’s gas right now and how does it compare to the 24h range?”
- “Create an alert when gas is ≤ 15 gwei.”
- “List my active alerts.”

## Troubleshooting

If the connector can’t authenticate, check:
- MCP server is reachable over **HTTPS**
- OAuth redirect URI is allowlisted
- Your auth discovery endpoints are accessible
