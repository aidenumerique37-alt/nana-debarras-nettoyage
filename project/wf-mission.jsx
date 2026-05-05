// wf-mission.jsx — Détail d'une mission

// V1: Vue détaillée classique avec sections
function MissionV1(props) {
  return (
    <WfPage {...props}>
      <WfAdminShell active="Missions">
        <div className="sk-row" style={{ fontSize:11, opacity:.6 }}>
          Missions → <b>#M-142 · Succession Martin</b>
        </div>
        <div className="sk-row" style={{ justifyContent:'space-between', marginTop:6 }}>
          <div>
            <div className="wf-disp" style={{ fontSize:22 }}>Succession Martin</div>
            <div style={{ fontSize:12, opacity:.7 }}>Appartement 62m² · Sceaux 92330 · prévu jeudi 30 avril</div>
          </div>
          <div className="sk-row" style={{ gap:6 }}>
            <span className="sk-pill sk-pill-accent">Confirmée</span>
            <span className="sk-btn">✎ Modifier</span>
            <span className="sk-btn sk-btn-fill">+ Action</span>
          </div>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'1.4fr 1fr', gap:10, marginTop:10 }}>
          <div className="sk-col" style={{ gap:10 }}>
            <div className="sk-card" style={{ padding:10 }}>
              <div className="sk-tag-h">Description</div>
              <div style={{ fontSize:12, marginTop:4, opacity:.8 }}>
                Débarras complet d'un appartement suite au décès. Mobilier, électroménager, archives. Présence de la fille demandée pour mise de côté objets sentimentaux.
              </div>
            </div>

            <div className="sk-card" style={{ padding:10 }}>
              <div className="sk-row" style={{ justifyContent:'space-between' }}>
                <div className="sk-marker">Étapes</div>
                <span style={{ fontSize:11, opacity:.6 }}>3/6</span>
              </div>
              {[
                ['☑','Visite réalisée','19 avril'],
                ['☑','Devis envoyé','21 avril'],
                ['☑','Devis accepté','24 avril'],
                ['☐','Intervention','30 avril 9h'],
                ['☐','Nettoyage final','30 avril après-midi'],
                ['☐','Facturation','—'],
              ].map((s,i)=>(
                <div key={i} className="sk-row" style={{ padding:'6px 0', fontSize:12, borderBottom: i<5?'1px dashed var(--wf-ink)':'none' }}>
                  <span style={{ width:20 }}>{s[0]}</span>
                  <span style={{ flex:1, fontWeight: s[0]==='☐' && i===3?700:400 }}>{s[1]}</span>
                  <span style={{ opacity:.6, fontSize:11 }}>{s[2]}</span>
                </div>
              ))}
            </div>

            <div className="sk-card" style={{ padding:10 }}>
              <div className="sk-marker">Photos & docs</div>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:6, marginTop:6 }}>
                {[1,2,3,4].map(i => <div key={i} className="sk-img" style={{ height:60 }}><span className="sk-img-label">img{i}</span></div>)}
              </div>
              <div className="sk-row" style={{ gap:6, marginTop:8, fontSize:11 }}>
                <span className="sk-pill">📄 Devis-142.pdf</span>
                <span className="sk-pill">📄 Mandat.pdf</span>
                <span className="sk-pill">+</span>
              </div>
            </div>
          </div>

          <div className="sk-col" style={{ gap:10 }}>
            <div className="sk-card" style={{ padding:10 }}>
              <div className="sk-tag-h">Client</div>
              <div style={{ fontWeight:600, marginTop:4 }}>Hélène Martin</div>
              <div style={{ fontSize:12, opacity:.7 }}>06 __ __ __ __<br/>helene.martin@…<br/>via étude Dupont (notaire)</div>
              <div style={{ fontSize:11, color:'var(--wf-accent)', marginTop:6 }}>fiche client →</div>
            </div>

            <div className="sk-card" style={{ padding:10 }}>
              <div className="sk-tag-h">Équipe</div>
              <div className="sk-row" style={{ marginTop:6, gap:6, flexWrap:'wrap' }}>
                {['Marie','Karim','Sofiane'].map(n => (
                  <span key={n} className="sk-pill">{n}</span>
                ))}
                <span className="sk-pill" style={{ opacity:.5 }}>+ ajouter</span>
              </div>
              <div className="sk-divider" />
              <div className="sk-tag-h">Logistique</div>
              <div style={{ fontSize:12, opacity:.8, marginTop:4 }}>🚚 Camion 12m³<br/>📦 ~50 cartons prévus<br/>⏱ 4-5h estimées</div>
            </div>

            <div className="sk-card" style={{ padding:10 }}>
              <div className="sk-tag-h">Devis</div>
              <div className="wf-disp" style={{ fontSize:26, color:'var(--wf-accent)' }}>1 850€</div>
              <div style={{ fontSize:11, opacity:.6 }}>TTC · accepté le 24/04</div>
            </div>
          </div>
        </div>
      </WfAdminShell>
    </WfPage>
  );
}

