---
title: Creating Alerts
---

# Creating Alerts

You can create alerts from the app, API, or AI Connect. The app form is the easiest place to learn the current alert model because it reflects the exact fields supported today.

## Required fields

- target lane: `Slow`, `Average`, or `Fast`
- condition: `less than` or `above`
- threshold in `gwei`
- cooldown duration
- at least one notification method

Some channels require extra fields:

- Email: recipient address
- Webhook: HTTPS webhook URL
- Slack: Slack incoming webhook URL
- Telegram: chat id
- Web Push: active browser push subscription

## Example policy

```text
Alert me when Average gas is less than 18 gwei, notify by email, and suppress repeats for 1 hour.
```

## In-app flow

1. Open the alerts center.
2. Choose lane, condition, and threshold.
3. Select one or more channels.
4. Set cooldown.
5. Save the alert and leave it in `PENDING` status.

## Best practices

- start with one business goal per alert
- use `Average` for most routine send windows
- use separate alerts for cheap-entry and spike-protection use cases
- add a note when an alert belongs to a team workflow
- enable `disable once` only for one-shot workflows
