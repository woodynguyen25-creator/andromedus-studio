# Andromedus Studio — andromedusstudio.com

The public site. The working copy lives privately in `lucky-dog-landing/orbit.html`; this repo only holds released builds.

## Release a new version
```
node tools/pull-site.js          # builds index.html from the working copy (refuses if a guard fails)
git add -A && git commit -m "release: <what changed>" && git push
```
GitHub Pages redeploys `main` in about a minute.

`pull-site.js` sets the violet build, adds the page identity (title, description, share tags, favicon), points every
"Start the conversation" at hello@andromedusstudio.com, and ships only work cleared for public view (Kairo, Speedy Cleans).
It fails the build if anything private or a dead `href="#"` button gets through.

## Fallback
`holding.html` is the coming-soon page (`node tools/build.js` rebuilds it from `src/index.template.html`).
To roll back to it: copy `holding.html` over `index.html`, commit, push.