// V2: Timeline-first
function MissionV2(props) {
  return (
    <WfPage {...props}>
      <WfAdminShell active="Missions">
        <div className="sk-row" style={{ justifyContent:'space-between', marginBottom:8 }}>
          <div>
            <div style={{ fontSize:11, opacity:.6 }}>← Toutes les missions</div>
            <div className="wf-disp" style={{ fontSize:22 }}>#M-142 Succession Martin</div>
          </div>
          <span className="sk-pill sk-pill-accent">Jeudi 30 avril · 9h</span>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 280px', gap:10 }}>
          <div className="sk-card" style={{ padding:14 }}>
            <div className="sk-marker">Chronologie</div>
            <div style={{ position:'relative', paddingLeft:24, marginTop:10 }}>
              <div style={{ position:'absolute', left:7, top:6, bottom:6, width:1.5, background:'var(--wf-ink)', opacity:.4 }} />
              {[
                { d:'17 avril', t:'Demande reçue', sub:'via formulaire site · transmise par étude Dupont', done:true },
                { d:'19 avril', t:'Visite sur place', sub:'Marie + Karim · 1h30 · photos prises', done:true },
                { d:'21 avril', t:'Devis envoyé', sub:'1 850€ TTC · valable 30j', done:true },
                { d:'24 avril', t:'Devis accepté', sub:'mandat signé électroniquement', done:true, accent:true },
                { d:'30 avril 9h', t:'Intervention prévue', sub:'équipe Karim+Sofiane · camion 12m³', done:false, future:true },
                { d:'30 avril 14h', t:'Nettoyage final', sub:'2h prévues', done:false },
                { d:'1er mai', t:'Facturation', sub:'à émettre', done:false },
              ].map((e,i)=>(
                <div key={i} style={{ padding:'8px 0', position:'relative' }}>
                  <div style={{ position:'absolute', left:-20, top:10, width:14, height:14, borderRadius:'50%',
                    border:'1.5px solid var(--wf-ink)',
                    background: e.accent?'var(--wf-accent)':e.done?'var(--wf-ink)':'var(--wf-bg)',
                  }} />
                  <div className="sk-row" style={{ justifyContent:'space-between', fontSize:13 }}>
                    <span style={{ fontWeight:600 }}>{e.t}</span>
                    <span style={{ fontSize:11, opacity:.6, fontFamily:'Space Mono' }}>{e.d}</span>
                  </div>
                  <div style={{ fontSize:11, opacity:.7 }}>{e.sub}</div>
                </div>
              ))}
            </div>

            <div className="sk-divider" />
            <div className="sk-row" style={{ gap:6 }}>
              <span className="sk-input" style={{ flex:1 }}>+ ajouter une note ou un événement…</span>
              <span className="sk-btn">Ajouter</span>
            </div>
          </div>

          <div className="sk-col" style={{ gap:10 }}>
            <div className="sk-card" style={{ padding:10, background:'var(--wf-surface)' }}>
              <div className="sk-tag-h">Client</div>
              <div style={{ fontWeight:600, marginTop:4 }}>H. Martin</div>
              <div style={{ fontSize:12 }}>📞 06 __ · ✉ ✎</div>
              <div className="sk-divider" />
              <div className="sk-tag-h">Lieu</div>
              <div style={{ fontSize:12, opacity:.8 }}>__ rue du Lycée<br/>92330 Sceaux</div>
              <div className="sk-img" style={{ height:80, marginTop:6 }}>
                <span className="sk-img-label">mini-carte</span>
              </div>
            </div>
            <div className="sk-card" style={{ padding:10 }}>
              <div className="sk-tag-h">Récap financier</div>
              <div style={{ fontSize:12, marginTop:4 }}>Devis : <b>1 850€</b></div>
              <div style={{ fontSize:12 }}>Acompte : 30%</div>
              <div style={{ fontSize:12 }}>Solde : 1 295€</div>
            </div>
          </div>
        </div>
      </WfAdminShell>
    </WfPage>
  );
}

