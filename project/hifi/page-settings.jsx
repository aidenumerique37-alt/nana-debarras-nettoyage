// page-settings.jsx — Paramètres & gestion du site (CMS)

const INITIAL_SERVICES = [
  { id: 'succession',   label: 'Débarras de succession',      active: true  },
  { id: 'demenagement', label: 'Débarras avant déménagement',  active: true  },
  { id: 'encombre',     label: 'Logement encombré',            active: true  },
  { id: 'sinistre',     label: 'Nettoyage après sinistre',     active: true  },
  { id: 'insalubre',    label: 'Logement insalubre',           active: true  },
  { id: 'pro',          label: 'Prestations professionnelles', active: true  },
];

const INITIAL_ZONES = [
  'Niort', 'Arçais', 'Coulon', 'Frontenay-Rohan-Rohan',
  'Mauzé-sur-le-Mignon', 'Melle', "Saint-Maixent-l'École",
  'Fontenay-le-Comte', 'Surgères',
];

const Toggle = ({ on, onChange }) => (
  <div onClick={onChange} style={{
    width: 40, height: 22, borderRadius: 999, flexShrink: 0, cursor: 'pointer',
    background: on ? 'var(--primary)' : 'var(--ink-300)',
    position: 'relative', transition: 'background .18s',
  }}>
    <div style={{
      position: 'absolute', top: 3, width: 16, height: 16, borderRadius: '50%',
      background: '#fff', transition: 'left .18s',
      left: on ? 21 : 3, boxShadow: '0 1px 3px rgba(0,0,0,.2)',
    }} />
  </div>
);

const SaveBanner = ({ show }) => !show ? null : (
  <div style={{
    position: 'fixed', bottom: 80, right: 32, zIndex: 100,
    background: 'var(--success)', color: '#fff',
    borderRadius: 'var(--r-md)', padding: '10px 20px',
    fontSize: 14, fontWeight: 500, boxShadow: 'var(--sh-3)',
    display: 'flex', gap: 8, alignItems: 'center',
  }}>
    <Icon name="check" size={15} color="#fff" /> Modifications enregistrées
  </div>
);

