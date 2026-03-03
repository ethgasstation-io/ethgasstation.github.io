---
title: Errors
---

# Errors

API errors use conventional HTTP status codes with a JSON body.

## Error response shape

```json
{
  "error": {
    "code": "rate_limited",
    "message": "Request limit reached for this token.",
    "request_id": "req_123abc"
  }
}
```

## Common status codes

- `400 Bad Request`: invalid parameters or payload
- `401 Unauthorized`: missing or invalid token
- `403 Forbidden`: token lacks required scope
- `404 Not Found`: resource does not exist
- `429 Too Many Requests`: rate limit exceeded
- `500 Internal Server Error`: transient server-side failure

Capture `request_id` in logs to speed up support investigations.
