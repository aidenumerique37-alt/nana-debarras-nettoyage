// wf-service.jsx — Page service (débarras / nettoyage)

// V1: Classic — visuel + checklist + tarif
function ServiceV1(props) {
  return (
    <WfPage {...props}>
      <div style={{ height:'100%', display:'flex', flexDirection:'column' }}>
        <WfNav active="Débarras" />
        <div className="wf-stage">
          <div style={{ fontSize:11, opacity:.6 }}>Accueil → Prestations → <b>Débarras</b></div>
          <div className="wf-disp" style={{ fontSize:32, marginTop:6 }}>Débarras de logement</div>
          <div style={{ fontSize:13, opacity:.75, maxWidth:480 }}>
            Pour vider une maison, un appartement ou une cave, après un décès, un déménagement ou une accumulation.
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'1.4fr 1fr', gap:14, marginTop:14 }}>
            <div className="sk-img" style={{ height:200 }}>
              <span className="sk-img-label">photo avant / après</span>
            </div>
            <div className="sk-card" style={{ padding:12 }}>
              <div className="sk-marker">À partir de</div>
              <div className="wf-disp" style={{ fontSize:36, lineHeight:1, color:'var(--wf-accent)' }}>290€</div>
              <div style={{ fontSize:11, opacity:.6 }}>devis personnalisé selon volume</div>
              <div className="sk-divider" />
              <div style={{ fontSize:12 }}>
                <div>✓ Visite gratuite</div>
                <div>✓ Tri solidaire inclus</div>
                <div>✓ Évacuation & traitement</div>
                <div>✓ Nettoyage de base</div>
              </div>
              <div style={{ marginTop:10 }}>
                <span className="sk-btn sk-btn-accent" style={{ width:'100%' }}>Demander un devis →</span>
              </div>
            </div>
          </div>

          <div style={{ marginTop:18 }}>
            <div className="sk-tag-h">Notre méthode en 4 étapes</div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:8, marginTop:8 }}>
              {['Visite & devis','Inventaire & tri','Évacuation','Nettoyage'].map((s,i) => (
                <div key={s} className="sk-card" style={{ padding:8, fontSize:12 }}>
                  <div className="wf-disp" style={{ fontSize:22, color:'var(--wf-accent)' }}>{i+1}</div>
                  <div style={{ fontWeight:600 }}>{s}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop:18 }}>
            <div className="sk-tag-h">Cas fréquents</div>
            <div className="sk-row" style={{ flexWrap:'wrap', gap:6, marginTop:6 }}>
              {['Succession','Logement Diogène','Cave / grenier','Bureaux','Local commercial'].map(c => (
                <span key={c} className="sk-pill">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </WfPage>
  );
}

// V2: Calculatrice de prix interactive en haut
function ServiceV2(props) {
  return (
    <WfPage {...props}>
      <div style={{ height:'100%', display:'flex', flexDirection:'column' }}>
        <WfNav active="Débarras" />
        <div className="wf-stage">
          <div className="wf-disp" style={{ fontSize:30, marginTop:6 }}>Estimez votre débarras</div>
          <div style={{ fontSize:13, opacity:.75 }}>Une fourchette indicative en moins d'une minute.</div>

          <div className="sk-card" style={{ padding:14, marginTop:12, background:'var(--wf-surface)' }}>
            <div className="sk-tag-h">1. Type de bien</div>
            <div className="sk-row" style={{ flexWrap:'wrap', gap:6, marginTop:6 }}>
              {['Studio','Appart 2-3 P','Maison','Cave','Garage'].map((t,i)=>(
                <span key={t} className={`sk-pill ${i===2?'sk-pill-accent':''}`}>{t}</span>
              ))}
            </div>
            <div className="sk-tag-h" style={{ marginTop:12 }}>2. Volume estimé</div>
            <div style={{ position:'relative', height:32, marginTop:6 }}>
              <div style={{ position:'absolute', top:14, left:0, right:0, height:3, background:'var(--wf-ink)', opacity:.2 }} />
              <div style={{ position:'absolute', top:14, left:0, width:'55%', height:3, background:'var(--wf-accent)' }} />
              <div style={{ position:'absolute', left:'55%', top:8, width:14, height:14, borderRadius:'50%', background:'var(--wf-accent)', transform:'translateX(-50%)' }} />
              <div className="sk-row" style={{ position:'absolute', bottom:-2, left:0, right:0, justifyContent:'space-between', fontSize:11, opacity:.6 }}>
                <span>peu</span><span>moyen</span><span>beaucoup</span>
              </div>
            </div>
            <div className="sk-tag-h" style={{ marginTop:14 }}>3. Particularités</div>
            <div className="sk-row" style={{ flexWrap:'wrap', gap:6, marginTop:6 }}>
              {['Étage sans asc.','Mobilier lourd','Encombrant','Insalubre','Délicat (succession)'].map(t=>(
                <span key={t} className="sk-pill">☐ {t}</span>
              ))}
            </div>

            <div className="sk-divider" />

            <div className="sk-row" style={{ justifyContent:'space-between', alignItems:'flex-end' }}>
              <div>
                <div className="sk-tag-h">Estimation</div>
                <div className="wf-disp" style={{ fontSize:32, lineHeight:1, color:'var(--wf-accent)' }}>850 — 1 200€</div>
                <div style={{ fontSize:11, opacity:.6 }}>fourchette indicative · à confirmer en visite</div>
              </div>
              <span className="sk-btn sk-btn-fill">Demander le devis →</span>
            </div>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, marginTop:14 }}>
            <div className="sk-card" style={{ padding:10 }}>
              <div className="sk-marker">Ce qui est inclus</div>
              <div style={{ fontSize:12, opacity:.8, marginTop:4 }}>Main d'œuvre, camion, traitement déchets, tri, balayage final.</div>
            </div>
            <div className="sk-card" style={{ padding:10 }}>
              <div className="sk-marker">Ce qui peut s'ajouter</div>
              <div style={{ fontSize:12, opacity:.8, marginTop:4 }}>Nettoyage profond, dératisation, désinfection, garde-meuble.</div>
            </div>
          </div>
        </div>
      </div>
    </WfPage>
  );
}

