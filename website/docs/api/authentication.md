---
title: Authentication
---

# Authentication

All API requests must include a valid bearer token.

## Header format

```http
Authorization: Bearer <token>
```

## Token guidance

- Create tokens from your EthGasStation dashboard
- Store tokens in a secret manager, never in source code
- Rotate tokens on a regular schedule or after incident response

## Example request

```bash
curl -s https://api.ethgasstation.io/v1/gas/latest \
  -H "Authorization: Bearer $EGS_API_TOKEN" \
  -H "Accept: application/json"
```

Requests without a valid token return `401 Unauthorized`.
