// wf-home.jsx — 4 variations of public homepage

// V1: Hero photo + 2-service split
function HomeV1(props) {
  return (
    <WfPage {...props}>
      <div style={{ height:'100%', display:'flex', flexDirection:'column' }}>
        <WfNav active="Accueil" />
        <div className="wf-stage" style={{ paddingTop:0 }}>
          {/* Hero */}
          <div style={{ display:'grid', gridTemplateColumns:'1.05fr 1fr', gap:16, marginTop:14 }}>
            <div style={{ paddingTop:8 }}>
              <div className="sk-pill" style={{ fontSize:11 }}>Service local · Île-de-France</div>
              <div className="wf-disp" style={{ fontSize:38, lineHeight:1, marginTop:10 }}>
                Débarras & nettoyage,<br/>fait avec <span style={{ color:'var(--wf-accent)' }}>cœur</span>.
              </div>
              <div style={{ marginTop:10, fontSize:14, opacity:.75, maxWidth:340 }}>
                Succession, déménagement, logement encombré — on vous accompagne avec respect, discrétion et engagement écologique.
              </div>
              <div className="sk-row" style={{ marginTop:14, gap:10 }}>
                <span className="sk-btn sk-btn-accent">Demander un devis gratuit →</span>
                <span className="sk-btn">Nos prestations</span>
              </div>
              <div className="sk-row" style={{ marginTop:18, gap:14, fontSize:11 }}>
                <span>★★★★★ <b>4.9</b>/5 (87 avis)</span>
                <span style={{ opacity:.5 }}>•</span>
                <span>Devis sous 24h</span>
              </div>
            </div>
            <div className="sk-img" style={{ height:230 }}>
              <span className="sk-img-label">photo équipe / chantier</span>
            </div>
          </div>

          {/* 2 services */}
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12, marginTop:22 }}>
            {[
              { t:'Débarras', d:'Maison, appartement, cave, succession.', tag:'01' },
              { t:'Nettoyage', d:'Fin de bail, post-travaux, situations sensibles.', tag:'02' },
            ].map(s => (
              <div key={s.t} className="sk-card" style={{ padding:14, display:'flex', gap:10 }}>
                <div className="wf-disp" style={{ fontSize:30, color:'var(--wf-accent)' }}>{s.tag}</div>
                <div>
                  <div style={{ fontSize:18, fontWeight:600 }}>{s.t}</div>
                  <div style={{ fontSize:13, opacity:.7 }}>{s.d}</div>
                  <div style={{ marginTop:6, fontSize:12, color:'var(--wf-accent)' }}>en savoir plus →</div>
                </div>
              </div>
            ))}
          </div>

          {/* values */}
          <div style={{ marginTop:22 }}>
            <div className="sk-tag-h">Nos engagements</div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:10, marginTop:8 }}>
              {['Respect','Discrétion','Écologie','Réactivité'].map(v => (
                <div key={v} className="sk-card" style={{ padding:10, textAlign:'center', fontSize:13 }}>
                  <div style={{ fontSize:18, marginBottom:4 }}>○</div>{v}
                </div>
              ))}
            </div>
          </div>

          {/* trust */}
          <div className="sk-card" style={{ marginTop:18, padding:12, display:'flex', justifyContent:'space-between', alignItems:'center' }}>
            <div>
              <div className="sk-marker">Une situation sensible ?</div>
              <div style={{ fontSize:12, opacity:.7 }}>Succession, deuil, accompagnement social — appelez-nous.</div>
            </div>
            <span className="sk-btn sk-btn-fill">☎ 06 — — —</span>
          </div>
        </div>
      </div>
    </WfPage>
  );
}

