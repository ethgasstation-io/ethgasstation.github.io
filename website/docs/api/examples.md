---
title: Examples
---

# Examples

Use these examples as integration baselines.

## Get latest gas snapshot

```bash
curl -s https://api.ethgasstation.io/v1/gas/latest \
  -H "Authorization: Bearer $EGS_API_TOKEN" \
  -H "Accept: application/json"
```

## Create a gas alert

```bash
curl -s https://api.ethgasstation.io/v1/alerts \
  -X POST \
  -H "Authorization: Bearer $EGS_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "lane": "standard",
    "operator": "lte",
    "threshold_gwei": 20,
    "cooldown_minutes": 30,
    "channels": ["email"]
  }'
```

## List active alerts

```bash
curl -s https://api.ethgasstation.io/v1/alerts?status=active \
  -H "Authorization: Bearer $EGS_API_TOKEN"
```
