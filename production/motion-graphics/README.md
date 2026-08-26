# Motion Graphics (Remotion)

Real motion graphics for the YouTube "trying professions" channel, built with [Remotion](https://www.remotion.dev). This is the actual code project referenced by `agents/youtube/skills/EDIT_MOTION_GRAPHICS.md` — the markdown plan describes *what* graphic is needed; this project produces the rendered asset.

## Setup

```bash
npm install
```

## Preview (Remotion Studio)

```bash
npm start
```

Opens an interactive preview where you can scrub the timeline and tweak props live.

## Render

```bash
npx remotion render FishermanIntro out/fisherman-intro.mp4
```

Output lands in `out/` (gitignored) — hand this file to the editor to cut into the episode.

## Compositions

- `FishermanIntro` — intro title card for the fisherman ("Balıkçı") episode. 1920x1080, 30fps, 4s (120 frames).

## Adding the next episode's intro

The title card is a reusable template (`src/IntroTitleCard.tsx`) matching `knowledge/BRAND.md`'s "consistent motion graphics template" guidance — ocean-toned gradient background, gold accent, drifting wave lines, staggered rise-in text.

1. Create a new file in `src/` (e.g. `src/BlacksmithIntro.tsx`) that renders `<IntroTitleCard kicker="..." title="..." subtitle="..." />` with that episode's copy.
2. Register it as a new `<Composition />` in `src/Root.tsx` with a unique `id`.
3. Render with `npx remotion render <id> out/<id>.mp4`.