// V2: Editorial — big type + minimal
function HomeV2(props) {
  return (
    <WfPage {...props}>
      <div style={{ height:'100%', display:'flex', flexDirection:'column' }}>
        <WfNav active="Accueil" />
        <div className="wf-stage">
          <div style={{ marginTop:30, fontSize:11, opacity:.6, textTransform:'uppercase', letterSpacing:'.15em', fontFamily:'Space Mono' }}>
            01 — Débarras &nbsp;·&nbsp; 02 — Nettoyage &nbsp;·&nbsp; depuis 2018
          </div>
          <div className="wf-disp" style={{ fontSize:54, lineHeight:0.95, marginTop:14, letterSpacing:'-0.02em' }}>
            Pour ce que la vie<br/>laisse derrière elle —<br/><span style={{ color:'var(--wf-accent)' }}>on est là.</span>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'1fr 1.6fr', gap:20, marginTop:32 }}>
            <div>
              <div style={{ fontSize:13, opacity:.75, lineHeight:1.5 }}>
                Une succession à régler. Un proche qui doit déménager. Un logement à remettre en état. Notre métier : enlever ce qui pèse, nettoyer ce qui reste, avec respect.
              </div>
              <div style={{ marginTop:14 }} className="sk-row">
                <span className="sk-btn sk-btn-fill">Devis →</span>
              </div>
            </div>
            <div className="sk-img" style={{ height:160 }}>
              <span className="sk-img-label">image éditoriale · espace nettoyé / lumière douce</span>
            </div>
          </div>

          {/* horizontal services */}
          <div style={{ marginTop:30, borderTop:'1.5px solid var(--wf-ink)', borderBottom:'1.5px solid var(--wf-ink)' }}>
            {['Débarras successoral','Logement encombré','Nettoyage fin de bail','Post-travaux'].map((s,i) => (
              <div key={s} className="sk-row" style={{ justifyContent:'space-between', padding:'10px 4px', borderBottom: i<3 ? '1px dashed var(--wf-ink)' : 'none' }}>
                <span style={{ fontFamily:'Space Mono', fontSize:11, opacity:.5, width:30 }}>{String(i+1).padStart(2,'0')}</span>
                <span style={{ flex:1, fontSize:16 }}>{s}</span>
                <Squiggle />
              </div>
            ))}
          </div>

          <div style={{ marginTop:22, display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12, fontSize:12 }}>
            <div><div className="wf-disp" style={{ fontSize:30, color:'var(--wf-accent)' }}>500+</div>chantiers réalisés</div>
            <div><div className="wf-disp" style={{ fontSize:30, color:'var(--wf-accent)' }}>92%</div>recyclé ou redonné</div>
            <div><div className="wf-disp" style={{ fontSize:30, color:'var(--wf-accent)' }}>24h</div>devis envoyé</div>
          </div>
        </div>
      </div>
    </WfPage>
  );
}

// V3: Card-based with situation-first selector
function HomeV3(props) {
  const situations = [
    'Je vide une maison après un décès',
    'Je déménage un proche âgé',
    'J\'ai un logement encombré ou insalubre',
    'Je remets en état un bien (fin de bail)',
  ];
  return (
    <WfPage {...props}>
      <div style={{ height:'100%', display:'flex', flexDirection:'column' }}>
        <WfNav active="Accueil" />
        <div className="wf-stage">
          <div style={{ textAlign:'center', marginTop:18 }}>
            <div className="sk-pill sk-pill-accent" style={{ fontSize:11 }}>Présent en Île-de-France · 7j/7</div>
            <div className="wf-disp" style={{ fontSize:34, marginTop:12, lineHeight:1.05 }}>
              Quelle est<br/>votre situation&nbsp;?
            </div>
            <div style={{ fontSize:13, opacity:.7, marginTop:6 }}>Choisissez — on vous oriente vers la bonne prestation.</div>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, marginTop:18 }}>
            {situations.map((s,i) => (
              <div key={s} className="sk-card" style={{ padding:14, position:'relative' }}>
                <div className="sk-tag-h" style={{ color:'var(--wf-accent)' }}>Situation {i+1}</div>
                <div style={{ fontSize:15, marginTop:6, fontWeight:500, lineHeight:1.25 }}>{s}</div>
                <div style={{ position:'absolute', right:10, top:'50%', transform:'translateY(-50%)', fontSize:18 }}>→</div>
              </div>
            ))}
          </div>

          <div className="sk-divider" style={{ margin:'22px 0 14px' }} />

          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:14 }}>
            <div className="sk-card" style={{ padding:12 }}>
              <div className="sk-marker">Notre approche</div>
              <ul style={{ paddingLeft:18, fontSize:12, lineHeight:1.6, margin:'6px 0 0' }}>
                <li>Visite gratuite et sans engagement</li>
                <li>Tri solidaire — on redonne au lieu de jeter</li>
                <li>Équipe formée aux situations sensibles</li>
              </ul>
            </div>
            <div className="sk-card" style={{ padding:12 }}>
              <div className="sk-marker">Ils nous ont fait confiance</div>
              <div style={{ fontSize:12, fontStyle:'italic', opacity:.8, marginTop:4 }}>
                « Une équipe précieuse au moment du décès de ma mère. Tout a été fait avec une délicatesse rare. »
              </div>
              <div style={{ fontSize:11, opacity:.5, marginTop:6 }}>— Hélène, Sceaux</div>
            </div>
          </div>
        </div>
      </div>
    </WfPage>
  );
}

