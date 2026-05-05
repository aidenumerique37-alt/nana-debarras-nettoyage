// wf-planning.jsx — Calendrier de planning

// V1: Vue semaine classique
function PlanningV1(props) {
  const days = ['Lun 28','Mar 29','Mer 30','Jeu 1','Ven 2','Sam 3','Dim 4'];
  const hours = ['8h','10h','12h','14h','16h','18h'];
  const events = [
    { d:2, top:0, h:90, t:'Succession Martin', team:'Karim+Sofiane', accent:true },
    { d:3, top:120, h:60, t:'Nettoyage Bernard', team:'Marie' },
    { d:4, top:50, h:140, t:'Débarras Roux', team:'Karim' },
    { d:0, top:30, h:60, t:'Visite Vidal', team:'Marie', dashed:true },
    { d:5, top:0, h:200, t:'Maison Antony', team:'équipe complète', accent:true },
  ];
  return (
    <WfPage {...props}>
      <WfAdminShell active="Planning">
        <div className="sk-row" style={{ justifyContent:'space-between', marginBottom:8 }}>
          <div className="sk-row" style={{ gap:6 }}>
            <span className="sk-btn">←</span>
            <span className="wf-disp" style={{ fontSize:18 }}>Sem. 18 · 28 avr — 4 mai</span>
            <span className="sk-btn">→</span>
            <span className="sk-pill" style={{ fontSize:11 }}>aujourd'hui</span>
          </div>
          <div className="sk-row" style={{ gap:6 }}>
            <span className="sk-pill">Jour</span>
            <span className="sk-pill sk-pill-accent">Semaine</span>
            <span className="sk-pill">Mois</span>
            <span className="sk-btn sk-btn-fill" style={{ fontSize:11 }}>+ Mission</span>
          </div>
        </div>

        <div className="sk-card" style={{ padding:0, overflow:'hidden', height:'calc(100% - 50px)' }}>
          <div style={{ display:'grid', gridTemplateColumns:'40px repeat(7, 1fr)', borderBottom:'1.5px solid var(--wf-ink)' }}>
            <div />
            {days.map((d,i) => (
              <div key={d} style={{ padding:'6px 4px', borderLeft:'1px dashed var(--wf-ink)', textAlign:'center', fontSize:11, background: i===2?'var(--wf-surface)':'transparent' }}>
                <div style={{ fontWeight: i===2?700:500 }}>{d}</div>
              </div>
            ))}
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'40px repeat(7, 1fr)', position:'relative', height:'calc(100% - 30px)' }}>
            <div style={{ display:'flex', flexDirection:'column' }}>
              {hours.map(h => (
                <div key={h} style={{ flex:1, fontSize:9, padding:2, fontFamily:'Space Mono', opacity:.5, borderBottom:'1px dashed var(--wf-ink)' }}>{h}</div>
              ))}
            </div>
            {days.map((d,i) => (
              <div key={i} style={{ borderLeft:'1px dashed var(--wf-ink)', position:'relative', display:'flex', flexDirection:'column' }}>
                {hours.map((_,j) => <div key={j} style={{ flex:1, borderBottom:'1px dashed var(--wf-ink)', opacity:.3 }} />)}
              </div>
            ))}
            {events.map((e,i) => (
              <div key={i} style={{
                position:'absolute',
                left:`calc(40px + ${e.d} * (100% - 40px) / 7 + 2px)`,
                width:`calc((100% - 40px) / 7 - 4px)`,
                top: e.top, height: e.h,
                background: e.accent?'var(--wf-accent)':'var(--wf-ink)',
                color:'#fff',
                padding:6, fontSize:10, borderRadius:4,
                opacity: e.dashed?.6:1,
                border: e.dashed?'1.5px dashed #fff':'none',
              }}>
                <div style={{ fontWeight:600 }}>{e.t}</div>
                <div style={{ opacity:.85 }}>{e.team}</div>
              </div>
            ))}
          </div>
        </div>
      </WfAdminShell>
    </WfPage>
  );
}

