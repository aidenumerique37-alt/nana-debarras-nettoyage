// page-dashboard.jsx — admin home

const REQUESTS = [
  { id: 1, marker: 'new',  who: 'Marc Fontaine',          what: 'Débarras succession · appartement T3 après décès du père',        meta: 'Niort · il y a 18 min',   tag: 'Urgent',    tagClass: 'pill-violet' },
  { id: 2, marker: 'new',  who: 'Agence Immo Poitou',     what: 'Remise en état logement vide avant relocation',                    meta: 'Melle · il y a 1h',       tag: 'Pro',       tagClass: 'pill-violet' },
  { id: 3, marker: 'new',  who: 'Sylvie Moreau',          what: 'Logement très encombré · accompagnement demandé',                  meta: 'Coulon · ce matin 9h40',  tag: 'Sensible',  tagClass: 'pill-violet' },
  { id: 4, marker: 'warm', who: 'M. Rault',               what: 'Nettoyage après dégât des eaux · plafond effondré',               meta: 'Mauzé · hier',            tag: '',          tagClass: '' },
  { id: 5, marker: 'cold', who: 'Étude Notariale Leblanc', what: 'Débarras maison de famille · à rappeler',                        meta: 'Frontenay · 3 j',         tag: 'À relancer', tagClass: '' },
];

const PageDashboard = () => {
  const [tab, setTab] = React.useState('new');

  return (
    <div className="admin">
      <AdminSidebar active="dashboard" />
      <div className="main">
        <AdminTopbar title="Aujourd'hui" actions={
          <button className="btn btn-primary" style={{ padding: '8px 16px', fontSize: 14 }}>
            <Icon name="plus" size={16} /> Nouvelle mission
          </button>
        } />

        <div className="main-content">
          <div className="greet">
            <div>
              <h2>Bonjour, <em>3 nouvelles demandes</em> ce matin.</h2>
              <p className="summary">Marc Fontaine attend depuis 18 min — succession urgente à Niort. 2 interventions planifiées aujourd'hui.</p>
            </div>
            <div className="greet-actions">
              <button className="btn btn-ghost" style={{ padding: '8px 14px', fontSize: 14 }}>
                <Icon name="download" size={14} /> Export semaine
              </button>
            </div>
          </div>

          <div className="dash-grid">
            {/* INBOX */}
            <div className="inbox">
              <div className="inbox-head">
                <div className="inbox-tabs">
                  {[
                    { id: 'new',      label: 'Nouvelles',  count: 3  },
                    { id: 'progress', label: 'En cours',   count: 4  },
                    { id: 'closed',   label: 'Clôturées',  count: 61 },
                  ].map(t => (
                    <button key={t.id}
                            className={`inbox-tab ${tab === t.id ? 'active' : ''}`}
                            onClick={() => setTab(t.id)}>
                      {t.label} <span style={{ opacity: .6, marginLeft: 4 }}>{t.count}</span>
                    </button>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: 6, alignItems: 'center', fontSize: 13, color: 'var(--text-muted)' }}>
                  <Icon name="filter" size={14} />
                  <select style={{ background: 'transparent', border: 'none', font: 'inherit', color: 'inherit', outline: 'none' }}>
                    <option>Tous types</option>
                    <option>Succession</option>
                    <option>Déménagement</option>
                    <option>Encombrement</option>
                    <option>Sinistre</option>
                    <option>Pro</option>
                  </select>
                </div>
              </div>

              {REQUESTS.map(r => (
                <div key={r.id} className="req" onClick={() => navigate('mission')}>
                  <span className={`marker ${r.marker}`} />
                  <div>
                    <div className="who">{r.who}</div>
                    <div className="what">{r.what}</div>
                  </div>
                  <div className="meta">
                    {r.meta}
                    {r.tag && <div><span className={`pill ${r.tagClass}`} style={{ fontSize: 11 }}>{r.tag}</span></div>}
                  </div>
                </div>
              ))}

              <div style={{ padding: 14, textAlign: 'center', borderTop: '1px solid var(--border)' }}>
                <button className="btn-link" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--primary)', fontSize: 13.5 }}>
                  Voir toutes les demandes →
                </button>
              </div>
            </div>

            {/* ASIDE */}
            <div className="dash-aside">
              <div className="aside-card">
                <h4>Aujourd'hui</h4>
                <div className="big">2</div>
                <div className="sub">interventions planifiées</div>
                <div className="divider" style={{ margin: '14px 0' }} />
                <ul>
                  <li className="done">Débarras Dumont · 9h-12h ✓</li>
                  <li>Nettoyage Rault · 14h-17h</li>
                </ul>
              </div>

              <div className="aside-card">
                <h4>À faire</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 12 }}>
                  {[
                    { t: 'Rappeler Marc Fontaine',       sub: 'succession urgente Niort (18 min)', urgent: true  },
                    { t: 'Envoyer devis Agence Poitou',  sub: 'remise en état Melle',             urgent: false },
                    { t: 'Relancer Étude Leblanc',       sub: 'demande vieille de 3 jours',       urgent: false },
                  ].map((t, i) => (
                    <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <span style={{ width: 6, height: 6, marginTop: 8, borderRadius: '50%', background: t.urgent ? 'var(--danger)' : 'var(--ink-300)', flexShrink: 0 }} />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 14, fontWeight: 500 }}>{t.t}</div>
                        <div style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>{t.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="aside-card" style={{ background: 'linear-gradient(135deg, var(--violet-500), var(--violet-700))', color: 'var(--on-primary)', border: 'none' }}>
                <h4 style={{ color: 'var(--beige-50)' }}>Cette semaine</h4>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 36, lineHeight: 1, color: 'var(--beige-50)' }}>5</div>
                <div style={{ fontSize: 13, color: 'rgba(245,239,224,.7)' }}>interventions planifiées</div>
                <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,.15)', display: 'flex', flexDirection: 'column', gap: 6, fontSize: 13 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'rgba(245,239,224,.7)' }}>Devis envoyés</span>
                    <span style={{ color: 'var(--beige-50)', fontWeight: 600 }}>3</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'rgba(245,239,224,.7)' }}>Rapports à produire</span>
                    <span style={{ color: 'var(--beige-50)', fontWeight: 600 }}>1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

window.PageDashboard = PageDashboard;