const PageSettings = () => {
  const [tab,      setTab]      = React.useState('entreprise');
  const [saved,    setSaved]    = React.useState(false);
  const [services, setServices] = React.useState(INITIAL_SERVICES.map(s => ({ ...s })));
  const [zones,    setZones]    = React.useState([...INITIAL_ZONES]);
  const [newZone,  setNewZone]  = React.useState('');
  const [notifSMS, setNotifSMS] = React.useState(true);
  const [notifHebdo, setNotifHebdo] = React.useState(true);
  const [notifEmail, setNotifEmail] = React.useState('bonjour@nana.fr');
  const [company,  setCompany]  = React.useState({
    name:         'Nana Débarras et Nettoyage',
    phone:        '06 79 80 62 88',
    email:        'bonjour@nana.fr',
    address:      'Arçais, 79210',
    tagline:      'Débarras et nettoyage spécialisé en Deux-Sèvres et Marais Poitevin.',
    radius:       '30–40',
    responseTime: '48h',
  });
  const [schedules, setSchedules] = React.useState([
    { day: 'Lundi – Vendredi', hours: '8h – 19h' },
    { day: 'Samedi',           hours: '9h – 12h' },
    { day: 'Dimanche',         hours: 'Fermé'    },
  ]);

  const save = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const updateCompany = (k, v) => setCompany(c => ({ ...c, [k]: v }));
  const updateSchedule = (i, v) => setSchedules(s => s.map((x, j) => j === i ? { ...x, hours: v } : x));
  const addZone = () => {
    if (newZone.trim()) { setZones(z => [...z, newZone.trim()]); setNewZone(''); }
  };

  const TABS = [
    { id: 'entreprise',  label: 'Mon entreprise'   },
    { id: 'prestations', label: 'Mes prestations'  },
    { id: 'zone',        label: 'Zone & horaires'  },
    { id: 'notifs',      label: 'Notifications'    },
  ];

  const tabStyle = (id) => ({
    padding: '10px 18px', background: 'none', border: 'none', cursor: 'pointer',
    fontFamily: 'inherit', fontSize: 14,
    borderBottom: tab === id ? '2px solid var(--primary)' : '2px solid transparent',
    marginBottom: -1,
    color:      tab === id ? 'var(--primary)' : 'var(--text-muted)',
    fontWeight: tab === id ? 600 : 400,
  });

  return (
    <div className="admin">
      <AdminSidebar active="settings" />
      <div className="main">
        <AdminTopbar title="Paramètres" />
        <div className="main-content">
          <SaveBanner show={saved} />

          {/* tabs */}
          <div style={{ display: 'flex', gap: 2, marginBottom: 32, borderBottom: '1px solid var(--border)' }}>
            {TABS.map(t => (
              <button key={t.id} onClick={() => setTab(t.id)} style={tabStyle(t.id)}>{t.label}</button>
            ))}
          </div>

          {/* ── MON ENTREPRISE ── */}
          {tab === 'entreprise' && (
            <div style={{ maxWidth: 680 }}>
              <p className="muted" style={{ marginBottom: 28, fontSize: 14, lineHeight: 1.6 }}>
                Ces informations apparaissent sur votre site public. Toute modification est reflétée immédiatement.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div className="field">
                  <label>Nom de l'entreprise</label>
                  <input className="input" value={company.name} onChange={e => updateCompany('name', e.target.value)} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div className="field">
                    <label>Téléphone</label>
                    <input className="input" type="tel" value={company.phone} onChange={e => updateCompany('phone', e.target.value)} />
                  </div>
                  <div className="field">
                    <label>E-mail de contact</label>
                    <input className="input" type="email" value={company.email} onChange={e => updateCompany('email', e.target.value)} />
                  </div>
                </div>
                <div className="field">
                  <label>Adresse / localité</label>
                  <input className="input" value={company.address} onChange={e => updateCompany('address', e.target.value)} />
                </div>
                <div className="field">
                  <label>
                    Phrase de présentation
                    <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}> (footer et page Contact)</span>
                  </label>
                  <textarea className="textarea" rows={3} value={company.tagline} onChange={e => updateCompany('tagline', e.target.value)} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div className="field">
                    <label>Rayon d'intervention (km)</label>
                    <input className="input" value={company.radius} onChange={e => updateCompany('radius', e.target.value)} />
                  </div>
                  <div className="field">
                    <label>Délai de rappel affiché sur le site</label>
                    <select className="input" value={company.responseTime} onChange={e => updateCompany('responseTime', e.target.value)}>
                      <option value="2h">Dans les 2h (journée)</option>
                      <option value="24h">Sous 24h</option>
                      <option value="48h">Sous 48h</option>
                    </select>
                  </div>
                </div>
                <div>
                  <button className="btn btn-primary" onClick={save} style={{ padding: '10px 24px' }}>
                    Enregistrer les modifications
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ── MES PRESTATIONS ── */}
          {tab === 'prestations' && (
            <div style={{ maxWidth: 680 }}>
              <p className="muted" style={{ marginBottom: 28, fontSize: 14, lineHeight: 1.6 }}>
                Activez ou désactivez les prestations affichées sur votre site. Vous pouvez aussi en prévisualiser chacune.
              </p>
              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                {services.map((s, i) => (
                  <div key={s.id} style={{
                    display: 'flex', alignItems: 'center', gap: 16, padding: '16px 20px',
                    borderBottom: i < services.length - 1 ? '1px solid var(--border)' : 'none',
                  }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 500, fontSize: 14 }}>{s.label}</div>
                      <div style={{ fontSize: 12.5, color: s.active ? 'var(--success)' : 'var(--text-muted)', marginTop: 3 }}>
                        {s.active ? '● Visible sur le site public' : '○ Masquée — non affichée'}
                      </div>
                    </div>
                    <button className="btn btn-ghost" style={{ fontSize: 12, padding: '5px 12px' }}
                            onClick={() => navigate(`service-${s.id}`)}>
                      Aperçu
                    </button>
                    <Toggle
                      on={s.active}
                      onChange={() => setServices(sv => sv.map(x => x.id === s.id ? { ...x, active: !x.active } : x))}
                    />
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 20 }}>
                <button className="btn btn-primary" onClick={save} style={{ padding: '10px 24px' }}>Enregistrer</button>
              </div>
            </div>
          )}

          {/* ── ZONE & HORAIRES ── */}
          {tab === 'zone' && (
            <div style={{ maxWidth: 680 }}>
              <p className="muted" style={{ marginBottom: 28, fontSize: 14, lineHeight: 1.6 }}>
                Gérez les communes affichées sur votre site et vos horaires d'ouverture.
              </p>

              <div className="card" style={{ marginBottom: 20 }}>
                <h3 style={{ fontSize: 16, marginBottom: 16 }}>Communes desservies</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
                  {zones.map(z => (
                    <div key={z} style={{
                      display: 'flex', alignItems: 'center', gap: 6,
                      background: 'var(--beige-100)', border: '1px solid var(--border)',
                      borderRadius: 999, padding: '5px 12px', fontSize: 13,
                    }}>
                      {z}
                      <button onClick={() => setZones(zs => zs.filter(x => x !== z))}
                              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', fontSize: 18, lineHeight: 1, padding: 0, marginLeft: 2, display: 'flex', alignItems: 'center' }}>
                        ×
                      </button>
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <input className="input" placeholder="Ajouter une ville…" value={newZone}
                         onChange={e => setNewZone(e.target.value)}
                         onKeyDown={e => e.key === 'Enter' && addZone()}
                         style={{ flex: 1 }} />
                  <button className="btn btn-soft" onClick={addZone}>Ajouter</button>
                </div>
              </div>

              <div className="card" style={{ marginBottom: 20 }}>
                <h3 style={{ fontSize: 16, marginBottom: 16 }}>Horaires affichés sur le site</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 13.5 }}>
                  {schedules.map((h, i) => (
                    <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                      <span style={{ minWidth: 160, color: 'var(--text-muted)' }}>{h.day}</span>
                      <input className="input" value={h.hours} onChange={e => updateSchedule(i, e.target.value)} style={{ maxWidth: 180 }} />
                    </div>
                  ))}
                </div>
              </div>

              <button className="btn btn-primary" onClick={save} style={{ padding: '10px 24px' }}>Enregistrer</button>
            </div>
          )}

          {/* ── NOTIFICATIONS ── */}
          {tab === 'notifs' && (
            <div style={{ maxWidth: 680 }}>
              <p className="muted" style={{ marginBottom: 28, fontSize: 14, lineHeight: 1.6 }}>
                Choisissez comment être alertée quand un client soumet une demande de devis ou de rappel.
              </p>

              <div className="card" style={{ marginBottom: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14 }}>Notifications par e-mail</div>
                    <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 4 }}>
                      Reçue à chaque nouvelle demande de devis ou de rappel.
                    </div>
                  </div>
                  <Toggle on={true} onChange={() => {}} />
                </div>
                <div className="field">
                  <label>Adresse de réception</label>
                  <input className="input" type="email" value={notifEmail}
                         onChange={e => setNotifEmail(e.target.value)} style={{ maxWidth: 320 }} />
                </div>
              </div>

              <div className="card" style={{ marginBottom: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14 }}>Notifications SMS</div>
                    <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 4 }}>
                      Alerte rapide sur votre téléphone pour les nouvelles demandes.
                    </div>
                  </div>
                  <Toggle on={notifSMS} onChange={() => setNotifSMS(v => !v)} />
                </div>
              </div>

              <div className="card" style={{ marginBottom: 28 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14 }}>Récapitulatif hebdomadaire</div>
                    <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 4 }}>
                      E-mail chaque lundi : demandes reçues, missions planifiées, CA estimé.
                    </div>
                  </div>
                  <Toggle on={notifHebdo} onChange={() => setNotifHebdo(v => !v)} />
                </div>
              </div>

              <button className="btn btn-primary" onClick={save} style={{ padding: '10px 24px' }}>Enregistrer</button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

window.PageSettings = PageSettings;
