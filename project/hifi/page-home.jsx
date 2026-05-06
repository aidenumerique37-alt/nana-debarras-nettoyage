// page-home.jsx — public landing

const HOME_SERVICES = [
  { id: 'succession',   n: '01', title: 'Débarras de succession',         desc: 'Après un décès, nous intervenons avec discrétion pour vider, trier et valoriser les biens, dans le respect des proches.' },
  { id: 'demenagement', n: '02', title: 'Débarras avant déménagement',    desc: 'Logement à rendre ? On s\'occupe du tri, de l\'enlèvement et du nettoyage final pour une remise de clés sereine.' },
  { id: 'encombre',     n: '03', title: 'Logement encombré',              desc: 'Accumulation difficile à gérer seul·e : nous intervenons sans jugement, à votre rythme, avec bienveillance.' },
  { id: 'sinistre',     n: '04', title: 'Nettoyage après sinistre',       desc: 'Dégât des eaux, incendie, vandalisme : remise en état complète avec rapport d\'intervention pour l\'assurance.' },
  { id: 'insalubre',    n: '05', title: 'Logement insalubre',             desc: 'Remise en état de logements dégradés : nettoyage biologique, désinfection, protocole certifié.' },
  { id: 'pro',          n: '06', title: 'Prestations professionnelles',   desc: 'Notaires, agences immobilières, bailleurs sociaux : devis sous 24h et rapport de valorisation inclus.' },
];

// Thumbnail card shown in the public gallery grid
const GalleryCard = ({ item, onClick }) => {
  const [hovered, setHovered] = React.useState(false);
  const [err,     setErr]     = React.useState(false);
  const ytId  = item.type === 'video' ? getYouTubeId(item.videoUrl) : null;
  const thumb = item.type === 'solo'  ? item.src
              : item.type === 'duo'   ? item.before
              : ytId ? `https://img.youtube.com/vi/${ytId}/mqdefault.jpg` : null;

  return (
    <div onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 'var(--r-lg)', overflow: 'hidden', cursor: 'pointer',
        aspectRatio: '4/3', position: 'relative', background: 'var(--beige-100)',
        transform: hovered ? 'scale(1.025)' : 'scale(1)',
        transition: 'transform .22s cubic-bezier(.2,0,0,1), box-shadow .22s',
        boxShadow: hovered ? 'var(--sh-3)' : 'var(--sh-1)',
      }}>
      {thumb && !err ? (
        <img src={thumb} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          onError={() => setErr(true)} />
      ) : (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          <Icon name={item.type === 'video' ? 'play' : 'image'} size={32} color="var(--text-muted)" />
        </div>
      )}
      {item.type === 'duo' && (
        <span style={{
          position: 'absolute', top: 10, left: 10, fontSize: 10, fontWeight: 700,
          letterSpacing: '.07em', textTransform: 'uppercase',
          background: 'rgba(0,0,0,.55)', color: '#fff', padding: '3px 9px', borderRadius: 4,
        }}>Avant / Après</span>
      )}
      {item.type === 'video' && (
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'rgba(0,0,0,.15)' }}>
          <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(255,255,255,.92)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--sh-2)' }}>
            <Icon name="play" size={20} />
          </div>
        </div>
      )}
      {item.caption && (
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, padding: '28px 14px 12px',
          background: 'linear-gradient(transparent, rgba(0,0,0,.68))',
          color: '#fff', fontSize: 13, fontWeight: 500,
          opacity: hovered ? 1 : 0, transition: 'opacity .2s',
        }}>{item.caption}</div>
      )}
    </div>
  );
};

