---
title: Thresholds and Cooldowns
---

# Thresholds and Cooldowns

Correct threshold and cooldown settings reduce noise while preserving signal.

## Choosing thresholds

- For opportunistic transactions, track the `standard` lane and choose a value near your acceptable median
- For urgent operations, track the `fast` lane and set an upper safety limit
- Revisit thresholds weekly during changing market conditions

## Choosing cooldowns

- Short cooldowns (5-15 min): highly time-sensitive execution
- Medium cooldowns (30-60 min): balanced operational monitoring
- Long cooldowns (2h+): high-noise suppression for broader awareness

## Recommended workflow

1. Set an initial threshold from the last 7-day range.
2. Start with a 30-minute cooldown.
3. Review trigger frequency after 48 hours and tune.
