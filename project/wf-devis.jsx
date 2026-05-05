// wf-devis.jsx — Formulaire devis multi-étapes

function StepBar({ step, total=5, labels }) {
  return (
    <div>
      <div className="sk-row" style={{ justifyContent:'space-between', fontSize:10, fontFamily:'Space Mono', opacity:.6 }}>
        <span>Étape {step}/{total}</span><span>{Math.round(step/total*100)}%</span>
      </div>
      <div style={{ display:'flex', gap:4, marginTop:4 }}>
        {Array.from({length:total}).map((_,i)=>(
          <div key={i} style={{ flex:1, height:5, borderRadius:3, background: i<step ? 'var(--wf-accent)' : 'rgba(0,0,0,0.12)' }} />
        ))}
      </div>
      {labels && <div className="sk-row" style={{ marginTop:6, fontSize:10, opacity:.6, justifyContent:'space-between' }}>
        {labels.map((l,i)=><span key={l} style={{ fontWeight: i===step-1?700:400, color: i===step-1?'var(--wf-accent)':'inherit' }}>{l}</span>)}
      </div>}
    </div>
  );
}

// V1: Linéaire vertical, une étape complète visible
function DevisV1(props) {
  return (
    <WfPage {...props}>
      <div style={{ height:'100%', display:'flex', flexDirection:'column' }}>
        <WfNav active="Devis" />
        <div className="wf-stage">
          <div className="wf-disp" style={{ fontSize:26 }}>Demande de devis</div>
          <div style={{ fontSize:12, opacity:.7 }}>5 minutes · sans engagement · réponse sous 24h</div>

          <div style={{ marginTop:12 }}>
            <StepBar step={2} total={5} labels={['Situation','Bien','Détails','Photos','Coordonnées']} />
          </div>

          <div className="sk-card" style={{ padding:16, marginTop:14 }}>
            <div className="sk-tag-h">Étape 2 — Le bien à traiter</div>

            <div style={{ marginTop:10 }}>
              <div style={{ fontSize:13, fontWeight:600, marginBottom:4 }}>Type de bien</div>
              <div className="sk-row" style={{ flexWrap:'wrap', gap:6 }}>
                {['Maison','Appartement','Local','Cave/grenier','Autre'].map((t,i)=>(
                  <span key={t} className={`sk-pill ${i===1?'sk-pill-accent':''}`}>{t}</span>
                ))}
              </div>
            </div>

            <div style={{ marginTop:14, display:'grid', gridTemplateColumns:'1fr 1fr', gap:10 }}>
              <div>
                <div style={{ fontSize:13, fontWeight:600, marginBottom:4 }}>Surface (m²)</div>
                <div className="sk-input">62</div>
              </div>
              <div>
                <div style={{ fontSize:13, fontWeight:600, marginBottom:4 }}>Étage</div>
                <div className="sk-input">3e · sans ascenseur</div>
              </div>
            </div>

            <div style={{ marginTop:14 }}>
              <div style={{ fontSize:13, fontWeight:600, marginBottom:4 }}>Adresse approximative</div>
              <div className="sk-input">__ rue ____, 92330 Sceaux</div>
            </div>

            <div style={{ marginTop:14 }}>
              <div style={{ fontSize:13, fontWeight:600, marginBottom:6 }}>État général</div>
              <div className="sk-row" style={{ gap:6, flexWrap:'wrap' }}>
                {['Peu encombré','Encombré','Très encombré','Insalubre'].map(t=>(
                  <span key={t} className="sk-pill">○ {t}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="sk-row" style={{ marginTop:14, justifyContent:'space-between' }}>
            <span className="sk-btn">← Retour</span>
            <span className="sk-btn sk-btn-accent">Continuer →</span>
          </div>
        </div>
      </div>
    </WfPage>
  );
}

// V2: Conversationnel — question/answer one at a time
function DevisV2(props) {
  return (
    <WfPage {...props}>
      <div style={{ height:'100%', display:'flex', flexDirection:'column', justifyContent:'center', padding:'0 30px' }}>
        <div style={{ position:'absolute', top:14, left:14 }}><WfLogo /></div>
        <div style={{ position:'absolute', top:14, right:14, fontSize:11, fontFamily:'Space Mono', opacity:.6 }}>Étape 3 sur 7</div>

        <div className="sk-tag-h" style={{ color:'var(--wf-accent)' }}>Question rapide</div>
        <div className="wf-disp" style={{ fontSize:36, lineHeight:1.05, marginTop:4 }}>
          Dans quelle situation<br/>vous trouvez-vous ?
        </div>
        <div style={{ fontSize:13, opacity:.7, marginTop:6 }}>Pour qu'on adapte la suite des questions et l'équipe.</div>

        <div className="sk-col" style={{ marginTop:18, gap:8 }}>
          {['Une succession à régler','Un déménagement à organiser','Un logement à remettre en état','Un débarras urgent','Autre'].map((t,i)=>(
            <div key={t} className="sk-card" style={{ padding:'10px 12px', display:'flex', alignItems:'center', gap:10, background: i===0?'var(--wf-surface)':'transparent' }}>
              <span style={{ width:18, height:18, borderRadius:'50%', border:'1.5px solid var(--wf-ink)', background: i===0?'var(--wf-accent)':'transparent' }} />
              <span style={{ fontSize:14 }}>{t}</span>
            </div>
          ))}
        </div>

        <div className="sk-row" style={{ marginTop:18, justifyContent:'space-between' }}>
          <span style={{ fontSize:12, opacity:.6 }}>↩ retour</span>
          <span className="sk-btn sk-btn-accent">Suivant ↵</span>
        </div>

        <StickyNote style={{ bottom:30, right:20 }}>
          appuyer sur ↵<br/>pour valider
        </StickyNote>
      </div>
    </WfPage>
  );
}

// V3: Sidebar avec récap + form au centre
function DevisV3(props) {
  return (
    <WfPage {...props}>
      <div style={{ height:'100%', display:'grid', gridTemplateColumns:'200px 1fr' }}>
        <div style={{ borderRight:'1.2px dashed var(--wf-ink)', padding:14, background:'var(--wf-surface)' }}>
          <WfLogo size={14} />
          <div className="sk-tag-h" style={{ marginTop:14 }}>Votre demande</div>

          <div className="sk-col" style={{ marginTop:8, gap:10 }}>
            {['Situation','Le bien','Détails','Photos','Coordonnées'].map((s,i)=>(
              <div key={s} className="sk-row" style={{ gap:8, fontSize:12 }}>
                <div style={{ width:20, height:20, borderRadius:'50%', border:'1.5px solid var(--wf-ink)', background: i<2?'var(--wf-accent)':'transparent', color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontSize:11 }}>
                  {i<2?'✓':i+1}
                </div>
                <div style={{ fontWeight: i===2?700:400 }}>{s}</div>
              </div>
            ))}
          </div>

          <div className="sk-divider" />
          <div className="sk-tag-h">Récap</div>
          <div style={{ fontSize:11, opacity:.75, marginTop:4 }}>
            • Succession<br/>• Appartement, 62m²<br/>• Sceaux 92330<br/>• Encombré
          </div>
          <div className="sk-card" style={{ marginTop:14, padding:8, fontSize:11 }}>
            <div className="sk-marker">Estimation provisoire</div>
            <div className="wf-disp" style={{ fontSize:22, color:'var(--wf-accent)' }}>~ 950€</div>
          </div>
        </div>

        <div style={{ padding:18, overflow:'auto' }}>
          <div className="wf-disp" style={{ fontSize:24 }}>Détails du chantier</div>
          <div style={{ fontSize:12, opacity:.7 }}>Plus c'est précis, plus le devis est juste.</div>

          <div className="sk-card" style={{ padding:14, marginTop:14 }}>
            <div style={{ fontSize:13, fontWeight:600 }}>Volumes à enlever</div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:8, marginTop:8 }}>
              {['Mobilier','Cartons','Électroménager','Encombrants','Déchets','Autre'].map(t=>(
                <div key={t} className="sk-card" style={{ padding:8, textAlign:'center', fontSize:12 }}>
                  <div style={{ fontSize:18 }}>○</div>{t}
                </div>
              ))}
            </div>
            <div style={{ marginTop:14 }}>
              <div style={{ fontSize:13, fontWeight:600, marginBottom:4 }}>Précisions libres</div>
              <div className="sk-input" style={{ minHeight:60, padding:8 }}>« Studio loué par grand-mère, gros frigo dans cuisine, lit médicalisé… »</div>
            </div>
            <div style={{ marginTop:14 }}>
              <div style={{ fontSize:13, fontWeight:600 }}>Délai souhaité</div>
              <div className="sk-row" style={{ flexWrap:'wrap', gap:6, marginTop:6 }}>
                {['Cette semaine','Sous 15 jours','Le mois','Pas pressé'].map((t,i)=>(
                  <span key={t} className={`sk-pill ${i===1?'sk-pill-accent':''}`}>{t}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="sk-row" style={{ justifyContent:'space-between', marginTop:14 }}>
            <span className="sk-btn">← Retour</span>
            <span className="sk-btn sk-btn-accent">Continuer →</span>
          </div>
        </div>
      </div>
    </WfPage>
  );
}

// V4: Express 3 questions sur écran unique
function DevisV4(props) {
  return (
    <WfPage {...props}>
      <div style={{ height:'100%', display:'flex', flexDirection:'column' }}>
        <WfNav active="Devis" />
        <div className="wf-stage">
          <div className="sk-row" style={{ justifyContent:'space-between' }}>
            <div className="wf-disp" style={{ fontSize:24 }}>Devis express</div>
            <span className="sk-pill sk-pill-accent">2 min ⚡</span>
          </div>
          <div style={{ fontSize:12, opacity:.7 }}>Trois questions, on vous rappelle dans la journée.</div>

          {/* Q1 */}
          <div className="sk-card" style={{ padding:12, marginTop:14 }}>
            <div className="sk-row" style={{ gap:8 }}>
              <span className="wf-disp" style={{ fontSize:24, color:'var(--wf-accent)', minWidth:24 }}>1</span>
              <div style={{ flex:1 }}>
                <div style={{ fontSize:14, fontWeight:600 }}>De quoi avez-vous besoin ?</div>
                <div className="sk-row" style={{ flexWrap:'wrap', gap:6, marginTop:6 }}>
                  {['Débarras','Nettoyage','Les deux'].map((t,i)=>(
                    <span key={t} className={`sk-pill ${i===0?'sk-pill-accent':''}`}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Q2 */}
          <div className="sk-card" style={{ padding:12, marginTop:10 }}>
            <div className="sk-row" style={{ gap:8 }}>
              <span className="wf-disp" style={{ fontSize:24, color:'var(--wf-accent)', minWidth:24 }}>2</span>
              <div style={{ flex:1 }}>
                <div style={{ fontSize:14, fontWeight:600 }}>Où, quand ?</div>
                <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr', gap:8, marginTop:6 }}>
                  <div className="sk-input">code postal — 92330</div>
                  <div className="sk-input">cette semaine</div>
                </div>
              </div>
            </div>
          </div>

          {/* Q3 */}
          <div className="sk-card" style={{ padding:12, marginTop:10 }}>
            <div className="sk-row" style={{ gap:8 }}>
              <span className="wf-disp" style={{ fontSize:24, color:'var(--wf-accent)', minWidth:24 }}>3</span>
              <div style={{ flex:1 }}>
                <div style={{ fontSize:14, fontWeight:600 }}>Comment vous joindre ?</div>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:8, marginTop:6 }}>
                  <div className="sk-input">Prénom</div>
                  <div className="sk-input">Téléphone</div>
                </div>
                <div className="sk-input" style={{ marginTop:6 }}>email (optionnel)</div>
              </div>
            </div>
          </div>

          <div style={{ marginTop:16, textAlign:'center' }}>
            <span className="sk-btn sk-btn-accent" style={{ fontSize:15, padding:'10px 22px' }}>Envoyer ma demande →</span>
            <div style={{ fontSize:11, opacity:.6, marginTop:6 }}>réponse sous 24h · données confidentielles</div>
          </div>
        </div>
      </div>
    </WfPage>
  );
}

Object.assign(window, { DevisV1, DevisV2, DevisV3, DevisV4 });
