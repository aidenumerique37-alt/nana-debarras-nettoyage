// page-service.jsx — service detail, dynamic per serviceId

const SERVICE_CONTENT = {
  succession: {
    title: 'Débarras de succession',
    accent: 'succession',
    tag: 'Situation sensible', tagIcon: 'heart',
    lead: 'Après un décès, chaque détail compte. Nous intervenons avec discrétion et professionnalisme pour vider, trier et valoriser les biens, dans le respect absolu des proches et des lieux.',
    illus: 'senior',
    includes: [
      { t: 'Tri sélectif', d: 'Séparation systématique : à conserver, à donner, à recycler, à éliminer.' },
      { t: 'Don aux associations', d: 'Meubles et objets réutilisables orientés vers Emmaus, Croix Rouge, ressourceries locales.' },
      { t: 'Débarras complet', d: 'Évacuation de l\'intégralité du mobilier et des effets personnels.' },
      { t: 'Nettoyage final', d: 'Remise en état du logement pour vente, location ou transmission.' },
      { t: 'Rapport de valorisation', d: 'Document listant les biens donnés ou valorisés — utile pour la succession.' },
      { t: 'Coordination notaire', d: 'Possibilité de travailler en lien direct avec l\'étude notariale.' },
    ],
    checklist: [
      'Visite gratuite sous 48h',
      'Devis sur-mesure sous 24h',
      'Discrétion et confidentialité absolues',
      'Rapport de valorisation inclus',
      'Assurance RC Pro tous risques',
    ],
    faq: [
      { q: 'Peut-on intervenir avant le règlement de la succession ?', a: 'Oui, dès que les héritiers ou le notaire nous en donnent l\'autorisation. Nous pouvons coordonner directement avec l\'étude notariale.' },
      { q: 'Comment gérez-vous les objets de valeur ?', a: 'Tout objet potentiellement de valeur (mobilier ancien, bijoux, documents) est mis de côté et signalé aux ayants droit avant tout départ du logement.' },
      { q: 'Combien de temps prend un débarras de succession ?', a: 'D\'une journée pour un appartement vidé à plusieurs jours pour une maison avec cave, grenier et dépendances. Le devis précise la durée estimée.' },
      { q: 'Qu\'est-ce que le rapport de valorisation ?', a: 'C\'est un document que nous établissons listant les objets donnés aux associations, recyclés ou valorisés. Il peut être utile dans le cadre de la gestion de la succession.' },
    ],
  },
  demenagement: {
    title: 'Débarras avant déménagement',
    accent: 'déménagement',
    tag: 'Remise de clés', tagIcon: 'home',
    lead: 'Vous rendez un logement et n\'avez ni le temps ni les bras pour tout évacuer ? Nous prenons en charge le tri, l\'enlèvement et le nettoyage final pour une remise de clés sereine.',
    illus: 'handyman',
    includes: [
      { t: 'Évacuation des meubles', d: 'Chargement et transport de tous les meubles et objets restants.' },
      { t: 'Tri à la source', d: 'Ce qui peut être donné, recyclé ou éliminé est séparé dès le départ.' },
      { t: 'Don Emmaus', d: 'Les pièces réutilisables partent directement aux associations partenaires.' },
      { t: 'Nettoyage de fin de bail', d: 'Nettoyage complet du logement pour restitution en bon état.' },
      { t: 'Cave et grenier', d: 'Vidage de toutes les dépendances rattachées au logement.' },
      { t: 'Attestation d\'évacuation', d: 'Document utile pour votre bailleur lors de la remise des clés.' },
    ],
    checklist: [
      'Visite gratuite sous 48h',
      'Devis sous 24h après visite',
      'Intervention flexible (week-end possible)',
      'Tri écologique inclus',
      'Attestation d\'évacuation fournie',
    ],
    faq: [
      { q: 'Vous intervenez pendant que je déménage ?', a: 'Oui, nous pouvons intervenir en parallèle de votre déménagement ou juste après. Nous nous adaptons à votre calendrier.' },
      { q: 'Gérez-vous aussi la cave et le grenier ?', a: 'Toujours. Le devis inclut la totalité du logement et ses dépendances.' },
      { q: 'Pouvez-vous intervenir en urgence ?', a: 'Nous essayons de nous adapter. Si votre date de remise de clés est proche, contactez-nous — on trouvera une solution.' },
      { q: 'Que deviendront mes affaires ?', a: 'Tout est trié : ce qui peut être réutilisé part en donation, le reste est évacué en filières certifiées. Rien n\'est jeté en vrac.' },
    ],
  },
  encombre: {
    title: 'Logement encombré',
    accent: 'encombré',
    tag: 'Accompagnement bienveillant', tagIcon: 'heart',
    lead: 'Accumulation difficile à gérer seul·e, syndrome de Diogène, ou simplement des années d\'objets accumulés : nous intervenons sans jugement, à votre rythme, avec respect.',
    illus: 'senior',
    includes: [
      { t: 'Évaluation de la situation', d: 'Visite préalable pour comprendre la situation et adapter notre approche.' },
      { t: 'Tri progressif', d: 'Nous travaillons à votre rythme, en prenant le temps d\'expliquer chaque étape.' },
      { t: 'Accompagnement de la personne', d: 'En lien avec les proches ou les services sociaux si la situation le nécessite.' },
      { t: 'Don et valorisation', d: 'Objets réutilisables donnés aux associations. Rapport de valorisation fourni.' },
      { t: 'Désinfection si nécessaire', d: 'Nettoyage complet et désinfection en cas d\'hygiène dégradée.' },
      { t: 'Suivi post-intervention', d: 'Un contact de suivi pour s\'assurer que la situation reste stable.' },
    ],
    checklist: [
      'Approche sans jugement garantie',
      'Coordination possible avec services sociaux',
      'Visite gratuite sous 48h',
      'Intervention à votre rythme',
      'Discrétion absolue',
    ],
    faq: [
      { q: 'La personne concernée doit-elle être présente ?', a: 'Dans la mesure du possible, oui. Nous travaillons avec son accord et à son rythme. Pour les cas complexes, nous pouvons coordonner avec la famille ou les services sociaux.' },
      { q: 'Comment abordez-vous les situations de syndrome de Diogène ?', a: 'Avec patience, respect et sans jugement. Notre équipe est formée à ces situations et sait créer un climat de confiance avant d\'intervenir.' },
      { q: 'Pouvez-vous intervenir sur signalement d\'une assistante sociale ?', a: 'Oui, nous travaillons régulièrement en lien avec les services sociaux, les CCAS et les bailleurs sociaux.' },
      { q: 'Est-ce que le nettoyage est inclus ?', a: 'Oui, le nettoyage complet est inclus dans notre devis — y compris la désinfection si la situation le requiert.' },
    ],
  },
  sinistre: {
    title: 'Nettoyage après sinistre',
    accent: 'sinistre',
    tag: 'Rapport assurance inclus', tagIcon: 'shield',
    lead: 'Dégât des eaux, incendie, vandalisme, inondation : nous intervenons rapidement pour remettre le bien en état et vous fournissons un rapport complet pour votre assureur.',
    illus: 'clean',
    includes: [
      { t: 'Évacuation des débris', d: 'Élimination de tous les matériaux endommagés et non récupérables.' },
      { t: 'Nettoyage complet', d: 'Nettoyage de toutes les surfaces touchées par le sinistre.' },
      { t: 'Désinfection', d: 'Traitement bactéricide et fongicide (dégât des eaux, moisissures).' },
      { t: 'Assèchement', d: 'Évacuation de l\'humidité et des matériaux gorgés d\'eau.' },
      { t: 'Rapport d\'intervention', d: 'Document détaillé des travaux réalisés, utile pour votre déclaration assurance.' },
      { t: 'Photos avant/après', d: 'Documentation photographique complète pour votre dossier sinistre.' },
    ],
    checklist: [
      'Intervention rapide (24–48h)',
      'Rapport assurance inclus',
      'Photos avant/après fournies',
      'Assurance RC Pro tous risques',
      'Devis gratuit sur place',
    ],
    faq: [
      { q: 'Doit-on passer par l\'assurance ou peut-on vous contacter directement ?', a: 'Vous pouvez nous contacter directement. Nous intervenons et vous fournissons ensuite le rapport dont votre assureur a besoin.' },
      { q: 'Intervenez-vous en urgence ?', a: 'Oui, pour les sinistres importants nous essayons d\'intervenir sous 24h. Contactez-nous pour évaluer la situation.' },
      { q: 'Gérez-vous les moisissures après dégât des eaux ?', a: 'Oui, nous traitons les moisissures avec des produits biocides certifiés et vous conseillons sur les mesures préventives.' },
      { q: 'Le rapport est-il accepté par les assureurs ?', a: 'Notre rapport est un document professionnel daté et signé. Il est généralement accepté par les compagnies d\'assurance pour appuyer une déclaration de sinistre.' },
    ],
  },
  insalubre: {
    title: 'Logement insalubre',
    accent: 'insalubre',
    tag: 'Protocole certifié', tagIcon: 'shield',
    lead: 'Logement très dégradé, contamination biologique, infestation : nous intervenons avec les équipements et protocoles adaptés pour une remise en état complète et documentée.',
    illus: 'clean',
    includes: [
      { t: 'Diagnostic initial', d: 'Évaluation complète de l\'état du logement avant toute intervention.' },
      { t: 'EPI & protection', d: 'Combinaisons, masques FFP3, équipements de protection complets pour nos équipes.' },
      { t: 'Décontamination', d: 'Nettoyage biologique, désinfection bactéricide et fongicide certifiée.' },
      { t: 'Débarras en filières certifiées', d: 'Évacuation des déchets potentiellement contaminés vers les filières agréées.' },
      { t: 'Traitement anti-nuisibles', d: 'En coordination avec des spécialistes si infestation (rats, punaises de lit…).' },
      { t: 'Attestation de remise en état', d: 'Document certifiant l\'état du logement après notre intervention.' },
    ],
    checklist: [
      'Protocole et équipements certifiés',
      'Filières d\'évacuation agréées',
      'Attestation de remise en état',
      'Coordination avec services compétents',
      'Devis gratuit sur place',
    ],
    faq: [
      { q: 'Intervenez-vous sur signalement préfectoral ou municipal ?', a: 'Oui, nous travaillons en lien avec les mairies, les CCAS et sur signalement des services de l\'État.' },
      { q: 'Que faire si des nuisibles sont présents ?', a: 'Nous coordonnons avec des partenaires spécialisés en dératisation et désinsectisation. Le devis peut inclure ce traitement.' },
      { q: 'Quelle différence avec un nettoyage classique ?', a: 'Un logement insalubre nécessite des EPI adaptés, des produits biocides certifiés et des filières d\'élimination spécifiques pour les déchets contaminés.' },
      { q: 'L\'attestation de remise en état est-elle officielle ?', a: 'Oui, notre attestation est un document professionnel que vous pouvez fournir à votre bailleur, à la mairie ou aux services préfectoraux.' },
    ],
  },
  pro: {
    title: 'Prestations professionnelles',
    accent: 'professionnelles',
    tag: 'Notaires & agences', tagIcon: 'building',
    lead: 'Études notariales, agences immobilières, bailleurs sociaux : nous gérons le débarras et la remise en état de vos mandats avec réactivité, discrétion et une documentation complète.',
    illus: 'handyman',
    includes: [
      { t: 'Intervention sur mandat', d: 'Débarras et remise en état sans présence requise du client ou de l\'ayant droit.' },
      { t: 'Rapport de valorisation', d: 'Document complet listant les biens donnés, recyclés ou éliminés.' },
      { t: 'Devis sous 24h', d: 'Priorité accordée aux professionnels pour nos délais de réponse.' },
      { t: 'Gestion des accès', d: 'Coordination autonome des clés, accès et compte-rendu d\'intervention.' },
      { t: 'Nettoyage de remise en état', d: 'Logement rendu propre pour vente, location ou état des lieux de sortie.' },
      { t: 'Facturation professionnelle', d: 'Facturation à l\'adresse professionnelle, TVA applicable selon usage.' },
    ],
    checklist: [
      'Devis sous 24h',
      'Intervention sur mandat',
      'Rapport de valorisation inclus',
      'Facturation professionnelle',
      'Références disponibles sur demande',
    ],
    faq: [
      { q: 'Puis-je vous confier les clés sans être présent ?', a: 'Oui, nous travaillons régulièrement en totale autonomie sur mandat. Un compte-rendu d\'intervention vous est transmis à l\'issue.' },
      { q: 'Quel délai pour un devis ?', a: 'Nous nous engageons à vous transmettre un devis sous 24h après la visite. Pour les cas simples (surface connue, photos fournies), souvent moins.' },
      { q: 'Gérez-vous les archives et documents sensibles ?', a: 'Oui, nous mettons de côté tous les documents potentiellement importants (actes, photos de famille, documents d\'identité) pour remise aux ayants droit.' },
      { q: 'Travaillez-vous avec les bailleurs sociaux ?', a: 'Oui, nous sommes habitués à intervenir pour les offices HLM et bailleurs sociaux sur la remise en état entre deux occupants.' },
    ],
  },
};

