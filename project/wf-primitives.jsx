// wf-primitives.jsx
// Shared sketchy wireframe primitives + theme

const BEIGE_PALETTES = {
  // — Beiges classiques —
  warm:     { bg: '#FAF3E3', surface: '#F5EAD2', accent: '#A67B5B', ink: '#2A2520', muted: '#6E5E4D', label:'Warm · cuivré' },
  cream:    { bg: '#F5EFE0', surface: '#EFE6D0', accent: '#8B7355', ink: '#2A2520', muted: '#6E5E4D', label:'Cream · classique' },
  stone:    { bg: '#E8DFC9', surface: '#F0E9D6', accent: '#C9A87C', ink: '#1F1F1F', muted: '#5C5043', label:'Stone · doré' },
  linen:    { bg: '#F2EBDD', surface: '#E8DEC8', accent: '#B89968', ink: '#2B2418', muted: '#7A6B52', label:'Linen · lin naturel' },

  // — Beige + nature / écolo —
  greige:   { bg: '#DFD3B8', surface: '#EFE6D2', accent: '#7A8C6A', ink: '#2B2B2B', muted: '#5C5043', label:'Greige · vert sauge' },
  forest:   { bg: '#F1EAD6', surface: '#E5DBC2', accent: '#3F5A3A', ink: '#1F2A1C', muted: '#5C6A52', label:'Forest · vert profond' },
  olive:    { bg: '#EDE3CC', surface: '#E0D5B8', accent: '#8A8A4A', ink: '#2A2818', muted: '#6E6845', label:'Olive · doux' },

  // — Beige + chaleureux / humain —
  terracotta:{ bg: '#F5EBD9', surface: '#ECDDC4', accent: '#C36B3D', ink: '#2A1E15', muted: '#7A5240', label:'Terracotta · chaud' },
  rust:     { bg: '#F0E5D2', surface: '#E5D6BC', accent: '#A04E2A', ink: '#241814', muted: '#6E4838', label:'Rust · ocre rouge' },
  blush:    { bg: '#F4ECDC', surface: '#EBDDC9', accent: '#B8745E', ink: '#2D2218', muted: '#7A5848', label:'Blush · rosé' },

  // — Beige + élégant / sobre —
  charcoal: { bg: '#EEE6D2', surface: '#E2D8BE', accent: '#2C2C2C', ink: '#1A1A1A', muted: '#5C5043', label:'Charcoal · très sobre' },
  navy:     { bg: '#F2EBDC', surface: '#E6DCC4', accent: '#1F3A52', ink: '#1A1F2A', muted: '#5C5A4D', label:'Navy · institutionnel' },
  plum:     { bg: '#F1E8D6', surface: '#E5D8BE', accent: '#5C3A4E', ink: '#2A1F22', muted: '#6E5853', label:'Plum · subtil' },

  // — Beige + moderne / frais —
  sky:      { bg: '#F0E8D5', surface: '#E4D8BC', accent: '#5A7A92', ink: '#1F2530', muted: '#5C5A4D', label:'Sky · bleu doux' },
  mint:     { bg: '#EFE7D2', surface: '#E3D7BC', accent: '#4A8A78', ink: '#1F2A24', muted: '#5C6A60', label:'Mint · vert d\'eau' },
};

