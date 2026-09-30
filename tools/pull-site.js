/* Release the real site: takes the working copy of the Andromedus orbit page (lucky-dog-landing/orbit.html) and turns it
   into the public index.html for andromedusstudio.com. Run: node tools/pull-site.js  (then commit + push to publish)
   The working copy keeps all its dev tools; only this public build is edited. It REFUSES to write if a guard fails. */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SRC_DIR = process.env.ORBIT_SRC || 'C:/Github Repos/lucky-dog-landing';
const EMAIL = 'hello@andromedusstudio.com';
const MAILTO = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent('Starting a conversation');
/* only work that is cleared for public view ships (Molecules is a paused client in a regulated category: never public) */
const WORK_FILES = ['kairo-thumb.webp', 'kairo-long.webp', 'speedy-thumb.webp', 'speedy-long.webp'];
const FORBIDDEN = [/molecules/i, /kayne/i, /sslip\.io/i, /basic[- ]?auth/i, /990-0072/, /FAL_KEY/];

let h = fs.readFileSync(path.join(SRC_DIR, 'orbit.html'), 'utf8').replace(/\r\n/g, '\n');
const swap = (a, b, count = 1) => {
  const n = h.split(a).length - 1;
  if (n !== count) throw new Error('expected ' + count + ' of "' + a.slice(0, 70) + '", found ' + n);
  h = h.split(a).join(b);
};

/* 1. the violet build, and the page's public identity */
swap('<title>Andromedus</title>', [
  '<title>Andromedus Studio</title>',
  '<script>window.__ORBIT_HUE="violet";</script>',
  '<meta name="description" content="Andromedus Studio is an AI-native studio. We help brands grow: the name people remember, the site that works for you, and the systems that answer when you can\'t.">',
  '<meta name="theme-color" content="#000000">',
  '<link rel="canonical" href="https://andromedusstudio.com/">',
  '<meta property="og:title" content="Andromedus Studio">',
  '<meta property="og:description" content="An AI-native studio. We help brands grow.">',
  '<meta property="og:type" content="website">',
  '<meta property="og:url" content="https://andromedusstudio.com/">',
  '<link rel="icon" href="/favicon.svg" type="image/svg+xml">',
  '<meta property="og:image" content="https://andromedusstudio.com/og-image.png">',
  '<meta property="og:image:width" content="1200">',
  '<meta property="og:image:height" content="630">',
  '<meta property="og:image:alt" content="Andromedus Studio: an AI-native studio. We help brands grow.">',
  '<meta name="twitter:card" content="summary_large_image">',
].join('\n'));

/* 2. every 'Start the conversation' reaches a real inbox; the link to a page that does not exist goes */
swap('<a class="cta primary" href="#">Start the conversation</a>', '<a class="cta primary" href="' + MAILTO + '">Start the conversation</a>', 2);
swap('\n      <a class="cta link" href="#">How this was rendered</a>', '');

/* 3. Molecules' star becomes the open invitation: the next brand is yours */
const mol = h.match(/\n\s*<button type="button" class="wstar" data-img="\/work\/molecules-long\.webp">.*?<\/button>/);
if (!mol) throw new Error('Molecules work star not found');
h = h.replace(mol[0], '\n  <a class="wstar" href="' + MAILTO + '"><span class="n" style="color:#f0c466">01 &middot; NEXT</span><span class="t">Your brand</span><span class="k">START THE CONVERSATION</span></a>');

/* the invitation star is a link: no browser underline, same look as the work stars */
swap('</style>', '  a.wstar { text-decoration: none; }\n</style>');
swap('/* Molecules = their gold, Kairo = their ember accent, Speedy Cleans = their blue */', '/* star 01 = gold (the next brand), Kairo = their ember accent, Speedy Cleans = their blue */');

/* 4. guards: nothing private, no dead buttons */
for (const re of FORBIDDEN) if (re.test(h)) throw new Error('forbidden content in public build: ' + re);
if (/class="cta[^"]*" href="#"/.test(h)) throw new Error('a CTA still points at #');

fs.writeFileSync(path.join(ROOT, 'index.html'), h);
fs.mkdirSync(path.join(ROOT, 'work'), { recursive: true });
for (const f of WORK_FILES) fs.copyFileSync(path.join(SRC_DIR, 'public', 'work', f), path.join(ROOT, 'work', f));
/* 5. the housekeeping pages: a branded 404 (from the holding page), robots.txt and a sitemap */
let lost = fs.readFileSync(path.join(ROOT, 'holding.html'), 'utf8');
const lostSwap = (a, b) => { if (!lost.includes(a)) throw new Error('404 anchor missing: ' + a.slice(0, 60)); lost = lost.replace(a, b); };
lostSwap('<p class="soon">The full site is arriving soon</p>', '<p class="soon">This page drifted out of orbit</p>');
lostSwap('<a class="mail" href="mailto:hello@andromedusstudio.com">hello@andromedusstudio.com</a>', '<a class="mail" href="/">Back to Andromedus Studio</a>');
lostSwap('<title>Andromedus Studio</title>', '<title>Page not found · Andromedus Studio</title>\n<meta name="robots" content="noindex">');
fs.writeFileSync(path.join(ROOT, '404.html'), lost);
fs.writeFileSync(path.join(ROOT, 'robots.txt'), 'User-agent: *\nAllow: /\nDisallow: /holding.html\nSitemap: https://andromedusstudio.com/sitemap.xml\n');
fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>https://andromedusstudio.com/</loc></url>\n</urlset>\n');
if (!fs.existsSync(path.join(ROOT, 'og-image.png'))) throw new Error('og-image.png missing (render it: lucky-dog-landing/scripts/og-image.mjs)');

console.log('index.html', h.length, 'bytes; work images', WORK_FILES.length, '; 404, robots, sitemap written');