// V4: Storytelling / scrolling sections — vertical narrative
function HomeV4(props) {
  return (
    <WfPage {...props}>
      <div style={{ height:'100%', display:'flex', flexDirection:'column' }}>
        <WfNav active="Accueil" />
        <div className="wf-stage" style={{ padding:0 }}>
          {/* Section 1 : intro warm */}
          <div style={{ padding:'30px 22px', borderBottom:'1.5px solid var(--wf-ink)', background:'var(--wf-surface)' }}>
            <div className="sk-tag-h">— Bonjour</div>
            <div className="wf-disp" style={{ fontSize:30, lineHeight:1.05, marginTop:6 }}>
              On enlève ce qui pèse.<br/>On laisse l'espace respirer.
            </div>
            <div style={{ fontSize:13, opacity:.75, marginTop:10, maxWidth:380 }}>
              Nana, c'est une équipe à taille humaine basée en Île-de-France, spécialisée dans le débarras et le nettoyage des situations délicates.
            </div>
            <div style={{ marginTop:12 }}>
              <span className="sk-btn sk-btn-accent">Parlons-en →</span>
            </div>
          </div>

          {/* Section 2 : ce qu'on fait */}
          <div style={{ padding:'24px 22px', borderBottom:'1.5px solid var(--wf-ink)' }}>
            <div className="sk-tag-h">Ce qu'on fait</div>
            <div style={{ display:'flex', gap:8, marginTop:10, overflowX:'auto' }}>
              {[
                { t:'Débarras complet', d:'Maison, appart, cave' },
                { t:'Succession', d:'Avec respect & inventaire' },
                { t:'Logement insalubre', d:'Diogène, syllogomanie' },
                { t:'Nettoyage profond', d:'Post-travaux, fin de bail' },
              ].map(c => (
                <div key={c.t} className="sk-card" style={{ minWidth:160, padding:10, flexShrink:0 }}>
                  <div style={{ fontSize:14, fontWeight:600 }}>{c.t}</div>
                  <div style={{ fontSize:11, opacity:.7 }}>{c.d}</div>
                  <div className="sk-img" style={{ height:60, marginTop:8 }}>
                    <span className="sk-img-label">img</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3 : pour qui */}
          <div style={{ padding:'24px 22px', borderBottom:'1.5px solid var(--wf-ink)' }}>
            <div className="sk-tag-h">Pour qui</div>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, marginTop:8 }}>
              <div className="sk-card" style={{ padding:10, fontSize:13 }}>
                <b>Particuliers</b>
                <div style={{ opacity:.7, fontSize:12 }}>Familles, héritiers, locataires</div>
              </div>
              <div className="sk-card" style={{ padding:10, fontSize:13 }}>
                <b>Professionnels</b>
                <div style={{ opacity:.7, fontSize:12 }}>Notaires, agences immo, collectivités</div>
              </div>
            </div>
          </div>

          {/* Section 4 : engagement écolo */}
          <div style={{ padding:'24px 22px', background:'var(--wf-surface)' }}>
            <div className="sk-tag-h">Notre engagement</div>
            <div className="wf-disp" style={{ fontSize:24, marginTop:6 }}>92% détourné de la décharge.</div>
            <div style={{ fontSize:12, opacity:.7, marginTop:6 }}>Tri, dons aux assoc, recyclage filière. On préfère redonner que jeter.</div>
            <div style={{ marginTop:12 }}>
              <span className="sk-btn">Voir notre démarche</span>
            </div>
          </div>
        </div>
      </div>
    </WfPage>
  );
}

Object.assign(window, { HomeV1, HomeV2, HomeV3, HomeV4 });