// V3: Story — quand faire appel à nous (cas concrets)
function ServiceV3(props) {
  return (
    <WfPage {...props}>
      <div style={{ height:'100%', display:'flex', flexDirection:'column' }}>
        <WfNav active="Débarras" />
        <div className="wf-stage">
          <div className="wf-disp" style={{ fontSize:28, marginTop:6 }}>Trois moments où l'on arrive.</div>
          <div className="sk-divider" />

          {[
            { n:'01', t:'Après un décès', d:'On respecte le rythme de la famille. Inventaire avec vous, mise de côté des objets précieux, dons des meubles encore utiles, recyclage du reste.', tag:'Succession · Notaire' },
            { n:'02', t:'Quand un proche s\'enferme', d:'Logement encombré, accumulation, syllogomanie. Sans jugement, sans presse. On travaille avec les services sociaux si besoin.', tag:'Insalubre · Sensible' },
            { n:'03', t:'Quand un lieu doit redevenir disponible', d:'Fin de bail, vente, nouvelle vie. On rend la maison vide, propre, prête à être livrée.', tag:'Locatif · Pro' },
          ].map(c => (
            <div key={c.n} style={{ display:'grid', gridTemplateColumns:'40px 1fr', gap:12, padding:'14px 0', borderBottom:'1px dashed var(--wf-ink)' }}>
              <div className="wf-disp" style={{ fontSize:34, lineHeight:0.9, color:'var(--wf-accent)' }}>{c.n}</div>
              <div>
                <div style={{ fontSize:18, fontWeight:600 }}>{c.t}</div>
                <div style={{ fontSize:13, opacity:.78, marginTop:4 }}>{c.d}</div>
                <div className="sk-row" style={{ marginTop:6, gap:6 }}>
                  {c.tag.split(' · ').map(t => <span key={t} className="sk-pill" style={{ fontSize:10 }}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}

          <div className="sk-card" style={{ marginTop:16, padding:14, background:'var(--wf-surface)', textAlign:'center' }}>
            <div className="sk-marker">Votre situation est différente ?</div>
            <div style={{ fontSize:12, opacity:.7 }}>On vient voir, on vous écoute, on propose une solution.</div>
            <div style={{ marginTop:8 }}>
              <span className="sk-btn sk-btn-accent">Prendre rendez-vous</span>
            </div>
          </div>
        </div>
      </div>
    </WfPage>
  );
}

// V4: Comparatif Débarras vs Nettoyage côte à côte
function ServiceV4(props) {
  const rows = [
    ['Vider les pièces','✓','—'],
    ['Trier & inventorier','✓','—'],
    ['Évacuation déchets','✓','✓'],
    ['Nettoyage de base','✓','✓'],
    ['Nettoyage profond','option','✓'],
    ['Désinfection','option','option'],
    ['Délai moyen','1-3 jours','½-2 jours'],
    ['À partir de','290€','180€'],
  ];
  return (
    <WfPage {...props}>
      <div style={{ height:'100%', display:'flex', flexDirection:'column' }}>
        <WfNav active="Débarras" />
        <div className="wf-stage">
          <div className="wf-disp" style={{ fontSize:28, marginTop:6 }}>Débarras ou nettoyage ?</div>
          <div style={{ fontSize:13, opacity:.75 }}>Souvent les deux. Voici comment on les distingue.</div>

          <div className="sk-card" style={{ padding:0, overflow:'hidden', marginTop:14 }}>
            <div style={{ display:'grid', gridTemplateColumns:'1.3fr 1fr 1fr', borderBottom:'1.5px solid var(--wf-ink)' }}>
              <div style={{ padding:10 }} />
              <div style={{ padding:10, borderLeft:'1px dashed var(--wf-ink)', textAlign:'center' }}>
                <div className="wf-disp" style={{ fontSize:18 }}>Débarras</div>
                <div style={{ fontSize:11, opacity:.6 }}>on vide</div>
              </div>
              <div style={{ padding:10, borderLeft:'1px dashed var(--wf-ink)', textAlign:'center', background:'var(--wf-surface)' }}>
                <div className="wf-disp" style={{ fontSize:18, color:'var(--wf-accent)' }}>Nettoyage</div>
                <div style={{ fontSize:11, opacity:.6 }}>on remet à neuf</div>
              </div>
            </div>
            {rows.map((r,i) => (
              <div key={r[0]} style={{ display:'grid', gridTemplateColumns:'1.3fr 1fr 1fr', borderBottom: i<rows.length-1 ? '1px dashed var(--wf-ink)' : 'none', fontSize:12 }}>
                <div style={{ padding:'8px 10px' }}>{r[0]}</div>
                <div style={{ padding:'8px 10px', borderLeft:'1px dashed var(--wf-ink)', textAlign:'center' }}>{r[1]}</div>
                <div style={{ padding:'8px 10px', borderLeft:'1px dashed var(--wf-ink)', textAlign:'center', background:'var(--wf-surface)' }}>{r[2]}</div>
              </div>
            ))}
          </div>

          <div className="sk-row" style={{ justifyContent:'center', gap:10, marginTop:14 }}>
            <span className="sk-btn">Plus sur le débarras</span>
            <span className="sk-btn sk-btn-accent">Plus sur le nettoyage</span>
          </div>

          <StickyNote style={{ top:60, right:20 }}>
            Pack combiné<br/>-15%
          </StickyNote>
        </div>
      </div>
    </WfPage>
  );
}

Object.assign(window, { ServiceV1, ServiceV2, ServiceV3, ServiceV4 });
