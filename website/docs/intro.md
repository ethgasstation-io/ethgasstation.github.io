---
sidebar_position: 1
title: Intro
---

# EthGasStation Documentation

EthGasStation is a dark, app-first Ethereum gas product. The documentation should help you use the current app surface, not restate the marketing site.

Use these docs to understand the product areas that exist in the app today:

- [Dashboard and Gas Explorer](./dashboard-and-explorer.md) for live lanes, confidence signals, priority-fee spreads, and deeper charting
- [Gas lanes & calculated stats](./gas-lanes-and-stats.md) for how the product turns raw fee data into actionable views
- [Alerts](./alerts/overview.md) for threshold-based notifications across email, webhook, Slack, Telegram, and web push
- [Auto Txs & wallet funding](./auto-txs-and-wallet.md) for scheduled execution rules, relay balance, deposits, and withdrawals
- [API](./api/overview.md) for programmatic access, API keys, usage limits, and examples
- [AI Connect (MCP)](./ai-connect/overview.md) for ChatGPT and other MCP-compatible clients

## Product areas in the current app

### Dashboard
The signed-in dashboard is the fastest way to check current gas conditions before you send. It combines live lanes, congestion context, confirmation timing, and a confidence score.

### Gas Explorer
Gas Explorer is the deeper analysis surface. It adds multiple timeframes, percentile views, compare mode, anomaly markers, and CSV export.

### Alerts
Alerts are managed inside the app and through the API. The current alert form supports multiple delivery channels, lane selection, threshold direction, cooldown windows, notes, and optional disable-once behavior.

### Auto Txs
Auto Txs let you prepare a signed transaction and execute it later when gas falls to your target. This area also shows execution history and savings journal entries.

### Wallet / Top-up
The app includes a relay wallet balance view for funded execution workflows. You can top up from a wallet, inspect the ledger, and submit withdrawal requests.

### Developer API & MCP Console
The developer area is where you create API keys, monitor daily usage, and inspect MCP readiness values such as the SSE URL, message endpoint, and OAuth metadata endpoint.

## How to use this docs set

1. Start with the app workflow you care about.
2. Use the app-focused pages first if you are operating manually.
3. Use the API and AI Connect pages when you need automation or external integrations.
4. Use the FAQ for account, plan, and operational questions that do not belong in endpoint reference pages.
