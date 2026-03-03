---
title: Creating Alerts
---

# Creating Alerts

Create alerts from the EthGasStation dashboard, API, or AI Connect.

## Required fields

- Target lane
- Comparison operator
- Threshold in gwei
- Cooldown duration
- Notification channel

## Example policy

```text
Alert me when standard gas <= 18 gwei, then suppress repeats for 45 minutes.
```

## Best practices

- Start with one lane per alert for predictable behavior
- Set thresholds using recent volatility, not single snapshots
- Use separate alerts for low-gas opportunities and spike protection
