---
title: Overview
---

# API Overview

The current EthGasStation API surface has two distinct layers:

- app-internal and signed-in routes used by the web app itself under `/be/app/...`
- public API v1 routes for external integrations under `/be/api/v1/...`

This docs section focuses on the external integration surface.

## API capabilities

- gas snapshots and trend summaries
- advanced metrics such as base fee, priority fee, gas-used ratio, block details, transaction details, and transaction windows
- alert CRUD operations
- auto-tx operations
- dashboard-oriented data endpoints

## Base path

```text
/be/api/v1
```

In production, these routes are typically served from the main EthGasStation app origin.

Example:

```text
https://ethgasstation.io/be/api/v1/gas/current
```

## Auth model

API v1 is protected by the `x-api-key` header.

Generate keys in the signed-in app under `Developer -> API & MCP Console`.

## Main route groups

### Gas

- `GET /be/api/v1/gas/current`
- `GET /be/api/v1/gas/trend`
- `GET /be/api/v1/gas/recommendation`

### Alerts

- `GET /be/api/v1/alerts`
- `GET /be/api/v1/alerts/{id}`
- `POST /be/api/v1/alerts`
- `PUT /be/api/v1/alerts/{id}/status`
- `DELETE /be/api/v1/alerts/{id}`
- `GET /be/api/v1/alerts/{id}/savings`

### Auto Txs

- `GET /be/api/v1/auto-txs`
- `GET /be/api/v1/auto-txs/{id}`
- `POST /be/api/v1/auto-txs`
- `PUT /be/api/v1/auto-txs/{id}`
- `POST /be/api/v1/auto-txs/{id}/cancel`
- `DELETE /be/api/v1/auto-txs/{id}`

### Dashboard data

- `GET /be/api/v1/dashboard/stats/current`
- `GET /be/api/v1/dashboard/stats/chart`
- `GET /be/api/v1/dashboard/stats/market`
- `GET /be/api/v1/dashboard/rate-limits`
- `GET /be/api/v1/dashboard/summary`

### Metrics

- `GET /be/api/v1/metrics/base-fee`
- `GET /be/api/v1/metrics/priority-fee`
- `GET /be/api/v1/metrics/gas-used-ratio`
- `GET /be/api/v1/metrics/block/{number}`
- `GET /be/api/v1/metrics/tx/{hash}`
- `GET /be/api/v1/metrics/txs`

## Data format and units

- Request and response bodies use JSON
- Some request payloads use `gwei` for human-facing thresholds, while stored/backend values may use `wei`
- Timestamps are ISO 8601 when endpoints accept explicit `from` / `to` windows

## Before you integrate

1. Create an API key in the app.
2. Open `/api-playground` to inspect the live OpenAPI surface.
3. Start with a read-only endpoint such as `gas/current` or `metrics/priority-fee`.
4. Add alerts or auto-tx flows only after your read path is stable.

Continue with [Console & API Keys](./console-and-keys.md) and [Authentication](./authentication.md).