// CSS reset for wireframes
const WF_STYLES = `
.wf {
  font-family: var(--wf-font, 'Patrick Hand'), 'Caveat', cursive;
  color: var(--wf-ink, #2A2520);
  background: var(--wf-bg, #FAF3E3);
  width:100%; height:100%;
  position:relative;
  overflow:hidden;
  font-size: 14px;
  line-height:1.35;
}
.wf.--clean { font-family: var(--wf-font-clean, 'Work Sans'), sans-serif; }
.wf-mono { font-family: 'Space Mono', monospace; }
.wf-hand { font-family: 'Caveat', cursive; }
.wf-disp { font-family: 'Caveat', cursive; font-weight:700; }

/* sketchy borders */
.sk { border: 1.5px solid var(--wf-ink, #2A2520); border-radius: 6px; position:relative; background:transparent; }
.sk-2 { border-width:2px; }
.sk-thin { border-width:1px; }
.sk-dash { border-style: dashed; }
.sk-dot { border-style: dotted; }

.sk-card { border:1.5px solid var(--wf-ink); border-radius:6px; background: var(--wf-surface, rgba(255,255,255,0.5)); padding:10px; }
.sk-btn { display:inline-flex; align-items:center; justify-content:center; gap:6px; border:1.5px solid var(--wf-ink); background:transparent; padding:6px 12px; border-radius:6px; font:inherit; font-size:14px; }
.sk-btn-fill { background: var(--wf-ink); color: var(--wf-bg); }
.sk-btn-accent { background: var(--wf-accent); color:#fff; border-color: var(--wf-accent); }
.sk-input { border:1.5px solid var(--wf-ink); background:transparent; padding:6px 8px; border-radius:6px; min-height:32px; font:inherit; color: var(--wf-muted); }
.sk-pill { display:inline-block; border:1.2px solid var(--wf-ink); padding:2px 10px; border-radius:999px; font-size:12px; }
.sk-pill-fill { background: var(--wf-ink); color: var(--wf-bg); }
.sk-pill-accent { background: var(--wf-accent); color:#fff; border-color: var(--wf-accent); }
.sk-divider { height:0; border-top:1.2px dashed var(--wf-ink); opacity:.6; margin:8px 0; }
.sk-img {
  background: var(--wf-surface);
  border:1.5px solid var(--wf-ink);
  display:flex; align-items:center; justify-content:center;
  position:relative;
  border-radius:6px;
  overflow:hidden;
}
.sk-img::after {
  content:""; position:absolute; inset:0;
  background-image: linear-gradient(135deg,
    transparent 0, transparent 49%,
    var(--wf-ink) 49%, var(--wf-ink) 51%,
    transparent 51%);
  background-size: 14px 14px;
  opacity:.10;
  pointer-events:none;
}
.sk-img-x::before {
  content:""; position:absolute; inset:0;
  background:
    linear-gradient(to bottom right, transparent calc(50% - 1px), var(--wf-ink) calc(50% - 0.5px), var(--wf-ink) calc(50% + 0.5px), transparent calc(50% + 1px)),
    linear-gradient(to bottom left, transparent calc(50% - 1px), var(--wf-ink) calc(50% - 0.5px), var(--wf-ink) calc(50% + 0.5px), transparent calc(50% + 1px));
  opacity:.35;
}
.sk-img-label { position:relative; z-index:1; font-family:'Space Mono', monospace; font-size:10px; color: var(--wf-muted); background: var(--wf-surface); padding:2px 6px; border-radius:3px; }

.sk-line { background: var(--wf-ink); height:1.5px; opacity:.85; }
.sk-line-thick { height:3px; }
.sk-line-light { opacity:.4; }
.sk-text-line { background: var(--wf-muted); height:7px; opacity:.35; border-radius:3px; }

.sk-row { display:flex; gap:8px; align-items:center; }
.sk-col { display:flex; flex-direction:column; gap:8px; }

.sk-tag-h { font-size:10px; text-transform:uppercase; letter-spacing:.1em; opacity:.6; font-family:'Space Mono', monospace; }

/* sketch wobble — adds rough hand-drawn vibe at higher sketchy level */
.wf.--sketchy .sk,
.wf.--sketchy .sk-card,
.wf.--sketchy .sk-btn,
.wf.--sketchy .sk-input,
.wf.--sketchy .sk-img {
  border-radius: 9px 7px 8px 6px / 6px 9px 7px 8px;
}
.wf.--sketchy .sk-pill { border-radius: 999px; }
.wf.--very-sketchy .sk,
.wf.--very-sketchy .sk-card,
.wf.--very-sketchy .sk-btn,
.wf.--very-sketchy .sk-input,
.wf.--very-sketchy .sk-img {
  border-radius: 11px 6px 10px 7px / 6px 11px 7px 10px;
  border-width: 2px;
}

/* density */
.wf.--compact .sk-card { padding:7px; }
.wf.--compact .sk-btn { padding:4px 9px; }
.wf.--airy .sk-card { padding:14px; }
.wf.--airy .sk-btn { padding:8px 16px; }

/* ink color marker — handwritten note marker */
.sk-marker {
  font-family:'Caveat', cursive;
  font-weight:600;
  color: var(--wf-accent);
  font-size:16px;
}

.sk-arrow { font-family:'Caveat'; color: var(--wf-accent); }

/* note hairline annotation */
.note-arrow {
  position:absolute;
  font-family:'Caveat', cursive;
  font-weight:600;
  color: var(--wf-accent);
  font-size:14px;
  pointer-events:none;
  line-height:1.1;
}

/* common page chrome */
.wf-stage { width:100%; height:100%; overflow:auto; padding: 14px; }
.wf-stage::-webkit-scrollbar { width:6px; height:6px; }
.wf-stage::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.18); border-radius:3px; }
`;