// V3: Tabs — séparation logique
function MissionV3(props) {
  const tabs = ['Vue d\'ensemble','Devis & docs','Photos','Notes','Facturation'];
  return (
    <WfPage {...props}>
      <WfAdminShell active="Missions">
        <div className="sk-row" style={{ justifyContent:'space-between' }}>
          <div className="sk-row" style={{ gap:8 }}>
            <span className="wf-disp" style={{ fontSize:22 }}>#M-142</span>
            <span style={{ fontSize:14, fontWeight:600 }}>Succession Martin</span>
            <span className="sk-pill sk-pill-accent" style={{ fontSize:10 }}>en cours</span>
          </div>
          <div className="sk-row" style={{ gap:6, fontSize:11 }}>
            <span className="sk-btn">📞</span>
            <span className="sk-btn">✉</span>
            <span className="sk-btn sk-btn-fill">+ Action</span>
          </div>
        </div>

        <div className="sk-row" style={{ marginTop:10, gap:0, borderBottom:'1.5px solid var(--wf-ink)' }}>
          {tabs.map((t,i) => (
            <span key={t} style={{
              padding:'6px 12px', fontSize:12, fontWeight: i===0?700:400,
              borderBottom: i===0?'2px solid var(--wf-accent)':'none',
              marginBottom:-1.5,
            }}>{t}</span>
          ))}
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:10, marginTop:12 }}>
          {[
            { t:'Quand', v:'Jeudi 30 avr.', s:'9h - 14h' },
            { t:'Où', v:'Sceaux 92330', s:'Appartement 3e' },
            { t:'Combien', v:'1 850€', s:'TTC accepté' },
          ].map(c=>(
            <div key={c.t} className="sk-card" style={{ padding:10 }}>
              <div className="sk-tag-h">{c.t}</div>
              <div className="wf-disp" style={{ fontSize:20, color:'var(--wf-accent)' }}>{c.v}</div>
              <div style={{ fontSize:11, opacity:.6 }}>{c.s}</div>
            </div>
          ))}
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, marginTop:10 }}>
          <div className="sk-card" style={{ padding:10 }}>
            <div className="sk-marker">Briefing pour l'équipe</div>
            <div style={{ fontSize:12, opacity:.85, marginTop:6, lineHeight:1.5 }}>
              Famille présente. La fille (Hélène) sera là dès 9h pour identifier les objets à conserver. <b>Délicatesse importante</b> — premier décès.
              Sortir d'abord les meubles du salon, ils gênent l'accès aux pièces du fond.
            </div>
          </div>
          <div className="sk-card" style={{ padding:10 }}>
            <div className="sk-marker">Checklist du jour</div>
            <div style={{ fontSize:12, marginTop:4 }}>
              <div>☑ Mandat signé reçu</div>
              <div>☑ Acompte encaissé</div>
              <div>☐ Réserver camion 12m³</div>
              <div>☐ Confirmer équipe</div>
              <div>☐ Envoyer rappel client J-1</div>
            </div>
          </div>
        </div>
      </WfAdminShell>
    </WfPage>
  );
}

