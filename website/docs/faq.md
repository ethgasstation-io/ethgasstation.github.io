---
sidebar_position: 99
title: FAQ
---

# FAQ

## What does the current app include?

Today the app is broader than a simple gas tracker. Main signed-in areas include Dashboard, Gas Explorer, Alerts, Auto Txs, Top-up, Billing, Settings, and the Developer API & MCP Console.

## How frequently is gas data updated?
Current app surfaces aim to refresh continuously as new chain data is ingested. Some overview responses expose an `updateFrequencySec` value, and dashboard confidence also depends on freshness.

## Which networks are covered?
This documentation focuses on Ethereum mainnet gas metrics and alerts.

## Is this docs site supposed to duplicate the main website?
No. The docs site is for product usage and integration details. The main site is where pricing, signup, and live product entry happen.

## How do I create API keys?
Open the signed-in app and go to `Developer -> API & MCP Console`. Keys are named, can be rotated or revoked, and the full secret is shown once when created.

## What auth does the API use?
API v1 uses `x-api-key`. AI Connect / MCP uses OAuth with bearer tokens.

## Can I manage alerts through AI tools?
Yes. AI Connect (MCP) can read gas context and create, list, disable, and delete alerts when your granted scopes allow it.

## Which alert channels are supported?
The current app supports Email, Webhook, Slack, Telegram, and Web Push.

## Is there a public API playground?
Yes. The backend exposes `/api-playground`, which redirects to the current API v1 playground surface.

## How do I reduce alert noise?
Use a threshold based on recent history, not memory, and start with a `1h` cooldown unless you have a time-sensitive use case.

## What should I do if API calls start failing?
Check API key validity, inspect HTTP status codes, and capture the response body. The current API commonly returns `errorCode` + `message` for auth and plan-limit failures.

## What happens when I hit my API limit?
Requests return `429 Too Many Requests`. Check daily usage in the `API & MCP Console` and upgrade plans if your integration needs more headroom.

## Are settings account-wide?
The current Settings page stores basic preference data locally in the browser session/profile, so do not treat it as a team-wide control plane.
