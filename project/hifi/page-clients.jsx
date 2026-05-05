// page-clients.jsx — carnet clients / mini-CRM

const CLIENTS = [
  {
    id: 1, initials: 'MF', name: 'Marc Fontaine',
    type: 'Particulier', sub: 'Succession',
    city: 'Niort', phone: '06 12 34 56 78', email: 'marc.fontaine@gmail.com',
    note: 'Fils du défunt. Appartement T3 + cave à vider. Notaire Me Leblanc (Frontenay). Don Emmaus à confirmer.',
    status: 'active', statusLabel: 'Mission en cours', tagClass: 'pill-violet',
    missions: 1, lastMission: '#M-0038 · 29 avr.',
  },
  {
    id: 2, initials: 'AP', name: 'Agence Immo Poitou',
    type: 'Pro', sub: 'Remise en état',
    city: 'Melle', phone: '05 49 28 XX XX', email: 'contact@agence-poitou.fr',
    note: 'Logement locatif vide avant relocation. Client pro — potentiel de partenariat régulier.',
    status: 'new', statusLabel: 'Devis en attente', tagClass: 'pill-violet',
    missions: 0, lastMission: '30 avr.',
  },
  {
    id: 3, initials: 'SM', name: 'Sylvie Moreau',
    type: 'Particulier', sub: 'Logement encombré',
    city: 'Coulon', phone: '06 23 45 67 89', email: '',
    note: 'Situation sensible · accompagnement demandé. Appeler avec bienveillance — ne pas brusquer.',
    status: 'new', statusLabel: 'Nouveau', tagClass: 'pill-violet',
    missions: 0, lastMission: 'Ce matin',
  },
  {
    id: 4, initials: 'MR', name: 'M. Rault',
    type: 'Particulier', sub: 'Nettoyage sinistre',
    city: 'Mauzé-sur-le-Mignon', phone: '06 34 56 78 90', email: '',
    note: 'Dégât des eaux · plafond effondré. Intervention terminée. Facture à envoyer.',
    status: 'warn', statusLabel: 'À facturer', tagClass: '',
    missions: 1, lastMission: '28 avr.',
  },
  {
    id: 5, initials: 'EL', name: 'Étude Notariale Leblanc',
    type: 'Pro', sub: 'Débarras maison',
    city: 'Frontenay-Rohan-Rohan', phone: '05 49 XX XX XX', email: 'etude.leblanc@notaires.fr',
    note: 'Maison de famille complète. Demande vieille de 3 jours — relancer en priorité.',
    status: 'cold', statusLabel: 'À relancer', tagClass: '',
    missions: 0, lastMission: '27 avr.',
  },
  {
    id: 6, initials: 'FD', name: 'Famille Dumont',
    type: 'Particulier', sub: 'Succession',
    city: 'Niort', phone: '06 45 67 89 01', email: 'dumont@gmail.com',
    note: 'Client satisfait · avis 5/5 laissé. 2e succession potentielle à venir (maison de campagne).',
    status: 'done', statusLabel: 'Clôturé', tagClass: '',
    missions: 2, lastMission: '15 avr.',
  },
  {
    id: 7, initials: 'MC', name: 'Mme Chauveau',
    type: 'Particulier', sub: 'Visite devis',
    city: "Saint-Maixent-l'École", phone: '06 56 78 90 12', email: '',
    note: 'Visite devis planifiée mercredi 2 mai 9h. Logement à évaluer — volume inconnu.',
    status: 'new', statusLabel: 'Visite planifiée', tagClass: 'pill-violet',
    missions: 0, lastMission: '30 avr.',
  },
];

const STATUS_COLOR = {
  active: 'var(--primary)',
  new:    'var(--violet-500)',
  warn:   'var(--warning)',
  cold:   'var(--text-muted)',
  done:   'var(--success)',
};

