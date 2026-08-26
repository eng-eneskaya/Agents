# Agent Registry

Master list of all agents in this workspace.

| Agent | Folder | Goals | Skills | Heartbeat | Phase | Status |
|-------|--------|-------|--------|-----------|-------|--------|
| YouTube | `agents/youtube/` | Ship 4 episodes, keep 3+ candidates in pipeline, test both narration styles | `youtube-profession-research`, `youtube-scriptwriting`, `youtube-edit-plan`, `remotion-motion-graphics` | Weekly — `/heartbeat youtube` (manual for now) | Phase 0 — prove the format | Active, pre-launch |

## Notes

- **Don't add a second agent yet.** For one agent, the orchestrator / registry / journal layer is overhead. Add agent #2 once YouTube has published 4 episodes and `MEMORY.md` holds real performance data.
- Skills live in `.claude/skills/` (real Claude Code Skills, auto-loaded). The files under `agents/*/skills/` are pointer stubs.
- Per-episode state is **not** tracked here — it lives in `agents/youtube/EPISODES.md`.

## Last Updated
2026-08-25