if (typeof document !== 'undefined' && !document.getElementById('wf-styles')) {
  const s = document.createElement('style');
  s.id = 'wf-styles';
  s.textContent = WF_STYLES;
  document.head.appendChild(s);
}

// ─── Logo placeholder ───────────────────────────────────────
function WfLogo({ size = 16 }) {
  return (
    <div style={{ display:'flex', alignItems:'center', gap:6, fontWeight:600 }}>
      <div style={{
        width: size+6, height: size+6, borderRadius:'50%',
        border:'1.5px solid currentColor',
        display:'flex', alignItems:'center', justifyContent:'center',
        fontFamily:'Caveat', fontWeight:700, fontSize: size,
        flexShrink:0,
      }}>n</div>
      <div style={{ lineHeight:1, fontFamily:'Caveat, cursive', fontSize: size+4, fontWeight:600 }}>
        Nana <span style={{ opacity:.6, fontWeight:400 }}>nettoyage&nbsp;·&nbsp;débarras</span>
      </div>
    </div>
  );
}

// ─── Top nav for public pages ───────────────────────────────
function WfNav({ active }) {
  const items = ['Accueil','Débarras','Nettoyage','Pour qui','Devis','Contact'];
  return (
    <div className="sk-row" style={{ justifyContent:'space-between', padding:'10px 14px', borderBottom:'1.2px dashed var(--wf-ink)' }}>
      <WfLogo />
      <div className="sk-row" style={{ gap:14, fontSize:13 }}>
        {items.map((i) => (
          <span key={i} style={{ borderBottom: i===active ? '1.5px solid var(--wf-accent)' : 'none', paddingBottom:2 }}>{i}</span>
        ))}
      </div>
      <span className="sk-btn sk-btn-accent" style={{ fontSize:12 }}>Demander un devis</span>
    </div>
  );
}