// V4: Carte/map first + sidebar
function MissionV4(props) {
  return (
    <WfPage {...props}>
      <WfAdminShell active="Missions">
        <div style={{ display:'grid', gridTemplateColumns:'320px 1fr', gap:10, height:'100%' }}>
          <div className="sk-col" style={{ gap:10 }}>
            <div className="sk-card" style={{ padding:10 }}>
              <div className="sk-row" style={{ justifyContent:'space-between' }}>
                <span className="wf-disp" style={{ fontSize:18 }}>#M-142</span>
                <span className="sk-pill sk-pill-accent" style={{ fontSize:10 }}>jeudi</span>
              </div>
              <div style={{ fontSize:14, fontWeight:600 }}>Succession Martin</div>
              <div style={{ fontSize:12, opacity:.7 }}>62m² · 3e étage · sans asc.</div>
            </div>

            <div className="sk-card" style={{ padding:10 }}>
              <div className="sk-tag-h">Client</div>
              <div style={{ fontWeight:600 }}>Hélène Martin</div>
              <div style={{ fontSize:12, opacity:.7 }}>06 __ · helene@…<br/>via étude Dupont</div>
              <div className="sk-row" style={{ marginTop:6, gap:6 }}>
                <span className="sk-btn" style={{ flex:1, fontSize:11 }}>📞 appeler</span>
                <span className="sk-btn" style={{ flex:1, fontSize:11 }}>✉ écrire</span>
              </div>
            </div>

            <div className="sk-card" style={{ padding:10 }}>
              <div className="sk-tag-h">Équipe & moyens</div>
              <div style={{ fontSize:12, marginTop:4 }}>
                👤 Karim (chef d'équipe)<br/>
                👤 Sofiane<br/>
                🚚 Camion 12m³ (réservé)<br/>
                📦 50 cartons · 30 sacs
              </div>
            </div>

            <div className="sk-card" style={{ padding:10 }}>
              <div className="sk-tag-h">Notes internes</div>
              <div style={{ fontSize:11, opacity:.8, fontStyle:'italic', marginTop:4 }}>
                « Famille très éprouvée. Aller doucement, prévoir une pause si besoin. La fille veut récupérer photos et vaisselle de mariage. » — Marie
              </div>
            </div>
          </div>

          <div className="sk-col" style={{ gap:10 }}>
            <div className="sk-img" style={{ height:200 }}>
              <span className="sk-img-label">📍 carte · Sceaux 92330 · trajet depuis dépôt</span>
            </div>
            <div className="sk-card" style={{ padding:10 }}>
              <div className="sk-row" style={{ justifyContent:'space-between' }}>
                <div className="sk-marker">Photos du chantier</div>
                <span className="sk-pill" style={{ fontSize:10 }}>+ ajouter</span>
              </div>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(6,1fr)', gap:6, marginTop:8 }}>
                {[1,2,3,4,5,6].map(i => <div key={i} className="sk-img" style={{ height:60 }}><span className="sk-img-label">img{i}</span></div>)}
              </div>
            </div>
            <div className="sk-card" style={{ padding:10 }}>
              <div className="sk-marker">Progression</div>
              <div style={{ height:8, background:'rgba(0,0,0,0.1)', borderRadius:4, marginTop:6, overflow:'hidden' }}>
                <div style={{ width:'50%', height:'100%', background:'var(--wf-accent)' }} />
              </div>
              <div className="sk-row" style={{ justifyContent:'space-between', fontSize:11, marginTop:4, opacity:.6 }}>
                <span>3/6 étapes</span><span>devis accepté · en attente d'intervention</span>
              </div>
            </div>
          </div>
        </div>
      </WfAdminShell>
    </WfPage>
  );
}

Object.assign(window, { MissionV1, MissionV2, MissionV3, MissionV4 });
