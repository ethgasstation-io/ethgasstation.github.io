---
sidebar_position: 3
title: Gas lanes & calculated stats
---

# Gas lanes & calculated stats

EthGasStation turns raw Ethereum fee data into a few actionable views used across the current app:

- dashboard lane cards
- dashboard confidence and trend summaries
- Gas Explorer charts
- alert thresholds and timing decisions
- public widgets and landing previews

This page explains the meaning of those values and how to read them in the product.

## Gas lanes in the current app

The current UI uses three lane labels:

- `Slow`
- `Average`
- `Fast`

These are decision lanes, not protocol-native fields. They are derived from recent chain activity so users can choose a lower-cost or faster-inclusion posture without reading raw block data directly.

In UI copy and charts, values are usually shown in `gwei`. Backend storage and APIs may use `wei`.

## Current snapshot fields

The live snapshot used in the app includes lane and fee context such as:

- `lowPrice`
- `averagePrice`
- `highPrice`
- `basePrice`
- `priorityPrice`
- `updatedAt`

At a high level:

- `lowPrice` maps to the low/slow lane
- `averagePrice` maps to the middle/average lane
- `highPrice` maps to the fast lane
- `basePrice` is the latest EIP-1559 base fee
- `priorityPrice` is the priority-fee component exposed separately for decision support

## How lane prices are computed

EthGasStation processes recent on-chain transactions and block-level metrics, then derives lane values from sampled activity over a rolling window. Outlier handling is used so a few extreme tips do not distort the entire snapshot.

For the current widget and lane snapshot, the system uses recent processed blocks and summarizes the market into a lower lane, a middle lane, and a faster lane.

The exact values are stored in the backend and surfaced through the current stats endpoints used by the app and API.

## Base fee vs priority fee

For EIP-1559 transactions, the displayed total cost can be thought of as:

- `Base fee`: protocol-controlled and changes block to block
- `Priority fee`: sender-supplied tip used to compete for inclusion

EthGasStation exposes both because the app increasingly uses more than a single gas number. In particular:

- the dashboard uses these values to summarize current market quality
- Gas Explorer exposes percentile-based priority fee context
- alerts and send decisions are easier to reason about when you separate base fee from tip pressure

Priority-fee analysis becomes more important in volatile periods, which is why Gas Explorer exposes percentile views such as `p50`, `p75`, `p90`, `p95`, and `p99`.

## Freshness and update frequency

The app treats freshness as a first-class signal.

Examples:

- the dashboard confidence model considers freshness
- overview metrics report an `updateFrequencySec` value
- current snapshot responses include `updatedAt`

If values look stale, the first thing to check is whether block processing has advanced recently.

## Explorer and historical metrics

Gas Explorer and advanced metrics build on more than the three visible lanes.

The current app uses:

- block history for charting
- metrics over selected windows
- priority-fee percentile series
- gas-used-ratio series
- overview summaries for confidence and confirmation timing

This is why Gas Explorer can show:

- lane-like trends over time
- percentile spreads
- market anomalies
- compare mode
- CSV export

## Practical interpretation

- Use `Slow` when cost matters more than speed.
- Use `Average` as the default reference point for most alert thresholds.
- Use `Fast` when you need quicker inclusion and can tolerate higher cost.
- Look at priority-fee spread, not only the middle lane, during volatile periods.

If you need exact field and endpoint behavior, continue with the [API overview](./api/overview.md).
