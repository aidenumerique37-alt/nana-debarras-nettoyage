// wf-dashboard.jsx — Dashboard admin

// V1: Classique — KPIs + 2 colonnes
function DashV1(props) {
  return (
    <WfPage {...props}>
      <WfAdminShell active="Tableau de bord">
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:10 }}>
          {[
            { l:'Demandes en attente', v:'7', s:'+2 cette sem.' },
            { l:'Missions du mois', v:'18', s:'12 réalisées' },
            { l:'CA mensuel', v:'9 240€', s:'+18%' },
            { l:'Note moyenne', v:'4.9', s:'87 avis' },
          ].map(k => (
            <div key={k.l} className="sk-card" style={{ padding:10 }}>
              <div className="sk-tag-h">{k.l}</div>
              <div className="wf-disp" style={{ fontSize:26, lineHeight:1, color:'var(--wf-accent)' }}>{k.v}</div>
              <div style={{ fontSize:11, opacity:.6 }}>{k.s}</div>
            </div>
          ))}
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'1.2fr 1fr', gap:10, marginTop:12 }}>
          <div className="sk-card" style={{ padding:10 }}>
            <div className="sk-row" style={{ justifyContent:'space-between' }}>
              <div className="sk-marker">Demandes récentes</div>
              <span className="sk-pill" style={{ fontSize:10 }}>voir tout →</span>
            </div>
            <div style={{ marginTop:8 }}>
              {[
                ['H. Martin','Succession · Sceaux','il y a 2h','nouveau'],
                ['Étude Dupont','Notaire · 92','il y a 5h','à rappeler'],
                ['L. Bernard','Fin de bail · Paris 14e','hier','devis envoyé'],
                ['M. Vidal','Logement encombré','hier','nouveau'],
              ].map((r,i) => (
                <div key={i} className="sk-row" style={{ justifyContent:'space-between', padding:'7px 0', borderBottom: i<3?'1px dashed var(--wf-ink)':'none', fontSize:12 }}>
                  <span style={{ width:120 }}>{r[0]}</span>
                  <span style={{ flex:1, opacity:.75 }}>{r[1]}</span>
                  <span style={{ opacity:.6, fontSize:10 }}>{r[2]}</span>
                  <span className={`sk-pill ${r[3]==='nouveau'?'sk-pill-accent':''}`} style={{ fontSize:10 }}>{r[3]}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="sk-card" style={{ padding:10 }}>
            <div className="sk-marker">Cette semaine</div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(7,1fr)', gap:4, marginTop:8, height:80 }}>
              {[40,70,30,55,85,20,10].map((h,i)=>(
                <div key={i} style={{ display:'flex', flexDirection:'column', justifyContent:'flex-end', alignItems:'center', gap:3 }}>
                  <div style={{ width:'80%', height: h+'%', background: i===4?'var(--wf-accent)':'var(--wf-ink)', opacity: i===4?1:.6 }} />
                  <div style={{ fontSize:10, opacity:.6 }}>{['L','M','M','J','V','S','D'][i]}</div>
                </div>
              ))}
            </div>
            <div className="sk-divider" />
            <div className="sk-tag-h">Tâches</div>
            <div style={{ fontSize:12, marginTop:4 }}>
              <div>☐ Rappeler étude Dupont</div>
              <div>☐ Valider devis #142</div>
              <div>☑ Publier article blog</div>
            </div>
          </div>
        </div>

        <div className="sk-card" style={{ padding:10, marginTop:10 }}>
          <div className="sk-row" style={{ justifyContent:'space-between' }}>
            <div className="sk-marker">Prochaines interventions</div>
            <span className="sk-pill" style={{ fontSize:10 }}>planning →</span>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:8, marginTop:8 }}>
            {[
              { d:'Jeu 30',t:'Débarras Sceaux',c:'Mme Martin',h:'9h-13h' },
              { d:'Ven 1',t:'Nettoyage Paris 14',c:'M. Bernard',h:'14h-17h' },
              { d:'Lun 4',t:'Succession Vincennes',c:'Étude Dupont',h:'8h-18h' },
            ].map((m,i)=>(
              <div key={i} className="sk-card" style={{ padding:8, fontSize:11, background:'var(--wf-surface)' }}>
                <div style={{ fontFamily:'Space Mono', fontSize:10, opacity:.6 }}>{m.d} · {m.h}</div>
                <div style={{ fontWeight:600, fontSize:13 }}>{m.t}</div>
                <div style={{ opacity:.7 }}>{m.c}</div>
              </div>
            ))}
          </div>
        </div>
      </WfAdminShell>
    </WfPage>
  );
}

