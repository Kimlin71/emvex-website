# Emvex website

Company website for **Emvex** and its product **PIS** (Predictive Interruption System), software that works with the Emvex app to predict emotional dysregulation in real time.

PIS supports the user's own judgement. It does not diagnose or treat anything and does not replace professional care.

## Tech stack

Static site with no build step and no dependencies:

- HTML (`index.html`, single page)
- CSS (`css/styles.css`)
- Vanilla JavaScript (`js/main.js`)

## Run locally

From the repository root:

```sh
python3 -m http.server 8080
```

Then open <http://localhost:8080/index.html>.

## Page sections

| Section | Anchor | Content |
| --- | --- | --- |
| Hero | `#home` | Headline and calls to action |
| About | `#about` | What Emvex and PIS are, and who they are for |
| Features | `#services` | Real-time prediction, app integration, privacy first |
| Gallery | `#gallery` | Three feature videos with posters and captions |
| Contact | `#contact` | Validated contact form and email links |

## JavaScript behaviour (`js/main.js`)

- **Mobile navigation**: hamburger toggle with `aria-expanded`; closes on link click or `Escape`.
- **Contact form**: client-side validation (name ≥ 2 characters, valid email, message ≥ 10 characters) with accessible error messages. On success it opens a `mailto:` link to `kim@eqit.ai`. No data is sent to a server.

## Project structure

```text
index.html                         Single-page site
css/styles.css                     Design tokens and styles
js/main.js                         Navigation and form validation
assets/logo/                       Logo and symbol (SVG)
assets/videos/                     Feature videos, captions (.vtt) and poster images
docs/website-acceptance-checklist.md   Acceptance checklist
docs/agents/                       Issue tracker, triage and domain notes for agents
CONTEXT.md                         Domain vocabulary (Emvex, PIS, App)
AGENTS.md                          Agent skill configuration
```

## Known gaps

- `assets/videos/app-integration.mp4` and `assets/videos/privacy-first.mp4` are referenced in `index.html` but missing. Only `real-time-prediction.mp4` exists, so the other two videos show fallback text.
- The repository contains no sitemap or layout sketch (see checklist items P1 and P2).

## Writing guidelines

Use the terms defined in [`CONTEXT.md`](CONTEXT.md). In particular, PIS is software, not a device, and "emotional dysregulation" is a descriptive term, not a diagnosis.

## Documentation

- [Website acceptance checklist](docs/website-acceptance-checklist.md)
- [Issue tracker](docs/agents/issue-tracker.md)
- [Triage labels](docs/agents/triage-labels.md)
- [Domain docs](docs/agents/domain.md)

## Contact

[kim@eqit.ai](mailto:kim@eqit.ai) · [hello@emvex.ai](mailto:hello@emvex.ai)