// Full-screen lightbox for public gallery
const GalleryLightbox = ({ items, index, onClose, onNav }) => {
  const item = items[index];

  React.useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape')     onClose();
      if (e.key === 'ArrowLeft')  onNav(-1);
      if (e.key === 'ArrowRight') onNav(+1);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [index]);

  if (!item) return null;
  const ytId = item.type === 'video' ? getYouTubeId(item.videoUrl) : null;

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 1000,
      background: 'rgba(10,6,18,.94)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
    }} onClick={onClose}>
      <button onClick={onClose} style={{
        position: 'absolute', top: 20, right: 20, zIndex: 10,
        background: 'rgba(255,255,255,.12)', border: 'none', borderRadius: '50%',
        width: 44, height: 44, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}><Icon name="close" size={18} color="white" /></button>

      {items.length > 1 && (
        <div style={{ position: 'absolute', top: 24, left: '50%', transform: 'translateX(-50%)',
          color: 'rgba(255,255,255,.45)', fontSize: 13 }}>
          {index + 1} / {items.length}
        </div>
      )}

      {items.length > 1 && (<>
        <button onClick={e => { e.stopPropagation(); onNav(-1); }} style={{
          position: 'absolute', left: 20, top: '50%', transform: 'translateY(-50%)',
          background: 'rgba(255,255,255,.12)', border: 'none', borderRadius: '50%',
          width: 48, height: 48, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{ transform: 'rotate(180deg)', lineHeight: 0 }}>
            <Icon name="chevron" size={20} color="white" />
          </div>
        </button>
        <button onClick={e => { e.stopPropagation(); onNav(+1); }} style={{
          position: 'absolute', right: 20, top: '50%', transform: 'translateY(-50%)',
          background: 'rgba(255,255,255,.12)', border: 'none', borderRadius: '50%',
          width: 48, height: 48, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Icon name="chevron" size={20} color="white" />
        </button>
      </>)}

      <div onClick={e => e.stopPropagation()} style={{ width: '88%', maxWidth: 920 }}>
        {item.type === 'solo' && (
          <img src={item.src} style={{ maxWidth: '100%', maxHeight: '80vh', objectFit: 'contain',
            borderRadius: 'var(--r-lg)', display: 'block', margin: '0 auto' }}
            onError={e => { e.target.style.opacity = 0; }} />
        )}
        {item.type === 'duo' && (
          <DuoSlider before={item.before} after={item.after} height="62vh" />
        )}
        {item.type === 'video' && ytId && (
          <iframe src={`https://www.youtube.com/embed/${ytId}?autoplay=1`}
            style={{ width: '100%', aspectRatio: '16/9', border: 'none', borderRadius: 'var(--r-lg)' }}
            allow="autoplay; fullscreen" allowFullScreen />
        )}
      </div>

      {item.caption && (
        <p style={{ color: 'rgba(255,255,255,.5)', fontSize: 14, marginTop: 14, textAlign: 'center' }}>
          {item.caption}
        </p>
      )}
    </div>
  );
};

const PageHome = () => {
  const { content: c }        = React.useContext(SiteContentContext);
  const { gallery }           = React.useContext(GalleryContext);
  const [lbOpen,  setLbOpen]  = React.useState(false);
  const [lbIndex, setLbIndex] = React.useState(0);

  const published = gallery.filter(i => i.published);
  const openLb = (idx) => { setLbIndex(idx); setLbOpen(true); };
  const navLb  = (dir) => setLbIndex(i => (i + dir + published.length) % published.length);

  return (
  <div className="page">
    <SiteNav active="home" />

    {/* HERO */}
    <section className="container">
      <div className="hero">
        <div>
          <span className="pill pill-violet" style={{ marginBottom: 24 }}>
            <Icon name="pin" size={14} /> {c.hero_pill}
          </span>
          <h1>
            {c.hero_titre1}<br />
            <span className="accent">{c.hero_titre2}</span>
          </h1>
          <p className="lead">{c.hero_accroche}</p>
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => navigate('devis')}>
              Demander un devis gratuit
              <Icon name="arrow" size={16} />
            </button>
            <button className="btn btn-ghost" onClick={() => navigate('services')}>
              Découvrir nos prestations
            </button>
          </div>
          <div className="hero-meta">
            <div><strong>{c.meta1_titre}</strong><br /><span style={{ fontSize: 12 }}>{c.meta1_sous}</span></div>
            <div style={{ width: 1, height: 32, background: 'var(--border-strong)' }} />
            <div><strong>{c.meta2_titre}</strong><br /><span style={{ fontSize: 12 }}>{c.meta2_sous}</span></div>
            <div style={{ width: 1, height: 32, background: 'var(--border-strong)' }} />
            <div><strong>{c.meta3_titre}</strong><br /><span style={{ fontSize: 12 }}>{c.meta3_sous}</span></div>
          </div>
        </div>
        <div>
          <HeroIllustration />
        </div>
      </div>

      {/* Stats strip */}
      <div className="stats">
        <div className="stat"><div className="num">{c.stat1_val}</div><div className="lbl">{c.stat1_lbl}</div></div>
        <div className="stat"><div className="num">{c.stat2_val}</div><div className="lbl">{c.stat2_lbl}</div></div>
        <div className="stat"><div className="num">{c.stat3_val}</div><div className="lbl">{c.stat3_lbl}</div></div>
        <div className="stat"><div className="num">{c.stat4_val}</div><div className="lbl">{c.stat4_lbl}</div></div>
      </div>
    </section>

    {/* SERVICES */}
    <section className="section">
      <div className="container">
        <div className="section-title">
          <span className="eyebrow">Nos prestations</span>
          <h2>Six situations où nous <span className="serif-italic" style={{ color: 'var(--primary)' }}>pouvons vous aider</span>.</h2>
          <p>Du débarras de succession au nettoyage spécialisé — chaque intervention est adaptée à votre situation, avec un devis sur-mesure.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {HOME_SERVICES.map(s => (
            <div key={s.id} className="svc-card" onClick={() => navigate('service-' + s.id)}>
              <span className="num">{s.n}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
              <span className="arrow"><Icon name="arrow" size={16} /></span>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <button className="btn btn-ghost" onClick={() => navigate('services')}>
            Voir toutes nos prestations
            <Icon name="arrow" size={16} />
          </button>
        </div>
      </div>
    </section>

    {/* VALUES */}
    <section className="section-tight">
      <div className="container">
        <div className="section-title">
          <span className="eyebrow">Nos engagements</span>
          <h2>Fiables, discrets, <span className="serif-italic" style={{ color: 'var(--primary)' }}>responsables</span>.</h2>
        </div>
        <div className="values">
          {[
            { icon: 'shield', title: 'Discrétion absolue', desc: 'Chaque intervention est confidentielle. Nous respectons les personnes, les lieux et ce qui leur appartient.' },
            { icon: 'sprout', title: 'Engagement écologique', desc: 'Tri sélectif systématique, dons aux associations (Emmaus, Croix Rouge), recyclage. Rapport de valorisation fourni.' },
            { icon: 'clock',  title: 'Réactivité locale',   desc: 'Visite gratuite sous 48h, devis sous 24h. Pour les urgences, nous faisons le maximum pour intervenir rapidement.' },
            { icon: 'heart',  title: 'Accompagnement humain', desc: 'Pour les situations sensibles — deuil, désencombrement, sinistre — nous prenons le temps qu\'il faut.' },
          ].map(v => (
            <div key={v.title} className="value">
              <Icon name={v.icon} size={32} />
              <h4>{v.title}</h4>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* SENSITIVE SITUATION banner */}
    <section className="container" style={{ marginTop: 32 }}>
      <div className="sensitive">
        <div>
          <span className="pill" style={{ background: 'rgba(255,255,255,.12)', color: 'rgba(255,255,255,.85)', border: 'none', marginBottom: 16 }}>
            <Icon name="heart" size={14} /> Situation sensible
          </span>
          <h3>Vous gérez une succession, un deuil ou une situation difficile ?</h3>
          <p>
            Nous intervenons avec le soin et la discrétion que ça mérite. Pas de formulaire — un appel suffit. Notre équipe vous rappelle dans la journée pour comprendre votre situation.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <button className="btn btn-primary" onClick={() => navigate('contact')}>
            <Icon name="phone" size={16} /> Être rappelé·e
          </button>
          <span style={{ fontSize: 12, color: 'rgba(251,247,238,.6)', textAlign: 'center' }}>Confidentiel · sans engagement</span>
        </div>
      </div>
    </section>

    {/* GALLERY — only renders when published items exist */}
    {published.length > 0 && (
      <section className="section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Nos réalisations</span>
            <h2>Avant, pendant, <span className="serif-italic" style={{ color: 'var(--primary)' }}>après</span>.</h2>
            <p>Photos et vidéos de nos interventions — chaque chantier réalisé avec le même soin, quelle que soit la situation.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {published.slice(0, 6).map((item, idx) => (
              <GalleryCard key={item.id} item={item} onClick={() => openLb(idx)} />
            ))}
          </div>

          {published.length > 6 && (
            <div style={{ textAlign: 'center', marginTop: 28 }}>
              <p style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 12 }}>
                +{published.length - 6} photo{published.length - 6 > 1 ? 's' : ''} supplémentaire{published.length - 6 > 1 ? 's' : ''}
              </p>
              <button className="btn btn-ghost" onClick={() => openLb(6)}>
                Voir tout
                <Icon name="arrow" size={16} />
              </button>
            </div>
          )}
        </div>
      </section>
    )}

    {/* TESTIMONIAL + ECO */}
    <section className="section">
      <div className="container testimonial-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
        <div>
          <span className="eyebrow">Témoignages</span>
          <p className="quote" style={{ marginTop: 24 }}>{c.temoignage}</p>
          <p className="quote-attr">{c.temoignage_attr}</p>
          <div style={{ display: 'flex', gap: 4, marginTop: 20, color: 'var(--warning)' }}>
            {[...Array(5)].map((_, i) => <Icon key={i} name="star" size={20} stroke={0} color="var(--warning)" />)}
            <span style={{ color: 'var(--text-muted)', fontSize: 13, marginLeft: 8 }}>{c.temoignage_note}</span>
          </div>
          <button className="btn btn-ghost" onClick={() => navigate('about')} style={{ marginTop: 24 }}>
            En savoir plus sur Nana
            <Icon name="arrow" size={16} />
          </button>
        </div>
        <div className="card-soft" style={{ padding: 36 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--violet-100)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Icon name="sprout" size={20} />
            </div>
            <h3 style={{ margin: 0 }}>Notre engagement écologique</h3>
          </div>
          <p className="muted" style={{ marginBottom: 20 }}>Rien n'est jeté en vrac. Chaque intervention suit un protocole de tri rigoureux.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { icon: 'heart',  label: 'Don aux associations',  desc: 'Emmaus, Croix Rouge, ressourceries locales' },
              { icon: 'sprout', label: 'Recyclage filières',     desc: 'Déchets orientés vers les filières agréées' },
              { icon: 'file',   label: 'Rapport de valorisation', desc: 'Document récapitulatif fourni après chaque intervention' },
            ].map(r => (
              <div key={r.label} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--violet-100)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                  <Icon name={r.icon} size={13} />
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>{r.label}</div>
                  <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>{r.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* B2B mention */}
    <section style={{ background: 'var(--beige-50)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container" style={{ padding: '56px 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
        <div>
          <span className="eyebrow" style={{ marginBottom: 12, display: 'inline-block' }}>Professionnels</span>
          <h2 style={{ maxWidth: 400 }}>Notaires, agences, <span className="serif-italic" style={{ color: 'var(--primary)' }}>syndics</span>.</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 16, marginTop: 16, lineHeight: 1.6, maxWidth: 400 }}>
            Nous travaillons avec les études notariales, les agences immobilières, les syndics de copropriété et les bailleurs pour la gestion de biens entre deux occupants. Devis sous 24h, intervention sur mandat, rapport de valorisation fourni.
          </p>
          <button className="btn btn-ghost" onClick={() => navigate('service-pro')} style={{ marginTop: 24 }}>
            Nos prestations professionnelles
            <Icon name="arrow" size={16} />
          </button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {[
            { icon: 'building', title: 'Études notariales', desc: 'Coordination directe, intervention sur mandat sans présence requise.' },
            { icon: 'home',     title: 'Agences immobilières', desc: 'Remise en état entre deux locataires ou pour mise en vente.' },
            { icon: 'handshake',title: 'Syndics de copropriété', desc: 'Parties communes, logements vacants, caves insalubres.' },
            { icon: 'file',     title: 'Rapport inclus', desc: 'Documentation complète pour vos dossiers et vos clients.' },
          ].map(c => (
            <div key={c.title} className="card" style={{ padding: '20px 18px' }}>
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--violet-100)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
                <Icon name={c.icon} size={18} />
              </div>
              <h4 style={{ fontSize: 15, marginBottom: 4 }}>{c.title}</h4>
              <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.5 }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA final */}
    <section className="container section-tight">
      <div style={{ textAlign: 'center', padding: '40px 0' }}>
        <h2 style={{ maxWidth: 720, margin: '0 auto 16px' }}>{c.cta_titre}</h2>
        <p className="muted" style={{ maxWidth: 540, margin: '0 auto 32px', fontSize: 17 }}>{c.cta_sous}</p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="btn btn-primary" onClick={() => navigate('devis')} style={{ padding: '14px 32px', fontSize: 16 }}>
            Demander un devis gratuit
            <Icon name="arrow" size={18} />
          </button>
          <button className="btn btn-ghost" onClick={() => navigate('contact')} style={{ padding: '14px 24px', fontSize: 16 }}>
            <Icon name="phone" size={16} /> Nous appeler
          </button>
        </div>
      </div>
    </section>

    <SiteFooter />

    {/* Gallery lightbox — rendered at root to escape stacking contexts */}
    {lbOpen && (
      <GalleryLightbox
        items={published}
        index={lbIndex}
        onClose={() => setLbOpen(false)}
        onNav={navLb}
      />
    )}
  </div>
  );
};

window.PageHome = PageHome;
