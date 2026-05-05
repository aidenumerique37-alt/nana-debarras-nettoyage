// page-home.jsx — public landing

const HOME_SERVICES = [
  { id: 'succession',   n: '01', title: 'Débarras de succession',         desc: 'Après un décès, nous intervenons avec discrétion pour vider, trier et valoriser les biens, dans le respect des proches.' },
  { id: 'demenagement', n: '02', title: 'Débarras avant déménagement',    desc: 'Logement à rendre ? On s\'occupe du tri, de l\'enlèvement et du nettoyage final pour une remise de clés sereine.' },
  { id: 'encombre',     n: '03', title: 'Logement encombré',              desc: 'Accumulation difficile à gérer seul·e : nous intervenons sans jugement, à votre rythme, avec bienveillance.' },
  { id: 'sinistre',     n: '04', title: 'Nettoyage après sinistre',       desc: 'Dégât des eaux, incendie, vandalisme : remise en état complète avec rapport d\'intervention pour l\'assurance.' },
  { id: 'insalubre',    n: '05', title: 'Logement insalubre',             desc: 'Remise en état de logements dégradés : nettoyage biologique, désinfection, protocole certifié.' },
  { id: 'pro',          n: '06', title: 'Prestations professionnelles',   desc: 'Notaires, agences immobilières, bailleurs sociaux : devis sous 24h et rapport de valorisation inclus.' },
];

const PageHome = () => (
  <div className="page">
    <SiteNav active="home" />

    {/* HERO */}
    <section className="container">
      <div className="hero">
        <div>
          <span className="pill pill-violet" style={{ marginBottom: 24 }}>
            <Icon name="pin" size={14} /> Marais Poitevin (79) · Discrétion & engagement écologique
          </span>
          <h1>
            On libère les espaces,<br />
            <span className="accent">avec respect.</span>
          </h1>
          <p className="lead">
            Nana intervient pour les débarras de succession, les logements encombrés et les nettoyages spécialisés — avec professionnalisme, discrétion et un vrai engagement pour la valorisation des biens.
          </p>
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
            <div><strong>Visite sous 48h</strong><br /><span style={{ fontSize: 12 }}>gratuite, sans engagement</span></div>
            <div style={{ width: 1, height: 32, background: 'var(--border-strong)' }} />
            <div><strong>Devis sous 24h</strong><br /><span style={{ fontSize: 12 }}>après la visite</span></div>
            <div style={{ width: 1, height: 32, background: 'var(--border-strong)' }} />
            <div><strong>Tri écologique</strong><br /><span style={{ fontSize: 12 }}>don + recyclage</span></div>
          </div>
        </div>
        <div>
          <HeroIllustration />
        </div>
      </div>

      {/* Stats strip */}
      <div className="stats">
        <div className="stat"><div className="num">10 ans</div><div className="lbl">d'expérience locale</div></div>
        <div className="stat"><div className="num">800+</div><div className="lbl">interventions réalisées</div></div>
        <div className="stat"><div className="num">4,9/5</div><div className="lbl">satisfaction clients</div></div>
        <div className="stat"><div className="num">100 %</div><div className="lbl">tri sélectif & valorisation</div></div>
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

    {/* TESTIMONIAL + ECO */}
    <section className="section">
      <div className="container testimonial-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
        <div>
          <span className="eyebrow">Témoignages</span>
          <p className="quote" style={{ marginTop: 24 }}>
            « Après le décès de mon père, je ne savais pas par où commencer. Nana a tout géré avec une délicatesse qui m'a vraiment touché. Ils ont même coordonné avec le notaire. »
          </p>
          <p className="quote-attr">— Frédéric L., Vincennes · débarras de succession, 2025</p>
          <div style={{ display: 'flex', gap: 4, marginTop: 20, color: 'var(--warning)' }}>
            {[...Array(5)].map((_, i) => <Icon key={i} name="star" size={20} stroke={0} color="var(--warning)" />)}
            <span style={{ color: 'var(--text-muted)', fontSize: 13, marginLeft: 8 }}>4,9/5 · avis vérifiés</span>
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
        <h2 style={{ maxWidth: 720, margin: '0 auto 16px' }}>
          On commence par <span className="serif-italic" style={{ color: 'var(--primary)' }}>écouter</span>.
        </h2>
        <p className="muted" style={{ maxWidth: 540, margin: '0 auto 32px', fontSize: 17 }}>
          Décrivez votre situation. Visite gratuite sous 48h, devis sur-mesure sous 24h, intervention planifiée selon votre calendrier.
        </p>
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
  </div>
);

window.PageHome = PageHome;
