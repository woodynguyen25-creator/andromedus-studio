/* Builds index.html + favicon.svg from src/index.template.html, drawing the wordmark with our own Andromedus Titles glyphs.
   Run: node tools/build.js */
const fs = require('fs');
const path = require('path');
require('./andromedus-lettering.js');

const root = path.join(__dirname, '..');
const draw = globalThis.andromedusLettering;
const WRITE_STEP = 0.09; /* seconds between letters as the wordmark writes itself on */

/* stagger each stroke of the write-on animation */
function stagger(svg, delay0) {
  let i = 0;
  return svg.replace(/<path /g, () => '<path style="animation-delay:' + (delay0 + i++ * WRITE_STEP).toFixed(2) + 's" ');
}

const big = stagger(draw('ANDROMEDUS', { holeO: true, size: 100, stroke: 7, tracking: 30 }), 0.35);
const sub = stagger(draw('STUDIO', { size: 100, stroke: 9, tracking: 70 }), 1.2);
const hole = draw('O', { holeO: true, size: 100, stroke: 11 })
  .replace('stroke="currentColor"', 'stroke="#b9a6ff"')
  .replace(/ width="[^"]*" height="[^"]*"/, '');

const tpl = fs.readFileSync(path.join(root, 'src', 'index.template.html'), 'utf8');
const html = tpl.replace('{{BIG}}', big).replace('{{SUB}}', sub);
if (html.includes('{{')) throw new Error('unfilled placeholder in template');

fs.writeFileSync(path.join(root, 'index.html'), html);
fs.writeFileSync(path.join(root, 'favicon.svg'), hole.replace('<svg ', '<svg xmlns="http://www.w3.org/2000/svg" '));
fs.writeFileSync(path.join(root, 'CNAME'), 'andromedusstudio.com\n');
console.log('built index.html', html.length, 'bytes');
