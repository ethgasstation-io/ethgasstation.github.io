---
sidebar_position: 4
title: Auto Txs & Wallet
---

# Auto Txs & Wallet

The current app includes an execution workflow, not just gas observation.

Two areas matter here:

- `Auto Txs` for gas-targeted execution rules
- `Top-up` for relay wallet funding and withdrawals

## Auto Txs

Auto Txs let you prepare a transaction, validate it, sign it with your wallet, and allow EthGasStation to submit it later when gas conditions match your target.

The app currently supports:

- creating and editing auto-tx rules
- target gas price in gwei
- optional strict target price behavior
- validation before signing
- signed submission flow
- cancellation of pending rules
- execution history and savings journals

## Auto Tx lifecycle

Typical statuses in the app include draft, pending, disabled, executed, cancelled, and failed states.

A normal workflow looks like this:

1. Create the rule with destination, calldata, value, and target gas.
2. Validate the transaction details.
3. Sign with your wallet.
4. Let the system wait for the gas condition to match.
5. Review execution and savings journal entries afterward.

## Wallet / Top-up

If you use funded execution flows, the app also exposes a relay wallet balance area.

Current capabilities include:

- viewing available, pending, and reserved balance
- topping up from a browser wallet
- inspecting ledger history
- requesting withdrawals

Ledger activity includes entries such as:

- deposit
- execution debit
- withdrawal
- adjustment

## When this section matters

Use this area when you want to move from:

- “tell me when gas is cheaper”

to

- “prepare the transaction now and execute it later when the target is met”

## Related docs

- [Dashboard & Gas Explorer](./dashboard-and-explorer.md)
- [Alerts overview](./alerts/overview.md)
- [API examples](./api/examples.md)