const PageService = ({ serviceId = 'succession' }) => {
  const svc = SERVICE_CONTENT[serviceId] || SERVICE_CONTENT.succession;

  const related = (window.SERVICES || [])
    .filter(s => s.id !== serviceId)
    .slice(0, 4);

  const [openFaq, setOpenFaq] = React.useState(null);

  const IllusComp = ({ width = 380 }) => {
    const map = { clean: CleanIllustration, senior: SeniorIllustration, kids: KidsIllustration, garden: GardenIllustration, pets: PetIllustration, handyman: HandsIllustration };
    const C = map[svc.illus] || HandsIllustration;
    return <C width={width} />;
  };

  return (
    <div className="page">
      <SiteNav active="services" />

      {/* HERO */}
      <section className="container">
        <div className="svc-hero">
          <div>
            <div className="crumbs">
              <a onClick={() => navigate('home')}>Accueil</a>
              {' · '}
              <a onClick={() => navigate('services')}>Prestations</a>
              {' · '}
              <span style={{ color: 'var(--text)' }}>{svc.title}</span>
            </div>
            <span className="pill pill-violet" style={{ marginTop: 16, display: 'inline-flex' }}>
              <Icon name={svc.tagIcon} size={14} /> {svc.tag}
            </span>
            <h1 style={{ marginTop: 20 }}>
              {svc.title.split(svc.accent)[0]}
              <span className="serif-italic" style={{ color: 'var(--primary)' }}>{svc.accent}</span>
              {svc.title.split(svc.accent)[1] || ''}{'.'}
            </h1>
            <p className="lead" style={{ maxWidth: 520 }}>{svc.lead}</p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => navigate('devis')}>
                Demander un devis
                <Icon name="arrow" size={16} />
              </button>
              <button className="btn btn-ghost" onClick={() => navigate('contact')}>
                <Icon name="phone" size={16} /> Nous appeler
              </button>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <IllusComp width={380} />
          </div>
        </div>
      </section>

      {/* Detail + sticky card */}
      <section className="container section-tight">
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 64, alignItems: 'start' }}>
          <div>
            {/* Includes */}
            <span className="eyebrow">Ce que ça comprend</span>
            <h2 style={{ marginTop: 12, marginBottom: 28 }}>Une prestation complète, adaptée à votre situation.</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 56 }}>
              {svc.includes.map(p => (
                <div key={p.t} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--violet-100)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                    <Icon name="check" size={14} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 15 }}>{p.t}</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: 13.5, marginTop: 2 }}>{p.d}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Method */}
            <span className="eyebrow">Comment ça se passe</span>
            <h2 style={{ marginTop: 12, marginBottom: 28 }}>De la première visite à la remise du rapport.</h2>
            <div className="method">
              {[
                { n: '01', t: 'Visite gratuite', d: 'Nous nous déplaçons pour évaluer la situation. Sous 48h, sans engagement.' },
                { n: '02', t: 'Devis sur-mesure', d: 'Un devis clair et détaillé, transmis sous 24h après la visite.' },
                { n: '03', t: 'Intervention planifiée', d: 'Date et durée fixées selon votre calendrier. Discrétion garantie.' },
                { n: '04', t: 'Rapport final', d: 'Valorisation, attestation ou rapport assurance selon le type de prestation.' },
              ].map(s => (
                <div key={s.n} className="method-step">
                  <div className="n">{s.n}</div>
                  <h4>{s.t}</h4>
                  <p>{s.d}</p>
                </div>
              ))}
            </div>

            {/* FAQ */}
            <div style={{ marginTop: 72 }}>
              <span className="eyebrow">Questions fréquentes</span>
              <h2 style={{ marginTop: 12, marginBottom: 28 }}>Bon à savoir.</h2>
              <div style={{ borderTop: '1px solid var(--border)' }}>
                {svc.faq.map((item, i) => (
                  <div key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      style={{ width: '100%', background: 'none', border: 'none', padding: '20px 0', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, textAlign: 'left', fontFamily: 'var(--font-serif)', fontSize: 18, fontWeight: 500, color: 'var(--text)' }}>
                      {item.q}
                      <span style={{ transform: openFaq === i ? 'rotate(45deg)' : 'none', transition: 'transform .2s', flexShrink: 0, color: 'var(--primary)' }}>
                        <Icon name="plus" size={20} />
                      </span>
                    </button>
                    {openFaq === i && (
                      <p style={{ color: 'var(--text-muted)', fontSize: 15, paddingBottom: 20, maxWidth: 600, lineHeight: 1.6 }}>{item.a}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky devis card */}
          <div>
            <div className="price-card">
              <div className="from">Devis gratuit</div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontStyle: 'italic', color: 'var(--primary)', margin: '8px 0 4px' }}>Sur-mesure</div>
              <div className="muted" style={{ fontSize: 13 }}>Visite gratuite sous 48h · Devis sous 24h après visite</div>
              <ul>
                {svc.checklist.map(item => (
                  <li key={item}><Icon name="check" size={18} /> {item}</li>
                ))}
              </ul>
              <button className="btn btn-primary" onClick={() => navigate('devis')} style={{ width: '100%', marginTop: 24 }}>
                Demander un devis
                <Icon name="arrow" size={16} />
              </button>
              <button className="btn btn-ghost" onClick={() => navigate('contact')} style={{ width: '100%', marginTop: 8 }}>
                <Icon name="phone" size={16} /> Être rappelé·e
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related services */}
      {related.length > 0 && (
        <section className="container section-tight">
          <div className="section-title">
            <span className="eyebrow">Et aussi</span>
            <h2>Toutes nos <span className="serif-italic" style={{ color: 'var(--primary)' }}>prestations</span>.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {related.map(s => {
              const IllusSmall = ({ w = 90 }) => {
                const map = { clean: CleanIllustration, senior: SeniorIllustration, kids: KidsIllustration, garden: GardenIllustration, pets: PetIllustration, handyman: HandsIllustration };
                const C = map[s.illus] || HandsIllustration;
                return <C width={w} />;
              };
              return (
                <div key={s.id}
                     className="card"
                     style={{ padding: 20, cursor: 'pointer', transition: 'transform .15s, box-shadow .15s' }}
                     onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
                     onMouseLeave={e => e.currentTarget.style.transform = 'none'}
                     onClick={() => navigate('service-' + s.id)}>
                  <div style={{ marginBottom: 8, marginTop: -4 }}><IllusSmall /></div>
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: 17, fontWeight: 500, marginTop: 8 }}>{s.title}</h4>
                  <div style={{ marginTop: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="muted" style={{ fontSize: 13 }}>Devis gratuit</span>
                    <Icon name="arrow" size={16} color="var(--primary)" />
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      <SiteFooter />
    </div>
  );
};

Object.assign(window, { SERVICE_CONTENT, PageService });
