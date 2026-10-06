/* Election atlas – map logic (D3 v7 + TopoJSON) */
(function () {
  'use strict';

  let W, C, LIST, BY_ISO;                    // set by useData() for the current language
  const REG = [['eu', 'European Union', 'Europäische Union'], ['eur', 'Rest of Europe', 'Weiteres Europa'], ['am', 'Americas', 'Amerika'], ['as', 'Asia & Middle East', 'Asien & Nahost'], ['oz', 'Oceania', 'Ozeanien'], ['af', 'Africa', 'Afrika']];
  const PRESETS = [
    { id: 'welt', label: 'World', de: 'Welt', bbox: null },
    { id: 'europa', label: 'Europe', de: 'Europa', bbox: [[-24, 34.5], [44, 71]] },
    { id: 'amerika', label: 'Americas', de: 'Amerika', bbox: [[-128, -55], [-34, 70]] },
    { id: 'asien', label: 'Asia', de: 'Asien', bbox: [[26, 5], [146, 47]] },
    { id: 'ozeanien', label: 'Oceania', de: 'Ozeanien', bbox: [[110, -48], [180, -9]] }
  ];
  const TINY = ['470', '442'];               // Malta, Luxembourg: also drawn as a dot
  const LANDNAMES = { 1: 'Schleswig-Holstein', 2: 'Hamburg', 3: 'Lower Saxony', 4: 'Bremen', 5: 'North Rhine-Westphalia', 6: 'Hesse', 7: 'Rhineland-Palatinate', 8: 'Baden-Württemberg', 9: 'Bavaria', 10: 'Saarland', 11: 'Berlin', 12: 'Brandenburg', 13: 'Mecklenburg-Vorpommern', 14: 'Saxony', 15: 'Saxony-Anhalt', 16: 'Thuringia' };
  const LANDNAMES_DE = { 1: 'Schleswig-Holstein', 2: 'Hamburg', 3: 'Niedersachsen', 4: 'Bremen', 5: 'Nordrhein-Westfalen', 6: 'Hessen', 7: 'Rheinland-Pfalz', 8: 'Baden-Württemberg', 9: 'Bayern', 10: 'Saarland', 11: 'Berlin', 12: 'Brandenburg', 13: 'Mecklenburg-Vorpommern', 14: 'Sachsen', 15: 'Sachsen-Anhalt', 16: 'Thüringen' };
  const landName = k => (LANG === 'de' ? LANDNAMES_DE : LANDNAMES)[k];
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const DUR = reduceMotion ? 0 : 700;

  /* ---------------- Language ---------------- */
  // English and German: UI texts are inline pairs tr(en, de); data comes from WAHL / WAHL_DE.
  const browserDe = () => /^de\b/i.test(navigator.language || '');
  let LANG = browserDe() ? 'de' : 'en';
  try { const l = localStorage.getItem('wahlatlas-lang'); if (l === 'de' || l === 'en') LANG = l; } catch (e) { /* no storage */ }
  const tr = (en, de) => LANG === 'de' ? de : en;
  const tx = v => Array.isArray(v) ? tr(v[0], v[1]) : v;
  function useData() {
    W = LANG === 'de' && window.WAHL_DE ? window.WAHL_DE : window.WAHL; C = W.countries;
    LIST = Object.keys(C).map(code => Object.assign({ code }, C[code]));
    BY_ISO = new Map(LIST.map(c => [c.iso, c]));
  }
  useData();

  /* ---------------- Formatting ---------------- */
  let LOC, NF1, NF0;
  function setLocale() {
    LOC = LANG === 'de' ? 'de-DE' : 'en-GB';
    NF1 = new Intl.NumberFormat(LOC, { minimumFractionDigits: 1, maximumFractionDigits: 1 });
    NF0 = new Intl.NumberFormat(LOC);
  }
  setLocale();
  const pct = v => (v == null || isNaN(v)) ? '–' : NF1.format(v) + tr('%', '\u202F%');
  const pp = v => NF1.format(v) + tr('\u202Fpts', '\u202FPp.');
  const int = v => v == null ? '–' : NF0.format(v);
  const dLong = iso => new Date(iso + 'T12:00:00').toLocaleDateString(LOC, { day: 'numeric', month: 'long', year: 'numeric' });
  const dShort = iso => new Date(iso + 'T12:00:00').toLocaleDateString(LOC, { day: 'numeric', month: 'short', year: 'numeric' });
  const dDay = iso => new Date(iso + 'T12:00:00').toLocaleDateString(LOC, { day: 'numeric', month: 'short' });
  const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));
  const chg = v => {
    if (v == null) return '<span class="dim">–</span>';
    if (v === 'neu') return `<span class="badge">${tr('new', 'neu')}</span>`;
    if (v === 0) return '±0';
    return v > 0 ? `<span class="pos">+${v}</span>` : `<span class="neg">−${Math.abs(v)}</span>`;
  };

  /* ---------------- Colours ---------------- */
  const hex2rgb = h => { h = h.replace('#', ''); return [0, 2, 4].map(i => parseInt(h.slice(i, i + 2), 16)); };
  const rgb2hex = a => '#' + a.map(v => Math.round(Math.max(0, Math.min(255, v))).toString(16).padStart(2, '0')).join('');
  const mix = (a, b, t) => { const A = hex2rgb(a), B = hex2rgb(b); return rgb2hex(A.map((v, i) => v + (B[i] - v) * t)); };
  const lum = h => { const [r, g, b] = hex2rgb(h).map(v => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }); return 0.2126 * r + 0.7152 * g + 0.0722 * b; };
  const isDark = () => { const t = document.documentElement.getAttribute('data-theme'); if (t) return t === 'dark'; return matchMedia('(prefers-color-scheme: dark)').matches; };
  let DARK = isDark();
  const pc = c => (DARK && lum(c) < 0.05) ? mix(c, '#ffffff', 0.34) : c;          // party colour, lightened in dark mode
  const onColor = c => lum(c) > 0.36 ? '#111111' : '#ffffff';
  const cssVar = n => getComputedStyle(document.documentElement).getPropertyValue(n).trim();
  let LAND = '#C8CDC5';
  const shadeOf = (color, strength) => mix(LAND, pc(color), strength);

  /* ---------------- Geometry ---------------- */
  // TopoJSON → GeoJSON features. Rings left wrongly oriented by simplification or the date line
  // (area > hemisphere) are reversed so D3 does not fill them as the whole globe.
  function feats(topo, name) {
    const fc = topojson.feature(topo, topo.objects[name]);
    const fix = poly => d3.geoArea({ type: 'Polygon', coordinates: poly }) > 2 * Math.PI ? poly.map(r => r.slice().reverse()) : poly;
    for (const f of fc.features) {
      const g = f.geometry; if (!g) continue;
      if (g.type === 'Polygon') g.coordinates = fix(g.coordinates);
      else if (g.type === 'MultiPolygon') g.coordinates = g.coordinates.map(fix);
    }
    return fc.features;
  }

  /* ---------------- History (earlier elections) ---------------- */
  const hist = () => (LANG === 'de' && window.WAHL_HIST_DE) || window.WAHL_HIST || {};
  // List [current election, earlier elections …] for the selected tab, newest first
  function bodyList(c, e) {
    const H = hist()[c.code]; const key = e.k === 'pres' ? 'pres' : (/^Sena/.test(e.ch) ? null : 'parl');
    const list = key && H && H[key] ? H[key] : [];
    return [e].concat(list.map(h => {
      const x = Object.assign({ k: e.k, ch: e.ch, vl: e.vl, hist: true }, h);
      if (Array.isArray(x.ev)) {                                  // electoral votes: [[name, count], …] → {rep, dem}
        const o = {};
        for (const [nm, v] of x.ev) { const row = x.c.find(r => r[1] === nm); if (row && (row[0] === 'rep' || row[0] === 'dem')) o[row[0]] = v; }
        x.ev = (o.rep != null && o.dem != null) ? o : null;
      }
      return x;
    }));
  }
  function yearLbl(list, i) {
    const d = list[i].d, y = d.slice(0, 4);
    return list.some((x, j) => j !== i && x.d.slice(0, 4) === y) ? new Date(d + 'T12:00:00').toLocaleDateString(LOC, { month: 'short', year: 'numeric' }).replace('.', '') : y;
  }

  /* ---------------- Data helpers ---------------- */
  const mainEl = c => c.el[c.main || 0];
  const shortName = n => { const parts = n.split(' '); return parts.length > 1 ? parts[parts.length - 1] : n; };

  function winnerOf(e) {
    if (e.k === 'pres') {
      const r2 = e.c.some(x => x[5] != null), k = r2 ? 5 : 4;
      const w = e.c.reduce((a, b) => (b[k] || 0) > (a[k] || 0) ? b : a);
      return { id: w[0], short: shortName(w[1]), name: w[1], party: w[2], color: w[3], pct: w[k], pres: true, runoff: r2 };
    }
    const hasV = e.p.some(p => p[4] != null);
    const w = e.p.reduce((a, b) => (hasV ? (b[4] || 0) > (a[4] || 0) : b[5] > a[5]) ? b : a);
    return { id: w[0], short: w[1], name: w[2], color: w[3], pct: w[4], seats: w[5] };
  }

  function partyIn(e, id) {
    if (!e) return null;
    if (e.k === 'parl') { const p = e.p.find(x => x[0] === id); return p ? { id, short: p[1], name: p[2], color: p[3] } : null; }
    const x = e.c.find(x => x[0] === id); return x ? { id, short: shortName(x[1]), name: x[1] + ' (' + x[2] + ')', color: x[3] } : null;
  }
  function partyOf(c, id, preferEl) {
    if (preferEl != null) { const p = partyIn(c.el[preferEl], id); if (p) return p; }
    for (const e of c.el) if (e.k === 'parl') { const p = partyIn(e, id); if (p) return p; }
    for (const e of c.el) { const p = partyIn(e, id); if (p) return p; }
    return null;
  }
  function govParty(c) {
    const id = c.hog[2]; const p = id ? partyOf(c, id) : null;
    return p || { id: null, short: tr('Independent', 'parteilos'), name: tr('Independent', 'parteilos'), color: c.hogColor || '#8A8F98' };
  }
  function modeColor(c) { return S.mode === 'gov' ? govParty(c).color : winnerOf(mainEl(c)).color; }

  /* ---------------- State ---------------- */
  const S = { mode: 'win', preset: 'welt', country: null, el: 0, yr: 0, metric: 'votes', layer: null, region: null, shade: true };
  try { const m = localStorage.getItem('wahlatlas-mode'); if (m === 'gov' || m === 'win') S.mode = m; const sh = localStorage.getItem('wahlatlas-shade'); if (sh === '0') S.shade = false; } catch (e) { /* no storage */ }

  /* ---------------- DOM ---------------- */
  const mapEl = document.getElementById('map');
  const panel = document.getElementById('panel');
  const tip = document.getElementById('tip');
  const legend = document.getElementById('legend');
  const crumb = document.getElementById('crumb');
  const worldSvg = d3.select('#world'), detailSvg = d3.select('#detail');

  function loadScript(src) {
    return new Promise((res, rej) => { const s = document.createElement('script'); s.src = src; s.onload = res; s.onerror = () => rej(new Error('Could not load ' + src)); document.head.appendChild(s); });
  }

  /* ================================================================
     Subnational layers
     ================================================================ */
  // Static texts are [English, German] pairs and are resolved with tx() when rendered.
  const SUBDEF = {
    DEU: {
      parties: { cdu: ['CDU', 'Christian Democratic Union', '#1A1A1A', 'Christlich Demokratische Union'], csu: ['CSU', 'Christian Social Union in Bavaria', '#1A1A1A', 'Christlich-Soziale Union in Bayern'], volt: ['Volt', 'Volt Germany', '#502379', 'Volt Deutschland'], sonst: ['Others', 'Other parties', '#A3A3A3', 'Sonstige Parteien', 'Sonstige'] },
      layers: [
        { id: 'wk1', label: ['Constituencies · first votes', 'Wahlkreise · Erststimmen'], short: ['First votes', 'Erststimmen'], unit: ['Constituencies', 'Wahlkreise'], obj: 'wk', overlay: 'land', mm: 25, maxZoom: 30,
          key: f => f.properties.nr,
          rec: (D, k) => { const x = D.wk[k]; if (!x) return null; return { name: x.n, label: tr('Constituency ', 'Wahlkreis ') + String(k).padStart(3, '0') + ' · ' + landName(x.l), r: x.e, to: x.to, alt: { label: tr('Second votes', 'Zweitstimmen'), r: x.z }, note: x.ok ? null : tr('Constituency won but no seat awarded: the party’s second votes did not cover it (new electoral law).', 'Wahlkreis gewonnen, aber ohne Mandat: Die Zweitstimmen der Partei deckten den Sitz nicht (neues Wahlrecht).') }; },
          legendTitle: ['First-vote winners in the 299 constituencies', 'Erststimmen-Sieger in den 299 Wahlkreisen'] },
        { id: 'wk2', label: ['Constituencies · second votes', 'Wahlkreise · Zweitstimmen'], short: ['Second votes', 'Zweitstimmen'], unit: ['Constituencies', 'Wahlkreise'], obj: 'wk', overlay: 'land', mm: 25, maxZoom: 30,
          key: f => f.properties.nr,
          rec: (D, k) => { const x = D.wk[k]; if (!x) return null; return { name: x.n, label: tr('Constituency ', 'Wahlkreis ') + String(k).padStart(3, '0') + ' · ' + landName(x.l), r: x.z, to: x.to, alt: { label: tr('First votes', 'Erststimmen'), r: x.e } }; },
          legendTitle: ['Largest party by second votes per constituency', 'Stärkste Partei nach Zweitstimmen je Wahlkreis'] },
        { id: 'land', label: ['States', 'Bundesländer'], short: ['States', 'Bundesländer'], unit: ['States', 'Länder'], obj: 'land', mm: 20, maxZoom: 12,
          key: f => f.properties.land,
          rec: (D, k) => { const x = D.land[k]; if (!x) return null; return { name: landName(k), label: tr('State · second votes', 'Bundesland · Zweitstimmen'), r: x.z, to: x.to, alt: { label: tr('First votes', 'Erststimmen'), r: x.e } }; },
          legendTitle: ['Largest party by second votes per state', 'Stärkste Partei nach Zweitstimmen je Bundesland'] }
      ]
    },
    USA: {
      parties: { rep: ['Trump', 'Donald Trump (Republican)', '#D22532', 'Donald Trump (Republikaner)'], dem: ['Harris', 'Kamala Harris (Democrat)', '#2E64B5', 'Kamala Harris (Demokraten)'] },
      layers: [
        { id: 'states', label: ['States', 'Bundesstaaten'], short: ['States', 'Bundesstaaten'], unit: ['States', 'Staaten'], obj: 'states', mm: 30, maxZoom: 14, el: 0,
          key: f => f.id,
          rec: (D, k) => {
            const x = D.states[k]; if (!x) return null;
            const ev = x.ev, evTxt = ev.rep && ev.dem ? `Trump ${ev.rep}, Harris ${ev.dem}` : (ev.rep ? `${ev.rep} ${tr('to', 'an')} Trump` : `${ev.dem} ${tr('to', 'an')} Harris`);
            const rows = [[tr('Electoral votes', 'Wahlleute'), evTxt], [tr('Total votes', 'Stimmen gesamt'), int(x.tot)]];
            if (x.dist) for (const [dk, dv] of Object.entries(x.dist)) rows.push([dk, `${dv.r[0][0] === 'rep' ? 'Trump' : 'Harris'} ${pct(dv.r[0][1])}`]);
            return { name: x.n, label: tr('State', 'Bundesstaat'), r: x.r.map(a => [a[0], a[1]]), rows, evWeight: ev.rep + ev.dem };
          },
          legendTitle: ['Winner by state (electoral votes)', 'Gewinner je Bundesstaat (Wahlleute)'], countBy: 'ev' },
        { id: 'counties', label: 'Counties', short: 'Counties', unit: 'Counties', obj: 'counties', overlay: 'states', mm: 50, maxZoom: 40, el: 0,
          key: f => f.id,
          rec: (D, k, f) => {
            const x = D.counties[k], st = D.states[k.slice(0, 2)];
            if (!x) { if (!st) return null; return { name: f.properties.n, label: st.n + tr(' · no county data', ' · keine County-Daten'), r: st.r.map(a => [a[0], a[1]]), fallback: true, note: tr('No county results are available for this area (Alaska and Connecticut report in other units); the statewide result is shown.', 'Für dieses Gebiet liegen keine County-Ergebnisse vor (Alaska und Connecticut melden in anderen Einheiten); gezeigt wird das Ergebnis des Bundesstaats.') }; }
            const r = [['rep', x[0]], ['dem', x[1]]].sort((a, b) => b[1] - a[1]);
            return { name: f.properties.n, label: 'County · ' + (st ? st.n : ''), r, rows: [[tr('Total votes', 'Stimmen gesamt'), int(x[2])]] };
          },
          legendTitle: ['Winner by county', 'Gewinner je County'] }
      ]
    },
    GBR: {
      parties: { sonst: ['Others', 'Others', '#A3A3A3', 'Sonstige', 'Sonstige'] },
      layers: [
        { id: 'pcon', label: ['Constituencies', 'Wahlkreise'], short: ['Constituencies', 'Wahlkreise'], unit: ['Constituencies', 'Wahlkreise'], obj: 'pcon', mm: 30, maxZoom: 60,
          key: f => f.properties.id,
          rec: (D, k) => { const x = D.pcon[k]; if (!x) return null; return { name: x.n, label: tr('Constituency', 'Wahlkreis'), r: x.r, w: x.w, to: x.to, rows: [[tr('Elected', 'Gewählt'), x.mp]] }; },
          legendTitle: ['Winners of the 650 constituencies', 'Gewinner der 650 Wahlkreise'] }
      ]
    },
    CAN: {
      layers: [
        { id: 'prov', label: ['Provinces & territories', 'Provinzen & Territorien'], short: ['Provinces', 'Provinzen'], unit: ['Provinces', 'Provinzen'], obj: 'can', mm: 30, maxZoom: 14,
          key: f => f.properties.nm,
          rec: (D, k, f, c) => { const x = D.prov[k]; if (!x) return null; const rows = [[tr('Seats', 'Sitze'), Object.entries(x.s).sort((a, b) => b[1] - a[1]).map(([p, n]) => (partyOf(c, p) || { short: p }).short + ' ' + n).join(' · ')]]; return { name: x.n, label: tr('Province/territory', 'Provinz/Territorium'), r: x.r, rows }; },
          legendTitle: ['Largest party by province', 'Stärkste Partei je Provinz'] }
      ]
    },
    BRA: {
      parties: { pl: ['F. Bolsonaro', 'Flávio Bolsonaro (PL)', '#1F5AA6'], pt: ['Lula', 'Luiz Inácio Lula da Silva (PT)', '#E20E28'] },
      layers: [
        { id: 'st', label: ['States · 1st round', 'Bundesstaaten · 1. Wahlgang'], short: ['States', 'Bundesstaaten'], unit: ['States', 'Bundesstaaten'], obj: 'bra', mm: 40, maxZoom: 14, el: 0,
          key: f => f.properties.nm,
          rec: (D, k) => { const x = D.st[k]; if (!x) return null; return { name: x.n, label: tr('State · 1st round', 'Bundesstaat · 1. Wahlgang'), r: x.r }; },
          legendTitle: ['First place by state', 'Erstplatzierter je Bundesstaat'] }
      ]
    },
    AUT: {
      layers: [
        { id: 'st', label: ['States', 'Bundesländer'], short: ['States', 'Bundesländer'], unit: ['States', 'Länder'], obj: 'aut', mm: 12, maxZoom: 10,
          key: f => f.properties.nm,
          rec: (D, k) => { const x = D.st[k]; if (!x) return null; return { name: x.n, label: tr('State', 'Bundesland'), r: x.r, to: x.to }; },
          legendTitle: ['Largest party by state', 'Stärkste Partei je Bundesland'] }
      ]
    },
    POL: {
      layers: [
        { id: 'st', label: ['Voivodeships · 2025 presidential runoff', 'Woiwodschaften · Präsidenten-Stichwahl 2025'], short: ['Voivodeships', 'Woiwodschaften'], unit: ['Voivodeships', 'Woiwodschaften'], obj: 'pol', mm: 30, maxZoom: 10, el: 1,
          key: f => f.properties.nm,
          rec: (D, k) => { const x = D.st[k]; if (!x) return null; return { name: x.n, label: tr('Voivodeship · runoff of 1 June 2025', 'Woiwodschaft · Stichwahl 1. Juni 2025'), r: x.r }; },
          legendTitle: ['Presidential runoff winner by voivodeship', 'Sieger der Präsidenten-Stichwahl je Woiwodschaft'] }
      ]
    },
    MEX: {
      layers: [
        { id: 'st', label: ['States · presidential election', 'Bundesstaaten · Präsidentschaftswahl'], short: ['States', 'Bundesstaaten'], unit: ['States', 'Bundesstaaten'], obj: 'mex', mm: 40, maxZoom: 16, el: 0,
          key: f => f.properties.nm,
          rec: (D, k) => { const x = D.st[k]; if (!x) return null; return { name: x.n, label: tr('State', 'Bundesstaat'), r: x.r }; },
          legendTitle: ['Winner by state', 'Siegerin bzw. Sieger je Bundesstaat'] }
      ]
    }
  };
  // Region names are stored in English; German names for the regions that differ
  const REGION_DE = {
    'Carinthia': 'Kärnten', 'Lower Austria': 'Niederösterreich', 'Upper Austria': 'Oberösterreich', 'Styria': 'Steiermark', 'Tyrol': 'Tirol', 'Vienna': 'Wien',
    'Newfoundland and Labrador': 'Neufundland und Labrador', 'Northwest Territories': 'Nordwest-Territorien', 'Quebec': 'Québec',
    'Mexico City': 'Mexiko-Stadt', 'State of Mexico': 'Bundesstaat México',
    'Lower Silesia': 'Niederschlesien', 'Kuyavia-Pomerania': 'Kujawien-Pommern', 'Lubusz': 'Lebus', 'Lesser Poland': 'Kleinpolen', 'Masovia': 'Masowien', 'Opole': 'Oppeln',
    'Subcarpathia': 'Karpatenvorland', 'Podlaskie': 'Podlachien', 'Pomerania': 'Pommern', 'Silesia': 'Schlesien', 'Holy Cross (Świętokrzyskie)': 'Heiligkreuz',
    'Warmia-Masuria': 'Ermland-Masuren', 'Greater Poland': 'Großpolen', 'West Pomerania': 'Westpommern'
  };

  function subParty(c, L, id) {
    const def = SUBDEF[c.code];
    if (def && def.parties && def.parties[id]) { const p = def.parties[id]; return { id, short: tr(p[0], p[4] || p[0]), name: tr(p[1], p[3] || p[1]), color: p[2] }; }
    return partyOf(c, id, L && L.el != null ? L.el : null) || { id, short: id, name: id, color: '#A3A3A3' };
  }
  function normRec(c, L, f) {
    const D = window.WAHL_SUB[c.sub]; const k = L.key(f); const x = L.rec(D, k, f, c);
    if (!x) return null;
    x.key = k;
    if (LANG === 'de' && REGION_DE[x.name]) x.name = REGION_DE[x.name];
    x.w = x.w || (x.r && x.r[0] ? x.r[0][0] : null);
    x.margin = x.r && x.r.length > 1 ? (x.r.find(a => a[0] === x.w) || x.r[0])[1] - (x.r.find(a => a[0] !== x.w) || x.r[1])[1] : 50;
    return x;
  }
  const regionFill = (c, L, rec) => {
    if (!rec || !rec.w) return LAND;
    const p = subParty(c, L, rec.w);
    if (!S.shade) return pc(p.color);
    const s = 0.34 + 0.66 * Math.min(1, Math.max(0, rec.margin) / L.mm);
    return rec.fallback ? mix(LAND, pc(p.color), 0.22) : shadeOf(p.color, s);
  };

  /* ================================================================
     World map
     ================================================================ */
  const WV = { t: d3.zoomIdentity };

  function initWorld() {
    const topo = window.WAHL_WORLD;
    WV.feats = feats(topo, 'countries').filter(f => f.properties.n !== 'Antarctica');
    WV.byIso = new Map(WV.feats.filter(f => f.id).map(f => [f.id, f]));
    WV.proj = d3.geoEqualEarth();
    WV.path = d3.geoPath(WV.proj);
    WV.root = worldSvg.append('g');
    WV.ocean = WV.root.append('path').attr('class', 'ocean');
    WV.grat = WV.root.append('path').attr('class', 'grat');
    WV.paths = WV.root.append('g').selectAll('path').data(WV.feats).join('path')
      .attr('class', d => 'cty' + (BY_ISO.has(d.id) ? ' has' : ''))
      .on('mouseenter', function (ev, d) { if (BY_ISO.has(d.id)) d3.select(this).raise(); })
      .on('mousemove', (ev, d) => { const c = BY_ISO.get(d.id); if (c) showTip(ev, countryTip(c)); else hideTip(); })
      .on('mouseleave', hideTip)
      .on('click', (ev, d) => { const c = BY_ISO.get(d.id); if (c) openCountry(c.code); });
    WV.mk = WV.root.append('g').attr('class', 'mk');
    WV.zoom = d3.zoom().scaleExtent([1, 16])
      .on('zoom', ev => { WV.t = ev.transform; WV.root.attr('transform', ev.transform); updateMarkers(); })
      .on('start', hideTip);
    worldSvg.call(WV.zoom).on('dblclick.zoom', null);
    layoutWorld();
  }

  function layoutWorld() {
    const r = mapEl.getBoundingClientRect(); const w = Math.max(200, r.width), h = Math.max(200, r.height);
    WV.w = w; WV.h = h;
    worldSvg.attr('viewBox', [0, 0, w, h]);
    WV.proj.fitExtent([[10, 10], [w - 10, h - 10]], { type: 'FeatureCollection', features: WV.feats });
    WV.ocean.attr('d', WV.path({ type: 'Sphere' }));
    WV.grat.attr('d', WV.path(d3.geoGraticule10()));
    WV.paths.attr('d', WV.path);
    WV.zoom.extent([[0, 0], [w, h]]).translateExtent([[0, 0], [w, h]]);
    // Portrait (phone): fill the height instead of squeezing the world into the width, Europe centred
    const b = WV.path.bounds({ type: 'FeatureCollection', features: WV.feats });
    const worldH = b[1][1] - b[0][1];
    WV.base = d3.zoomIdentity;
    if (h / w > 1) {
      const k = Math.min(2.1, (h * 0.84) / worldH);
      const [fx, fy] = WV.proj([-22, 30]);
      WV.base = d3.zoomIdentity.translate(w / 2 - k * fx, h / 2 - k * fy).scale(k);
    }
    WV.mk.selectAll('circle').data(TINY.map(id => WV.byIso.get(id)).filter(Boolean)).join('circle')
      .attr('cx', d => WV.path.centroid(d)[0]).attr('cy', d => WV.path.centroid(d)[1])
      .on('mousemove', (ev, d) => showTip(ev, countryTip(BY_ISO.get(d.id))))
      .on('mouseleave', hideTip)
      .on('click', (ev, d) => openCountry(BY_ISO.get(d.id).code));
    updateMarkers(); recolorWorld();
  }
  function updateMarkers() {
    const k = WV.t.k;
    WV.mk.selectAll('circle').attr('r', 4.5 / k).attr('stroke-width', 1.4 / k).attr('display', k > 7 ? 'none' : null);
  }
  function recolorWorld() {
    WV.paths.style('fill', d => { const c = BY_ISO.get(d.id); return c ? pc(modeColor(c)) : null; });
    WV.mk.selectAll('circle').style('fill', d => pc(modeColor(BY_ISO.get(d.id))));
    const stripe = document.getElementById('stripe');
    const cols = LIST.map(c => modeColor(c));
    stripe.innerHTML = cols.map(col => `<i style="background:${pc(col)}"></i>`).join('');
  }

  function bboxTransform(proj, bbox, w, h, fill, maxK) {
    const [[x0, y0], [x1, y1]] = bbox; const P = [];
    for (let i = 0; i <= 10; i++) { const t = i / 10; P.push([x0 + (x1 - x0) * t, y0], [x0 + (x1 - x0) * t, y1], [x0, y0 + (y1 - y0) * t], [x1, y0 + (y1 - y0) * t]); }
    const pts = P.map(p => proj(p)).filter(Boolean);
    const xs = pts.map(p => p[0]), ys = pts.map(p => p[1]);
    const bx0 = Math.min(...xs), bx1 = Math.max(...xs), by0 = Math.min(...ys), by1 = Math.max(...ys);
    const k = Math.max(1, Math.min(maxK || 16, fill / Math.max((bx1 - bx0) / w, (by1 - by0) / h)));
    return d3.zoomIdentity.translate(w / 2 - k * (bx0 + bx1) / 2, h / 2 - k * (by0 + by1) / 2).scale(k);
  }
  function zoomWorld(t, ms) {
    const tr = worldSvg.transition().duration(ms == null ? DUR : ms).call(WV.zoom.transform, t);
    return tr.end().catch(() => {});
  }
  function goPreset(id) {
    S.preset = id; renderPresets();
    const p = PRESETS.find(x => x.id === id);
    if (S.country) closeCountry(true);
    zoomWorld(p.bbox ? bboxTransform(WV.proj, p.bbox, WV.w, WV.h, 0.94) : WV.base);
  }

  /* ================================================================
     Country detail map
     ================================================================ */
  const DV = {};
  let navToken = 0;

  function countryBBox(c) {
    if (c.focus) return c.focus;
    const f = WV.byIso.get(c.iso); return f ? d3.geoBounds(f) : null;
  }
  function bboxPoints(b) {
    const [[x0, y0], [x1, y1]] = b, cx = (x0 + x1) / 2, cy = (y0 + y1) / 2;
    return { type: 'MultiPoint', coordinates: [[x0, y0], [x1, y0], [x0, y1], [x1, y1], [cx, y0], [cx, y1], [x0, cy], [x1, cy]] };
  }

  async function openCountry(code, opts) {
    const c = C[code]; if (!c) return;
    c.code = code;
    const token = ++navToken;
    const wasDetail = mapEl.classList.contains('is-detail');
    hideTip();
    S.country = code; S.el = c.main || 0; S.yr = 0; S.region = null;
    S.layer = c.sub && SUBDEF[c.sub] ? SUBDEF[c.sub].layers[0].id : null;
    setHash(code);
    renderPanel(); renderLegend(); renderCrumb();
    if (window.innerWidth <= 860 && !(opts && opts.keepScroll)) mapEl.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    if (wasDetail) { mapEl.classList.remove('is-detail'); await wait(reduceMotion ? 0 : 200); }
    if (token !== navToken) return;
    if (!WV.saved) WV.saved = WV.t;
    const bb = countryBBox(c);
    if (bb) await zoomWorld(bboxTransform(WV.proj, bb, WV.w, WV.h, 0.62, 14), opts && opts.instant ? 0 : DUR);
    if (token !== navToken) return;
    if (c.sub && !(window.WAHL_SUB && window.WAHL_SUB[c.sub])) {
      showLoading(true);
      try { await loadScript('data/c-' + c.sub + '.js'); } catch (e) { console.error(e); }
      showLoading(false);
      if (token !== navToken) return;
    }
    buildDetail(c);
    mapEl.classList.add('is-detail');
    renderLegend(); renderPanel();
  }

  function closeCountry(silent) {
    navToken++;
    S.country = null; S.region = null; S.layer = null;
    mapEl.classList.remove('is-detail');
    setHash('');
    hideTip(); renderPanel(); renderLegend(); renderCrumb();
    if (!silent) zoomWorld(WV.saved || WV.base);
    WV.saved = null;
  }

  function buildDetail(c) {
    detailSvg.selectAll('*').remove();
    const r = mapEl.getBoundingClientRect(); const w = Math.max(200, r.width), h = Math.max(200, r.height);
    Object.assign(DV, { w, h, c, k: 1 });
    detailSvg.attr('viewBox', [0, 0, w, h]);
    const def = c.sub ? SUBDEF[c.sub] : null; DV.def = def;
    const D = def ? window.WAHL_SUB[c.sub] : null; DV.D = D;
    const feat = WV.byIso.get(c.iso);
    const isUS = c.code === 'USA';
    const pad = Math.round(Math.min(w, h) * 0.06) + 8;
    const topPad = pad + 40, bottomPad = pad + (w < 700 ? 96 : 34);
    let proj;
    if (isUS) proj = d3.geoAlbersUsa();
    else {
      const bb = countryBBox(c); const cx = (bb[0][0] + bb[1][0]) / 2, cy = (bb[0][1] + bb[1][1]) / 2;
      proj = d3.geoAzimuthalEqualArea().rotate([-cx, -cy]).clipAngle(90);
    }
    let fitObj;
    if (def && !c.focus) fitObj = { type: 'FeatureCollection', features: feats(D.geo, def.layers[0].obj) };
    else if (def && isUS) fitObj = { type: 'FeatureCollection', features: feats(D.geo, 'states') };
    else if (c.focus) fitObj = bboxPoints(c.focus);
    else fitObj = feat;
    proj.fitExtent([[pad, topPad], [w - pad, h - bottomPad]], fitObj);
    DV.proj = proj; DV.path = d3.geoPath(proj);
    DV.root = detailSvg.append('g');
    if (!isUS) {
      DV.root.append('path').attr('class', 'ocean').attr('d', DV.path({ type: 'Sphere' }));
      DV.root.append('path').attr('class', 'grat').attr('d', DV.path(d3.geoGraticule10()));
      DV.ctx = DV.root.append('g').selectAll('path').data(WV.feats.filter(f => f.id !== c.iso)).join('path')
        .attr('class', d => 'cty ctx' + (BY_ISO.has(d.id) ? ' has' : '')).attr('d', DV.path)
        .on('mousemove', (ev, d) => { const cc = BY_ISO.get(d.id); if (cc) showTip(ev, countryTip(cc, true)); else hideTip(); })
        .on('mouseleave', hideTip)
        .on('click', (ev, d) => { const cc = BY_ISO.get(d.id); if (cc) openCountry(cc.code); });
    } else DV.ctx = null;
    DV.main = DV.root.append('g');
    if (def) drawLayer(); else drawWhole(feat);
    const maxK = def ? (def.layers.find(l => l.id === S.layer) || def.layers[0]).maxZoom || 16 : 10;
    DV.zoom = d3.zoom().scaleExtent([1, maxK]).extent([[0, 0], [w, h]]).translateExtent([[0, 0], [w, h]])
      .on('zoom', ev => { DV.root.attr('transform', ev.transform); DV.k = ev.transform.k; })
      .on('start', hideTip);
    detailSvg.call(DV.zoom).on('dblclick.zoom', null);
    recolorDetail();
  }

  function drawWhole(feat) {
    DV.L = null;
    DV.main.selectAll('*').remove();
    if (!feat) return;
    DV.whole = DV.main.append('path').datum(feat).attr('class', 'whole').attr('d', DV.path)
      .on('mousemove', ev => showTip(ev, countryTip(DV.c)))
      .on('mouseleave', hideTip);
  }

  function drawLayer() {
    const c = DV.c, def = DV.def, D = DV.D;
    const L = def.layers.find(l => l.id === S.layer) || def.layers[0];
    DV.L = L; S.layer = L.id;
    DV.main.selectAll('*').remove();
    const fs = feats(D.geo, L.obj);
    DV.recs = new Map();
    for (const f of fs) DV.recs.set(L.key(f), normRec(c, L, f));
    DV.regions = DV.main.append('g').selectAll('path').data(fs).join('path')
      .attr('class', 'rg').attr('d', DV.path)
      .on('mouseenter', function () { d3.select(this).raise(); })
      .on('mousemove', (ev, f) => { const rec = DV.recs.get(L.key(f)); if (rec) showTip(ev, regionTip(c, L, rec)); })
      .on('mouseleave', hideTip)
      .on('click', (ev, f) => { const rec = DV.recs.get(L.key(f)); if (!rec) return; selectRegion(f, rec); });
    if (L.overlay) DV.main.append('path').attr('class', 'mesh-strong').attr('d', DV.path(topojson.mesh(D.geo, D.geo.objects[L.overlay], (a, b) => a !== b)));
    DV.main.append('path').attr('class', 'outline').attr('d', DV.path(topojson.mesh(D.geo, D.geo.objects[L.obj], (a, b) => a === b)));
    DV.sel = DV.main.append('path').attr('class', 'sel');
    if (S.region) {
      const f = fs.find(x => L.key(x) === S.region.key);
      if (f) DV.sel.attr('d', DV.path(f)); else S.region = null;
    }
  }

  function recolorDetail() {
    if (!DV.c || !DV.root) return;
    const c = DV.c;
    if (DV.ctx) DV.ctx.style('fill', d => { const cc = BY_ISO.get(d.id); return cc ? mix(LAND, pc(modeColor(cc)), DARK ? 0.24 : 0.26) : null; });
    if (DV.whole) DV.whole.style('fill', pc(modeColor(c)));
    if (DV.regions && DV.L) DV.regions.style('fill', f => regionFill(c, DV.L, DV.recs.get(DV.L.key(f))));
  }

  function selectRegion(f, rec) {
    if (S.region && S.region.key === rec.key) { clearRegion(); return; }
    S.region = { key: rec.key, rec };
    DV.sel.attr('d', DV.path(f)).raise();
    renderPanel();
    panel.scrollTop = 0;
  }
  function clearRegion() {
    S.region = null; if (DV.sel) DV.sel.attr('d', null); renderPanel();
  }

  function setLayer(id) {
    if (!DV.def) return;
    S.layer = id; S.region = null;
    const L = DV.def.layers.find(l => l.id === id);
    DV.zoom.scaleExtent([1, L.maxZoom || 16]);
    drawLayer(); recolorDetail(); renderLegend(); renderPanel(); renderCrumb();
  }

  /* ================================================================
     Tooltip
     ================================================================ */
  function showTip(ev, html) {
    if (!html) return hideTip();
    if (ev.pointerType === 'touch' || (ev.sourceCapabilities && ev.sourceCapabilities.firesTouchEvents)) return;
    tip.innerHTML = html; tip.hidden = false;
    const r = mapEl.getBoundingClientRect();
    const x = ev.clientX - r.left, y = ev.clientY - r.top;
    const tw = tip.offsetWidth, th = tip.offsetHeight;
    let left = x + 16, top = y + 14;
    if (left + tw > r.width - 8) left = x - tw - 16;
    if (top + th > r.height - 8) top = y - th - 14;
    tip.style.left = Math.max(8, left) + 'px'; tip.style.top = Math.max(8, top) + 'px';
  }
  function hideTip() { tip.hidden = true; }

  function barRows(list, max) {
    const m = max || Math.max(50, ...list.map(x => x.v || 0));
    return '<div class="tip-rows">' + list.map(x => `<div class="tip-row"><i class="sw" style="background:${x.c}"></i><b>${esc(x.n)}</b><span class="num">${pct(x.v)}</span><i class="tip-bar" style="background:${x.c};width:${Math.max(2, 100 * (x.v || 0) / m)}%"></i></div>`).join('') + '</div>';
  }
  function countryTip(c, ctx) {
    const e = mainEl(c), w = winnerOf(e);
    let rows;
    if (e.k === 'pres') {
      const k = w.runoff ? 5 : 4;
      rows = e.c.filter(x => x[k] != null).sort((a, b) => b[k] - a[k]).slice(0, 3).map(x => ({ n: x[1] + ' (' + x[2] + ')', v: x[k], c: pc(x[3]) }));
    } else {
      rows = e.p.filter(p => p[4] != null).sort((a, b) => b[4] - a[4]).slice(0, 3).map(p => ({ n: p[1], v: p[4], c: pc(p[3]) }));
      if (!rows.length) rows = e.p.slice().sort((a, b) => b[5] - a[5]).slice(0, 3).map(p => ({ n: p[1] + ' · ' + p[5] + tr(' seats', ' Sitze'), v: null, c: pc(p[3]) }));
    }
    const g = govParty(c);
    return `<div class="tip-h">${esc(c.n)}</div><div class="tip-s">${esc(e.t)}${e.k === 'pres' && w.runoff ? tr(' · runoff', ' · Stichwahl') : ''} · ${dShort(e.d)}${e.prelim ? tr(' · preliminary', ' · vorläufig') : ''}</div>`
      + barRows(rows)
      + `<div class="tip-n">${esc(c.hog[0])}: ${esc(c.hog[1])}${g.id ? ' (' + esc(g.short) + ')' : ''}${ctx ? tr(' · click to switch', ' · Klicken zum Wechseln') : ''}</div>`;
  }
  function regionTip(c, L, rec) {
    const rows = rec.r.slice(0, 4).map(a => { const p = subParty(c, L, a[0]); return { n: p.short, v: a[1], c: pc(p.color) }; });
    let extra = '';
    if (rec.rows) extra = rec.rows.slice(0, 2).map(r => `${esc(r[0])}: ${esc(r[1])}`).join('<br>');
    const lead = rec.w ? subParty(c, L, rec.w) : null;
    return `<div class="tip-h">${esc(rec.name)}</div><div class="tip-s">${esc(rec.label || '')}</div>` + barRows(rows)
      + `<div class="tip-n">${lead && rec.r.length > 1 ? tr('Margin ', 'Vorsprung ') + pp(rec.margin) : ''}${extra ? (lead ? '<br>' : '') + extra : ''}${rec.note ? '<br>' + esc(rec.note) : ''}</div>`;
  }

  /* ================================================================
     Legend, header, breadcrumb
     ================================================================ */
  function renderLegend() {
    if (!S.country || !DV.c || DV.c.code !== S.country || !mapEl.classList.contains('is-detail')) {
      if (S.country) { legend.hidden = true; return; }
      legend.hidden = false;
      legend.innerHTML = S.mode === 'win'
        ? `<p class="legend-t">${tr('Colour = largest party or election winner', 'Farbe = stärkste Partei bzw. Wahlsieger')}</p><div class="lg-items"><span><i class="sw" style="background:var(--land)"></i>${tr('not covered', 'nicht erfasst')}</span></div><p class="legend-s">${tr('Latest national election in each country. In presidential systems the presidential election counts.', 'Letzte nationale Wahl je Land. Bei Präsidialsystemen zählt die Präsidentschaftswahl.')}</p>`
        : `<p class="legend-t">${tr('Colour = party of the head of government', 'Farbe = Partei der Regierungsspitze')}</p><div class="lg-items"><span><i class="sw" style="background:#8A8F98"></i>${tr('independent/collegial government', 'parteilos/Kollegialregierung')}</span><span><i class="sw" style="background:var(--land)"></i>${tr('not covered', 'nicht erfasst')}</span></div><p class="legend-s">${tr('As of 5 October 2026.', 'Stand 5. Oktober 2026.')}</p>`;
      return;
    }
    legend.hidden = false;
    const c = DV.c;
    if (!DV.L) {
      const col = pc(modeColor(c));
      const lab = S.mode === 'win' ? winnerOf(mainEl(c)) : govParty(c);
      legend.innerHTML = `<p class="legend-t">${S.mode === 'win' ? tr('Election winner', 'Wahlsieger') : tr('Governing party', 'Regierungspartei')}</p><div class="lg-items"><span><i class="sw" style="background:${col}"></i>${esc(lab.short)}</span></div><p class="legend-s">${tr('No regional results are available for this country. Neighbouring countries are shown faded in their own colour.', 'Für dieses Land sind keine regionalen Ergebnisse hinterlegt. Nachbarländer blass in ihrer Farbe.')}</p>`;
      return;
    }
    const L = DV.L, counts = new Map();
    for (const rec of DV.recs.values()) {
      if (!rec || !rec.w || rec.fallback) continue;
      const add = L.countBy === 'ev' ? (rec.evWeight || 0) : 1;
      counts.set(rec.w, (counts.get(rec.w) || 0) + add);
    }
    const sorted = [...counts.entries()].sort((a, b) => b[1] - a[1]);
    const maxItems = DV.w < 700 ? 6 : 10;
    const shown = sorted.length > maxItems + 1 ? sorted.slice(0, maxItems) : sorted;
    const rest = sorted.slice(shown.length);
    const items = shown.map(([id, n]) => { const p = subParty(c, L, id); return `<span><i class="sw" style="background:${pc(p.color)}"></i>${esc(p.short)} <b class="num">${n}</b></span>`; }).join('')
      + (rest.length ? `<span title="${esc(rest.map(([id, n]) => subParty(c, L, id).short + ' ' + n).join(', '))}">+ ${rest.length} ${tr('more', 'weitere')} (${rest.reduce((s, x) => s + x[1], 0)})</span>` : '');
    const ramp = S.shade ? `<div class="ramp"><span>${tr('narrow', 'knapp')}</span><i style="background:linear-gradient(90deg, ${shadeOf('#777777', 0.34)}, ${pc('#777777')})"></i><span>${tr('clear', 'deutlich')}</span></div>` : '';
    legend.innerHTML = `<p class="legend-t">${esc(tx(L.legendTitle))}${L.countBy === 'ev' ? tr(' · electoral votes', ' · Wahlleute') : ''}</p><div class="lg-items">${items}</div>${ramp}`;
  }

  function renderCrumb() {
    if (!S.country) { crumb.hidden = true; return; }
    const c = C[S.country];
    const L = c.sub && SUBDEF[c.sub] ? (SUBDEF[c.sub].layers.find(l => l.id === S.layer) || SUBDEF[c.sub].layers[0]) : null;
    document.getElementById('crumb-t').textContent = c.n + (L ? ' · ' + tx(L.short) : '');
    crumb.hidden = false;
  }

  function renderPresets() {
    const box = document.getElementById('presets');
    box.innerHTML = PRESETS.map(p => `<button type="button" id="pre-${p.id}" data-preset="${p.id}" aria-pressed="${!S.country && S.preset === p.id}">${tr(p.label, p.de)}</button>`).join('');
  }
  function renderLangs() {
    document.querySelectorAll('#langs button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === LANG)));
  }
  // Texts that live in index.html
  function applyStatic() {
    const set = (sel, v) => { const el = document.querySelector(sel); if (el) el.textContent = v; };
    const aria = (sel, v) => { const el = document.querySelector(sel); if (el) el.setAttribute('aria-label', v); };
    document.documentElement.lang = LANG;
    document.title = tr('Election Atlas', 'Wahlatlas');
    set('.mark', tr('Election Atlas', 'Wahlatlas'));
    set('#meta', tr('Latest national elections · as of 5 October 2026', 'Letzte nationale Wahlen · Stand 5. Oktober 2026'));
    set('#lbl-view', tr('View', 'Ansicht')); set('#lbl-mode', tr('Colour', 'Farbe')); set('#lbl-lang', tr('Language', 'Sprache'));
    set('#mode-win', tr('Election winner', 'Wahlsieger')); set('#mode-gov', tr('Government', 'Regierung'));
    set('#back', tr('← World map', '← Weltkarte')); set('#loading', tr('Loading regional data …', 'Regionaldaten werden geladen …'));
    aria('#map', tr('Interactive map of election results', 'Interaktive Karte der Wahlergebnisse'));
    aria('#world', tr('World map coloured by election result', 'Weltkarte, eingefärbt nach Wahlergebnis'));
    aria('#detail', tr('Detail map of the selected country', 'Detailkarte des gewählten Landes'));
    aria('#zin', tr('Zoom in', 'Hineinzoomen')); aria('#zout', tr('Zoom out', 'Herauszoomen')); aria('#zhome', tr('Reset view', 'Ansicht zurücksetzen'));
    renderLangs();
  }
  function setLang(l) {
    if (l === LANG) return;
    LANG = l; try { localStorage.setItem('wahlatlas-lang', l); } catch (e) { /* no storage */ }
    setLocale(); useData(); applyStatic(); hideTip();
    if (S.country) {
      C[S.country].code = S.country;
      if (mapEl.classList.contains('is-detail')) {
        const key = S.region ? S.region.key : null;
        buildDetail(C[S.country]);
        const rec = key != null && DV.recs ? DV.recs.get(key) : null;
        S.region = rec ? { key, rec } : null;
      }
    }
    renderPresets(); renderLegend(); renderCrumb(); rerender();
  }
  function renderModes() {
    document.querySelectorAll('#modes button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.mode === S.mode)));
  }

  function showLoading(on) { document.getElementById('loading').hidden = !on; }
  const wait = ms => new Promise(r => setTimeout(r, ms));
  function setHash(code) {
    try { history.replaceState(null, '', code ? '#' + code : location.pathname + location.search); } catch (e) { /* ignored */ }
  }

  /* ================================================================
     Charts
     ================================================================ */
  function hemicycle(parties, total, govSet, opts) {
    opts = opts || {};
    const Wd = 380, R = 178, cx = Wd / 2, cy = R + 14, Hd = cy + 8;
    const r0 = total > 400 ? 0.38 : total > 150 ? 0.33 : total > 60 ? 0.3 : 0.26;
    const rows = Math.max(2, Math.ceil(Math.sqrt(2 * total * (1 - r0) / (Math.PI * (1 + r0)))));
    const radii = d3.range(rows).map(i => r0 + (1 - r0) * (i + 0.5) / rows);
    const sumR = d3.sum(radii);
    const raw = radii.map(r => total * r / sumR);
    const n = raw.map(Math.floor); let rem = total - d3.sum(n);
    raw.map((v, i) => [v - n[i], i]).sort((a, b) => b[0] - a[0]).slice(0, rem).forEach(([, i]) => n[i]++);
    const seats = [];
    radii.forEach((rr, i) => { const m = n[i]; for (let j = 0; j < m; j++) seats.push({ a: m === 1 ? Math.PI / 2 : Math.PI * (1 - j / (m - 1)), r: rr }); });
    seats.sort((p, q) => q.a - p.a || p.r - q.r);
    let idx = 0; for (const p of parties) for (let s = 0; s < p.seats && idx < seats.length; s++) seats[idx++].p = p;
    const rowGap = (1 - r0) / rows * R;
    const arcGap = Math.min(...radii.map((rr, i) => n[i] > 1 ? Math.PI * rr * R / (n[i] - 1) : 99));
    const dot = Math.max(1.2, Math.min(rowGap, arcGap) * 0.42);
    const circles = seats.filter(s => s.p).map(s => {
      const x = cx + Math.cos(s.a) * s.r * R, y = cy - Math.sin(s.a) * s.r * R;
      return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${dot.toFixed(2)}" fill="${pc(s.p.color)}" data-p="${s.p.id}"><title>${esc(s.p.short)}: ${s.p.seats} ${tr('seats', 'Sitze')}</title></circle>`;
    }).join('');
    const maj = opts.majority || Math.floor(total / 2) + 1;
    const majMark = `<line class="hemi-m" x1="${cx}" x2="${cx}" y1="${cy - R - 10}" y2="${cy - r0 * R + 6}"></line><text class="hemi-ml" x="${cx + 5}" y="${cy - R - 3}">${tr('Majority', 'Mehrheit')} ${int(maj)}</text>`;
    return `<svg viewBox="0 -12 ${Wd} ${Hd + 12}" role="img" aria-label="${tr('Seat distribution', 'Sitzverteilung')}: ${parties.map(p => p.short + ' ' + p.seats).join(', ')}">`
      + majMark + circles
      + `<text class="hemi-t" x="${cx}" y="${cy - 16}" text-anchor="middle">${int(total)}</text>`
      + `<text class="hemi-s" x="${cx}" y="${cy - 1}" text-anchor="middle">${esc(opts.unit || tr('seats', 'Sitze'))}</text></svg>`;
  }

  /* ================================================================
     Panel
     ================================================================ */
  function renderPanel() {
    if (!S.country) { panel.innerHTML = overviewHTML(); return; }
    panel.innerHTML = countryHTML(C[S.country]);
  }

  function overviewHTML() {
    const recent = LIST.map(c => ({ c, e: mainEl(c) })).sort((a, b) => b.e.d.localeCompare(a.e.d)).slice(0, 6);
    const recentRows = recent.map(({ c, e }) => {
      const w = winnerOf(e), col = pc(w.color);
      return `<li><button type="button" class="row" data-open="${c.code}"><i class="bar6" style="background:${col}"></i><span><span class="row-t">${esc(c.n)}</span><span class="row-s">${esc(e.t)}${e.prelim ? tr(' · preliminary', ' · vorläufig') : ''}</span></span><span class="row-r"><b>${esc(w.short)} ${pct(w.pct)}</b>${dShort(e.d)}</span></button></li>`;
    }).join('');
    const up = (W.upcoming || []).map(([d, code, what]) => {
      const c = C[code];
      return `<li><button type="button" class="row" data-open="${code}"><i class="bar6" style="background:var(--rule)"></i><span><span class="row-t">${esc(c.n)}</span><span class="row-s">${esc(what)}</span></span><span class="row-r"><b>${dDay(d)}</b>${d.slice(0, 4)}</span></button></li>`;
    }).join('');
    const groups = REG.map(([rk, rn, rnDe]) => {
      const cs = LIST.filter(c => c.reg === rk).sort((a, b) => a.n.localeCompare(b.n, LANG));
      if (!cs.length) return '';
      return `<div class="grp"><div class="grp-h"><span>${tr(rn, rnDe)}</span><span>${cs.length}</span></div><ul class="rows">${cs.map(c => {
        const e = mainEl(c);
        if (S.mode === 'gov') {
          const g = govParty(c);
          return `<li><button type="button" class="row" data-open="${c.code}"><i class="bar6" style="background:${pc(g.color)}"></i><span><span class="row-t">${esc(c.n)}</span><span class="row-s">${esc(c.hog[1])}${g.id ? ' · ' + esc(g.short) : ''}</span></span><span class="row-r">${esc(c.hog[0].replace(/ \(.*\)/, ''))}</span></button></li>`;
        }
        const w = winnerOf(e);
        return `<li><button type="button" class="row" data-open="${c.code}"><i class="bar6" style="background:${pc(w.color)}"></i><span><span class="row-t">${esc(c.n)}</span><span class="row-s">${esc(e.t)}</span></span><span class="row-r"><b>${esc(w.short)}</b>${pct(w.pct)}</span></button></li>`;
      }).join('')}</ul></div>`;
    }).join('');
    return `<div class="pi">
      <section class="sec">
        <p class="eyebrow">${tr('Election Atlas', 'Wahlatlas')} · ${LIST.length} ${tr('countries', 'Länder')}</p>
        <h1 class="big">${S.mode === 'win' ? tr('Who won last time?', 'Wer hat zuletzt gewonnen?') : tr('Who governs?', 'Wer regiert?')}</h1>
        <p class="lede">${S.mode === 'win'
          ? tr('Each country is coloured by the largest party in its latest national election.', 'Jedes Land ist in der Farbe der stärksten Partei seiner letzten nationalen Wahl eingefärbt.')
          : tr('Each country is coloured by the party of its head of government. That is not always the election winner.', 'Jedes Land ist in der Farbe der Partei eingefärbt, die die Regierungschefin oder den Regierungschef stellt. Das ist nicht immer der Wahlsieger.')} ${tr('Click a country to see its seat distribution, result and government, plus the last three or four elections with a trend chart. Germany, the US, the UK, Canada, Austria, Poland, Brazil and Mexico also have regional maps.', 'Ein Klick öffnet Sitzverteilung, Ergebnis und Regierung, dazu die letzten drei bis vier Wahlen mit Verlaufsdiagramm. Für Deutschland, die USA, Großbritannien, Kanada, Österreich, Polen, Brasilien und Mexiko gibt es zusätzlich regionale Karten.')}</p>
      </section>
      <section class="sec"><p class="eyebrow">${tr('Recent elections', 'Zuletzt gewählt')}</p><ul class="rows">${recentRows}</ul></section>
      <section class="sec"><p class="eyebrow">${tr('Coming up', 'Demnächst')}</p><ul class="rows">${up}</ul></section>
      <section class="sec"><p class="eyebrow">${tr('All countries', 'Alle Länder')} · ${S.mode === 'win' ? tr('election winner', 'Wahlsieger') : tr('head of government', 'Regierungsspitze')}</p>${groups}</section>
      <section class="sec">${sourcesHTML()}</section>
    </div>`;
  }

  function sourcesHTML() {
    return `<p class="src">${tr("Sources: official final results of the national electoral authorities, compiled from the Wikipedia results tables (earlier elections too; renamed or merged parties, and parties that ran in alliances, are assigned to one line in the trend chart, an editorial approximation); German Federal Returning Officer (2025 constituencies); Democracy Club (UK constituencies); tonmcg/US County Level Election Results (US counties). Maps: Natural Earth, US Census, German Federal Returning Officer, ONS. As of 5 October 2026. The Latvian and Brazilian results are only a few days old and preliminary.", "Quellen: amtliche Endergebnisse der nationalen Wahlbehörden, zusammengestellt aus den Ergebnistabellen der Wikipedia (auch die früheren Wahlen; umbenannte, fusionierte oder in Bündnissen angetretene Parteien sind im Verlauf einer Linie zugeordnet, die Zuordnung ist eine redaktionelle Näherung); Bundeswahlleiterin (Wahlkreise 2025); Democracy Club (britische Wahlkreise); tonmcg/US County Level Election Results (US-Counties). Karten: Natural Earth, US Census, Bundeswahlleiterin, ONS. Stand: 5. Oktober 2026. Die lettischen und brasilianischen Ergebnisse sind wenige Tage alt und vorläufig.")}</p>`;
  }

  function countryHTML(c) {
    const els = c.el;
    const e = els[S.el] || els[0];
    const tabs = els.length > 1 ? `<div class="tabs" role="group" aria-label="${tr('Choose election', 'Wahl auswählen')}">${els.map((x, i) => `<button type="button" class="tab" data-el="${i}" aria-pressed="${i === S.el}">${esc(x.t)}</button>`).join('')}</div>` : '';
    const region = S.region ? regionCardHTML(c) : '';
    const list = bodyList(c, e);
    if (S.yr >= list.length) S.yr = 0;
    const cur = list[S.yr], latest = S.yr === 0;
    const years = list.length > 1
      ? `<section class="yrs"><div class="years" role="group" aria-label="${tr('Choose election year', 'Wahljahr auswählen')}">${list.map((x, i) => `<button type="button" class="yr" data-yr="${i}" aria-pressed="${i === S.yr}">${esc(yearLbl(list, i))}</button>`).join('')}</div>${latest ? '' : `<p class="cur-t">${esc(cur.t)} <span>· ${tr('earlier election', 'frühere Wahl')}</span></p>`}</section>` : '';
    const body = cur.k === 'pres' ? presHTML(c, cur) : parlHTML(c, cur, latest);
    const trend = list.length > 1 ? (cur.k === 'pres' ? presTrendHTML(c, list) : parlTrendHTML(c, list)) : '';
    return `<div class="pi">
      ${region}
      <section class="sec">
        <div class="chead">
          <div><p class="eyebrow">${esc((r => tr(r[1], r[2]))(REG.find(r => r[0] === c.reg)))}</p><h1 class="big">${esc(c.n)}</h1><p class="sub">${esc(c.sys)}</p></div>
          <button type="button" class="x" id="close" aria-label="${tr('Back to world map', 'Zurück zur Weltkarte')}">×</button>
        </div>
      </section>
      ${tabs ? `<section>${tabs}</section>` : ''}
      ${years}
      ${body}
      ${trend}
      ${govHTML(c, latest)}
      ${layersHTML(c)}
      <section class="sec"><p class="eyebrow">${tr('Next election', 'Nächster Termin')}</p><p class="note"><b style="color:var(--ink)">${esc(c.next)}</b></p></section>
      <section class="sec">${sourcesHTML()}</section>
    </div>`;
  }

  function factsHTML(e, extra) {
    const date = `<div class="fact"><div class="fact-k">${tr('Election day', 'Wahltag')}</div><div class="fact-v">${dShort(e.d)}</div></div>`;
    const to = `<div class="fact"><div class="fact-k">${tr('Turnout', 'Beteiligung')}</div><div class="fact-v">${e.to != null ? pct(e.to) : '–'}</div></div>`;
    return `<div class="facts">${date}${to}${extra || ''}</div>`;
  }

  function winnerBox(label, name, sub, color, value) {
    return `<div class="winner"><i class="wsw" style="background:${pc(color)}"></i><div style="min-width:0"><div class="winner-k">${esc(label)}</div><div class="winner-n">${esc(name)}</div><div class="winner-s">${esc(sub)}</div></div><div class="winner-p num">${value}</div></div>`;
  }

  function parlHTML(c, e, latest) {
    const gov = new Set(latest ? (c.gov || []) : []);
    const hasV = e.p.some(p => p[4] != null);
    const w = winnerOf(e);
    const maj = Math.floor(e.seats / 2) + 1;
    const seatsFact = `<div class="fact"><div class="fact-k">${tr('Seats', 'Sitze')}</div><div class="fact-v">${int(e.seats)} <small>${tr('majority', 'Mehrheit')} ${int(maj)}</small></div></div>`;
    const parties = e.p.filter(p => p[5] > 0).map(p => ({ id: p[0], short: p[1], color: p[3], seats: p[5] }));
    const rows = e.p.slice().sort((a, b) => hasV ? ((b[4] || -1) - (a[4] || -1)) || (b[5] - a[5]) : b[5] - a[5]);
    const maxV = Math.max(...e.p.map(p => p[4] || 0));
    const sumV = d3.sum(e.p, p => p[4] || 0);
    const other = hasV && e.p.every(p => p[4] != null) ? 100 - sumV : (hasV ? null : null);
    const trs = rows.map(p => `<tr data-p="${p[0]}" class="${p[5] ? '' : 'dim'}"><td><div class="pn"><i class="sw" style="background:${pc(p[3])}"></i><div><b>${esc(p[1])}</b>${gov.has(p[0]) ? `<span class="gov-tag" title="${tr('in government', 'an der Regierung beteiligt')}">${tr('GOV', 'REG')}</span>` : ''}<small>${esc(p[2])}</small></div></div></td>`
      + (hasV ? `<td class="num">${p[4] != null ? pct(p[4]) : '–'}${p[4] != null ? `<div class="vbar" style="width:${Math.max(3, 48 * p[4] / maxV)}px;background:${pc(p[3])}"></div>` : ''}</td>` : '')
      + `<td class="num"><b>${p[5]}</b></td><td class="num">${chg(p[6])}</td></tr>`).join('')
      + (other != null && other > 0.25 ? `<tr class="dim"><td><div class="pn"><i class="sw" style="background:var(--land)"></i><div><b>${tr('Others', 'Sonstige')}</b></div></div></td><td class="num">${pct(other)}</td><td class="num">0</td><td></td></tr>` : '');
    const winLabel = hasV ? (e.vl ? tr('Largest party · ', 'Stärkste Kraft · ') + e.vl : tr('Largest party', 'Stärkste Kraft')) : tr('Largest group', 'Größte Fraktion');
    const winVal = hasV ? pct(w.pct) : w.seats;
    const winSub = `${w.name}${hasV ? ' · ' + w.seats + tr(' of ', ' von ') + int(e.seats) + tr(' seats', ' Sitzen') : ''}`;
    return `${e.prelim ? `<section><span class="badge warn">${tr('preliminary result', 'vorläufiges Ergebnis')}</span></section>` : ''}
      <section>${factsHTML(e, seatsFact)}</section>
      <section>${winnerBox(winLabel, w.short, winSub, w.color, winVal)}</section>
      <section class="sec"><p class="eyebrow">${tr('Seats', 'Sitzverteilung')} · ${esc(e.ch)}</p><figure class="hemi" id="hemi">${hemicycle(parties, e.seats, gov)}</figure>
        <p class="cap">${tr('Groups arranged from left to right by political orientation.', 'Fraktionen von links nach rechts nach politischer Ausrichtung angeordnet.')}</p></section>
      <section class="sec"><p class="eyebrow">${tr('Result', 'Ergebnis')}</p><div class="tbl-wrap"><table class="res"><thead><tr><th>${tr('Party', 'Partei')}</th>${hasV ? `<th>${esc(e.vl || tr('Votes', 'Stimmen'))}</th>` : ''}<th>${tr('Seats', 'Sitze')}</th><th>±</th></tr></thead><tbody>${trs}</tbody></table></div>
        ${e.note ? `<p class="note" style="margin-top:10px">${esc(e.note)}</p>` : ''}</section>`;
  }

  function presHTML(c, e) {
    const w = winnerOf(e);
    const r2 = e.c.some(x => x[5] != null);
    const sorted = e.c.slice().sort((a, b) => r2 ? ((b[5] || -1) - (a[5] || -1)) || (b[4] - a[4]) : b[4] - a[4]);
    const finalLabel = r2 ? tr('Runoff', 'Stichwahl') : (c.code === 'BRA' && !e.hist ? tr('1st round', '1. Wahlgang') : tr('Result', 'Ergebnis'));
    let evBlock = '';
    if (e.ev) {
      const tot = e.ev.rep + e.ev.dem;
      const rn = (e.c.find(x => x[0] === 'rep') || [0, tr('Republicans', 'Republikaner')])[1], dn = (e.c.find(x => x[0] === 'dem') || [0, tr('Democrats', 'Demokraten')])[1];
      const rs = shortName(rn), ds = shortName(dn);
      evBlock = `<section class="sec"><p class="eyebrow">${tr('Electoral College', 'Wahlleute (Electoral College)')}</p>
        <div class="evbar"><span style="width:${100 * e.ev.rep / tot}%;background:${pc('#D22532')}">${esc(rs)} ${e.ev.rep}</span><span style="width:${100 * e.ev.dem / tot}%;background:${pc('#2E64B5')};justify-content:flex-end">${e.ev.dem} ${esc(ds)}</span><i class="evmid"></i></div>
        <p class="cap">${tr('270 of 538 votes needed to win', '270 von 538 Stimmen nötig')}</p>
        <figure class="hemi" id="hemi" style="margin-top:10px">${hemicycle([{ id: 'dem', short: ds, color: '#2E64B5', seats: e.ev.dem }, { id: 'rep', short: rs, color: '#D22532', seats: e.ev.rep }], tot, null, { unit: tr('electors', 'Wahlleute'), majority: 270 })}</figure></section>`;
    }
    const list = sorted.map(x => {
      const fin = r2 ? x[5] : x[4];
      const isW = x[0] === w.id && x[1] === w.name;
      const v = fin != null ? fin : x[4];
      return `<div class="cd" data-p="${x[0]}"><div class="cd-n">${isW ? '✓ ' : ''}${esc(x[1])}<small>${esc(x[2])}</small></div><div class="cd-p num">${pct(v)}</div>
        <div class="cd-b"><i style="width:${v}%;background:${pc(x[3])}"></i></div>${r2 ? `<div class="cd-r1">${tr('1st round', '1. Wahlgang')}: ${pct(x[4])}${fin == null ? tr(' · eliminated', ' · ausgeschieden') : ''}</div>` : ''}</div>`;
    }).join('');
    const sub = `${w.party} · ${finalLabel}`;
    return `<section>${factsHTML(e, `<div class="fact"><div class="fact-k">${tr('Format', 'Art')}</div><div class="fact-v" style="font-size:16px">${r2 ? tr('Two rounds', 'Zwei Wahlgänge') : (c.code === 'BRA' ? tr('1st round', '1. Wahlgang') : tr('One round', 'Ein Wahlgang'))}</div></div>`)}</section>
      <section>${winnerBox(c.code === 'BRA' && !r2 ? tr('Leading after the 1st round', 'Vorn nach dem 1. Wahlgang') : tr('Elected', 'Gewählt'), w.name, sub, w.color, pct(w.pct))}</section>
      ${evBlock}
      <section class="sec"><p class="eyebrow">${tr('Result', 'Ergebnis')} · ${finalLabel}</p><div class="cand">${list}</div>
        ${e.note ? `<p class="note" style="margin-top:12px">${esc(e.note)}</p>` : ''}</section>`;
  }

  /* ---------- Trend across several elections ---------- */
  function parlTrendHTML(c, list) {
    const els = list.slice().reverse();                              // old → new
    const hasVotes = els.every(e => e.p.some(p => p[4] != null));
    const m = hasVotes ? S.metric : 'seats';
    const val = (e, p) => m === 'votes' ? p[4] : (e.seats ? 100 * p[5] / e.seats : null);
    const sm = new Map();
    els.forEach((e, i) => e.p.forEach(p => {
      const v = val(e, p); if (v == null) return;
      const o = sm.get(p[0]) || { id: p[0], vals: [], max: 0 };
      o.vals[i] = v; o.max = Math.max(o.max, v); o.short = p[1]; o.name = p[2]; o.color = p[3]; sm.set(p[0], o);
    }));
    let ser = [...sm.values()].sort((a, b) => b.max - a.max);
    const strong = ser.filter(s => s.max >= 4);
    ser = (strong.length >= 3 ? strong : ser).slice(0, 8);
    const selIdx = els.length - 1 - Math.min(S.yr, els.length - 1);
    const at = (s, i) => (s.vals[i] == null ? null : s.vals[i]);
    ser.sort((a, b) => (at(b, selIdx) || 0) - (at(a, selIdx) || 0) || b.max - a.max);
    const W = 380, H = 200, ml = 34, mr = 10, mt = 10, mb = 26;
    const x = d3.scalePoint().domain(els.map((_, i) => i)).range([ml + 18, W - mr - 18]);
    const ymax = d3.max(ser, s => d3.max(s.vals.filter(v => v != null))) || 10;
    const y = d3.scaleLinear().domain([0, ymax * 1.06]).nice().range([H - mb, mt]);
    const ticks = y.ticks(4);
    const line = d3.line().defined(d => d[1] != null).x(d => d[0]).y(d => d[1]);
    const colW = (W - ml - mr) / els.length;
    const li = i => els.length - 1 - i;                                // index in `list`
    const grid = ticks.map(t => `<line class="tg" x1="${ml}" x2="${W - mr}" y1="${y(t).toFixed(1)}" y2="${y(t).toFixed(1)}"></line><text class="tt" x="${ml - 6}" y="${(y(t) + 3.5).toFixed(1)}" text-anchor="end">${t}</text>`).join('');
    const bands = els.map((e, i) => `<rect class="${i === selIdx ? 'tsel' : 'tcol'}" data-yr="${li(i)}" role="button" tabindex="0" aria-label="${tr('Show', 'Anzeigen:')} ${esc(e.t)}" x="${(x(i) - colW / 2).toFixed(1)}" y="${mt}" width="${colW.toFixed(1)}" height="${H - mb - mt}"></rect>`).join('');
    const xl = els.map((e, i) => `<text class="tx${i === selIdx ? ' on' : ''}" data-yr="${li(i)}" x="${x(i).toFixed(1)}" y="${H - 8}" text-anchor="middle">${esc(yearLbl(list, li(i)))}</text>`).join('');
    const lines = ser.map(s => {
      const pts = els.map((e, i) => [x(i), at(s, i) == null ? null : y(at(s, i))]);
      const dots = pts.map((p, i) => p[1] == null ? '' : `<circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="${i === selIdx ? 4.2 : 3.2}" fill="${pc(s.color)}" stroke="var(--sheet)" stroke-width="1.3"><title>${esc(s.short)} · ${esc(yearLbl(list, li(i)))}: ${pct(at(s, i))}</title></circle>`).join('');
      return `<g class="ts" data-s="${esc(s.id)}"><path d="${line(pts) || ''}" fill="none" stroke="${pc(s.color)}" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"></path>${dots}</g>`;
    }).join('');
    const legend = ser.map(s => `<span class="tli${at(s, selIdx) == null ? ' na' : ''}" data-s="${esc(s.id)}" title="${esc(s.name)}${at(s, selIdx) == null ? tr(' – did not run separately in this election', ' – in dieser Wahl nicht eigenständig angetreten') : ''}"><i class="sw" style="background:${pc(s.color)}"></i>${esc(s.short)} <b class="num">${at(s, selIdx) == null ? '–' : pct(at(s, selIdx))}</b></span>`).join('');
    const toggle = hasVotes ? `<div class="seg seg-s" role="group" aria-label="${tr('Measure', 'Kennzahl')}"><button type="button" data-metric="votes" aria-pressed="${m === 'votes'}">${tr('Votes', 'Stimmen')}</button><button type="button" data-metric="seats" aria-pressed="${m === 'seats'}">${tr('Seats', 'Sitze')}</button></div>` : '';
    return `<section class="sec"><div class="trend-h"><p class="eyebrow" style="margin:0">${tr('Trend', 'Verlauf')} · ${els.length} ${tr('elections', 'Wahlen')}, ${esc(yearLbl(list, list.length - 1))}–${esc(yearLbl(list, 0))}</p>${toggle}</div>
      <figure class="trend"><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${tr(`Party trend over ${els.length} elections, ${m === 'votes' ? 'vote share' : 'seat share'} in per cent`, `Verlauf der Parteien über ${els.length} Wahlen, ${m === 'votes' ? 'Stimmenanteil' : 'Sitzanteil'} in Prozent`)}">${bands}${grid}${lines}${xl}</svg></figure>
      <div class="tleg">${legend}</div>
      <p class="cap">${m === 'votes' ? tr('Vote share', 'Stimmenanteil') : tr('Share of seats', 'Anteil an den Sitzen')} ${tr('in per cent. Legend values refer to the selected election; click a column to switch elections. Renamed or merged parties share one line.', 'in Prozent. Die Werte in der Legende gelten für die gewählte Wahl; Klick auf eine Spalte wechselt die Wahl. Umbenannte oder zusammengelegte Parteien sind einer Linie zugeordnet.')}</p></section>`;
  }

  function presTrendHTML(c, list) {
    const rows = list.map((e, i) => {
      const r2 = e.c.some(x => x[5] != null), k = r2 ? 5 : 4;
      const s = e.c.filter(x => x[k] != null).sort((a, b) => b[k] - a[k]);
      const a = s[0], b = s[1]; if (!a) return '';
      const tot = a[k] + (b ? b[k] : 0);
      return `<button type="button" class="pt" data-yr="${i}" aria-pressed="${i === S.yr}"><span class="pt-y">${esc(yearLbl(list, i))}</span><span class="pt-m"><span class="pt-bar"><i style="width:${(100 * a[k] / tot).toFixed(1)}%;background:${pc(a[3])}"></i><i style="flex:1;background:${b ? pc(b[3]) : 'var(--chip)'}"></i></span><span class="pt-t"><b>${esc(a[1])}</b> ${pct(a[k])}${b ? ' · ' + esc(b[1]) + ' ' + pct(b[k]) : ''}</span></span></button>`;
    }).join('');
    return `<section class="sec"><p class="eyebrow">${tr('Trend', 'Verlauf')} · ${list.length} ${tr('presidential elections', 'Präsidentschaftswahlen')}</p><div class="ptl">${rows}</div><p class="cap">${tr('Winner and runner-up in the deciding round. Click to switch elections.', 'Sieger und Zweitplatzierter im entscheidenden Wahlgang. Klick wechselt die Wahl.')}</p></section>`;
  }

  function govHTML(c, latest) {
    const g = govParty(c);
    const initials = c.hog[1].split(/\s+/).filter(s => /^[A-ZÄÖÜÉŠŽČĐ]/.test(s)).map(s => s[0]).slice(0, 2).join('');
    const parl = c.el.find(x => x.k === 'parl' && (x === mainEl(c) || mainEl(c).k === 'pres'));
    let bar = '';
    if (parl && c.gov && c.gov.length && mainEl(c).k === 'parl') {
      const gs = parl.p.filter(p => c.gov.includes(p[0]) && p[5] > 0).sort((a, b) => b[5] - a[5]);
      const sum = d3.sum(gs, p => p[5]);
      const share = sum / parl.seats;
      bar = `<div class="govbar" role="img" aria-label="${tr('Government', 'Regierung')}: ${sum} ${tr('of', 'von')} ${parl.seats} ${tr('seats', 'Sitzen')}">${gs.map(p => `<i style="width:${100 * p[5] / parl.seats}%;background:${pc(p[3])}" title="${esc(p[1])}: ${p[5]}"></i>`).join('')}<span class="maj" title="${tr('Majority', 'Mehrheit')}"></span></div>
        <div class="gov-s">${tr('Governing parties', 'Regierungsparteien')}: <b style="color:var(--ink)">${sum} ${tr('of', 'von')} ${int(parl.seats)} ${tr('seats', 'Sitzen')}</b> (${pct(100 * share)}) · ${sum >= Math.floor(parl.seats / 2) + 1 ? tr('majority', 'eigene Mehrheit') : tr('minority', 'Minderheit')}</div>
        <div class="chips">${gs.map(p => `<span class="chip"><i class="sw" style="background:${pc(p[3])}"></i>${esc(p[1])} ${p[5]}</span>`).join('')}</div>`;
    }
    return `<section class="sec gov"><p class="eyebrow" style="margin:0">${tr('Government', 'Regierung')}${latest === false ? tr(' · current', ' · aktuell') : ''}</p>
      <div class="gov-hog"><span class="av" style="background:${pc(g.color)};color:${onColor(pc(g.color))}">${esc(initials)}</span><div><b>${esc(c.hog[1])}</b><span>${esc(c.hog[0])}${g.id ? ' · ' + esc(g.short) : ''}</span></div></div>
      ${bar}
      <p class="note">${esc(c.govNote)}</p>
      ${c.hos ? `<p class="note">${esc(c.hos[0])}: <b style="color:var(--ink)">${esc(c.hos[1])}</b></p>` : ''}</section>`;
  }

  function layersHTML(c) {
    if (!c.sub || !SUBDEF[c.sub]) return `<section class="sec"><p class="eyebrow">${tr('Map', 'Karte')}</p><p class="note">${tr(`No regional results are available for ${esc(c.n)}. The map shows the country in the winner’s colour and its neighbours faded.`, `Für ${esc(c.n)} sind keine regionalen Ergebnisse hinterlegt. Die Karte zeigt das Land in der Farbe des Wahlsiegers, die Nachbarländer blass.`)}</p></section>`;
    const def = SUBDEF[c.sub];
    const seg = def.layers.length > 1 ? `<div class="seg" role="group" aria-label="${tr('Map layer', 'Kartenebene')}">${def.layers.map(l => `<button type="button" id="ly-${l.id}" data-layer="${l.id}" aria-pressed="${l.id === S.layer}">${esc(tx(l.label))}</button>`).join('')}</div>` : `<p class="note"><b style="color:var(--ink)">${esc(tx(def.layers[0].label))}</b></p>`;
    return `<section class="sec layers"><p class="eyebrow" style="margin:0">${tr('Regional map', 'Regionale Karte')}</p>${seg}
      <label class="switch"><input type="checkbox" id="shade" ${S.shade ? 'checked' : ''}> ${tr('Fade narrow results', 'Knappe Ergebnisse blasser zeigen')}</label>
      <p class="note">${tr('Click an area on the map for details. Zoom with the mouse wheel or two fingers.', 'Gebiet auf der Karte anklicken für Details. Mit Mausrad oder zwei Fingern zoomen.')}${S.yr > 0 ? tr(' The regional map always shows the latest election.', ' Die regionale Karte zeigt immer die aktuelle Wahl.') : ''}</p></section>`;
  }

  function regionCardHTML(c) {
    const def = SUBDEF[c.sub]; if (!def || !DV.L) return '';
    const L = DV.L, rec = S.region.rec;
    const max = Math.max(50, rec.r[0] ? rec.r[0][1] : 0);
    const bars = rec.r.slice(0, 7).map(a => { const p = subParty(c, L, a[0]); return `<div class="rb"><b>${esc(p.short)}<span style="font-weight:400;color:var(--ink-2)"> ${esc(p.name !== p.short ? p.name : '')}</span></b><span class="p num">${pct(a[1])}</span><span class="t"><i style="width:${100 * a[1] / max}%;background:${pc(p.color)}"></i></span></div>`; }).join('');
    const kv = [];
    if (rec.r.length > 1 && rec.w) kv.push([tr('Margin', 'Vorsprung'), pp(rec.margin)]);
    if (rec.to != null) kv.push([tr('Turnout', 'Wahlbeteiligung'), pct(rec.to)]);
    for (const r of (rec.rows || [])) kv.push(r);
    let alt = '';
    if (rec.alt) {
      alt = `<div class="alt"><div class="alt-t">${esc(rec.alt.label)}</div><div class="minibar">${rec.alt.r.map(a => { const p = subParty(c, L, a[0]); return `<i title="${esc(p.short)} ${pct(a[1])}" style="flex:${a[1]};background:${pc(p.color)}"></i>`; }).join('')}</div>
        <p class="note" style="margin-top:5px">${rec.alt.r.slice(0, 4).map(a => esc(subParty(c, L, a[0]).short) + ' ' + pct(a[1])).join(' · ')}</p></div>`;
    }
    return `<section class="rcard" aria-label="${tr('Selected region', 'Ausgewählte Region')}">
      <div class="chead"><div><p class="eyebrow" style="margin-bottom:4px">${esc(rec.label || tx(L.unit))}</p><h2>${esc(rec.name)}</h2></div><button type="button" class="x" id="rclose" aria-label="${tr('Close region', 'Region schließen')}">×</button></div>
      <div class="rbars">${bars}</div>
      ${kv.length ? `<dl class="kv">${kv.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join('')}</dl>` : ''}
      ${alt}
      ${rec.note ? `<p class="note" style="margin-top:10px">${esc(rec.note)}</p>` : ''}
    </section>`;
  }

  /* ================================================================
     Events
     ================================================================ */
  function rerender() { const top = panel.scrollTop; renderPanel(); panel.scrollTop = top; }
  panel.addEventListener('click', ev => {
    const yEl = ev.target.closest('[data-yr]');
    if (yEl) { S.yr = +yEl.dataset.yr; rerender(); return; }
    const mEl = ev.target.closest('[data-metric]');
    if (mEl) { S.metric = mEl.dataset.metric; rerender(); return; }
    const t = ev.target.closest('button, input'); if (!t) return;
    if (t.dataset.open) { openCountry(t.dataset.open); return; }
    if (t.id === 'close') { closeCountry(); return; }
    if (t.id === 'rclose') { clearRegion(); return; }
    if (t.dataset.el != null) { S.el = +t.dataset.el; S.yr = 0; renderPanel(); return; }
    if (t.dataset.layer) { setLayer(t.dataset.layer); return; }
    if (t.id === 'shade') { S.shade = t.checked; try { localStorage.setItem('wahlatlas-shade', S.shade ? '1' : '0'); } catch (e) { /* ignore */ } recolorDetail(); renderLegend(); }
  });
  // highlight a party in the hemicycle when its table row or seat is hovered
  function hl(id) {
    const fig = panel.querySelector('#hemi'); if (!fig) return;
    fig.querySelectorAll('circle').forEach(cl => { cl.style.opacity = !id || cl.dataset.p === id ? '' : '0.18'; });
    panel.querySelectorAll('tr[data-p]').forEach(r => r.classList.toggle('hl', !!id && r.dataset.p === id));
  }
  // highlight a line in the trend chart
  function hlSeries(id) {
    panel.querySelectorAll('.ts').forEach(g => { g.style.opacity = !id || g.dataset.s === id ? '' : '0.15'; });
    panel.querySelectorAll('.tli').forEach(s => { s.style.opacity = !id || s.dataset.s === id ? '' : '0.4'; });
  }
  panel.addEventListener('mouseover', ev => {
    const el = ev.target.closest('[data-p]'); hl(el ? el.dataset.p : null);
    const s = ev.target.closest('[data-s]'); hlSeries(s ? s.dataset.s : null);
  });
  panel.addEventListener('mouseleave', () => { hl(null); hlSeries(null); });
  panel.addEventListener('keydown', ev => {
    if ((ev.key === 'Enter' || ev.key === ' ') && ev.target.matches && ev.target.matches('[data-yr][role="button"]')) { ev.preventDefault(); ev.target.dispatchEvent(new MouseEvent('click', { bubbles: true })); }
  });

  document.getElementById('langs').addEventListener('click', ev => { const b = ev.target.closest('button'); if (b) setLang(b.dataset.lang); });
  document.getElementById('presets').addEventListener('click', ev => { const b = ev.target.closest('button'); if (b) goPreset(b.dataset.preset); });
  document.getElementById('modes').addEventListener('click', ev => {
    const b = ev.target.closest('button'); if (!b) return;
    S.mode = b.dataset.mode; try { localStorage.setItem('wahlatlas-mode', S.mode); } catch (e) { /* ignore */ }
    renderModes(); recolorWorld(); recolorDetail(); renderLegend(); renderPanel();
  });
  document.getElementById('back').addEventListener('click', () => closeCountry());
  document.getElementById('zin').addEventListener('click', () => zoomBy(1.6));
  document.getElementById('zout').addEventListener('click', () => zoomBy(1 / 1.6));
  document.getElementById('zhome').addEventListener('click', () => {
    if (mapEl.classList.contains('is-detail')) detailSvg.transition().duration(DUR / 2).call(DV.zoom.transform, d3.zoomIdentity);
    else goPreset(S.preset);
  });
  function zoomBy(f) {
    if (mapEl.classList.contains('is-detail')) detailSvg.transition().duration(250).call(DV.zoom.scaleBy, f);
    else worldSvg.transition().duration(250).call(WV.zoom.scaleBy, f);
  }
  document.addEventListener('keydown', ev => {
    if (ev.key !== 'Escape') return;
    if (S.region) clearRegion(); else if (S.country) closeCountry();
  });

  function onTheme() {
    DARK = isDark(); LAND = cssVar('--land') || LAND;
    recolorWorld(); recolorDetail(); renderLegend(); renderPanel();
  }
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', onTheme);
  new MutationObserver(onTheme).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

  let rsz;
  const ro = new ResizeObserver(() => {
    clearTimeout(rsz);
    rsz = setTimeout(() => {
      const r = mapEl.getBoundingClientRect();
      if (Math.abs(r.width - WV.w) < 2 && Math.abs(r.height - WV.h) < 2) return;
      worldSvg.call(WV.zoom.transform, d3.zoomIdentity);
      layoutWorld();
      if (!S.country) { const p = PRESETS.find(x => x.id === S.preset); worldSvg.call(WV.zoom.transform, p && p.bbox ? bboxTransform(WV.proj, p.bbox, WV.w, WV.h, 0.94) : WV.base); }
      if (S.country && mapEl.classList.contains('is-detail')) { buildDetail(C[S.country]); renderLegend(); }
    }, 150);
  });

  /* ---------------- Start ---------------- */
  DARK = isDark(); LAND = cssVar('--land') || LAND;
  applyStatic(); renderPresets(); renderModes();
  initWorld();
  worldSvg.call(WV.zoom.transform, WV.base);
  renderPanel(); renderLegend(); renderCrumb();
  ro.observe(mapEl);
  const h = (location.hash || '').replace('#', '').toUpperCase();
  if (C[h]) openCountry(h, { instant: true, keepScroll: true });
  window.addEventListener('hashchange', () => {
    const code = (location.hash || '').replace('#', '').toUpperCase();
    if (C[code] && code !== S.country) openCountry(code);
    else if (!code && S.country) closeCountry();
  });
})();
