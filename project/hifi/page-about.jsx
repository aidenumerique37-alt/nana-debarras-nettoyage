// page-about.jsx — À propos de Nana Débarras & Nettoyage

const PageAbout = () => (
  <div className="page">
    <SiteNav active="about" />

    {/* HERO */}
    <section className="container">
      <div className="about-hero">
        <div>
          <span className="eyebrow" style={{ marginBottom: 16, display: 'inline-block' }}>Notre histoire</span>
          <h1>
            Dix ans à intervenir avec respect<br />
            <span className="serif-italic" style={{ color: 'var(--primary)' }}>en Deux-Sèvres</span>.
          </h1>
          <p className="lead" style={{ marginTop: 24, maxWidth: 520 }}>
            Nana est née d'un constat simple : les débarras et remises en état complexes méritent
            des professionnels attentionnés, pas seulement des camionnettes. Discrétion, respect des personnes et engagement écologique sont notre boussole depuis le premier jour.
          </p>
          <div className="hero-meta" style={{ marginTop: 36 }}>
            <div><strong>2014</strong><br /><span style={{ fontSize: 12 }}>Fondée à Arçais (79)</span></div>
            <div style={{ width: 1, height: 32, background: 'var(--border-strong)' }} />
            <div><strong>800+</strong><br /><span style={{ fontSize: 12 }}>interventions réalisées</span></div>
            <div style={{ width: 1, height: 32, background: 'var(--border-strong)' }} />
            <div><strong>100 %</strong><br /><span style={{ fontSize: 12 }}>tri sélectif & valorisation</span></div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
            <HandsIllustration width={320} />
            <div style={{
              position: 'absolute', bottom: -16, right: -16,
              background: 'var(--primary)', color: 'var(--on-primary)',
              borderRadius: 'var(--r-lg)', padding: '16px 20px',
              boxShadow: 'var(--sh-violet)',
              fontSize: 14, maxWidth: 180,
            }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontStyle: 'italic', lineHeight: 1 }}>4,9/5</div>
              <div style={{ marginTop: 4, opacity: .85, fontSize: 13 }}>avis clients vérifiés</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* VALUES deep-dive */}
    <section style={{ background: 'var(--beige-50)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '80px 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'start' }}>
          <div>
            <span className="eyebrow" style={{ marginBottom: 16, display: 'inline-block' }}>Notre approche</span>
            <h2>Fiables, discrets, <span className="serif-italic" style={{ color: 'var(--primary)' }}>responsables</span>.</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 17, marginTop: 20, lineHeight: 1.6 }}>
              Chaque intervention engage des personnes dans des situations souvent difficiles — deuil, déménagement contraint, logement dégradé. Nous agissons avec le soin et la discrétion que ça mérite.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: 17, marginTop: 16, lineHeight: 1.6 }}>
              Et parce que libérer un espace, c'est aussi une opportunité de ne rien gaspiller, nous trions, donnons et valorisons systématiquement.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              { icon: 'shield', title: 'Discrétion absolue', desc: 'Confidentialité totale. Nos équipes signent un engagement de discrétion. Vos affaires et votre situation restent privées.' },
              { icon: 'sprout', title: 'Engagement écologique', desc: 'Tri sélectif, dons aux associations, recyclage en filières agréées. Rapport de valorisation à chaque intervention.' },
              { icon: 'clock',  title: 'Réactivité locale',   desc: 'Visite sous 48h, devis sous 24h. Ancrés en Val-de-Marne, nous pouvons intervenir rapidement sur l\'ensemble du 94.' },
              { icon: 'heart',  title: 'Accompagnement humain', desc: 'Pour les successions, deuils ou situations de désencombrement — nous prenons le temps, sans jugement.' },
            ].map(v => (
              <div key={v.title} className="card" style={{ padding: '24px 20px' }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--violet-100)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                  <Icon name={v.icon} size={22} />
                </div>
                <h4 style={{ fontSize: 17, marginBottom: 6 }}>{v.title}</h4>
                <p style={{ fontSize: 13.5, color: 'var(--text-muted)', lineHeight: 1.55 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* ECO COMMITMENT */}
    <section className="section">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div>
            <span className="eyebrow" style={{ marginBottom: 16, display: 'inline-block' }}>Engagement écologique</span>
            <h2>Rien n'est jeté <span className="serif-italic" style={{ color: 'var(--primary)' }}>en vrac</span>.</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 17, marginTop: 20, lineHeight: 1.6 }}>
              Chaque intervention suit un protocole de tri rigoureux. Avant que quoi que ce soit soit évacué, nous séparons ce qui peut être donné, recyclé, valorisé ou éliminé en filière certifiée.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: 17, marginTop: 16, lineHeight: 1.6 }}>
              Vous recevez un rapport de valorisation détaillant les volumes donnés aux associations et les filières de recyclage utilisées.
            </p>
            <button className="btn btn-ghost" onClick={() => navigate('devis')} style={{ marginTop: 28 }}>
              Demander un devis
              <Icon name="arrow" size={16} />
            </button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { icon: 'heart',    title: 'Don aux associations',    desc: 'Emmaus, Croix Rouge, ressourceries et associations locales — nous orientons en priorité vers le réemploi.' },
              { icon: 'sprout',   title: 'Recyclage en filières agréées', desc: 'Bois, métal, électroménager, déchets spéciaux — chaque matière a sa filière de traitement.' },
              { icon: 'file',     title: 'Rapport de valorisation', desc: 'Un document récapitulatif vous est remis après chaque intervention : volumes, associations bénéficiaires, filières.' },
              { icon: 'leaf',     title: 'Zéro dépôt sauvage',      desc: 'Nous n\'évacuons jamais en déchetterie sauvage. Toutes nos filières sont traçables et certifiées.' },
            ].map(r => (
              <div key={r.title} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: '16px 0', borderBottom: '1px solid var(--border)' }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--violet-100)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name={r.icon} size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 4 }}>{r.title}</div>
                  <div style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.5 }}>{r.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* HISTORY timeline */}
    <section style={{ background: 'var(--beige-50)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '80px 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div>
            <span className="eyebrow" style={{ marginBottom: 16, display: 'inline-block' }}>Notre parcours</span>
            <h2>Une entreprise qui a grandi <span className="serif-italic" style={{ color: 'var(--primary)' }}>avec sa région</span>.</h2>
          </div>
          <div className="timeline">
            {[
              { year: '2014', title: 'Les débuts à Arçais', desc: 'Nana Débarras et Nettoyage voit le jour dans le Marais Poitevin, avec une conviction : les débarras méritent autant de soin que ce qu\'ils contiennent.' },
              { year: '2016', title: 'Premières successions', desc: 'Les études notariales du 94 nous font confiance pour leurs mandats de débarras. Le bouche-à-oreille s\'installe.' },
              { year: '2018', title: 'Engagement écologique formalisé', desc: 'Protocole de tri systématique, partenariats Emmaus et ressourceries locales. Le rapport de valorisation devient standard.' },
              { year: '2021', title: '500 interventions', desc: 'Extension à l\'ensemble des Deux-Sèvres et des départements voisins. Recrutement de Karim comme chef d\'équipe spécialisé remise en état.' },
              { year: '2023', title: 'Nettoyages spécialisés', desc: 'Développement du pôle insalubrité et sinistres. Protocoles certifiés, équipements de protection renforcés.' },
              { year: '2026', title: 'Aujourd\'hui', desc: '800+ interventions, 4,9/5 de satisfaction, et toujours la même attention portée à chaque situation.' },
            ].map(t => (
              <div key={t.year} className="timeline-item">
                <div className="year">{t.year}</div>
                <h4>{t.title}</h4>
                <p>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* TEAM */}
    <section className="section">
      <div className="container">
        <div className="section-title" style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto 48px' }}>
          <span className="eyebrow" style={{ marginBottom: 12, display: 'inline-block' }}>L'équipe</span>
          <h2>Des personnes <span className="serif-italic" style={{ color: 'var(--primary)' }}>engagées</span>.</h2>
          <p>Les coordonnateur·ices qui organisent, les équipes terrain qui interviennent.</p>
        </div>
        <div className="team-grid">
          {[
            { initials: 'NL', bg: 'var(--violet-300)', role: 'Fondatrice & directrice', name: 'Nadia Lebrun', bio: '10 ans à construire Nana autour d\'une boussole : la discrétion, l\'écologie, l\'humain.' },
            { initials: 'KA', bg: 'var(--violet-400)', role: 'Chef d\'équipe terrain', name: 'Karim Aïssa', bio: 'Expert débarras et remise en état. Encadre les équipes avec rigueur et bienveillance.' },
            { initials: 'MR', bg: 'var(--beige-500)', role: 'Coordinatrice clients', name: 'Marie Rousseau', bio: 'Premier contact pour chaque demande. Elle organise les visites et assure le suivi jusqu\'au rapport final.' },
          ].map(p => (
            <div key={p.name} className="team-card">
              <div className="team-avatar" style={{ background: p.bg, color: '#fff' }}>{p.initials}</div>
              <div className="role">{p.role}</div>
              <h4>{p.name}</h4>
              <p>{p.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CERTIFICATIONS */}
    <section style={{ background: 'var(--beige-50)', borderTop: '1px solid var(--border)', padding: '80px 0' }}>
      <div className="container">
        <div className="section-title" style={{ textAlign: 'center', maxWidth: 540, margin: '0 auto 48px' }}>
          <span className="eyebrow" style={{ marginBottom: 12, display: 'inline-block' }}>Garanties & assurances</span>
          <h2>Une entreprise <span className="serif-italic" style={{ color: 'var(--primary)' }}>fiable</span>.</h2>
        </div>
        <div className="cert-grid">
          {[
            { icon: 'shield',     title: 'Assurance RC Pro',           desc: 'Couverture tous risques jusqu\'à 1 M€ par sinistre. Vous êtes protégé·e.' },
            { icon: 'leaf',       title: 'Filières certifiées',         desc: 'Partenaires Emmaus, ressourceries agréées, centres de recyclage homologués.' },
            { icon: 'star',       title: '4,9/5 satisfaction',          desc: 'Avis clients vérifiés sur l\'ensemble de nos prestations.' },
            { icon: 'file',       title: 'Rapport de valorisation',     desc: 'Document systématique après chaque intervention : traçabilité complète.' },
          ].map(c => (
            <div key={c.title} className="cert-card">
              <div className="cert-icon">
                <Icon name={c.icon} size={22} />
              </div>
              <h5>{c.title}</h5>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* TESTIMONIAL */}
    <section style={{ borderTop: '1px solid var(--border)', padding: '80px 0' }}>
      <div className="container" style={{ maxWidth: 760, textAlign: 'center' }}>
        <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--violet-100)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
          <Icon name="quote" size={24} />
        </div>
        <p className="quote">
          « Après le décès de mon père, je ne savais pas par où commencer. Nana a tout géré avec une délicatesse qui m'a vraiment touché. Ils ont même coordonné directement avec le notaire. »
        </p>
        <p className="quote-attr" style={{ marginTop: 20 }}>— Frédéric L., Vincennes · débarras de succession, 2025</p>
        <div style={{ display: 'flex', gap: 4, justifyContent: 'center', marginTop: 16, color: 'var(--warning)' }}>
          {[...Array(5)].map((_, i) => <Icon key={i} name="star" size={18} stroke={0} color="var(--warning)" />)}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="container section-tight">
      <div style={{ textAlign: 'center', padding: '24px 0 48px' }}>
        <h2 style={{ maxWidth: 600, margin: '0 auto 16px' }}>
          Prêt·e à nous <span className="serif-italic" style={{ color: 'var(--primary)' }}>confier votre situation</span> ?
        </h2>
        <p className="muted" style={{ maxWidth: 460, margin: '0 auto 32px', fontSize: 17 }}>
          Décrivez votre situation. Visite gratuite sous 48h, devis sur-mesure sous 24h.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="btn btn-primary" onClick={() => navigate('devis')} style={{ padding: '14px 32px', fontSize: 16 }}>
            Demander un devis gratuit
            <Icon name="arrow" size={18} />
          </button>
          <button className="btn btn-ghost" onClick={() => navigate('contact')} style={{ padding: '14px 24px', fontSize: 16 }}>
            <Icon name="phone" size={16} /> Nous contacter
          </button>
        </div>
      </div>
    </section>

    <SiteFooter />
  </div>
);

window.PageAbout = PageAbout;
