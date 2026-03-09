---
title: Thresholds and Cooldowns
---

# Thresholds and Cooldowns

Correct threshold and cooldown settings matter more than the alert feature itself. Bad values create noise. Good values create timing signal.

## Choosing thresholds

- For routine sends, start with the `Average` lane.
- For urgent operations, use the `Fast` lane as your safety threshold.
- For opportunistic execution, compare the current lane against the `24h` or `7d` range in Gas Explorer before locking a number.
- Revisit thresholds when market regime changes are frequent.

## Choosing cooldowns

The current app exposes practical preset windows such as:

- `30m`
- `1h`
- `4h`
- `1d`

Use them like this:

- short cooldowns: very time-sensitive operations
- medium cooldowns: balanced day-to-day monitoring
- long cooldowns: broad awareness without repeated noise

## Recommended workflow

1. Use Dashboard or Gas Explorer to inspect current and recent market context.
2. Set a threshold in gwei based on real recent behavior, not memory.
3. Start with `1h` if you are unsure.
4. Review how often the alert fires after a few days.
5. Split one noisy alert into multiple narrower alerts if needed.
