---
sidebar_position: 2
title: Gas lanes & calculated stats
---

# Gas lanes & calculated stats

EthGasStation turns raw block/transaction data into a few **actionable “lanes”** and supporting statistics.

This page documents what the numbers mean and **how they’re calculated**.

## Gas lanes (Economy / Standard / Fast)

In the product UI and alerts, we present three lanes:

- **Economy** (a lower-fee lane)
- **Standard** (balanced)
- **Fast** (higher-fee / faster inclusion)

Under the hood these are derived from **recent on-chain transactions** and expressed as **effective gas price** (EIP‑1559) in **wei** (UI typically shows gwei).

### How lane prices are computed

EthGasStation processes blocks and computes per-block percentiles from transaction gas prices. A robust outlier filter is applied so a few extreme tips don’t distort the lane estimates.

Then, for the *current* widget/lanes we compute percentiles over a rolling window:

- **Window:** last **5 minutes** of processed blocks
- **Economy:** 25th percentile
- **Standard:** 50th percentile (median)
- **Fast:** 75th percentile

## Base fee vs priority fee

For EIP‑1559 transactions the displayed “total” gas price can be thought of as:

- **Base fee** — set by the protocol, changes block to block
- **Priority fee (tip)** — what the sender pays to compete for inclusion

EthGasStation exposes both:

- **Base fee** comes from the latest block header (`baseFeePerGas`).
- **Priority fee** (shown in UI as “Priority”) is calculated as:

```text
priority = max(standard_lane_price - base_fee, 0)
```

So if the base fee rises above the standard lane price, we clamp priority to 0.

## Freshness / UpdatedAt

Every lane snapshot includes an `updatedAt` timestamp.

If the UI shows stale data, it typically means block processing hasn’t advanced recently.

## What’s stored (for charts / history)

EthGasStation stores:

- Per-block lane prices (low/median/high) as **wei**
- Aggregations for common windows (minute/hour/day)

This is what powers the “market” views and historical charts.

If you want a precise definition of the API fields (`lowPrice`, `averagePrice`, `highPrice`, `basePrice`, `priorityPrice`), see the API docs and the `/stats/current` endpoint description.
