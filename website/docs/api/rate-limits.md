---
title: Rate Limits
---

# Rate Limits

EthGasStation applies API usage limits by plan. The current app surfaces those limits in the developer console as daily usage.

## How limits are applied

- limits are enforced per account/plan context behind your API keys
- daily quotas depend on your active plan
- if your plan has no API access, requests are rejected before your integration runs
- if your plan limit is exhausted, API requests return `429`

## Where to check your limit

In the current app, the most reliable limit view is:

- `Developer -> API & MCP Console`

That panel shows:

- plan
- daily limit
- used today
- remaining today

## Current public plan direction

The product currently markets three public tiers:

- `Free`
- `Basic`
- `Pro`

Request capacity scales by tier. Check the app pricing page and your active plan rather than hard-coding assumptions into integration logic.

## Handling `429 Too Many Requests`

- back off and retry later instead of hammering the same endpoint
- cache short-lived reads such as gas snapshots and trend summaries
- reduce polling frequency if you are repeatedly re-reading the same data
- monitor usage in the developer console so you can upgrade before your workflow becomes brittle