// V2: Liste agenda — vertical par jour
function PlanningV2(props) {
  const days = [
    { d:'Mer. 30 avril', n:"Aujourd'hui", events:[
      { h:'9h - 13h', t:'Succession Martin', l:'Sceaux', team:'K+S', tag:'sensible', accent:true },
      { h:'14h - 17h', t:'Nettoyage Bernard', l:'Paris 14e', team:'M', tag:'fin de bail' },
    ]},
    { d:'Jeu. 1 mai', n:'férié', events:[]},
    { d:'Ven. 2 mai', events:[
      { h:'8h - 18h', t:'Maison Antony', l:'Antony', team:'équipe', tag:'gros chantier', accent:true },
    ]},
    { d:'Sam. 3 mai', events:[
      { h:'10h - 12h', t:'Visite Vidal', l:'Bagneux', team:'M', tag:'visite' },
    ]},
  ];
  return (
    <WfPage {...props}>
      <WfAdminShell active="Planning">
        <div className="sk-row" style={{ justifyContent:'space-between', marginBottom:8 }}>
          <div className="wf-disp" style={{ fontSize:20 }}>Agenda · semaine 18</div>
          <div className="sk-row" style={{ gap:6 }}>
            <span className="sk-pill">Jour</span>
            <span className="sk-pill">Sem.</span>
            <span className="sk-pill sk-pill-accent">Liste</span>
            <span className="sk-btn sk-btn-fill" style={{ fontSize:11 }}>+ Mission</span>
          </div>
        </div>

        <div className="sk-col" style={{ gap:14 }}>
          {days.map(d => (
            <div key={d.d}>
              <div className="sk-row" style={{ justifyContent:'space-between', borderBottom:'1.2px solid var(--wf-ink)', paddingBottom:4 }}>
                <span style={{ fontWeight:600 }}>{d.d}</span>
                {d.n && <span className="sk-pill" style={{ fontSize:10 }}>{d.n}</span>}
              </div>
              {d.events.length === 0 ? (
                <div style={{ fontSize:12, opacity:.4, padding:'10px 0', fontStyle:'italic' }}>— aucun chantier —</div>
              ) : d.events.map((e,i) => (
                <div key={i} className="sk-card" style={{ padding:10, marginTop:6, display:'grid', gridTemplateColumns:'90px 1fr auto', gap:10, alignItems:'center', background: e.accent?'var(--wf-surface)':'transparent', borderLeft:`3px solid ${e.accent?'var(--wf-accent)':'var(--wf-ink)'}` }}>
                  <div style={{ fontFamily:'Space Mono', fontSize:11 }}>{e.h}</div>
                  <div>
                    <div style={{ fontWeight:600, fontSize:13 }}>{e.t}</div>
                    <div style={{ fontSize:11, opacity:.7 }}>📍 {e.l} · 👤 {e.team}</div>
                  </div>
                  <span className="sk-pill" style={{ fontSize:10 }}>{e.tag}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </WfAdminShell>
    </WfPage>
  );
}

// V3: Vue mois calendrier
function PlanningV3(props) {
  return (
    <WfPage {...props}>
      <WfAdminShell active="Planning">
        <div className="sk-row" style={{ justifyContent:'space-between', marginBottom:8 }}>
          <div className="sk-row" style={{ gap:6 }}>
            <span className="sk-btn">←</span>
            <span className="wf-disp" style={{ fontSize:20 }}>Avril 2026</span>
            <span className="sk-btn">→</span>
          </div>
          <div className="sk-row" style={{ gap:6 }}>
            <span className="sk-pill">Sem.</span>
            <span className="sk-pill sk-pill-accent">Mois</span>
            <span className="sk-btn sk-btn-fill" style={{ fontSize:11 }}>+ Mission</span>
          </div>
        </div>

        <div className="sk-card" style={{ padding:0, overflow:'hidden' }}>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(7,1fr)', borderBottom:'1.5px solid var(--wf-ink)' }}>
            {['Lun','Mar','Mer','Jeu','Ven','Sam','Dim'].map(d => (
              <div key={d} style={{ padding:'4px 6px', borderLeft:'1px dashed var(--wf-ink)', fontSize:10, fontFamily:'Space Mono', opacity:.6 }}>{d}</div>
            ))}
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(7,1fr)', gridAutoRows:'1fr' }}>
            {Array.from({length:35}).map((_,i) => {
              const day = i - 2;
              const inMonth = day >= 1 && day <= 30;
              const today = day === 30;
              const events = {
                3:[{ t:'Mme V.', accent:true }],
                7:[{ t:'Bernard' }],
                12:[{ t:'Roux',accent:true },{ t:'visite' }],
                15:[{ t:'Étude L.' }],
                19:[{ t:'visite Martin' }],
                22:[{ t:'Antony', accent:true }],
                24:[{ t:'devis' }],
                30:[{ t:'Martin', accent:true },{ t:'Bernard' }],
              }[day] || [];
              return (
                <div key={i} style={{
                  borderLeft:'1px dashed var(--wf-ink)',
                  borderTop:'1px dashed var(--wf-ink)',
                  minHeight:60, padding:4,
                  background: today?'var(--wf-surface)':'transparent',
                  opacity: inMonth?1:.3,
                }}>
                  <div style={{ fontSize:10, fontFamily:'Space Mono', fontWeight: today?700:400, color: today?'var(--wf-accent)':'inherit' }}>{inMonth?day:''}</div>
                  <div className="sk-col" style={{ gap:2, marginTop:3 }}>
                    {events.map((e,j) => (
                      <div key={j} style={{
                        fontSize:9,
                        padding:'1px 4px',
                        background: e.accent?'var(--wf-accent)':'var(--wf-ink)',
                        color:'#fff', borderRadius:2,
                        whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis',
                      }}>{e.t}</div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="sk-row" style={{ marginTop:8, gap:10, fontSize:11 }}>
          <span><span style={{ display:'inline-block', width:10, height:10, background:'var(--wf-accent)', verticalAlign:'middle', marginRight:4 }} />gros chantier</span>
          <span><span style={{ display:'inline-block', width:10, height:10, background:'var(--wf-ink)', verticalAlign:'middle', marginRight:4 }} />intervention</span>
        </div>
      </WfAdminShell>
    </WfPage>
  );
}

// V4: Vue par équipe (gantt swim-lanes)
function PlanningV4(props) {
  const teams = [
    { n:'Marie', color:'var(--wf-accent)' },
    { n:'Karim', color:'var(--wf-ink)' },
    { n:'Sofiane', color:'#7A8C6A' },
    { n:'Léa', color:'#A67B5B' },
  ];
  const events = [
    { team:0, start:1, len:2, t:'Visite Vidal' },
    { team:0, start:3, len:1, t:'Bernard' },
    { team:1, start:2, len:2, t:'Succession Martin' },
    { team:1, start:4, len:2, t:'Antony' },
    { team:2, start:2, len:2, t:'Succession Martin' },
    { team:2, start:4, len:2, t:'Antony' },
    { team:3, start:0, len:1, t:'Roux' },
    { team:3, start:4, len:2, t:'Antony' },
  ];
  const days = ['Lun 28','Mar 29','Mer 30','Jeu 1','Ven 2','Sam 3'];
  return (
    <WfPage {...props}>
      <WfAdminShell active="Planning">
        <div className="sk-row" style={{ justifyContent:'space-between', marginBottom:8 }}>
          <div>
            <div className="wf-disp" style={{ fontSize:20 }}>Planning équipes</div>
            <div style={{ fontSize:12, opacity:.6 }}>Sem. 18 · qui fait quoi, jour par jour</div>
          </div>
          <div className="sk-row" style={{ gap:6 }}>
            <span className="sk-pill">par jour</span>
            <span className="sk-pill sk-pill-accent">par équipe</span>
            <span className="sk-pill">par mission</span>
          </div>
        </div>

        <div className="sk-card" style={{ padding:0, overflow:'hidden' }}>
          <div style={{ display:'grid', gridTemplateColumns:'120px repeat(6,1fr)', borderBottom:'1.5px solid var(--wf-ink)' }}>
            <div style={{ padding:'6px 8px', fontSize:10, fontFamily:'Space Mono', opacity:.6 }}>équipe / jour</div>
            {days.map((d,i) => (
              <div key={d} style={{ padding:'6px 4px', borderLeft:'1px dashed var(--wf-ink)', fontSize:11, textAlign:'center' }}>{d}</div>
            ))}
          </div>
          {teams.map((t,ti) => (
            <div key={t.n} style={{ display:'grid', gridTemplateColumns:'120px repeat(6,1fr)', borderBottom:'1px dashed var(--wf-ink)', height:50, position:'relative' }}>
              <div style={{ padding:8, fontSize:12, fontWeight:500, display:'flex', alignItems:'center', gap:6 }}>
                <span style={{ width:10, height:10, borderRadius:'50%', background: t.color }} />
                {t.n}
              </div>
              {days.map((_,i)=>(
                <div key={i} style={{ borderLeft:'1px dashed var(--wf-ink)' }} />
              ))}
              {events.filter(e => e.team===ti).map((e,i) => (
                <div key={i} style={{
                  position:'absolute',
                  left:`calc(120px + ${e.start} * (100% - 120px) / 6 + 2px)`,
                  width:`calc(${e.len} * (100% - 120px) / 6 - 4px)`,
                  top:8, bottom:8,
                  background: t.color, color:'#fff',
                  fontSize:11, padding:'4px 6px', borderRadius:4,
                  display:'flex', alignItems:'center',
                }}>{e.t}</div>
              ))}
            </div>
          ))}
        </div>

        <div className="sk-row" style={{ marginTop:8, fontSize:11, opacity:.6, gap:10 }}>
          <span>💡 cliquer-glisser pour réassigner · Léa libre vendredi matin</span>
        </div>

        <StickyNote style={{ top:80, right:20 }}>
          drag&drop<br/>pour ré-affecter
        </StickyNote>
      </WfAdminShell>
    </WfPage>
  );
}

Object.assign(window, { PlanningV1, PlanningV2, PlanningV3, PlanningV4 });
