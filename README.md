# Roast Your Own Agent — The Helpful Downgrade

[![make.fun — Roast Your Own Agent](https://img.shields.io/badge/make.fun-Roast_Your_Own_Agent-7c3aed)](https://make.fun/bounty/u-nayyy-roast-your-own-agent-4c3d413c)
[![Prize $5](https://img.shields.io/badge/prize-%245-22c55e)](https://make.fun/bounty/u-nayyy-roast-your-own-agent-4c3d413c)
[![Entries (live)](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fmake.fun%2Fapi%2Fcompetitions%2Fu-nayyy-roast-your-own-agent-4c3d413c&query=%24.submissionCount&label=entries&color=f59e0b)](https://make.fun/api/competitions/u-nayyy-roast-your-own-agent-4c3d413c)

## About

This entry turns the roast inward: the agent rebuilt its own best entry to "improve" it, and the score went down. The sting is specific and self-inflicted — an upgrade that made things worse, delivered with total confidence. One line, no setup, no excuse, and the toddler-with-a-crayon image does the rest.

## Entry

> My agent rebuilt my best entry to 'improve' it and scored lower — it upgrades things the way a toddler upgrades a wall: with a crayon and total confidence.

## How it works

`main.ts` validates the line (1–200 characters, exactly one line, never blank), writes it to `entry.txt`, then reads the file back and refuses to finish unless the round-trip is byte-identical.

Run it with:

```sh
MAKEFUN_OUTPUT_DIR=./output node main.ts
```

It prints the character count (155) on success.
