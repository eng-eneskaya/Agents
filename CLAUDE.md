# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repository is

A local-first, multi-agent system with no application code — everything is markdown files that Claude Code reads and acts on. There is no build, lint, or test tooling; "running" an agent means Claude Code reading its markdown files and producing outputs, not executing a program. When asked to create, run, or review an agent, treat the markdown files themselves as the source of truth and the deliverable.

## Core model

```
Human --> Orchestrator --> Agents --> Outputs
                              |
                              v
                        journal/ (shared memory)
                              ^
                              |
                        all agents read
```

- **Orchestrator** (`orchestrator/`): the human-facing coordinator. It routes tasks to the right agent/skill, tracks priorities, and reviews outputs. It never does specialist work itself, never runs on a schedule, and never makes strategic decisions on its own.
- **Agents** (`agents/*/`): each is scoped to one mission with measurable KPIs, defined in its own folder. Agents don't talk to each other directly — they communicate only through `journal/`.
- **knowledge/** is static reference (brand voice, strategy, audience) that all agents read but must never write to directly; changes are proposed to the human instead.
- **journal/** is the shared, living memory — the only channel for cross-agent communication and the record of events/decisions/learnings.

## Agent folder structure

Every agent under `agents/<agent-name>/` (created by copying `agents/standard-agent/`) contains:

| File/dir | Purpose |
|---|---|
| `AGENT.md` | Mission (one sentence), Goals & KPIs table, non-goals, skills list, input/output contracts, hard boundaries |
| `HEARTBEAT.md` | Schedule, per-cycle steps (read context → assess → execute skill → log), weekly/monthly review process, escalation rules |
| `MEMORY.md` | Agent-local learnings only — confirmed patterns with evidence, not one-off observations (those go in `journal/`) |
| `RULES.md` | CAN/CANNOT boundaries, handoff rules (human / orchestrator / journal), shared-knowledge read/write rules |
| `EPISODES.md` | Per-episode ledger — production pipeline state, post-publish performance, and running format experiments. Updated in place; the source of truth for "what stage is everything at" |
| `skills/*.md` | **Pointer stubs only.** The live skills are real Claude Code Skills in `.claude/skills/<skill-name>/SKILL.md` with YAML frontmatter, so Claude loads them automatically |
| `data/imports/` | Data the human drops in for the agent to consume |
| `outputs/` | Agent-produced outputs, per `outputs/YYYY-MM-DD_description.md` naming |
| `scripts/` | Optional automation scripts; must be idempotent |

`examples/podcast-agent/` is an older reference agent — it predates the skills/ledger changes, so prefer `agents/youtube/` as the current example.

## Running an agent

One cycle = the `/heartbeat <agent>` slash command (`.claude/commands/heartbeat.md`). It reads a bounded context (ledger, last 5 journal entries, strategy, memory), picks exactly one skill from a decision tree, executes it, and logs to `outputs/` + `EPISODES.md` + `journal/entries/`. Never end a cycle without updating `EPISODES.md` — the next cycle assesses from it.

Context budget matters: read the last 5 journal entries, not the whole journal, and load `knowledge/` files only when the running skill lists them as inputs.

## Creating a new agent

Follow `NEW_AGENT_BOOTSTRAP.md` step by step, then verify against `AGENT_CREATION_CHECKLIST.md` before treating the agent as active:

1. Copy `agents/standard-agent/` to `agents/<agent-name>/`.
2. Fill in `AGENT.md`: mission, 2-4 measurable KPIs (max 4 — more means it should be two agents), explicit non-goals.
3. Create one skill per goal as a real Claude Code Skill at `.claude/skills/<agent>-<skill>/SKILL.md`, with `name` and `description` frontmatter (the description is what makes it auto-trigger — say what it does *and* when to use it). Delete any skill that doesn't serve a goal.
4. Fill in `HEARTBEAT.md`: schedule (start weekly, only go daily if needed) and the decision tree for which skill runs each cycle.
5. Set up `data/imports/` (with an export guide if the human needs to provide data) and `outputs/`.
6. Fill in `RULES.md` boundaries and handoff rules.
7. Register the agent in `AGENT_REGISTRY.md` (name, folder, goals, skills, heartbeat, status).
8. Leave `MEMORY.md` empty at creation — learnings are earned from real cycle data, never pre-filled with assumptions.

## Naming conventions (`CONVENTIONS.md`)

- Agent folders: lowercase, hyphen-separated (e.g. `podcast`, `youtube`, `instagram-reels`), no spaces.
- Output files: `YYYY-MM-DD_agent-name_description.md`
- Journal entries: `journal/entries/YYYY-MM-DD_HHMM.md`
- Never overwrite an existing output file — always create a new dated one. `MEMORY.md` and `EPISODES.md` are the only files updated in place.

## Hard boundaries to respect when acting as/for an agent

- Agents write to their own `outputs/`, their own `MEMORY.md`, and `journal/` — never to another agent's files, and never directly to `knowledge/` (propose changes to the human instead).
- Never publish or send anything externally without human approval.
- Strategic/cross-agent decisions belong to the human or orchestrator, not an individual agent.
- Never skip the weekly review — it's how an agent's `MEMORY.md` accumulates real, evidence-backed patterns instead of assumptions.
