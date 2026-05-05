// lib.jsx — small shared helpers

const Icon = ({ name, size = 20, stroke = 1.6, color = 'currentColor' }) => {
  const paths = {
    arrow: <path d="M5 12h14M13 5l7 7-7 7" />,
    check: <path d="M4 12l5 5L20 6" />,
    plus: <path d="M12 5v14M5 12h14" />,
    sparkle: <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" />,
    heart: <path d="M12 20s-7-4.5-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.5-7 10-7 10z" />,
    home: <><path d="M3 11l9-8 9 8" /><path d="M5 10v10h14V10" /></>,
    inbox: <><path d="M3 13h5l1 3h6l1-3h5" /><path d="M3 13l3-8h12l3 8" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 9h18M8 3v4M16 3v4" /></>,
    user: <><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" /></>,
    settings: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a7.97 7.97 0 000-6l1.6-1-2-3.4-1.9.6a8 8 0 00-5.2-3L11.5 0h-4l-.4 2.2a8 8 0 00-5.2 3l-1.9-.6-2 3.4 1.6 1a8 8 0 000 6l-1.6 1 2 3.4 1.9-.6a8 8 0 005.2 3l.4 2.2h4l.4-2.2a8 8 0 005.2-3l1.9.6 2-3.4-1.6-1z" /></>,
    chart: <><path d="M3 3v18h18" /><path d="M7 14l4-4 4 4 5-7" /></>,
    folder: <path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />,
    bell: <><path d="M6 8a6 6 0 1112 0c0 7 3 7 3 9H3c0-2 3-2 3-9z" /><path d="M10 22h4" /></>,
    search: <><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.5-4.5" /></>,
    play: <path d="M6 4l13 8L6 20V4z" />,
    leaf: <path d="M3 21c8-2 12-7 18-18-2 8-7 14-18 18zM3 21c5-7 9-9 14-10" />,
    star: <path d="M12 3l2.7 6 6.3.5-4.8 4.2 1.5 6.3L12 16.8 6.3 20l1.5-6.3L3 9.5 9.3 9 12 3z" />,
    flower: <><circle cx="12" cy="12" r="2.5" /><path d="M12 2c-2 3-2 5 0 7 2-2 2-4 0-7zM12 22c-2-3-2-5 0-7 2 2 2 4 0 7zM2 12c3-2 5-2 7 0-2 2-4 2-7 0zM22 12c-3 2-5 2-7 0 2-2 4-2 7 0z" /></>,
    shield: <path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5l8-3z" />,
    handshake: <><path d="M2 12l4-4 4 2 5-3 7 5-4 5-3-2-3 3-3-1-2 1z" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    pin: <><path d="M12 22s-7-7-7-12a7 7 0 0114 0c0 5-7 12-7 12z" /><circle cx="12" cy="10" r="2.5" /></>,
    phone: <path d="M5 4h4l2 5-3 2c1 3 3 5 6 6l2-3 5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 7 9-7" /></>,
    chevron: <path d="M9 6l6 6-6 6" />,
    chevronDown: <path d="M6 9l6 6 6-6" />,
    menu: <path d="M4 6h16M4 12h16M4 18h16" />,
    download: <><path d="M12 4v12" /><path d="M7 11l5 5 5-5" /><path d="M5 20h14" /></>,
    file: <><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" /><path d="M14 2v6h6" /></>,
    camera: <><path d="M3 8a2 2 0 012-2h2l2-2h6l2 2h2a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" /><circle cx="12" cy="13" r="4" /></>,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4l1.4-1.4M17 7l1.4-1.4" /></>,
    cart: <><circle cx="9" cy="20" r="1.5" /><circle cx="17" cy="20" r="1.5" /><path d="M3 4h2l2 12h11l2-8H6" /></>,
    sprout: <><path d="M12 22V12" /><path d="M12 12c-3 0-6-2-6-6 4 0 6 2 6 6z" /><path d="M12 12c3 0 6-2 6-6-4 0-6 2-6 6z" /></>,
    sparkles: <><path d="M5 4l1.5 4L10.5 9.5 6.5 11 5 15l-1.5-4L-0.5 9.5 3.5 8 5 4z" transform="translate(2 1)" /><path d="M16 12l1 2.5 2.5 1-2.5 1L16 19l-1-2.5L12.5 15.5 15 14.5 16 12z" /></>,
    moon: <path d="M21 13A9 9 0 0111 3a7 7 0 1010 10z" />,
    paw: <><circle cx="6" cy="10" r="2" /><circle cx="18" cy="10" r="2" /><circle cx="9" cy="6" r="2" /><circle cx="15" cy="6" r="2" /><path d="M7 18a5 5 0 0110 0c0 2-2 3-5 3s-5-1-5-3z" /></>,
    edit: <><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4L16.5 3.5z" /></>,
    filter: <path d="M3 5h18l-7 9v6l-4-2v-4L3 5z" />,
    moreH: <><circle cx="5" cy="12" r="1.5" /><circle cx="12" cy="12" r="1.5" /><circle cx="19" cy="12" r="1.5" /></>,
    map: <><path d="M9 4l-6 2v14l6-2 6 2 6-2V4l-6 2-6-2z" /><path d="M9 4v14M15 6v14" /></>,
    close: <path d="M18 6L6 18M6 6l12 12" />,
    quote: <path d="M3 20V11a5 5 0 015-5h0a5 5 0 015 5v0a5 5 0 01-5 5H5l-2 4zM14 20V11a5 5 0 015-5h0a5 5 0 015 5v0a5 5 0 01-5 5h-3l-2 4z" />,
    tools: <><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" /></>,
    building: <><path d="M3 21h18" /><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 9h1M14 9h1M9 13h1M14 13h1M9 17h1M14 17h1" /></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
         stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
      {paths[name] || null}
    </svg>
  );
};

