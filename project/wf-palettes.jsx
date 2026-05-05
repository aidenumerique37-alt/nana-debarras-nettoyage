// wf-palettes.jsx — Palette swatch + mini-preview card

function PaletteSwatch({ palKey, pal, font='Patrick Hand' }) {
  return (
    <div style={{
      background: pal.bg, color: pal.ink,
      width:'100%', height:'100%',
      fontFamily: `'${font}', cursive`,
      display:'flex', flexDirection:'column',
      padding:14, position:'relative',
    }}>
      {/* header */}
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
        <div>
          <div style={{ fontSize:10, letterSpacing:'.12em', textTransform:'uppercase', opacity:.55, fontFamily:'Space Mono, monospace' }}>{palKey}</div>
          <div style={{ fontSize:18, fontWeight:600, lineHeight:1.1, marginTop:2 }}>{pal.label}</div>
        </div>
        <div style={{ display:'flex', gap:0 }}>
          {[pal.bg, pal.surface, pal.muted, pal.accent, pal.ink].map((c,i) => (
            <div key={i} style={{ width:14, height:32, background:c, border:'0.5px solid rgba(0,0,0,.15)' }} />
          ))}
        </div>
      </div>

      {/* mini hero */}
      <div style={{ marginTop:14, lineHeight:1, fontWeight:700, fontSize:26, fontFamily:`'Caveat', cursive` }}>
        Débarras &<br/>nettoyage,<br/>fait avec <span style={{ color: pal.accent }}>cœur</span>.
      </div>

      {/* mini card */}
      <div style={{
        marginTop:12, padding:'8px 10px',
        background: pal.surface,
        border:`1.5px solid ${pal.ink}`, borderRadius:8,
        fontSize:11,
      }}>
        <div style={{ fontSize:9, letterSpacing:'.1em', textTransform:'uppercase', opacity:.55 }}>nos services</div>
        <div style={{ display:'flex', gap:6, marginTop:6, flexWrap:'wrap' }}>
          {['Succession','Encombré','Fin de bail'].map((t,i)=>(
            <span key={t} style={{
              padding:'1px 8px', fontSize:10,
              border:`1px solid ${pal.ink}`,
              borderRadius:999,
              background: i===0 ? pal.accent : 'transparent',
              color: i===0 ? '#fff' : pal.ink,
              borderColor: i===0 ? pal.accent : pal.ink,
            }}>{t}</span>
          ))}
        </div>
      </div>

      {/* CTA + caption */}
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:'auto', paddingTop:10 }}>
        <div style={{
          padding:'5px 12px',
          background: pal.accent, color:'#fff',
          borderRadius:6, fontSize:11, fontWeight:600,
        }}>Devis gratuit →</div>
        <div style={{ fontSize:10, opacity:.55, fontFamily:'Space Mono, monospace' }}>
          {pal.bg.toUpperCase()} · {pal.accent.toUpperCase()}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { PaletteSwatch });
