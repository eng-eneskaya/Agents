# Conventions

## Folder Naming
- Agent folders: lowercase, hyphen-separated (e.g., `youtube`, `instagram-reels`)
- No spaces in any folder or file name

## File Naming
- Agent definition: `AGENT.md` (one per agent — goals, KPIs, skills summary)
- Skills: `.claude/skills/<agent>-<skill-name>/SKILL.md` (real Claude Code Skills, kebab-case, with `name` + `description` frontmatter)
- Output files: `YYYY-MM-DD_agent-name_description.md`
- Journal entries: `journal/entries/YYYY-MM-DD_HHMM.md`

## Agent Structure

Every agent folder must contain:

| File | Purpose |
|------|---------|
| `AGENT.md` | Goals, KPIs, skills list, what success looks like, constraints |
| `EPISODES.md` | Per-item ledger — pipeline state, measured results, running experiments (updated in place) |
| `skills/` | Pointer stubs — live skills are in `.claude/skills/` |
| `HEARTBEAT.md` | Cron schedule, what happens each cycle, triggers |
| `MEMORY.md` | Agent-local learnings (not shared — journal is shared memory) |

## Four Pillar Checklist

Before an agent is active, verify:
- [ ] Goals: Are KPIs defined and measurable?
- [ ] Skills: Does every skill serve the goals? No extras?
- [ ] Heartbeat: Is the cron loop defined and predictable?
- [ ] Journal: Does the agent know how to read from and write to the journal?
- [ ] Registry: Is the agent added to `AGENT_REGISTRY.md`?
- [ ] Ledger: Does the agent have an `EPISODES.md` (or equivalent) closing the produce → measure → learn loop?
- [ ] Targets: Are KPI targets phased, so a brand-new agent isn't scored against mature-state numbers?

## Knowledge vs. Journal
- `knowledge/` = static reference (brand voice, strategy, audience profiles)
- `journal/` = living memory (events, decisions, learnings, updates)
- Agents read both. Agents write to journal only.
