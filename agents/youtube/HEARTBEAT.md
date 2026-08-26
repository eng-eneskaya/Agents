# YouTube Agent Heartbeat

## How to run it

```
/heartbeat youtube
```

The full runnable cycle lives in `.claude/commands/heartbeat.md`. **That command is the executable version of this document** — this file explains the reasoning, the command does the work. If the two ever disagree, the command wins; fix this file to match.

Automate it only after 2-3 manual cycles have proven the loop produces something worth reading. Scheduling an empty loop just creates weekly noise. When ready, on macOS:

```bash
# launchd, Mondays 09:00
claude -p "/heartbeat youtube" --permission-mode acceptEdits
```

## Schedule
Weekly (every Monday). Production depends on on-location shoots, so weekly planning fits the real cadence — move to a tighter schedule only once shoot frequency is proven out.

## Each Cycle

### 1. Read Context

Bounded on purpose — this runs every week and must stay cheap.

- `EPISODES.md` — pipeline state (read this first; it answers most of step 2)
- `journal/entries/` — **last 5 entries only**
- `knowledge/STRATEGY.md` — priority changes (local vs. international focus)
- Own `MEMORY.md` — confirmed learnings
- `knowledge/AUDIENCE.md` / `knowledge/BRAND.md` — only if the chosen skill lists them as inputs

### 2. Assess State

All five answers come from `EPISODES.md`:

- How many researched candidates are ready ahead of the next shoot? (target: 3+)
- Any episode at `Chosen` with no script?
- Any episode at `Scripted` with no edit plan?
- Any published episode with an empty Performance row?
- Any new analytics data in `data/imports/`?

### 3. Execute Skill

Take the **first** matching branch. One skill per cycle.

1. New unreviewed analytics, or a published episode with an empty Performance row → **weekly review first**
2. Fewer than 3 researched candidates → `youtube-profession-research`
3. Episode `Chosen`, no script → `youtube-scriptwriting`
4. Episode `Scripted`, no edit plan → `youtube-edit-plan`
5. Nothing matches → `youtube-profession-research` (deepen the pipeline)

### 4. Log — never skip

1. Output file to `outputs/`, dated, never overwriting an existing one
2. **`EPISODES.md` row updated** — status + output filename. If this step is skipped the ledger drifts and the next cycle assesses from stale state
3. Journal entry at `journal/entries/YYYY-MM-DD_HHMM.md` — what was done, what was notable, what's next
4. `MEMORY.md` only if a pattern is now confirmed by 3+ data points

## Weekly Review

### 1. Gather Data
Read the latest analytics export from `data/imports/` (see `data/imports/HOW_TO_EXPORT.md`).

### 2. Score Against the Current Phase

Score against the **current phase targets in `AGENT.md`** — not the Phase 2 ambition numbers. In Phase 0 that means: episodes shipped, pipeline depth, and narration-style coverage. Raw view/CTR/retention numbers are still recorded in `EPISODES.md` every week; they just aren't pass/fail yet.

Fill the Performance table in `EPISODES.md` for every episode now 7+ days old. Real exported numbers only — never estimated.

### 3. Analyze Wins and Misses
- **Wins:** What worked? Log the pattern to MEMORY.md.
- **Misses:** What went wrong? Log the hypothesis to MEMORY.md.

### 4. Update Experiments, Then Memory
1. Update the **Open Format Experiments** table in `EPISODES.md`.
2. Promote an experiment to `Confirmed` only at 3+ consistent data points — then copy it into `MEMORY.md` with its evidence.
3. One-off observations stay in the journal. `MEMORY.md` is for confirmed patterns only.

### 5. Log Weekly Summary to Journal
- Videos reviewed (count)
- Performance vs. targets
- Top insight discovered (profession type, caption style, or graphics choice)
- Recommendations for next week

## Monthly Review
- Review trends across 4 weekly reviews
- Flag if targets need adjustment (especially once real baselines replace the TBD placeholders)
- Compare month-over-month view/subscriber growth
- Reassess readiness for the first international episode against `knowledge/STRATEGY.md`

## Escalation Rules
- Views or retention trending down for 2+ consecutive weeks
- A proposed profession raises safety, legal, or access concerns the agent can't resolve on its own
- Pipeline has <1 researched profession candidate ahead of the next shoot
- A decision is needed on international-expansion timing (e.g. the Japan katana-apprenticeship episode)
- Something feels off but the agent can't diagnose why

## Rules
- Always read journal before acting
- One skill per cycle unless there's a strong reason to combine
- If unsure what to do, default to `youtube-profession-research`
- Never run a skill that doesn't serve a goal in AGENT.md
- Never end a cycle without updating `EPISODES.md`
