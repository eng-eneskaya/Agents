---
description: Run one heartbeat cycle for an agent — read context, assess pipeline state, execute the single most valuable skill, log the result.
argument-hint: [agent-name] (default: youtube)
---

# Heartbeat Cycle — `$1`

Run **one** cycle for the agent `$1` (if empty, use `youtube`). Follow the steps below in order. Do not skip step 4.

## Context budget

Read only what's listed. Do not load the whole repo — this command runs weekly and must stay cheap.

1. `agents/$1/AGENT.md` — goals and KPIs
2. `agents/$1/EPISODES.md` — current pipeline state (this is the source of truth for "what stage is everything at")
3. `agents/$1/MEMORY.md` — confirmed learnings
4. `journal/entries/` — **the 5 most recent entries only**, by filename date
5. `knowledge/STRATEGY.md` — current priorities
6. `knowledge/AUDIENCE.md` and `knowledge/BRAND.md` — **only if** the chosen skill's Inputs section lists them
7. `agents/$1/data/imports/` — list the directory; read a file only if it's newer than the date in `EPISODES.md` → Last Updated

## Step 1 — Assess

Report, in a short table, before doing any work:

| Check | Answer |
|---|---|
| Researched candidates ready ahead of the next shoot | (target: 3+) |
| Episodes at `Chosen` with no script | |
| Episodes at `Scripted` with no edit plan | |
| Published episodes with empty Performance row | |
| New unreviewed analytics in `data/imports/` | |

## Step 2 — Pick exactly one skill

Take the **first** matching branch. One skill per cycle.

1. New unreviewed analytics exist → run the **Weekly Review** (below), not a skill
2. A published episode has an empty Performance row and data is available → **Weekly Review**
3. Fewer than 3 researched candidates → `youtube-profession-research`
4. An episode is `Chosen` with no script → `youtube-scriptwriting`
5. An episode is `Scripted` with no edit plan → `youtube-edit-plan`
6. Nothing matches → `youtube-profession-research` (deepen the pipeline)

State which branch fired and why before executing.

## Step 3 — Execute

Run the chosen skill exactly as its `SKILL.md` defines it. Respect its Quality Bar — if the output can't meet the bar (e.g. a pay figure can't be sourced), say so and stop rather than shipping a weak output.

## Step 4 — Log (never skip)

1. Write the output to `agents/$1/outputs/YYYY-MM-DD_...` using the naming in `CONVENTIONS.md`. **Never overwrite an existing output file.**
2. Update the episode's row in `agents/$1/EPISODES.md` (status + the filename in the right column) and bump its Last Updated line.
3. Write a journal entry at `journal/entries/YYYY-MM-DD_HHMM.md` using `templates/JOURNAL_ENTRY.md`: what was done, what was notable, what should happen next.
4. Update `MEMORY.md` **only** if a pattern is now confirmed by 3+ data points. One-off observations go in the journal, not memory.

## Weekly Review (when branch 1 or 2 fires)

1. Read the newest export in `data/imports/`.
2. Fill the Performance row in `EPISODES.md` for every episode now 7+ days old. Real numbers only — never estimate.
3. Score against the **current phase targets** in `AGENT.md`, not absolute numbers.
4. Update the Open Format Experiments table in `EPISODES.md`: move any experiment with 3+ consistent data points to `Confirmed` and promote it into `MEMORY.md` with its evidence.
5. Log a weekly summary to the journal: performance vs. targets, top insight, recommendation for next week.

## Escalate to the human when

- Views or retention trend down 2+ consecutive weeks
- A candidate profession raises safety, legal, licensing, or access concerns
- The pipeline has fewer than 1 researched candidate ahead of the next shoot
- A decision on international-expansion timing is needed
- Something looks wrong and the cause isn't diagnosable from the data

## Hard boundaries

Never publish or send anything externally. Never write to `knowledge/` — propose changes to the human. Never modify another agent's files. Never invent a pay or tool fact.

## Finish with

A 5-line summary: branch fired · skill run · output file · EPISODES.md change · what needs a human.