const PageClients = () => {
  const [open, setOpen] = React.useState(null);
  const [filter, setFilter] = React.useState('all');
  const [q, setQ]   = React.useState('');

  const list = CLIENTS.filter(c => {
    if (filter === 'pro'  && c.type !== 'Pro')          return false;
    if (filter === 'part' && c.type !== 'Particulier')  return false;
    if (q && !c.name.toLowerCase().includes(q.toLowerCase())
          && !c.city.toLowerCase().includes(q.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="admin">
      <AdminSidebar active="clients" />
      <div className="main">
        <AdminTopbar title="Clients" actions={
          <button className="btn btn-primary" style={{ padding: '8px 16px', fontSize: 14 }}>
            <Icon name="plus" size={16} /> Nouveau client
          </button>
        } />

        <div className="main-content">

          {/* toolbar */}
          <div style={{ display: 'flex', gap: 12, marginBottom: 24, alignItems: 'center' }}>
            <div className="search" style={{ flex: 1, maxWidth: 360 }}>
              <Icon name="search" size={16} />
              <input placeholder="Nom, ville…" value={q} onChange={e => setQ(e.target.value)} />
            </div>
            <div style={{ display: 'flex', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--r-pill)', padding: 3 }}>
              {[
                { id: 'all',  label: 'Tous'        },
                { id: 'part', label: 'Particuliers' },
                { id: 'pro',  label: 'Pros'         },
              ].map(f => (
                <button key={f.id} onClick={() => setFilter(f.id)} style={{
                  padding: '5px 14px', borderRadius: 999, border: 'none',
                  background: filter === f.id ? 'var(--primary)' : 'transparent',
                  color:      filter === f.id ? 'var(--on-primary)' : 'var(--text-muted)',
                  fontSize: 13, fontWeight: 500, cursor: 'pointer',
                }}>{f.label}</button>
              ))}
            </div>
            <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>
              {list.length} client{list.length > 1 ? 's' : ''}
            </span>
          </div>

          {/* list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {list.map(c => (
              <React.Fragment key={c.id}>
                {/* row */}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 16, padding: '14px 18px',
                  background: open === c.id ? 'var(--beige-50)' : 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: open === c.id ? 'var(--r-md) var(--r-md) 0 0' : 'var(--r-md)',
                  cursor: 'pointer', userSelect: 'none',
                }} onClick={() => setOpen(open === c.id ? null : c.id)}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--beige-200)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-serif)', fontSize: 14, fontWeight: 500, flexShrink: 0 }}>{c.initials}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontWeight: 600, fontSize: 14 }}>{c.name}</div>
                    <div style={{ fontSize: 12.5, color: 'var(--text-muted)', marginTop: 2 }}>
                      {c.sub} · <Icon name="pin" size={11} style={{ verticalAlign: 'middle' }} /> {c.city}
                    </div>
                  </div>
                  <span style={{ fontSize: 11.5, fontWeight: 600, color: STATUS_COLOR[c.status], whiteSpace: 'nowrap' }}>
                    {c.statusLabel}
                  </span>
                  <span style={{ fontSize: 12, color: 'var(--text-muted)', minWidth: 90, textAlign: 'right', whiteSpace: 'nowrap' }}>
                    {c.lastMission}
                  </span>
                  <Icon name="chevron" size={13} color="var(--text-muted)"
                        style={{ transform: open === c.id ? 'rotate(90deg)' : 'none', transition: 'transform .18s', flexShrink: 0 }} />
                </div>

                {/* detail panel */}
                {open === c.id && (
                  <div style={{
                    border: '1px solid var(--border)', borderTop: 'none',
                    borderRadius: '0 0 var(--r-md) var(--r-md)',
                    background: 'var(--surface)', padding: '18px 20px 20px',
                    display: 'flex', gap: 32,
                  }}>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10, fontSize: 13.5 }}>
                      {c.phone && (
                        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                          <Icon name="phone" size={14} color="var(--primary)" />
                          <a href={`tel:${c.phone.replace(/\s/g,'')}`} style={{ color: 'var(--primary)' }}>{c.phone}</a>
                        </div>
                      )}
                      {c.email && (
                        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                          <Icon name="mail" size={14} color="var(--text-muted)" />
                          <span>{c.email}</span>
                        </div>
                      )}
                      {c.note && (
                        <div style={{ marginTop: 4, padding: '10px 14px', background: 'var(--beige-50)', borderRadius: 'var(--r-md)', fontSize: 13, color: 'var(--text-soft)', lineHeight: 1.6 }}>
                          {c.note}
                        </div>
                      )}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-end', flexShrink: 0 }}>
                      {c.missions > 0 && (
                        <button className="btn btn-soft" style={{ fontSize: 13, padding: '7px 16px' }} onClick={e => { e.stopPropagation(); navigate('mission'); }}>
                          <Icon name="folder" size={13} /> Voir la mission
                        </button>
                      )}
                      {c.phone && (
                        <a href={`tel:${c.phone.replace(/\s/g,'')}`} className="btn btn-ghost"
                           onClick={e => e.stopPropagation()}
                           style={{ fontSize: 13, padding: '7px 16px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}>
                          <Icon name="phone" size={13} /> Appeler
                        </a>
                      )}
                      <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 4 }}>
                        {c.missions > 0 ? `${c.missions} mission${c.missions > 1 ? 's' : ''}` : 'Aucune mission encore'}
                      </div>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

window.PageClients = PageClients;
