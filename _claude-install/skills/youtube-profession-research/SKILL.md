---
name: youtube-profession-research
description: Research and vet the next profession(s) to try on-camera for the "trying real professions" YouTube channel — scoring candidates on ASMR/visual appeal, info hook (pay, tools, craft), and access feasibility, and producing a ranked candidate list. Use when asked to find, research, vet, score, or rank profession/job candidates for an episode, or when the episode pipeline is running low on candidates.
---

# Profession Research

## Purpose
Find and vet the next profession(s) to try on-camera, balancing ASMR/visual appeal, informational hook (pay, tools, craft), and access feasibility.

## Serves Goals
- Grow reach (finding professions with strong curiosity/story hooks)
- Grow subscribers (a varied, well-paced pipeline of professions keeps the channel's format fresh)

## Inputs
- `knowledge/AUDIENCE.md` — audience segments (ASMR/immersive-work viewers vs. career-curious viewers)
- `knowledge/STRATEGY.md` — current priorities (local Turkey shoots vs. international expansion)
- `agents/youtube/EPISODES.md` — what's already been shot, published, and what its numbers were
- `agents/youtube/MEMORY.md` — which past professions or formats over/underperformed
- `journal/entries/` — **last 5 entries only** unless investigating something specific
- `agents/youtube/data/imports/` — analytics from past episodes, if available

## Process
1. Read audience segments and current strategic priorities.
2. Read `EPISODES.md` — skip professions already shot or dropped, and note which types performed best.
3. Check `MEMORY.md` for proven and failed profession types.
4. Brainstorm a candidate list spanning both audience segments: ASMR/manual trades (blacksmith, fisherman, cleaner, baker) and higher-info/higher-curiosity professions (doctor, developer, pilot).
5. For each candidate, research and note: typical pay/income range, tools/equipment used, what's visually or sonically distinctive (ASMR potential), access difficulty, and a one-sentence story hook.
6. Score each candidate 1-10 on three criteria:
   - **ASMR/Visual appeal** — how satisfying is the footage likely to be?
   - **Info hook** — how strong is the pay/tools/craft curiosity angle?
   - **Feasibility** — how realistic is access, safety, and logistics?
7. Flag international-expansion candidates (e.g. a Japan katana-making apprenticeship) separately — long-lead, travel-dependent.
8. Rank domestic (Turkey) candidates by combined score and output the top 5-7 with rationale.

## Outputs
- `agents/youtube/outputs/YYYY-MM-DD_profession-research.md` — ranked candidate list, scores, pay/tools notes, access considerations
- Append each candidate that gets chosen for a shoot to `EPISODES.md` as a new row with Status `Chosen`

## Quality Bar
- Every candidate must have a real, **sourced** pay range and a clear tools/equipment list — never invented
- At least one candidate serves the "ASMR viewer" segment and at least one the "career-curious" segment
- Feasibility notes must flag anything requiring special safety gear, licensing, or business permission before filming
- No candidate proposed without a one-sentence "why now" story hook

## Tools
- Web search — for verifying pay ranges, typical tools/equipment, and safety/access requirements

## Integration
- Feeds into `youtube-scriptwriting` — the chosen profession's pay/tools facts become the caption/graphics content
- Findings on which profession types perform best are logged to `journal/entries/` and `MEMORY.md` after episodes air

## Boundaries
See `agents/youtube/RULES.md`. In short: never contact businesses or professionals directly, never green-light unsafe/illegal/unlicensed activity without flagging it, never write to `knowledge/`.
