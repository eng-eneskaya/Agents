---
name: remotion-motion-graphics
description: Build, extend, or render real motion graphics (intro title cards, lower-thirds, salary-reveal graphics, tool call-outs) for the YouTube "trying professions" channel using the Remotion project in production/motion-graphics/. Use whenever asked to actually create/animate/render a motion graphic or video overlay for an episode — not just to plan one.
---

# Remotion Motion Graphics

## What this is

`production/motion-graphics/` is a real Remotion (React + TypeScript) video project — the only piece of actual application code in this otherwise markdown-only agent repo. It exists because the `youtube-edit-plan` skill (`.claude/skills/youtube-edit-plan/SKILL.md`) only produces a written edit/motion-graphics *plan*; this project produces the rendered *asset* itself. Keep the two separate: `youtube-edit-plan` decides *what* graphic a given episode needs (scene, timing, copy) — this Remotion project is where that spec actually gets built and rendered.

## Before building anything

1. Check `knowledge/BRAND.md` for the visual/voice style (ASMR-minimal, clean captions instead of talking-head narration, consistent recurring templates across episodes).
2. Check the relevant episode's `agents/youtube/outputs/YYYY-MM-DD_edit-plan_[profession-slug].md` (from `youtube-edit-plan`, linked in `agents/youtube/EPISODES.md`) if one exists, for the specific graphic spec (style, timing, on-screen text/facts).
3. Prefer extending the existing reusable components over building a new one-off — see below.

## Project layout

- `src/Root.tsx` — registers every `<Composition>` (one per rendered graphic/episode intro).
- `src/IntroTitleCard.tsx` — reusable intro title-card template (`kicker`, `title`, `subtitle` props): ocean-toned gradient, gold accent, drifting wave lines, staggered spring rise-in text, fades out over the last 18 frames.
- `src/FishermanIntro.tsx` — first concrete instance of the template ("Balıkçı" episode).
- `out/` — rendered output (gitignored) — hand the file to the human/editor, and note the render in the episode's row in `agents/youtube/EPISODES.md`.

For a new episode's intro: add a new `src/<Profession>Intro.tsx` that renders `<IntroTitleCard kicker="..." title="..." subtitle="..." />` with that episode's copy, then register it as a new `<Composition id="...">` in `Root.tsx`. Don't duplicate the animation logic — extend `IntroTitleCard`'s props if a new template needs a genuinely different layout, don't fork it.

## Commands

```bash
cd production/motion-graphics
npm install                    # first time / after editing package.json
npm start                      # Remotion Studio — live preview, scrub timeline
npx remotion still <CompositionId> out/<name>.png --frame=<n>   # spot-check a frame
npx remotion render <CompositionId> out/<name>.mp4              # final render
```

## Gotchas learned the hard way

- **`npx create-video@latest` hangs non-interactively.** It prompts "You are already inside a Git repo... Do you want to continue?" and neither omitting input nor piping `yes` reliably answers it when run through a non-interactive shell — it silently leaves an empty directory. Scaffold new Remotion projects by hand instead (package.json, tsconfig.json, remotion.config.ts, src/index.ts, src/Root.tsx) rather than relying on the CLI wizard in this environment.
- **Turkish text needs the `latin-ext` subset.** `@remotion/google-fonts` `loadFont()` defaults to the `latin` subset, which is missing ı/ğ/ş/ç/ö/ü and silently mis-renders them. Always call it as `loadFont('normal', {weights: [...], subsets: ['latin', 'latin-ext']})`. Also pin `weights` explicitly — the unconstrained default loads every weight (dozens of network requests) and prints a "too many network requests" warning.
- Video specs used so far: 1920x1080, 30fps, 16:9 (matches the channel's long-form ASMR format per `knowledge/BRAND.md`; a 9:16 cut would need a second composition, not a resize of this one).
