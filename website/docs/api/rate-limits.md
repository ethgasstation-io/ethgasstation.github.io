---
title: Rate Limits
---

# Rate Limits

EthGasStation enforces request limits to protect platform stability.

## How limits are applied

- Limits are evaluated per token
- Short-window burst controls prevent spikes
- Daily quotas depend on your plan

## Rate-limit headers

Responses include standard headers:

- `X-RateLimit-Limit`
- `X-RateLimit-Remaining`
- `X-RateLimit-Reset`

## Handling `429 Too Many Requests`

- Honor `Retry-After` when provided
- Use exponential backoff with jitter
- Cache short-lived reads to reduce duplicate traffic
