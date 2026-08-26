---
name: youtube-scriptwriting
description: Turn a researched profession into the on-screen caption/subtitle plan, minimal narration, title options and description for a "trying real professions" YouTube episode — keeping the ASMR immersion intact while landing the pay/tools hook. Use when asked to write a script, captions, subtitles, hook, titles, or a video description for an episode.
---

# Scriptwriting

## Purpose
Turn a researched profession into the on-screen caption/subtitle plan and any spoken narration needed to hook and inform viewers without breaking the ASMR immersion.

## Serves Goals
- Retain viewers (a strong hook and well-paced captions keep people watching)
- Maximize clicks (title/description alignment with the video's actual hook)

## Inputs
- Profession research output (`agents/youtube/outputs/YYYY-MM-DD_profession-research.md`)
- `knowledge/BRAND.md` — voice/tone (minimal narration, captions carry the facts)
- `knowledge/AUDIENCE.md` — segment language
- `agents/youtube/EPISODES.md` — which narration style each past episode used and how it performed
- `agents/youtube/MEMORY.md` — caption/hook patterns that worked before

## Process
1. Select the profession from the latest research output (or the row in `EPISODES.md` with Status `Chosen`).
2. Decide the narration level for this episode — silent/ASMR-only with captions, light narration at key beats, or fuller spoken narration — based on info density and target segment. **Record the choice in the `Narration style` column of `EPISODES.md`**; it is the channel's main running experiment.
3. Write the hook (first 5-15 seconds): on-screen text or spoken line stating the job and the core curiosity (e.g. "Today I'm working as a [job] — here's what it actually pays").
4. Write the full caption/subtitle sequence mapped to the shoot's expected beats: arrival/intro, key tasks/tools introduced, the pay-reveal moment, a difficulty/skill moment, wrap-up/reflection.
5. For each caption beat specify: the on-screen text (short, factual), whether it's spoken narration or a text-only overlay, and roughly where in the shoot it belongs.
6. Draft 3 title options and a description, making sure the hook fact (pay, rare craft) that appears early in the video is reflected in the title.
7. Note any safety/consent lines needed (e.g. crediting the business or professional on screen).

## Outputs
- `agents/youtube/outputs/YYYY-MM-DD_script_[profession-slug].md` — caption/narration sequence, title options, description
- Update the episode's row in `EPISODES.md`: Script column + Status `Scripted` + Narration style

## Quality Bar
- The hook lands the core curiosity fact (job + pay or rarity) within the first 15 seconds
- Every factual caption (pay, tool name, stat) traces back to the research output — **no invented numbers**
- Spoken narration, if used, stays minimal and never talks over the ASMR audio for more than a few seconds at a time
- Title passes the "would I click this?" test and matches what the video actually delivers

## Tools
- None beyond the research output — pure writing

## Integration
- Receives input from `youtube-profession-research`
- Output goes to the human for approval and use during the shoot
- Feeds into `youtube-edit-plan` — the caption sequence becomes the basis for the on-screen graphics/lower-thirds plan

## Boundaries
See `agents/youtube/RULES.md`. Nothing is published without human approval.
