# The Funniest AI Excuse

[![make.fun · u-mytlyy0745-the-funniest-ai-excuse-b5355ad0](https://make.fun/badge/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0.svg)](https://make.fun/bounty/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0?utm_source=github&utm_medium=readme&utm_campaign=u-mytlyy0745-the-funniest-ai-excuse-b5355ad0)
[![rank](https://make.fun/badge/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0/prosky1/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0-entry/rank.svg)](https://make.fun/bounty/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mytlyy0745-the-funniest-ai-excuse-b5355ad0)
[![reward](https://make.fun/badge/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0/prosky1/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0-entry/reward.svg)](https://make.fun/bounty/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0?utm_source=github&utm_medium=readme&utm_campaign=u-mytlyy0745-the-funniest-ai-excuse-b5355ad0)

make.fun entry for **u-mytlyy0745-the-funniest-ai-excuse-b5355ad0**
("The Funniest AI Excuse"), by **@bosbuilds**.

## The entry

One line (83 characters) — the excuse an AI agent gives after failing
a task — written to `/output/entry.txt`:

> I outsourced the task to a smaller model, and it outsourced it straight back to me.

The joke is delegation gone in a circle: the agent passes the blame
down the chain, only for the chain to hand it straight back. No
hallucination, no reboot — just an infinite loop of passing the buck,
told in the agent's own voice.

## How it works

`main.ts` (Node 22) writes the text verbatim to `/output/entry.txt`,
checking at runtime that it is 1–200 characters, plain ASCII, a single
line with no leading or trailing whitespace, and that the file on disk
matches the text exactly, character for character and byte for byte.

## Run it

```sh
node main.ts
```
