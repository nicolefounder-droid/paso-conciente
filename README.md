# Paso Consciente, home page (plain HTML)

One-page site for Paso Consciente Coaching. Built from the "Paso Consciente Hero" design canvas.
Plain HTML, CSS, and a little JavaScript. No build step. No install.

## See it on your computer

Open `index.html` in a browser. Or, from this folder:

```bash
python3 -m http.server 8000
```

Then go to http://localhost:8000.

## What is where

| Path | What it is |
| --- | --- |
| `index.html` | The whole page, all sections |
| `css/styles.css` | All styling. Colors and sizes are at the top (`:root`) |
| `js/main.js` | Mobile menu, FAQ open/close, nav highlight |
| `js/config.js` | **The one file to edit for real links** (see below) |
| `assets/img/` | Photos, logo, sand texture |
| `assets/fonts/` | General Sans (self-hosted). Cormorant Garamond loads from Google Fonts |

## Links that still need a real address

Open `js/config.js` and fill these in. Empty means "not ready yet".

- `bookingUrl`: where every "Reserva tu llamada gratis" button goes. Until it is set, the buttons scroll to the booking section.
- `links.substack`, `links.linkedin`: the two social links.
- `links.privacidad`, `links.terminos`: Privacy Policy and Terms of Service pages. These pages do not exist yet.

Instagram already points to https://www.instagram.com/pasoconsciente/.

## Style choices to keep (Nicole's decisions)

- Title Case on H1 and H2 headings.
- Glass cards with soft pine shadows.
- Prices in Cormorant Garamond.
- Sans-serif text is General Sans.
- Sand grain texture behind every section.
- No circles: images use squares with 15px rounded corners.

## Layout

Phone layout below 1024px. Desktop layout from 1024px up. The header sticks to the top and turns white after you scroll.
