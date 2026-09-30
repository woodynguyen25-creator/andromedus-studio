# Andromedus Studio — holding page

The temporary page at [andromedusstudio.com](https://andromedusstudio.com) while the full site is finished.

- `src/index.template.html` — the page; `{{BIG}}` / `{{SUB}}` are filled with the wordmark
- `tools/build.js` — draws the wordmark with our own Andromedus Titles glyphs (`tools/andromedus-lettering.js`) and writes `index.html`, `favicon.svg`, `CNAME`
- Build: `node tools/build.js`

Served by GitHub Pages from `main`.
