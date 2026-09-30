/* ANDROMEDUS TITLES — original monoline stroke lettering (2026-09-24).
   Drawn from scratch on a 100-unit cap height (baseline y = 100). Shared DNA with the thin geometric sci-fi title lettering
   Woody likes (circle-based rounds, a deep-diving M), with our own signatures: crossbars that float free of their stems
   (A E F H), curves in place of straight strokes (bowed A, dipping M V W, sweeping R K legs, rounded E F L), and a black-hole
   O (a ring cut by its accretion disc) for the wordmark. Rendered as SVG strokes, so every word can
   also be drawn on with stroke-dashoffset. Caps only; lowercase input is upper-cased. */
(function (root) {
  const G = {
    A: [80, 'M0 100 Q4 22 40 0 Q76 22 80 100 M20 60 L60 60'],
    B: [60, 'M0 0 L0 100 M0 0 L30 0 A24 24 0 0 1 30 48 L0 48 M8 48 L34 48 A26 26 0 0 1 34 100 L0 100'],
    C: [90, 'M85.4 14.6 A50 50 0 1 0 85.4 85.4'],
    D: [80, 'M0 0 L0 100 M0 0 L30 0 A50 50 0 0 1 30 100 L0 100'],
    E: [58, 'M58 0 L22 0 Q0 0 0 22 L0 78 Q0 100 22 100 L58 100 M12 50 L46 50'],
    F: [56, 'M56 0 L22 0 Q0 0 0 22 L0 100 M12 50 L42 50'],
    G: [100, 'M85.4 14.6 A50 50 0 1 0 100 50 L62 50'],
    H: [70, 'M0 0 L0 100 M70 0 L70 100 M10 53 Q35 40 60 53'],
    I: [0, 'M0 0 L0 100'],
    J: [52, 'M52 0 L52 74 A26 26 0 0 1 0 74'],
    K: [64, 'M0 0 L0 100 M64 0 Q14 22 8 54 M22 44 Q60 56 66 100'],
    L: [56, 'M0 0 L0 78 Q0 100 22 100 L56 100'],
    M: [100, 'M0 100 L0 0 Q40 26 50 100 Q60 26 100 0 L100 100'],
    N: [74, 'M0 100 L0 0 Q22 78 74 100 L74 0'],
    O: [100, 'M100 50 A50 50 0 1 1 0 50 A50 50 0 1 1 100 50'],
    P: [58, 'M0 100 L0 0 L32 0 A26 26 0 0 1 32 52 L0 52'],
    Q: [100, 'M100 50 A50 50 0 1 1 0 50 A50 50 0 1 1 100 50 M64 72 L102 104'],
    R: [66, 'M0 100 L0 0 L32 0 A26 26 0 0 1 32 52 L0 52 M24 52 Q62 58 66 100'],
    S: [60, 'M57 13 C50 4 40 0 30 0 C13 0 3 10 3 25 C3 41 17 46 30 50 C45 54 60 59 60 76 C60 92 47 100 30 100 C17 100 6 95 0 86'],
    T: [74, 'M0 8 Q37 -8 74 8 M37 0 L37 100'],
    U: [74, 'M0 0 L0 58 Q0 100 37 100 Q74 100 74 58 L74 0'],
    V: [80, 'M0 0 Q10 72 40 100 Q70 72 80 0'],
    W: [120, 'M0 0 Q6 72 30 100 Q44 40 60 16 Q76 40 90 100 Q114 72 120 0'],
    X: [72, 'M0 0 Q56 40 72 100 M72 0 Q16 60 0 100'],
    Y: [72, 'M0 0 Q34 18 36 54 M72 0 Q38 18 36 54 M36 54 L36 100'],
    Z: [66, 'M0 0 L66 0 Q8 44 0 100 L66 100'],
    '0': [70, 'M70 50 A35 50 0 1 1 0 50 A35 50 0 1 1 70 50'],
    '1': [28, 'M0 22 Q22 14 28 0 L28 100'],
    '2': [62, 'M2 22 C6 8 18 0 32 0 C48 0 60 11 60 27 C60 44 46 55 30 68 L0 100 L62 100'],
    '3': [60, 'M4 10 C11 3 20 0 30 0 C46 0 56 10 56 24 C56 38 45 48 26 48 C47 48 60 58 60 74 C60 90 47 100 30 100 C18 100 8 95 0 86'],
    '4': [66, 'M50 100 L50 0 Q14 34 0 70 L66 70'],
    '5': [60, 'M56 0 L8 0 L2 46 C10 40 20 38 30 38 C47 38 60 50 60 69 C60 88 47 100 30 100 C18 100 7 95 0 86'],
    '6': [62, 'M52 6 C45 2 38 0 31 0 C12 0 2 22 2 52 C2 82 14 100 32 100 C49 100 62 88 62 69 C62 51 49 40 32 40 C18 40 7 48 2 58'],
    '7': [62, 'M0 0 L62 0 Q26 44 22 100'],
    '8': [62, 'M31 48 C16 48 6 38 6 24 C6 10 17 0 31 0 C45 0 56 10 56 24 C56 38 46 48 31 48 C14 48 2 59 2 74 C2 89 14 100 31 100 C48 100 60 89 60 74 C60 59 48 48 31 48'],
    '9': [62, 'M10 94 C17 98 24 100 31 100 C50 100 60 78 60 48 C60 18 48 0 30 0 C13 0 0 12 0 31 C0 49 13 60 30 60 C44 60 55 52 60 42'],
    '.': [0, 'M0 99.5 L0 100'],
    ',': [6, 'M6 94 L0 110'],
    "'": [0, 'M0 0 L0 22'],
    '-': [40, 'M0 56 L40 56'],
    '—': [70, 'M0 56 L70 56'],
    '&': [70, 'M70 100 L14 36 C6 27 6 18 6 16 C6 6 14 0 24 0 C34 0 42 6 42 16 C42 28 30 36 16 46 C6 54 0 62 0 74 C0 90 12 100 28 100 C44 100 56 92 64 76'],
    '?': [52, 'M0 16 C4 6 14 0 26 0 C41 0 52 10 52 25 C52 45 26 48 26 70 M26 99.5 L26 100'],
    '!': [0, 'M0 0 L0 72 M0 99.5 L0 100'],
    ':': [0, 'M0 44.5 L0 45 M0 99.5 L0 100'],
    '/': [48, 'M48 0 L0 100'],
  };
  /* the black-hole O: a ring with a disc line sweeping through it - a black hole and its accretion disc (wordmark only).
     NOT a centre dot: that is the Foundation O. */
  const HOLE_O = [100, 'M100 50 A50 50 0 1 1 0 50 A50 50 0 1 1 100 50 M-10 60 Q50 49 110 40'];
  function lettering(text, opt = {}) {
    const size = opt.size || 48;            /* cap height in px */
    const sw = opt.stroke || 7;             /* stroke in font units (cap height 100) */
    const track = opt.tracking ?? 26;       /* extra space between letters, font units */
    const space = opt.space ?? 44;
    let x = sw, parts = [];
    for (const ch0 of String(text)) {
      const ch = ch0.toUpperCase();
      if (ch === ' ') { x += space; continue; }
      const g = (opt.holeO && ch === 'O') ? HOLE_O : G[ch];
      if (!g) { x += space; continue; }
      const hole = g === HOLE_O; if (hole) x += 14; /* room for the disc line */
      parts.push('<path pathLength="1" d="' + g[1] + '" transform="translate(' + x.toFixed(1) + ' 0)"/>');
      x += g[0] + track + (hole ? 14 : 0);
    }
    const w = x - track + sw, pad = sw + 12, vb = '0 ' + (-pad) + ' ' + w.toFixed(1) + ' ' + (100 + pad * 2);
    const px = (size / 100) * w;
    return '<svg class="alt" viewBox="' + vb + '" width="' + px.toFixed(1) + '" height="' + (size * (100 + pad * 2) / 100).toFixed(1) +
      '" role="img" aria-label="' + String(text).replace(/"/g, '&quot;') + '" fill="none" stroke="currentColor" stroke-width="' + sw +
      '" stroke-linecap="round" stroke-linejoin="round">' + parts.join('') + '</svg>';
  }
  /* ONE glyph as an inline SVG sized in em, for per-letter spans inside real text (the browser keeps doing word-wrap,
     the hero keeps its per-letter drag). capEm = cap height as a fraction of the font size. */
  function glyphHTML(ch0, opt = {}) {
    const ch = String(ch0).toUpperCase();
    const g = (opt.holeO && ch === 'O') ? HOLE_O : G[ch];
    if (!g) return null;
    const sw = opt.stroke || 9, cap = opt.capEm || 0.72, track = opt.tracking ?? 24;
    const hole = g === HOLE_O, pad = sw + (hole ? 12 : 0);
    const w = g[0] + pad * 2, h = 100 + sw * 2, k = cap / 100;
    const m = (track / 2 - pad) * k;
    return '<svg class="gl" aria-hidden="true" viewBox="' + (-pad) + ' ' + (-sw) + ' ' + w + ' ' + h + '" style="width:' + (w * k).toFixed(4) +
      'em;height:' + (h * k).toFixed(4) + 'em;margin:0 ' + m.toFixed(4) + 'em;vertical-align:' + (-sw * k).toFixed(4) + 'em" stroke-width="' + sw +
      '"><path pathLength="1" d="' + g[1] + '"/></svg>';
  }
  /* replace every text node inside el with per-letter glyph spans (words stay whole inline-blocks) */
  function letterize(el, opt = {}) {
    if (!el || el.dataset.lettered) return 0;
    el.dataset.lettered = '1';
    if (!el.getAttribute('aria-label')) el.setAttribute('aria-label', el.textContent.replace(/\s+/g, ' ').trim());
    let i = opt.start || 0;
    const walk = (node) => {
      if (node.nodeType === 3) {
        const frag = document.createDocumentFragment();
        for (const word of node.textContent.split(/(\s+)/)) {
          if (!word) continue;
          if (/^\s+$/.test(word)) { frag.append(' '); continue; }
          const w = document.createElement('span'); w.className = 'lw'; w.setAttribute('aria-hidden', 'true');
          for (const ch of word) {
            const s = document.createElement('span'); s.className = opt.cls || 'lg';
            const html = glyphHTML(ch, opt);
            if (html) { s.innerHTML = html; s.style.setProperty('--d', ((opt.delay0 || 0) + i * (opt.step ?? 0.035)).toFixed(3) + 's'); }
            else s.textContent = ch;
            i += 1; w.append(s);
          }
          frag.append(w);
        }
        node.replaceWith(frag);
      } else if (node.nodeType === 1 && !node.classList.contains('swap')) [...node.childNodes].forEach(walk);
    };
    [...el.childNodes].forEach(walk);
    return i;
  }
  root.andromedusLettering = lettering;
  root.andromedusGlyph = glyphHTML;
  root.andromedusLetterize = letterize;
})(typeof window !== 'undefined' ? window : globalThis);
