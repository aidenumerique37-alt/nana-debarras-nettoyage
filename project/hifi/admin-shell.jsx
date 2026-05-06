// admin-shell.jsx — admin sidebar + topbar

const AdminSidebar = ({ active = 'dashboard' }) => {
  const items = [
    { id: 'dashboard', label: 'Tableau de bord', icon: 'home'     },
    { id: 'inbox',     label: 'Demandes',         icon: 'inbox',   badge: 3 },
    { id: 'planning',  label: 'Planning',          icon: 'calendar' },
    { id: 'missions',  label: 'Missions',          icon: 'folder'  },
    { id: 'clients',     label: 'Clients',      icon: 'user'    },
    { id: 'mediatheque', label: 'Médiathèque',  icon: 'camera'  },
    { id: 'galerie',     label: 'Galerie',       icon: 'grid'    },
  ];
  const items2 = [
    { id: 'reports',   label: 'Statistiques', icon: 'chart'    },
    { id: 'settings',  label: 'Paramètres',   icon: 'settings' },
  ];
  return (
    <aside className="sidebar">
      <div style={{ padding: '8px 8px 4px' }}>
        <Wordmark tag="Espace pro" onClick={() => navigate('dashboard')} />
      </div>

      <div className="nav-section">Travail</div>
      {items.map(i => (
        <a key={i.id}
           className={active === i.id ? 'active' : ''}
           onClick={() => navigate(i.id)}>
          <Icon name={i.icon} size={16} />
          <span style={{ flex: 1 }}>{i.label}</span>
          {i.badge && (
            <span style={{ background: 'var(--violet-300)', color: 'var(--violet-700)', borderRadius: 10, padding: '0 7px', fontSize: 11, fontWeight: 600 }}>{i.badge}</span>
          )}
        </a>
      ))}

      <div className="nav-section">Pilotage</div>
      {items2.map(i => (
        <a key={i.id}
           className={active === i.id ? 'active' : ''}
           onClick={() => navigate(i.id)}>
          <Icon name={i.icon} size={16} />
          <span>{i.label}</span>
        </a>
      ))}

      <div className="me">
        <div className="av">ND</div>
        <div style={{ flex: 1 }}>
          <div style={{ color: 'var(--beige-50)', fontWeight: 500 }}>Nana D.</div>
          <div style={{ fontSize: 11, opacity: .6 }}>Gérante</div>
        </div>
      </div>
    </aside>
  );
};

const AdminTopbar = ({ title, actions }) => (
  <header className="topbar">
    <div>
      <h1>{title}</h1>
    </div>
    <div className="top-actions">
      <div className="search">
        <Icon name="search" size={16} />
        <input placeholder="Rechercher un client, une mission…" />
        <kbd style={{ fontSize: 11, color: 'var(--text-muted)', background: 'var(--beige-100)', border: '1px solid var(--border)', borderRadius: 3, padding: '0 5px' }}>⌘K</kbd>
      </div>
      <div className="bell"><Icon name="bell" size={16} /><span className="dot" /></div>
      {actions}
    </div>
  </header>
);

Object.assign(window, { AdminSidebar, AdminTopbar });
