---
sidebar_position: 2
title: Dashboard & Gas Explorer
---

# Dashboard & Gas Explorer

The signed-in app has two main read surfaces:

- `Dashboard` for quick send decisions
- `Gas Explorer` for deeper analysis

Use the dashboard when you need a current answer quickly. Use Gas Explorer when you need more history, more percentiles, or a chart you can inspect/export.

## Dashboard

The current dashboard is built around decision support, not just raw gas numbers.

It combines:

- live fee lanes
- network congestion and pressure context
- confirmation timing summaries
- a send-confidence score
- suggested next actions such as waiting, sending now, or setting an alert

This is the best place to answer questions like:

- Should I send now or wait?
- Is the current market stable enough to act?
- Is the current Standard lane unusually expensive?

## Gas Explorer

Gas Explorer expands the analysis surface with charting and comparison tools.

Current capabilities in the app include:

- timeframes: `1h`, `24h`, `7d`, `30d`
- priority-fee percentiles: `p50`, `p75`, `p90`, `p95`, `p99`
- compare mode for current vs previous window behavior
- anomaly markers such as `Spike`, `Regime shift`, and `Anomaly`
- tabular values alongside the chart
- CSV export for the current chart window
- quick creation of an alert from the current chart context

## Typical workflow

1. Check the dashboard for current confidence and lane guidance.
2. Open Gas Explorer if the market looks unusual or you need more historical context.
3. Compare `p50` and `p90` when deciding how conservative or aggressive you want to be.
4. Create an alert if you are waiting for a cheaper window instead of sending immediately.

## Related docs

- [Gas lanes & calculated stats](./gas-lanes-and-stats.md)
- [Alerts overview](./alerts/overview.md)
- [API overview](./api/overview.md)
