// page-services.jsx — services overview + shared SERVICES data

const SERVICES = [
  {
    id: 'succession',
    illus: 'senior',
    n: '01',
    title: 'Débarras de succession',
    desc: 'Après un décès, nous intervenons avec discrétion pour vider, trier et valoriser les biens dans le respect des proches et des lieux.',
    tag: 'Situation sensible',
    tagIcon: 'heart',
  },
  {
    id: 'demenagement',
    illus: 'handyman',
    n: '02',
    title: 'Débarras avant déménagement',
    desc: 'Logement à rendre avant la remise de clés ou la mise en vente ? On s\'occupe du tri, de l\'enlèvement et du nettoyage final.',
    tag: null,
    tagIcon: null,
  },
  {
    id: 'encombre',
    illus: 'senior',
    n: '03',
    title: 'Logement encombré',
    desc: 'Accumulation difficile à gérer seul·e, syndrome de Diogène : nous intervenons sans jugement, à votre rythme, avec bienveillance.',
    tag: 'Accompagnement humain',
    tagIcon: 'heart',
  },
  {
    id: 'sinistre',
    illus: 'clean',
    n: '04',
    title: 'Nettoyage après sinistre',
    desc: 'Dégât des eaux, incendie, vandalisme : remise en état complète avec rapport d\'intervention pour votre dossier assurance.',
    tag: 'Rapport assurance inclus',
    tagIcon: 'shield',
  },
  {
    id: 'insalubre',
    illus: 'clean',
    n: '05',
    title: 'Logement insalubre',
    desc: 'Remise en état de logements très dégradés : nettoyage biologique, désinfection, décontamination. Protocole et équipements certifiés.',
    tag: 'Protocole certifié',
    tagIcon: 'shield',
  },
  {
    id: 'pro',
    illus: 'handyman',
    n: '06',
    title: 'Prestations professionnelles',
    desc: 'Notaires, agences immobilières, bailleurs sociaux : intervention sur mandat, devis sous 24h, rapport de valorisation inclus.',
    tag: 'Notaires & agences',
    tagIcon: 'building',
  },
];

const IllusByType = ({ type, width = 130 }) => {
  const map = {
    clean: CleanIllustration,
    senior: SeniorIllustration,
    kids: KidsIllustration,
    garden: GardenIllustration,
    pets: PetIllustration,
    handyman: HandsIllustration,
  };
  const Comp = map[type] || HandsIllustration;
  return <Comp width={width} />;
};

const PageServices = () => (
  <div className="page">
    <SiteNav active="services" />

    {/* HERO */}
    <section className="container" style={{ paddingTop: 72, paddingBottom: 40 }}>
      <span className="eyebrow">Nos prestations</span>
      <h1 style={{ marginTop: 14, maxWidth: 760 }}>
        Des interventions adaptées à <span className="serif-italic" style={{ color: 'var(--primary)' }}>chaque situation</span>.
      </h1>
      <p className="lead" style={{ marginTop: 20, maxWidth: 600, color: 'var(--text-soft)', fontSize: 18, lineHeight: 1.55 }}>
        Débarras, nettoyage spécialisé, remise en état — chaque devis est sur-mesure.
        Visite gratuite sous 48h, intervention planifiée selon votre calendrier.
      </p>
    </section>

    {/* Eco banner */}
    <section className="container" style={{ marginBottom: 56 }}>
      <div className="info-banner">
        <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--violet-100)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <Icon name="sprout" size={22} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 600, marginBottom: 2 }}>Engagement écologique sur toutes nos interventions</div>
          <div style={{ fontSize: 14, color: 'var(--text-muted)' }}>
            Tri sélectif systématique, dons aux associations (Emmaus, Croix Rouge, ressourceries), recyclage en filières agréées. Un rapport de valorisation vous est remis après chaque intervention.
          </div>
        </div>
        <button className="btn btn-soft" onClick={() => navigate('about')} style={{ flexShrink: 0 }}>Notre approche</button>
      </div>
    </section>

    {/* Services grid */}
    <section className="container" style={{ paddingBottom: 96 }}>
      <div className="svcs-grid">
        {SERVICES.map((s, i) => (
          <div key={s.id}
               className="svc-card-large"
               style={{ animationDelay: `${i * 55}ms` }}
               onClick={() => navigate('service-' + s.id)}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 44, lineHeight: 1, color: 'var(--violet-300)', fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>{s.n}</span>
                {s.tag && (
                  <span className="pill pill-violet" style={{ fontSize: 11 }}>
                    <Icon name={s.tagIcon} size={12} /> {s.tag}
                  </span>
                )}
              </div>
              <h3 style={{ fontSize: 22, marginTop: 14, marginBottom: 8 }}>{s.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: 14.5, lineHeight: 1.5, flex: 1 }}>{s.desc}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 24, paddingTop: 18, borderTop: '1px solid var(--border)' }}>
                <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>Devis gratuit · visite sous 48h</span>
                <span className="svc-card-arrow">
                  <Icon name="arrow" size={16} />
                </span>
              </div>
            </div>
            <div className="svc-card-illo">
              <IllusByType type={s.illus} width={140} />
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section style={{ background: 'var(--beige-50)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container" style={{ textAlign: 'center', padding: '80px 0' }}>
        <span className="eyebrow" style={{ marginBottom: 16, display: 'inline-block' }}>Vous hésitez</span>
        <h2 style={{ maxWidth: 640, margin: '0 auto 16px' }}>
          Votre situation ne rentre pas <span className="serif-italic" style={{ color: 'var(--primary)' }}>dans une case</span> ?
        </h2>
        <p className="muted" style={{ maxWidth: 480, margin: '0 auto 32px', fontSize: 17 }}>
          Pas de problème. Décrivez-nous votre situation en quelques mots. Nous vous répondons rapidement avec une proposition adaptée.
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

Object.assign(window, { SERVICES, IllusByType, PageServices });
