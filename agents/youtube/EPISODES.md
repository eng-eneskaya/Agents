# Episode Ledger — YouTube Agent

The single place where an episode's full trail lives: research → script → edit plan → published video → measured result.

**Why this file exists:** without it, `outputs/` is a flat pile of dated files and nothing connects a caption choice to the retention curve it produced. Every weekly review reads this file first.

**Rules**
- One row per episode, in both tables, joined by **Episode ID**.
- Episode ID format: `EP##` (EP01, EP02, …) — assigned when a profession is chosen for a shoot, not when it's researched.
- This file is updated **in place** (like `MEMORY.md`) — it's a ledger, not a dated output.
- A row may never be deleted. If an episode is abandoned, set Status to `Dropped` and keep the row with a reason.
- Metrics are filled only from a real analytics export in `data/imports/` — never estimated.

---

## 1. Production Pipeline

| Episode ID | Profession | Status | Research | Script | Edit Plan | Shot | Published |
|---|---|---|---|---|---|---|---|
| — | _no episodes yet_ | — | — | — | — | — | — |

**Status values:** `Researched` → `Chosen` → `Scripted` → `Edit-Planned` → `Shot` → `Editing` → `Published` → `Reviewed` · (`Dropped`)

Research / Script / Edit Plan columns hold the filename in `outputs/` (e.g. `2026-08-25_script_balikci.md`) or `—` if not produced yet.

---

## 2. Performance

Filled in only after the video has been live for 7+ days and the analytics export is in `data/imports/`.

| Episode ID | Video URL | Narration style | 7d Views | CTR | Avg % Viewed | Net Subs | vs. Target | Reviewed |
|---|---|---|---|---|---|---|---|---|
| — | — | — | — | — | — | — | — | — |

**Narration style:** `ASMR-only` / `Light narration` / `Narrated` — this is the channel's main open format question, so it is tracked per episode from day one.

**vs. Target:** compare against the phase targets in `AGENT.md`, not against absolute numbers.

---

## 3. Open Format Experiments

One row per deliberate variable being tested across episodes. This is what turns raw numbers into a `MEMORY.md` entry.

| Experiment | Hypothesis | Episodes testing it | Result | Verdict |
|---|---|---|---|---|
| Narration style | ASMR-only retains better than narrated | — | — | Untested |
| Pay-reveal placement | Early reveal (<60s) beats late reveal | — | — | Untested |
| Trade vs. white-collar | Trades outperform in the first 10 episodes | — | — | Untested |

**Verdict values:** `Untested` → `Signal` (1 data point) → `Confirmed` (3+ consistent data points → promote to `MEMORY.md`) → `Rejected`

---

## Last Updated
2026-08-25 — ledger created, no episodes recorded yet
