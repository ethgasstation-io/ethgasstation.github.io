---
title: Errors
---

# Errors

API v1 uses standard HTTP status codes, but response bodies can differ slightly depending on where the error happened.

## Common auth/filter error shape

```json
{
  "errorCode": "api_key_invalid",
  "message": "A valid x-api-key header is required."
}
```

This shape is used by the API key auth filter for errors such as invalid key, revoked key, plan not enabled for API access, or daily rate-limit exhaustion.

## Validation/error-envelope shape

Some metrics endpoints return a request envelope with an embedded error list on bad input.

```json
{
  "chainId": 1,
  "from": "2026-03-08T10:00:00Z",
  "to": "2026-03-08T09:00:00Z",
  "data": [
    {
      "error": "from must be before to"
    }
  ]
}
```

## Common status codes

- `400 Bad Request`: invalid parameters, invalid payload, unsupported percentile, or invalid time window
- `401 Unauthorized`: missing, invalid, or revoked API key
- `403 Forbidden`: current plan does not include API access
- `404 Not Found`: resource does not exist
- `429 Too Many Requests`: daily API call limit exceeded for the current plan
- `500 Internal Server Error`: transient server-side failure

## Practical handling

- log status code and response body for every non-2xx response
- treat `401`, `403`, and `429` as operational/auth issues, not retryable payload issues
- treat `400` as a caller bug until proven otherwise
- for time-series endpoints, validate `from`, `to`, `page`, `size`, `bucket`, and `percentile` before calling