// V2: Inbox-first — gros panneau demandes + raccourcis
function DashV2(props) {
  return (
    <WfPage {...props}>
      <WfAdminShell active="Tableau de bord">
        <div className="sk-row" style={{ justifyContent:'space-between', marginBottom:10 }}>
          <div>
            <div className="wf-disp" style={{ fontSize:22 }}>Bonjour Marie ✿</div>
            <div style={{ fontSize:12, opacity:.7 }}>3 nouvelles demandes vous attendent · 2 devis à envoyer</div>
          </div>
          <div className="sk-row" style={{ gap:6 }}>
            <span className="sk-btn">+ Nouvelle mission</span>
            <span className="sk-btn sk-btn-accent">+ Nouveau devis</span>
          </div>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 280px', gap:10 }}>
          <div className="sk-card" style={{ padding:0, overflow:'hidden' }}>
            <div className="sk-row" style={{ padding:'8px 12px', borderBottom:'1.2px dashed var(--wf-ink)', justifyContent:'space-between' }}>
              <div className="sk-row" style={{ gap:8, fontSize:12 }}>
                <span className="sk-pill sk-pill-fill">Boîte demandes (7)</span>
                <span style={{ opacity:.6 }}>À rappeler (4)</span>
                <span style={{ opacity:.6 }}>En cours (12)</span>
              </div>
              <span style={{ fontSize:11, opacity:.5 }}>filtrer ▼</span>
            </div>
            {[
              ['🔴','Hélène Martin','Succession appartement Sceaux 92330','Reçue il y a 2h','62m² · encombré'],
              ['🟠','Étude Dupont (notaire)','Plusieurs successions à venir','5h','Pro · prescripteur'],
              ['⚪','Louis Bernard','Fin de bail Paris 14e','hier','35m²'],
              ['⚪','Mme Vidal','Logement très encombré, urgent','hier','SOS · sensible'],
              ['⚪','Foyer logement Bagneux','Nettoyage chambres post-locataire','2j','Récurrent'],
            ].map((r,i) => (
              <div key={i} className="sk-row" style={{ padding:'10px 12px', borderBottom: i<4?'1px dashed var(--wf-ink)':'none', gap:10, fontSize:12 }}>
                <span style={{ fontSize:8 }}>{r[0]}</span>
                <div style={{ flex:1 }}>
                  <div style={{ fontWeight:600, fontSize:13 }}>{r[1]}</div>
                  <div style={{ opacity:.75 }}>{r[2]}</div>
                </div>
                <div style={{ textAlign:'right' }}>
                  <div style={{ fontSize:10, opacity:.6 }}>{r[3]}</div>
                  <span className="sk-pill" style={{ fontSize:10 }}>{r[4]}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="sk-col" style={{ gap:10 }}>
            <div className="sk-card" style={{ padding:10 }}>
              <div className="sk-tag-h">Aujourd'hui</div>
              <div className="wf-disp" style={{ fontSize:24, color:'var(--wf-accent)' }}>2 chantiers</div>
              <div style={{ fontSize:11, opacity:.7 }}>Sceaux · 9h<br/>Paris 14 · 14h</div>
            </div>
            <div className="sk-card" style={{ padding:10 }}>
              <div className="sk-tag-h">Site web</div>
              <div style={{ fontSize:12, marginTop:4 }}>👁 1 240 visites · 7j</div>
              <div style={{ fontSize:12 }}>📩 18 demandes</div>
              <div style={{ fontSize:11, color:'var(--wf-accent)', marginTop:6 }}>modifier les pages →</div>
            </div>
            <div className="sk-card" style={{ padding:10 }}>
              <div className="sk-tag-h">À faire</div>
              <div style={{ fontSize:12, marginTop:4 }}>
                <div>☐ Publier témoignage</div>
                <div>☐ Tarifs nettoyage</div>
                <div>☐ Photo équipe</div>
              </div>
            </div>
          </div>
        </div>
      </WfAdminShell>
    </WfPage>
  );
}

// V3: Visual / pipeline kanban
function DashV3(props) {
  const cols = [
    { t:'Nouvelles', n:7, color:'var(--wf-accent)', items:[
      { c:'H. Martin', d:'Succession Sceaux', tag:'sensible' },
      { c:'Étude Dupont', d:'Prescripteur', tag:'pro' },
      { c:'L. Bernard', d:'Fin de bail Paris 14', tag:'rapide' },
    ]},
    { t:'Devis envoyés', n:5, items:[
      { c:'M. Roux', d:'Cave Bagneux', tag:'1 200€' },
      { c:'Famille T.', d:'Maison Antony', tag:'3 800€' },
    ]},
    { t:'Confirmés', n:4, items:[
      { c:'Mme Vidal', d:'Logement encombré', tag:'jeudi 9h' },
      { c:'Étude Lefèvre', d:'Studio 92', tag:'ven 14h' },
    ]},
    { t:'Terminés', n:42, items:[
      { c:'M. Bernard', d:'Fin de bail', tag:'à facturer' },
    ]},
  ];
  return (
    <WfPage {...props}>
      <WfAdminShell active="Tableau de bord">
        <div className="sk-row" style={{ justifyContent:'space-between', marginBottom:10 }}>
          <div className="wf-disp" style={{ fontSize:20 }}>Pipeline des missions</div>
          <div className="sk-row" style={{ gap:6, fontSize:11 }}>
            <span className="sk-pill">Cette semaine</span>
            <span className="sk-pill sk-pill-accent">Ce mois</span>
            <span className="sk-pill">Trim.</span>
          </div>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:8, height:'calc(100% - 50px)' }}>
          {cols.map(col => (
            <div key={col.t} className="sk-card" style={{ padding:8, display:'flex', flexDirection:'column', gap:6, background:'var(--wf-surface)' }}>
              <div className="sk-row" style={{ justifyContent:'space-between' }}>
                <span style={{ fontSize:12, fontWeight:600 }}>{col.t}</span>
                <span className="sk-pill" style={{ fontSize:10, background: col.color, color:'#fff', borderColor: col.color }}>{col.n}</span>
              </div>
              {col.items.map((it,i)=>(
                <div key={i} className="sk-card" style={{ padding:8, background:'var(--wf-bg)', fontSize:11 }}>
                  <div style={{ fontWeight:600, fontSize:12 }}>{it.c}</div>
                  <div style={{ opacity:.7 }}>{it.d}</div>
                  <span className="sk-pill" style={{ fontSize:9, marginTop:4, display:'inline-block' }}>{it.tag}</span>
                </div>
              ))}
              <div style={{ fontSize:11, opacity:.4, textAlign:'center', padding:6 }}>+ ajouter</div>
            </div>
          ))}
        </div>
      </WfAdminShell>
    </WfPage>
  );
}

// V4: CMS-first — édition contenu site mise en avant
function DashV4(props) {
  return (
    <WfPage {...props}>
      <WfAdminShell active="Tableau de bord" sidebarItems={['Tableau de bord','Pages du site','Témoignages','Blog','Médias','Demandes','Missions','Réglages']}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, marginBottom:10 }}>
          <div className="sk-card" style={{ padding:12 }}>
            <div className="sk-marker">Votre site en direct</div>
            <div className="sk-img" style={{ height:120, marginTop:6 }}>
              <span className="sk-img-label">aperçu page d'accueil</span>
            </div>
            <div className="sk-row" style={{ marginTop:8, gap:6 }}>
              <span className="sk-btn">👁 Voir le site</span>
              <span className="sk-btn sk-btn-accent">✎ Éditer</span>
            </div>
          </div>
          <div className="sk-col" style={{ gap:8 }}>
            <div className="sk-card" style={{ padding:10 }}>
              <div className="sk-tag-h">Visites cette semaine</div>
              <div className="wf-disp" style={{ fontSize:24, color:'var(--wf-accent)' }}>1 240</div>
              <div style={{ fontSize:11, opacity:.6 }}>+22% vs sem. dernière</div>
            </div>
            <div className="sk-card" style={{ padding:10 }}>
              <div className="sk-tag-h">Demandes via le site</div>
              <div className="wf-disp" style={{ fontSize:24, color:'var(--wf-accent)' }}>18</div>
              <div style={{ fontSize:11, opacity:.6 }}>taux de conversion 1.4%</div>
            </div>
          </div>
        </div>

        <div className="sk-card" style={{ padding:10 }}>
          <div className="sk-row" style={{ justifyContent:'space-between' }}>
            <div className="sk-marker">Pages à mettre à jour</div>
            <span className="sk-pill" style={{ fontSize:10 }}>Toutes les pages →</span>
          </div>
          <div style={{ marginTop:8 }}>
            {[
              ['Accueil','modifié il y a 12 jours','en ligne'],
              ['Débarras','modifié il y a 3 mois','à revoir'],
              ['Pour les notaires','jamais modifié','brouillon'],
              ['Tarifs','modifié il y a 8 jours','en ligne'],
              ['Témoignages','3 nouveaux à publier','attention'],
            ].map((r,i) => (
              <div key={i} className="sk-row" style={{ padding:'7px 0', borderBottom: i<4?'1px dashed var(--wf-ink)':'none', fontSize:12, justifyContent:'space-between' }}>
                <span style={{ flex:1, fontWeight:600 }}>{r[0]}</span>
                <span style={{ flex:1.5, opacity:.7 }}>{r[1]}</span>
                <span className={`sk-pill ${r[2]==='attention'||r[2]==='brouillon'?'sk-pill-accent':''}`} style={{ fontSize:10 }}>{r[2]}</span>
                <span style={{ marginLeft:8, fontSize:11, opacity:.6 }}>✎</span>
              </div>
            ))}
          </div>
        </div>

        <StickyNote style={{ top:80, right:30 }}>
          tout le contenu<br/>du site éditable<br/>sans dev !
        </StickyNote>
      </WfAdminShell>
    </WfPage>
  );
}

Object.assign(window, { DashV1, DashV2, DashV3, DashV4 });