const Wordmark = ({ tag = "Débarras et Nettoyage", dark = false, onClick }) => (
  <div className="wordmark" onClick={onClick}>
    <span className="wm-mark">n</span>
    <span className="wm-name">Nana</span>
    <span className="wm-tag" style={{ marginLeft: 6 }}>{tag}</span>
  </div>
);

// Routing helpers (simple hash-based)
const navigate = (page) => {
  window.scrollTo(0, 0);
  window.location.hash = page;
  window.dispatchEvent(new HashChangeEvent('hashchange'));
};

// Reusable 3-dot dropdown menu
const DropMenu = ({ items, align = 'right' }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ position: 'relative' }}>
      <button className="icon-btn" style={{ width: 28, height: 28 }}
              onClick={e => { e.stopPropagation(); setOpen(o => !o); }}>
        <Icon name="moreH" size={14} />
      </button>
      {open && (
        <>
          <div style={{ position: 'fixed', inset: 0, zIndex: 49 }}
               onClick={e => { e.stopPropagation(); setOpen(false); }} />
          <div style={{
            position: 'absolute', [align === 'right' ? 'right' : 'left']: 0,
            top: '100%', zIndex: 50, marginTop: 4,
            background: 'var(--surface)', border: '1px solid var(--border)',
            borderRadius: 'var(--r-md)', boxShadow: 'var(--sh-3)',
            minWidth: 210, padding: 4,
          }}>
            {items.map((item, i) =>
              item === '---' ? (
                <div key={i} style={{ height: 1, background: 'var(--border)', margin: '4px 0' }} />
              ) : (
                <button key={i}
                        onClick={e => { e.stopPropagation(); setOpen(false); item.action(); }}
                        style={{
                          display: 'flex', alignItems: 'center', gap: 10,
                          width: '100%', padding: '8px 12px',
                          background: 'none', border: 'none', textAlign: 'left',
                          fontFamily: 'inherit', fontSize: 13.5, cursor: 'pointer',
                          borderRadius: 6,
                          color: item.danger ? 'var(--danger)' : 'var(--text)',
                        }}>
                  {item.icon && <Icon name={item.icon} size={14} color={item.danger ? 'var(--danger)' : 'var(--text-muted)'} />}
                  {item.label}
                </button>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
};

const useHashRoute = (def = 'home') => {
  const [route, setRoute] = React.useState(() => window.location.hash.slice(1) || def);
  React.useEffect(() => {
    const h = () => setRoute(window.location.hash.slice(1) || def);
    window.addEventListener('hashchange', h);
    return () => window.removeEventListener('hashchange', h);
  }, [def]);
  return route;
};

// Shared editable site content — defaults match the public pages
const DEFAULT_SITE_CONTENT = {
  // Hero
  hero_titre1:   "On libère les espaces,",
  hero_titre2:   "avec respect.",
  hero_accroche: "Nana intervient pour les débarras de succession, les logements encombrés et les nettoyages spécialisés — avec professionnalisme, discrétion et un vrai engagement pour la valorisation des biens.",
  hero_pill:     "Marais Poitevin (79) · Discrétion & engagement écologique",
  // Metas hero
  meta1_titre: "Visite sous 48h",  meta1_sous: "gratuite, sans engagement",
  meta2_titre: "Devis sous 24h",   meta2_sous: "après la visite",
  meta3_titre: "Tri écologique",   meta3_sous: "don + recyclage",
  // Stats strip
  stat1_val: "10 ans", stat1_lbl: "d'expérience locale",
  stat2_val: "800+",   stat2_lbl: "interventions réalisées",
  stat3_val: "4,9/5",  stat3_lbl: "satisfaction clients",
  stat4_val: "100 %",  stat4_lbl: "tri sélectif & valorisation",
  // Témoignage
  temoignage:      "« Après le décès de mon père, je ne savais pas par où commencer. Nana a tout géré avec une délicatesse qui m'a vraiment touché. Ils ont même coordonné avec le notaire. »",
  temoignage_attr: "— Frédéric L., Niort · débarras de succession, 2025",
  temoignage_note: "4,9/5 · avis vérifiés",
  // CTA final
  cta_titre: "On commence par écouter.",
  cta_sous:  "Décrivez votre situation. Visite gratuite sous 48h, devis sur-mesure sous 24h, intervention planifiée selon votre calendrier.",
};

const SiteContentContext = React.createContext({
  content:    DEFAULT_SITE_CONTENT,
  setContent: () => {},
});

Object.assign(window, { Icon, Wordmark, navigate, useHashRoute, DropMenu, SiteContentContext, DEFAULT_SITE_CONTENT });
