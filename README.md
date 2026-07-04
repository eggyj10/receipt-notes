# Receipt Note Printer

A tiny single-page web app for writing notes and printing them on thermal receipt
paper. It displays the note at true 1:1 size, grows longer as you type, and always
prints at 1:1. The paper width is adjustable to match your printer. Works offline
and installs as an app (PWA).

No build step, no dependencies — it's a single HTML file.

## Features

- **1:1 display & print** — the note shows and prints at the real paper width;
  minimum height is a 1:1 square and it grows as you add content.
- **Print-scale compensation** — set *Print scale %* to match your printer's print
  dialog so the output comes out the right size.
- **Rich text** — bold, italic, underline, strikethrough, per-selection font size,
  alignment, bullet/numbered lists, and divider lines.
- **Images** — insert by URL, file, drag-and-drop, or paste (e.g. a screenshot),
  then resize and align each image.
- **End-of-note divider + feed** — prints a dashed line and blank space so the
  auto-cutter doesn't clip the last line.
- **Image shift** — nudges images sideways on the printout only, to line them up
  with text on Epson TM printers.
- **Auto-save** — your note and settings persist in the browser.
- **Installable PWA** — runs offline in its own window.

## Settings

| Setting        | What it does                                                      |
| -------------- | ----------------------------------------------------------------- |
| Paper mm       | Receipt paper width — set to match your printer.                  |
| Print scale %  | Match your printer's print-dialog scale (100% = no compensation). |
| Base font      | Default text size — personal taste.                               |
| Image shift mm | Print-only left/right nudge for images (Epson TM alignment).      |

## Installing as an app

Open the site in Edge or Chrome, then use the **install icon** in the address bar
(or menu **⋯ → Apps → Install this site as an app**).

## Development notes

- Everything lives in [`index.html`](index.html) — HTML, CSS, and JS in one file.
- Icons: [`favicon.svg`](favicon.svg) (tab) and [`icon.svg`](icon.svg) (app).
- PWA: [`manifest.webmanifest`](manifest.webmanifest) and [`sw.js`](sw.js).
- **After editing any cached file, bump the cache version in `sw.js`**
  (`receipt-notes-v2` → `-v3`, etc.) so installed copies pull the update.
