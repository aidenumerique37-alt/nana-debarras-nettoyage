// page-missions.jsx — liste de toutes les missions

const MISSIONS_LIST = [
  {
    id: 'M-0038', client: 'Marc Fontaine',       type: 'Succession',
    city: 'Niort', montant: '850 €', phone: '06 12 34 56 78',
    status: 'planned', statusLabel: 'Intervention planifiée', next: '5 mai · 8h–13h',
  },
  {
    id: 'M-0035', client: 'Agence Immo Poitou',  type: 'Remise en état',
    city: 'Melle', montant: 'Devis en cours', phone: '05 49 28 XX XX',
    status: 'visit', statusLabel: 'Visite planifiée', next: '2 mai · 14h',
  },
  {
    id: 'M-0036', client: 'M. Rault',             type: 'Nettoyage sinistre',
    city: 'Mauzé-sur-le-Mignon', montant: '480 €', phone: '06 34 56 78 90',
    status: 'invoice', statusLabel: 'À facturer', next: 'Terminé 28 avr.',
  },
  {
    id: 'M-0034', client: 'Sylvie Moreau',        type: 'Logement encombré',
    city: 'Coulon', montant: 'À estimer', phone: '06 23 45 67 89',
    status: 'new', statusLabel: 'Visite à planifier', next: '—',
  },
  {
    id: 'M-0033', client: 'Étude Leblanc',        type: 'Débarras maison',
    city: 'Frontenay-Rohan-Rohan', montant: 'À estimer', phone: '05 49 XX XX XX',
    status: 'new', statusLabel: 'Devis à envoyer', next: '—',
  },
  {
    id: 'M-0037', client: 'Famille Dumont',       type: 'Succession',
    city: 'Niort', montant: '720 €', phone: '06 45 67 89 01',
    status: 'done', statusLabel: 'Clôturé', next: '15 avr.',
  },
  {
    id: 'M-0032', client: 'Mme Chauveau',         type: 'Déménagement',
    city: "Saint-Maixent-l'École", montant: 'À estimer', phone: '06 56 78 90 12',
    status: 'done', statusLabel: 'Clôturé', next: '4 avr.',
  },
];

const STATUS_COLOR = {
  planned: 'var(--primary)',
  visit:   'var(--violet-500)',
  invoice: 'var(--warning)',
  new:     'var(--text-soft)',
  done:    'var(--success)',
};

const FILTERS = [
  { id: 'all',      label: 'Toutes'    },
  { id: 'active',   label: 'En cours'  },
  { id: 'done',     label: 'Clôturées' },
];

const PageMissions = () => {
  const [filter, setFilter] = React.useState('all');
  const [q, setQ] = React.useState('');

  const list = MISSIONS_LIST.filter(m => {
    if (filter === 'active' && m.status === 'done') return false;
    if (filter === 'done'   && m.status !== 'done') return false;
    if (q && !m.client.toLowerCase().includes(q.toLowerCase())
          && !m.city.toLowerCase().includes(q.toLowerCase())
          && !m.type.toLowerCase().includes(q.toLowerCase())) return false;
    return true;
  });

  const counts = {
    all:    MISSIONS_LIST.length,
    active: MISSIONS_LIST.filter(m => m.status !== 'done').length,
    done:   MISSIONS_LIST.filter(m => m.status === 'done').length,
  };

  return (
    <div className="admin">
      <AdminSidebar active="missions" />
      <div className="main">
        <AdminTopbar title="Missions" actions={
          <button className="btn btn-primary" style={{ padding: '8px 16px', fontSize: 14 }}>
            <Icon name="plus" size={16} /> Nouvelle mission
          </button>
        } />

        <div className="main-content">

          {/* toolbar */}
          <div style={{ display: 'flex', gap: 12, marginBottom: 24, alignItems: 'center', flexWrap: 'wrap' }}>
            <div className="search" style={{ flex: 1, maxWidth: 340 }}>
              <Icon name="search" size={16} />
              <input placeholder="Client, ville, type…" value={q} onChange={e => setQ(e.target.value)} />
            </div>
            <div style={{ display: 'flex', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--r-pill)', padding: 3 }}>
              {FILTERS.map(f => (
                <button key={f.id} onClick={() => setFilter(f.id)} style={{
                  padding: '5px 14px', borderRadius: 999, border: 'none',
                  background: filter === f.id ? 'var(--primary)' : 'transparent',
                  color:      filter === f.id ? 'var(--on-primary)' : 'var(--text-muted)',
                  fontSize: 13, fontWeight: 500, cursor: 'pointer',
                }}>
                  {f.label}
                  <span style={{ opacity: .6, marginLeft: 5, fontSize: 12 }}>{counts[f.id]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* table header */}
          <div style={{ display: 'grid', gridTemplateColumns: '90px 1fr 160px 130px 140px 120px 36px', gap: 12, padding: '8px 16px', fontSize: 11.5, color: 'var(--text-muted)', letterSpacing: '.04em', textTransform: 'uppercase', fontWeight: 600 }}>
            <span>Réf.</span><span>Client</span><span>Prestation</span><span>Lieu</span><span>Statut</span><span style={{ textAlign: 'right' }}>Montant</span><span />
          </div>

          {/* rows */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {list.map(m => (
              <div key={m.id}
                   style={{ display: 'grid', gridTemplateColumns: '90px 1fr 160px 130px 140px 120px 36px', gap: 12, padding: '14px 16px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--r-md)', alignItems: 'center', cursor: 'pointer', transition: 'background .1s' }}
                   onClick={() => navigate('mission')}
                   onMouseEnter={e => e.currentTarget.style.background = 'var(--beige-50)'}
                   onMouseLeave={e => e.currentTarget.style.background = 'var(--surface)'}>

                {/* ref */}
                <span style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'monospace' }}>#{m.id}</span>

                {/* client */}
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>{m.client}</div>
                  {m.next !== '—' && (
                    <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>{m.next}</div>
                  )}
                </div>

                {/* type */}
                <span style={{ fontSize: 13, color: 'var(--text-soft)' }}>{m.type}</span>

                {/* lieu */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 13, color: 'var(--text-soft)' }}>
                  <Icon name="pin" size={12} color="var(--text-muted)" />
                  {m.city}
                </div>

                {/* statut */}
                <span style={{ fontSize: 12.5, fontWeight: 600, color: STATUS_COLOR[m.status] }}>
                  {m.statusLabel}
                </span>

                {/* montant */}
                <span style={{ fontSize: 13.5, fontWeight: 600, color: m.montant.includes('€') ? 'var(--text)' : 'var(--text-muted)', textAlign: 'right' }}>
                  {m.montant}
                </span>

                {/* menu */}
                <div onClick={e => e.stopPropagation()}>
                  <DropMenu items={[
                    { label: 'Ouvrir la mission',    icon: 'folder', action: () => navigate('mission') },
                    { label: `Appeler ${m.client.split(' ')[0]}`, icon: 'phone', action: () => {} },
                    '---',
                    m.status !== 'done'
                      ? { label: 'Marquer comme clôturé', icon: 'check', action: () => {} }
                      : { label: 'Rouvrir la mission',    icon: 'edit',  action: () => {} },
                    '---',
                    { label: 'Supprimer', icon: 'close', danger: true, action: () => {} },
                  ]} />
                </div>
              </div>
            ))}

            {list.length === 0 && (
              <div style={{ padding: '48px 24px', textAlign: 'center', color: 'var(--text-muted)', fontSize: 14 }}>
                Aucune mission ne correspond à votre recherche.
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

window.PageMissions = PageMissions;
