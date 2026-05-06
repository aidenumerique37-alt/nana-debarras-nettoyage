// router.jsx — hash-based router

const ADMIN_ROUTES = new Set(['dashboard', 'inbox', 'mission', 'missions', 'planning', 'clients', 'mediatheque', 'galerie', 'reports', 'settings']);

const PageJumper = ({ route }) => {
  const [open, setOpen] = React.useState(false);
  const pages = [
    { id: 'home',                  label: 'Accueil',                 group: 'Site public' },
    { id: 'services',              label: 'Nos services',            group: 'Site public' },
    { id: 'service-succession',    label: 'Service · Succession',    group: 'Site public' },
    { id: 'service-sinistre',      label: 'Service · Sinistre',      group: 'Site public' },
    { id: 'about',                 label: 'À propos',                group: 'Site public' },
    { id: 'contact',               label: 'Contact',                 group: 'Site public' },
    { id: 'devis',                 label: 'Demande de devis',        group: 'Site public' },
    { id: 'dashboard',             label: 'Admin · Tableau',         group: 'Admin' },
    { id: 'missions',              label: 'Missions · Liste',        group: 'Admin' },
    { id: 'mission',               label: 'Mission · Détail',        group: 'Admin' },
    { id: 'planning',              label: 'Planning',                group: 'Admin' },
    { id: 'clients',               label: 'Clients',                 group: 'Admin' },
    { id: 'mediatheque',           label: 'Médiathèque',             group: 'Admin' },
    { id: 'galerie',               label: 'Galerie',                 group: 'Admin' },
    { id: 'reports',               label: 'Statistiques',            group: 'Admin' },
    { id: 'settings',              label: 'Paramètres',              group: 'Admin' },
  ];
  const current = pages.find(p => p.id === route) || { label: route };

  return (
    <div style={{ position: 'fixed', bottom: 24, left: 24, zIndex: 200, fontFamily: 'var(--font-sans)' }}>
      {open && (
        <div style={{
          position: 'absolute', bottom: 56, left: 0,
          background: 'var(--violet-700)', color: 'var(--beige-50)',
          borderRadius: 'var(--r-lg)', padding: 8,
          boxShadow: 'var(--sh-3)',
          minWidth: 240, display: 'flex', flexDirection: 'column', gap: 2,
          maxHeight: '80vh', overflowY: 'auto',
        }}>
          {['Site public', 'Admin'].map(group => (
            <React.Fragment key={group}>
              <div style={{ fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(245,239,224,.4)', padding: '8px 12px 4px' }}>{group}</div>
              {pages.filter(p => p.group === group).map(p => (
                <button key={p.id}
                        onClick={() => { navigate(p.id); setOpen(false); }}
                        style={{
                          display: 'flex', alignItems: 'center', gap: 10,
                          padding: '8px 12px', border: 'none',
                          background: route === p.id ? 'var(--violet-500)' : 'transparent',
                          color: 'inherit', borderRadius: 8,
                          fontFamily: 'inherit', fontSize: 13, cursor: 'pointer', textAlign: 'left',
                        }}>
                  <span style={{ flex: 1 }}>{p.label}</span>
                  {route === p.id && <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--beige-50)' }} />}
                </button>
              ))}
            </React.Fragment>
          ))}
        </div>
      )}
      <button onClick={() => setOpen(o => !o)}
              style={{
                background: 'var(--violet-700)', color: 'var(--beige-50)',
                border: 'none', borderRadius: 999, padding: '9px 16px',
                fontFamily: 'inherit', fontSize: 12, fontWeight: 500,
                display: 'flex', alignItems: 'center', gap: 8,
                boxShadow: 'var(--sh-3)', cursor: 'pointer',
              }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--violet-300)' }} />
        Prototype · {current.label}
        <span style={{ opacity: .5, fontSize: 10 }}>▴</span>
      </button>
    </div>
  );
};

const Router = () => {
  const [content,  setContent]  = React.useState({ ...DEFAULT_SITE_CONTENT });
  const [gallery,  setGallery]  = React.useState([...DEFAULT_GALLERY]);
  const route = useHashRoute('home');

  const page = (() => {
    // Service detail: routes like "service-clean", "service-kids", etc.
    if (route.startsWith('service-')) {
      const serviceId = route.slice(8); // remove "service-"
      return <PageService serviceId={serviceId} />;
    }

    switch (route) {
      case 'home':      return <PageHome />;
      case 'services':  return <PageServices />;
      case 'about':     return <PageAbout />;
      case 'contact':   return <PageContact />;
      case 'devis':     return <PageDevis />;
      // Legacy "service" route → default ménage detail
      case 'service':   return <PageService serviceId="clean" />;
      // Admin
      case 'dashboard':
      case 'inbox':     return <PageDashboard />;
      case 'mission':   return <PageMission />;
      case 'planning':  return <PagePlanning />;
      case 'missions':  return <PageMissions />;
      case 'clients':      return <PageClients />;
      case 'mediatheque':  return <PageMediatheque />;
      case 'galerie':      return <PageGalerie />;
      case 'reports':      return <PageStats />;
      case 'settings':  return <PageSettings />;
      default:
        return (
          <div className="page" style={{ display: 'grid', placeItems: 'center', minHeight: '100vh' }}>
            <div style={{ textAlign: 'center' }}>
              <p className="eyebrow" style={{ marginBottom: 16 }}>Page introuvable</p>
              <h2 style={{ marginBottom: 24 }}>On ne trouve pas cette page.</h2>
              <button className="btn btn-primary" onClick={() => navigate('home')}>Retour à l'accueil</button>
            </div>
          </div>
        );
    }
  })();

  return (
    <SiteContentContext.Provider value={{ content, setContent }}>
      <GalleryContext.Provider value={{ gallery, setGallery }}>
        {page}
        <PageJumper route={route} />
      </GalleryContext.Provider>
    </SiteContentContext.Provider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Router />);