// ─── Admin shell ─────────────────────────────────────────────
function WfAdminShell({ active = 'Tableau de bord', children, dense=false, sidebarItems }) {
  const items = sidebarItems || ['Tableau de bord','Demandes','Missions','Planning','Clients','Pages du site','Médias','Avis','Réglages'];
  return (
    <div style={{ display:'flex', height:'100%', width:'100%' }}>
      <div style={{
        width: dense ? 150 : 168, flexShrink:0, padding:'12px 10px',
        borderRight:'1.2px dashed var(--wf-ink)',
        display:'flex', flexDirection:'column', gap: dense?4:6,
        background: 'rgba(0,0,0,0.025)',
      }}>
        <div style={{ marginBottom:8 }}><WfLogo size={14} /></div>
        <div className="sk-tag-h" style={{ marginTop:6 }}>Pilotage</div>
        {items.map((i) => (
          <div key={i} style={{
            padding:'5px 8px', borderRadius:5,
            background: i===active ? 'var(--wf-ink)' : 'transparent',
            color: i===active ? 'var(--wf-bg)' : 'inherit',
            fontSize:13, display:'flex', alignItems:'center', gap:6,
          }}>
            <span style={{ width:6, height:6, borderRadius:'50%', background:'currentColor', opacity:i===active?1:.3 }} />
            {i}
          </div>
        ))}
        <div style={{ flex:1 }} />
        <div className="sk-card" style={{ fontSize:11, padding:8 }}>
          <div className="sk-marker" style={{ fontSize:14 }}>Admin</div>
          <div style={{ opacity:.7 }}>Marie · Gérante</div>
        </div>
      </div>
      <div style={{ flex:1, display:'flex', flexDirection:'column', minWidth:0 }}>
        <div className="sk-row" style={{ justifyContent:'space-between', padding:'8px 14px', borderBottom:'1.2px dashed var(--wf-ink)', flexShrink:0 }}>
          <div className="wf-disp" style={{ fontSize:20 }}>{active}</div>
          <div className="sk-row" style={{ gap:8, fontSize:12 }}>
            <span className="sk-input" style={{ minWidth: dense?120:180, fontSize:12 }}>🔍 chercher…</span>
            <span className="sk-pill">3 nouv.</span>
            <span style={{ width:24, height:24, borderRadius:'50%', border:'1.5px solid currentColor', display:'flex', alignItems:'center', justifyContent:'center', fontSize:12 }}>M</span>
          </div>
        </div>
        <div style={{ flex:1, overflow:'auto', padding: dense?10:14 }}>
          {children}
        </div>
      </div>
    </div>
  );
}

// ─── Wireframe page wrapper ─────────────────────────────────
function WfPage({ palette, font, sketchy, density, children, clean }) {
  const cls = ['wf'];
  if (clean) cls.push('--clean');
  if (sketchy === 'medium') cls.push('--sketchy');
  if (sketchy === 'high') cls.push('--very-sketchy');
  if (density === 'compact') cls.push('--compact');
  if (density === 'airy') cls.push('--airy');
  return (
    <div className={cls.join(' ')} style={{
      '--wf-bg': palette.bg,
      '--wf-surface': palette.surface,
      '--wf-accent': palette.accent,
      '--wf-ink': palette.ink,
      '--wf-muted': palette.muted,
      '--wf-font': font,
    }}>
      {children}
    </div>
  );
}

// ─── Annotation note (sticky) ───────────────────────────────
function StickyNote({ children, style }) {
  return (
    <div style={{
      position:'absolute',
      background:'#FFE894', border:'1px solid rgba(0,0,0,.15)',
      padding:'4px 8px', fontFamily:'Caveat, cursive', fontWeight:500,
      fontSize:13, transform:'rotate(-3deg)', boxShadow:'0 1px 3px rgba(0,0,0,.12)',
      maxWidth:160, lineHeight:1.2,
      ...style,
    }}>{children}</div>
  );
}

// faux text bars
function TextBar({ w='100%', h=7, opacity=0.35 }) {
  return <div className="sk-text-line" style={{ width:w, height:h, opacity }} />;
}

// arrow with squiggle
function Squiggle({ w=40, h=18, dir='right' }) {
  return (
    <svg width={w} height={h} viewBox="0 0 40 18" fill="none" style={{ overflow:'visible' }}>
      <path d="M2,9 Q10,2 18,9 T36,9" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      {dir==='right' && <path d="M30,4 L36,9 L30,14" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>}
    </svg>
  );
}

Object.assign(window, {
  BEIGE_PALETTES,
  WfLogo, WfNav, WfAdminShell, WfPage, StickyNote, TextBar, Squiggle,
});
