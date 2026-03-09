---
title: Overview
---

# Alerts Overview

Alerts are one of the core product surfaces in the current EthGasStation app. They let you stop manually watching gas and react only when your conditions are met.

## What the current app supports

- lane selection: `Slow`, `Average`, `Fast`
- threshold direction: `less than` or `above`
- threshold entry in `gwei`
- cooldown windows
- multiple notification channels on one alert
- optional note field
- optional `disable once` behavior
- enable/disable status control

## Delivery channels

The current alert form supports:

- Email
- Webhook
- Slack
- Telegram
- Web Push

Each channel has its own validation rules. For example:

- email requires an address
- webhook and Slack require HTTPS URLs
- Telegram requires a chat id
- Web Push requires a browser subscription

## Where alerts appear

Alerts are created and managed from:

- the signed-in alerts center
- dashboard shortcuts
- Gas Explorer chart actions
- API v1
- AI Connect (MCP)

## When to use alerts

- wait for a cheaper send window
- watch for expensive spike conditions
- drive human review or bot execution timing
- hand off later execution to Auto Txs after you confirm your policy
