---
name: youtube-edit-plan
description: Turn an episode's script into a post-production edit plan for the "trying real professions" YouTube channel — scene-by-scene pacing, cut intent, motion graphics spec (lower-thirds, salary reveal, tool call-outs), retention re-hook points, thumbnail candidates and b-roll gaps. Use when asked to plan an edit, plan motion graphics/overlays, or spec the post-production for an episode. For actually building and rendering the graphic, use the remotion-motion-graphics skill instead.
---

# Edit & Motion Graphics Planning

## Purpose
Turn the script and footage plan into a post-production edit plan — pacing, cuts, and motion graphics (lower-thirds, stat overlays) that keep the ASMR feel while delivering the informational hooks.

**This skill produces the written *plan*. It does not build the graphic.** Rendering the actual asset is `remotion-motion-graphics`, working in `production/motion-graphics/`.

## Serves Goals
- Retain viewers (pacing and re-hook graphics at retention risk points)
- Maximize clicks (thumbnail-worthy moments called out for the human)

## Inputs
- Script output (`agents/youtube/outputs/YYYY-MM-DD_script_[profession-slug].md`)
- `knowledge/BRAND.md` — recurring visual style, so the graphics identity stays consistent across episodes
- `agents/youtube/EPISODES.md` — retention results of past episodes and which pacing/graphics choices they used
- `agents/youtube/MEMORY.md` — pacing/graphics patterns that improved or hurt retention

## Process
1. Read the script's caption/narration beat sequence.
2. Build a scene-by-scene edit outline: intro hook, arrival/setup, task sequences (grouped by tool/skill), the pay-reveal moment, a difficulty/skill-test moment, wrap-up.
3. For each scene specify pacing intent (long ASMR-style unbroken shots vs. quick cuts) and where music/ambient sound should dominate vs. duck for narration.
4. Design the motion graphics plan: recurring lower-third template (job title + pay stat), tool call-out labels, a consistent "salary reveal" graphic style, and a map/travel graphic template for future international episodes.
5. Flag the retention risk points (typically 15-30 seconds and the mid-video point) and specify what graphic or cut re-hooks the viewer there.
6. Note thumbnail-worthy frames/moments to flag for the human during the edit.
7. List any required b-roll or pickup shots the existing footage plan doesn't cover.

## Outputs
- `agents/youtube/outputs/YYYY-MM-DD_edit-plan_[profession-slug].md` — scene-by-scene edit outline, motion graphics spec, thumbnail candidates, b-roll gaps
- Update the episode's row in `EPISODES.md`: Edit Plan column + Status `Edit-Planned`

## Quality Bar
- Every fact shown in a caption has a corresponding motion graphic spec (style, timing, on-screen duration)
- Recurring graphic templates (lower-third, salary reveal) stay visually consistent with prior episodes per `knowledge/BRAND.md`
- At least one explicit re-hook moment in the first 30 seconds, and one before the midpoint
- Every b-roll gap is listed — the plan never assumes footage that wasn't specified as shot

## Tools
- None required — this is a planning document. Execution happens in `remotion-motion-graphics` (for built graphics) and in the editor's software (for the cut itself).

## Integration
- Receives input from `youtube-scriptwriting`
- Hands the graphics spec to `remotion-motion-graphics` for anything that needs to be rendered
- Output goes to the human/editor for approval and execution before publish
- After the video airs, retention-curve data feeds back via the weekly review into `EPISODES.md` → `MEMORY.md`

## Boundaries
See `agents/youtube/RULES.md`. This agent does not operate editing software itself.
