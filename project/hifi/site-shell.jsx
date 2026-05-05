// site-shell.jsx — public site nav + footer

const SiteNav = ({ active = 'home' }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const links = [
    { id: 'home', label: 'Accueil' },
    { id: 'services', label: 'Nos prestations' },
    { id: 'about', label: 'À propos' },
    { id: 'contact', label: 'Contact' },
  ];

  const go = (id) => {
    navigate(id);
    setMenuOpen(false);
  };

  return (
    <header className="nav" style={{ position: 'sticky', top: 0, zIndex: 50 }}>
      <div className="container nav-inner">
        <Wordmark onClick={() => go('home')} />

        <nav className="nav-links">
          {links.map(l => (
            <a key={l.id}
               className={active === l.id ? 'active' : ''}
               onClick={() => go(l.id)}>
              {l.label}
            </a>
          ))}
        </nav>

        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <button
            className="mobile-menu-toggle"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Menu"
            aria-expanded={menuOpen}>
            <Icon name={menuOpen ? 'close' : 'menu'} size={18} />
          </button>
          <button className="btn btn-primary nav-devis-full" onClick={() => go('devis')}>
            Demander un devis
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div className={`mobile-nav${menuOpen ? ' open' : ''}`}>
        {links.map(l => (
          <a key={l.id}
             className={active === l.id ? 'active' : ''}
             onClick={() => go(l.id)}>
            {l.label}
          </a>
        ))}
        <button className="btn btn-primary" onClick={() => go('devis')} style={{ marginTop: 8, width: '100%', justifyContent: 'center' }}>
          Demander un devis gratuit
          <Icon name="arrow" size={16} />
        </button>
      </div>
    </header>
  );
};

const SiteFooter = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        <div>
          <h3>Libérons les espaces, <em className="serif-italic">ensemble</em>.</h3>
          <p style={{ color: 'rgba(245,239,224,.7)', maxWidth: 360, marginTop: 12 }}>
            Débarras et nettoyage spécialisé en Deux-Sèvres et Marais Poitevin. Discrétion, professionnalisme, engagement écologique.
          </p>
          <div style={{ display: 'flex', gap: 8, marginTop: 24, flexWrap: 'wrap' }}>
            <a href="tel:+33679806288" className="pill" style={{ background: 'rgba(255,255,255,.08)', color: 'inherit', border: 'none', textDecoration: 'none' }}>
              <Icon name="phone" size={14} /> 06 79 80 62 88
            </a>
            <a href="mailto:contact@nana-debarras.fr" className="pill" style={{ background: 'rgba(255,255,255,.08)', color: 'inherit', border: 'none', textDecoration: 'none' }}>
              <Icon name="mail" size={14} /> contact@nana-debarras.fr
            </a>
          </div>
        </div>
        <div>
          <h4>Prestations</h4>
          <ul>
            <li><a onClick={() => navigate('service-succession')} style={{ cursor: 'pointer' }}>Débarras de succession</a></li>
            <li><a onClick={() => navigate('service-demenagement')} style={{ cursor: 'pointer' }}>Débarras avant déménagement</a></li>
            <li><a onClick={() => navigate('service-encombre')} style={{ cursor: 'pointer' }}>Logement encombré</a></li>
            <li><a onClick={() => navigate('service-sinistre')} style={{ cursor: 'pointer' }}>Nettoyage après sinistre</a></li>
            <li><a onClick={() => navigate('service-insalubre')} style={{ cursor: 'pointer' }}>Logement insalubre</a></li>
            <li><a onClick={() => navigate('service-pro')} style={{ cursor: 'pointer' }}>Prestations professionnelles</a></li>
          </ul>
        </div>
        <div>
          <h4>L'entreprise</h4>
          <ul>
            <li><a onClick={() => navigate('about')} style={{ cursor: 'pointer' }}>Notre histoire</a></li>
            <li><a onClick={() => navigate('about')} style={{ cursor: 'pointer' }}>Nos valeurs</a></li>
            <li><a onClick={() => navigate('about')} style={{ cursor: 'pointer' }}>Engagement écologique</a></li>
            <li><a onClick={() => navigate('contact')} style={{ cursor: 'pointer' }}>Nous rejoindre</a></li>
          </ul>
        </div>
        <div>
          <h4>Pratique</h4>
          <ul>
            <li><a onClick={() => navigate('contact')} style={{ cursor: 'pointer' }}>Contact & FAQ</a></li>
            <li><a onClick={() => navigate('devis')} style={{ cursor: 'pointer' }}>Demander un devis</a></li>
            <li><a style={{ cursor: 'default', opacity: .5 }}>Mentions légales</a></li>
            <li><a style={{ cursor: 'default', opacity: .5 }}>CGV</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2014–2026 Nana Débarras et Nettoyage — Marais Poitevin (79)</span>
        <span>Conçu localement, avec attention.</span>
      </div>
    </div>
  </footer>
);

Object.assign(window, { SiteNav, SiteFooter });
