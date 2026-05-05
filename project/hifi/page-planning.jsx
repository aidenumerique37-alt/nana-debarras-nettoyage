// page-planning.jsx — planning agenda débarras · opératrice seule

const PagePlanning = () => {
  const [view, setView] = React.useState('list');

  const days = [
    {
      label: <>Aujourd'hui · <em>lundi 30 avr.</em></>,
      count: 2,
      events: [
        {
          time: '08:00 → 13:00',
          title: 'Débarras Dumont · succession',
          where: 'Niort · rue des Chênes',
          tags: [{ l: 'Succession', c: 'pill-violet' }],
          accent: true,
          status: 'done',
        },
        {
          time: '14:00 → 17:00',
          title: 'Nettoyage Rault · après sinistre',
          where: 'Mauzé-sur-le-Mignon',
          tags: [{ l: 'Sinistre', c: '' }],
          accent: false,
          status: 'next',
        },
      ],
    },
    {
      label: <>Mardi 1er mai</>,
      count: 0,
      holiday: 'Fête du Travail — repos',
    },
    {
      label: <>Mercredi <em>2 mai</em></>,
      count: 2,
      events: [
        {
          time: '09:00 → 10:30',
          title: 'Visite devis · Mme Chauveau',
          where: 'Saint-Maixent-l\'École',
          tags: [{ l: 'Visite devis', c: 'pill-violet' }, { l: 'Nouveau', c: '' }],
          accent: true,
        },
        {
          time: '14:00 → 16:30',
          title: 'Remise en état · Agence Immo Poitou',
          where: 'Melle',
          tags: [{ l: 'Pro', c: 'pill-violet' }],
          accent: false,
        },
      ],
    },
    {
      label: <>Jeudi 3 mai</>,
      count: 1,
      events: [
        {
          time: '10:00 → 12:00',
          title: 'Visite devis · Étude Leblanc',
          where: 'Frontenay-Rohan-Rohan',
          tags: [{ l: 'Visite devis', c: '' }],
          accent: false,
        },
      ],
    },
    {
      label: <>Lundi <em>5 mai</em></>,
      count: 1,
      events: [
        {
          time: '08:00 → 13:00',
          title: 'Débarras Fontaine · succession',
          where: 'Niort · 14 rue des Acacias',
          tags: [{ l: 'Succession', c: 'pill-violet' }, { l: 'Urgent', c: '' }],
          accent: true,
        },
      ],
    },
  ];

  const totalEvents = days.reduce((s, d) => s + (d.events ? d.events.length : 0), 0);
  const totalH = 17;

  return (
    <div className="admin">
      <AdminSidebar active="planning" />
      <div className="main">
        <AdminTopbar title="Planning" actions={
          <button className="btn btn-primary" style={{ padding: '8px 16px', fontSize: 14 }}>
            <Icon name="plus" size={16} /> Planifier une intervention
          </button>
        } />

        <div className="main-content">

          {/* sub-toolbar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
            <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
              <button className="icon-btn"><Icon name="chevron" size={16} style={{ transform: 'rotate(180deg)' }} /></button>
              <button className="btn btn-ghost" style={{ padding: '6px 14px', fontSize: 13 }}>Aujourd'hui</button>
              <button className="icon-btn"><Icon name="chevron" size={16} /></button>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontWeight: 500, marginLeft: 12 }}>Semaine du <em>30 avr.</em> 2026</h2>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <div style={{ display: 'flex', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--r-pill)', padding: 3 }}>
                {[
                  { id: 'list',  label: 'Liste'   },
                  { id: 'week',  label: 'Semaine'  },
                  { id: 'month', label: 'Mois'     },
                ].map(v => (
                  <button key={v.id}
                          onClick={() => setView(v.id)}
                          style={{
                            padding: '5px 14px',
                            borderRadius: 999,
                            border: 'none',
                            background: view === v.id ? 'var(--primary)' : 'transparent',
                            color: view === v.id ? 'var(--on-primary)' : 'var(--text-muted)',
                            fontSize: 13, fontWeight: 500, cursor: 'pointer'
                          }}>{v.label}</button>
                ))}
              </div>
            </div>
          </div>

          {/* legend */}
          <div style={{ display: 'flex', gap: 16, marginBottom: 24, fontSize: 12.5, color: 'var(--text-muted)', alignItems: 'center' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 10, height: 10, background: 'var(--primary)', borderRadius: 2 }} /> Mission prioritaire
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 10, height: 10, background: 'var(--ink-300)', borderRadius: 2 }} /> Mission standard
            </span>
            <span style={{ marginLeft: 'auto' }}>{totalEvents} interventions · {totalH}h · Seule sur le terrain</span>
          </div>

          {/* AGENDA */}
          {view === 'list' && (
            <div className="planning">
              {days.map((d, di) => (
                <div key={di} className="day-block">
                  <div className="day-head">
                    <div className="date">{d.label}</div>
                    <div className="count">
                      {d.holiday ? 'Jour férié' : `${d.count} intervention${d.count > 1 ? 's' : ''}`}
                    </div>
                  </div>
                  {d.holiday ? (
                    <div className="holiday">{d.holiday}</div>
                  ) : (
                    d.events.map((e, ei) => (
                      <div key={ei} className={`event ${e.accent ? 'accent' : ''}`} onClick={() => navigate('mission')}>
                        <div>
                          <div className="time">{e.time}</div>
                          {e.status === 'now'  && <div style={{ fontSize: 11, color: 'var(--success)',  fontWeight: 600, marginTop: 2 }}>● en cours</div>}
                          {e.status === 'done' && <div style={{ fontSize: 11, color: 'var(--text-muted)',              marginTop: 2 }}>terminé</div>}
                          {e.status === 'next' && <div style={{ fontSize: 11, color: 'var(--warning)',  fontWeight: 600, marginTop: 2 }}>● à venir</div>}
                        </div>
                        <div>
                          <div className="title">{e.title}</div>
                          <div className="info">
                            <Icon name="pin" size={12} style={{ verticalAlign: 'middle' }} /> {e.where}
                          </div>
                        </div>
                        <div className="tags" onClick={ev => ev.stopPropagation()}>
                          {e.tags.map((t, ti) => <span key={ti} className={`pill ${t.c}`} style={{ fontSize: 11 }}>{t.l}</span>)}
                          <DropMenu items={[
                            { label: 'Voir la mission',     icon: 'folder',   action: () => navigate('mission') },
                            { label: 'Appeler le client',   icon: 'phone',    action: () => {} },
                            '---',
                            { label: 'Déplacer',            icon: 'calendar', action: () => {} },
                            { label: 'Annuler',             icon: 'close',    danger: true, action: () => {} },
                          ]} />
                        </div>
                      </div>
                    ))
                  )}
                </div>
              ))}
            </div>
          )}

          {view !== 'list' && (
            <div className="card" style={{ textAlign: 'center', padding: 80, color: 'var(--text-muted)' }}>
              <Icon name="calendar" size={48} color="var(--ink-300)" />
              <h3 style={{ fontFamily: 'var(--font-serif)', marginTop: 12, color: 'var(--text)' }}>Vue {view === 'week' ? 'semaine' : 'mois'}</h3>
              <p style={{ marginTop: 6 }}>À venir dans le prototype final.</p>
              <button className="btn btn-soft" style={{ marginTop: 20 }} onClick={() => setView('list')}>
                Revenir à la vue liste
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

window.PagePlanning = PagePlanning;
