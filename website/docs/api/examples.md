---
title: Examples
---

# Examples

Use these examples as baselines for the current API v1 surface.

## Get current gas snapshot

```bash
curl -s https://ethgasstation.io/be/api/v1/gas/current \
  -H "x-api-key: $EGS_API_KEY" \
  -H "Accept: application/json"
```

## Get priority fee percentile series

```bash
curl -s "https://ethgasstation.io/be/api/v1/metrics/priority-fee?from=2026-03-08T00:00:00Z&to=2026-03-08T12:00:00Z&percentile=p95" \
  -H "x-api-key: $EGS_API_KEY"
```

## Create a gas alert

This matches the current alert model more closely than the old `lane/operator` examples.

```bash
curl -s https://ethgasstation.io/be/api/v1/alerts \
  -X POST \
  -H "x-api-key: $EGS_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "thresholdGwei": 18,
    "gasSpeed": "AVERAGE",
    "condition": "LESS_THAN",
    "cooldownMs": 3600000,
    "disableOnce": false,
    "method": "EMAIL",
    "channels": ["EMAIL"],
    "to": "alice@example.com",
    "note": "Send window for routine transfers"
  }'
```

## List alerts

```bash
curl -s https://ethgasstation.io/be/api/v1/alerts \
  -H "x-api-key: $EGS_API_KEY"
```

## Update alert status

```bash
curl -s https://ethgasstation.io/be/api/v1/alerts/ALERT_ID/status \
  -X PUT \
  -H "x-api-key: $EGS_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "status": "DISABLED"
  }'
```

## Get dashboard market summary

```bash
curl -s "https://ethgasstation.io/be/api/v1/dashboard/stats/market?timeFrame=24h" \
  -H "x-api-key: $EGS_API_KEY"
```
