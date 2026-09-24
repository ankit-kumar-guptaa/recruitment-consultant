import { chromium } from 'playwright';

const W = 1600, H = 560;

const variants = {
  navy:   { base: 'linear-gradient(115deg,#061c46 0%,#0a2c6b 45%,#0f47a8 100%)',
            glow: ['rgba(26,115,232,.55)', 'rgba(59,110,240,.38)', 'rgba(245,165,36,.18)'],
            line: '#9dc0ff', dot: '#ffffff', ring: '#8fb4ff' },
  cobalt: { base: 'linear-gradient(120deg,#08245a 0%,#0b3d91 48%,#1a73e8 118%)',
            glow: ['rgba(147,180,251,.48)', 'rgba(10,44,107,.55)', 'rgba(255,207,120,.20)'],
            line: '#cfe0ff', dot: '#ffffff', ring: '#bfd4fd' },
  teal:   { base: 'linear-gradient(125deg,#06213f 0%,#0a2c6b 50%,#12708f 118%)',
            glow: ['rgba(16,185,129,.34)', 'rgba(26,115,232,.46)', 'rgba(255,207,120,.16)'],
            line: '#8ee0cd', dot: '#d8fff4', ring: '#6fd3bd' },
  gold:   { base: 'linear-gradient(118deg,#071f4a 0%,#0a2c6b 44%,#17439a 100%)',
            glow: ['rgba(245,165,36,.42)', 'rgba(26,115,232,.42)', 'rgba(255,207,120,.28)'],
            line: '#ffd894', dot: '#fff3d6', ring: '#ffcf78' },
};

const rng = (seed) => { let s = seed; return () => (s = (s * 1664525 + 1013904223) % 4294967296) / 4294967296; };

/** Constellation weighted towards the right half, where no text sits. */
function constellation(seed, v) {
  const r = rng(seed);
  const pts = Array.from({ length: 30 }, () => ({
    x: W * 0.40 + r() * W * 0.62,
    y: r() * H,
  }));
  let out = '';
  for (let i = 0; i < pts.length; i++) {
    for (let j = i + 1; j < pts.length; j++) {
      const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
      if (d < 250) {
        out += `<line x1="${pts[i].x.toFixed(0)}" y1="${pts[i].y.toFixed(0)}" x2="${pts[j].x.toFixed(0)}" y2="${pts[j].y.toFixed(0)}" stroke="${v.line}" stroke-width="1.2" opacity="${((1 - d / 250) * 0.5).toFixed(3)}"/>`;
      }
    }
  }
  for (const p of pts) {
    const rad = 2.5 + r() * 4;
    out += `<circle cx="${p.x.toFixed(0)}" cy="${p.y.toFixed(0)}" r="${rad.toFixed(1)}" fill="${v.dot}" opacity="${(0.5 + r() * 0.45).toFixed(2)}"/>`;
    if (r() > 0.72) {
      out += `<circle cx="${p.x.toFixed(0)}" cy="${p.y.toFixed(0)}" r="${(rad * 4).toFixed(1)}" fill="none" stroke="${v.dot}" stroke-width="1" opacity=".22"/>`;
    }
  }
  return out;
}

/** Big thin rings echoing the hero blob art. */
function rings(v) {
  return `
    <circle cx="${W * 0.80}" cy="${H * 0.30}" r="230" fill="none" stroke="${v.ring}" stroke-width="1.4" opacity=".30" stroke-dasharray="8 12"/>
    <circle cx="${W * 0.80}" cy="${H * 0.30}" r="160" fill="none" stroke="${v.ring}" stroke-width="1.4" opacity=".20"/>
    <circle cx="${W * 0.62}" cy="${H * 0.82}" r="190" fill="none" stroke="${v.ring}" stroke-width="1.4" opacity=".22" stroke-dasharray="6 14"/>
    <circle cx="${W * 0.95}" cy="${H * 0.78}" r="120" fill="none" stroke="${v.ring}" stroke-width="1.4" opacity=".24"/>`;
}

const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--no-sandbox'] });
const page = await b.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });

let i = 0;
for (const [name, v] of Object.entries(variants)) {
  i++;
  const blobs = [
    { x: '86%', y: '22%', s: 760, c: v.glow[0] },
    { x: '46%', y: '92%', s: 680, c: v.glow[1] },
    { x: '68%', y: '-6%', s: 520, c: v.glow[2] },
  ].map(o => `<div style="position:absolute;left:${o.x};top:${o.y};width:${o.s}px;height:${o.s}px;transform:translate(-50%,-50%);border-radius:50%;background:radial-gradient(circle,${o.c} 0%,transparent 70%);filter:blur(30px)"></div>`).join('');

  await page.setContent(`<body style="margin:0"><div style="position:relative;width:${W}px;height:${H}px;background:${v.base};overflow:hidden">
    ${blobs}
    <svg width="${W}" height="${H}" style="position:absolute;inset:0">${rings(v)}${constellation(i * 7919, v)}</svg>
    <svg width="${W}" height="${H}" style="position:absolute;inset:0">
      <defs><pattern id="d" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="1.5" cy="1.5" r="1.5" fill="#ffffff" opacity=".18"/></pattern></defs>
      <rect width="100%" height="100%" fill="url(#d)"/>
    </svg>
    <div style="position:absolute;inset:0;background:linear-gradient(74deg,rgba(255,255,255,0) 40%,rgba(255,255,255,.10) 52%,rgba(255,255,255,0) 64%)"></div>
    <svg width="${W}" height="${H}" style="position:absolute;inset:0" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none">
      <path d="M0,${H} C${W*0.25},${H*0.74} ${W*0.56},${H*0.99} ${W},${H*0.66} L${W},${H} Z" fill="rgba(255,255,255,.07)"/>
      <path d="M0,${H} C${W*0.3},${H*0.86} ${W*0.62},${H} ${W},${H*0.80} L${W},${H} Z" fill="rgba(255,255,255,.05)"/>
    </svg>
  </div></body>`);
  await page.waitForTimeout(260);
  await page.screenshot({ path: `banner-${name}.png` });
  console.log('rendered', name);
}
await b.close();
