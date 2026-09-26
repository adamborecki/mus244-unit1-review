# MUS 244 — Unit 1 Review

🔗 **Live site:** https://adamborecki.github.io/mus244-unit1-review/

Interactive review hub for **MUS 244 Unit 1**. Six standalone, mobile-first webapps let students revisit core concepts through a guided tutorial, a quiz mode, and a Canvas-ready deliverable — no build step, no dependencies, just static HTML/CSS/JS.

Companion to the [Unit 1 slide deck](https://github.com/adamborecki/mus244-unit1) ([live](https://adamborecki.github.io/mus244-unit1/)), which links back here from its own "Explore more" panels.

## Modules

| Slug | Topic | Path |
| --- | --- | --- |
| `sound-waves` | What sound is, mechanical vs. electromagnetic waves | [`/sound-waves`](./sound-waves) |
| `harmonics` | Harmonic series, overtones | [`/harmonics`](./harmonics) |
| `synth` | Oscillators, waveforms | [`/synth`](./synth) |
| `filters` | Filter types and shaping timbre | [`/filters`](./filters) |
| `lfos` | Low-frequency oscillators / modulation | [`/lfos`](./lfos) |
| `adsr` | Envelopes (Attack / Decay / Sustain / Release) | [`/adsr`](./adsr) |

Each module folder contains:
- `index.html` — the module UI (tutorial, quiz, deliverable)
- `topic.js` — a `LEARN_APP_CONFIG` object (title, intro, difficulty, estimated minutes, key terms, resource link) that the landing page reads to render its card

## How it's wired together

`index.html` at the repo root is a directory page. It reads `APP_SLUGS` and fetches each module's `./<slug>/topic.js` at runtime (with a timeout + fallback) so the landing page's cards always reflect whatever `topic.js` says — add or edit a module without touching the landing page.

Shared styling/logic lives in [`/shared`](./shared) (`app.js`, `styles.css`) and is used by the module pages themselves.

## Running locally

No build tooling required — serve the repo as static files:

```bash
npx serve .
# or
python3 -m http.server
```

Then open `http://localhost:<port>/`.

## Deployment

Pushes to `main` deploy automatically to GitHub Pages via [`.github/workflows/static.yml`](./.github/workflows/static.yml).

## Adding a new module

1. Create a new folder with `index.html` + `topic.js` (export `LEARN_APP_CONFIG`).
2. Add the folder's slug to `APP_SLUGS` in the root `index.html`.
3. The landing page picks it up automatically on next load.
