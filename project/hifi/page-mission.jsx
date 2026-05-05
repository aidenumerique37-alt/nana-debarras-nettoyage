// page-mission.jsx — détail d'une mission débarras

const PageMission = () => {
  const [openNote, setOpenNote] = React.useState(false);
  const [openFaq, setOpenFaq] = React.useState(null);

  return (
    <div className="admin">
      <AdminSidebar active="mission" />
      <div className="main">
        <AdminTopbar title="Mission" />

        <div className="main-content">
          <div className="mission-head">
            <div>
              <div className="breadcrumb">
                <a onClick={() => navigate('dashboard')}>Tableau de bord</a> · <a onClick={() => navigate('missions')}>Missions</a> · <span style={{ color: 'var(--text)' }}>#M-0038</span>
              </div>
              <h1>Débarras de succession · <span className="serif-italic" style={{ color: 'var(--primary)' }}>Famille Fontaine</span></h1>
              <div className="meta">
                <Icon name="pin" size={14} /> 14 rue des Acacias, 79000 Niort · visite effectuée le 28 avr.
              </div>
            </div>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <span className="pill pill-violet pill-dot">Devis accepté</span>
              <DropMenu items={[
                { label: 'Appeler Marc Fontaine',      icon: 'phone',  action: () => {} },
                { label: 'Envoyer un e-mail',          icon: 'mail',   action: () => {} },
                '---',
                { label: 'Marquer comme terminé',      icon: 'check',  action: () => {} },
                { label: 'Reporter l\'intervention',   icon: 'calendar', action: () => {} },
                '---',
                { label: 'Supprimer la mission',       icon: 'close',  danger: true, action: () => navigate('missions') },
              ]} />
            </div>
          </div>

          <div className="mission-grid">
            {/* MAIN */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

              {/* Prochaine intervention */}
              <div className="card" style={{ background: 'linear-gradient(180deg, var(--violet-50), var(--surface))', borderColor: 'var(--violet-200)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <span className="eyebrow">Intervention planifiée</span>
                    <h3 style={{ marginTop: 6, fontSize: 24 }}>Lundi 5 mai · 8h–13h</h3>
                    <div className="muted" style={{ fontSize: 14, marginTop: 4 }}>Appartement T3 · 68 m² · 2e étage avec ascenseur</div>
                  </div>
                  <div style={{ display: 'flex', gap: 6 }}>
                    <button className="btn btn-ghost" style={{ padding: '6px 14px', fontSize: 13 }}>Reporter</button>
                    <button className="btn btn-soft" style={{ padding: '6px 14px', fontSize: 13 }}>
                      <Icon name="phone" size={13} /> Appeler client
                    </button>
                  </div>
                </div>
                <div style={{ marginTop: 18, padding: 14, background: 'rgba(255,255,255,.6)', borderRadius: 'var(--r-md)', fontSize: 13.5, color: 'var(--text-soft)' }}>
                  <strong style={{ color: 'var(--text)' }}>Note de visite (28 avr.) : </strong>
                  Appartement vidé à 60 %, quelques meubles lourds (armoire, canapé), cave à vider également. Accès libre — clés déposées chez le gardien. Marc rappeler pour confirmer le don Emmaus.
                </div>
              </div>

              {/* Timeline / Étapes */}
              <div className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                  <h3 style={{ fontSize: 18 }}>Étapes & journal</h3>
                  <button className="btn-link" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--primary)', fontSize: 13 }}
                          onClick={() => setOpenNote(n => !n)}>
                    + Ajouter une note
                  </button>
                </div>

                {openNote && (
                  <div style={{ marginBottom: 16, padding: 14, background: 'var(--beige-50)', borderRadius: 'var(--r-md)', border: '1px solid var(--border)' }}>
                    <textarea className="textarea" rows={3} placeholder="Note, observation, information client…" style={{ width: '100%', boxSizing: 'border-box' }} />
                    <div style={{ display: 'flex', gap: 8, marginTop: 8, justifyContent: 'flex-end' }}>
                      <button className="btn btn-ghost" style={{ fontSize: 13, padding: '6px 12px' }} onClick={() => setOpenNote(false)}>Annuler</button>
                      <button className="btn btn-primary" style={{ fontSize: 13, padding: '6px 12px' }} onClick={() => setOpenNote(false)}>Enregistrer</button>
                    </div>
                  </div>
                )}

                <div className="steps">
                  <div className="step done">
                    <div className="check" />
                    <div>
                      <div className="label">Premier contact</div>
                      <div className="when">30 avr. · via formulaire devis</div>
                      <div className="desc">Succession après décès du père. Appartement T3 à Niort. Fils Marc Fontaine demande intervention rapide.</div>
                    </div>
                    <span className="muted" style={{ fontSize: 12 }}>Auto</span>
                  </div>

                  <div className="step done">
                    <div className="check" />
                    <div>
                      <div className="label">Visite gratuite</div>
                      <div className="when">28 avr. · 45 min</div>
                      <div className="desc">Appartement T3, 68 m², 2e étage. Cave incluse. Quelques meubles lourds. Don Emmaus à confirmer.</div>
                    </div>
                    <span className="muted" style={{ fontSize: 12 }}>Moi</span>
                  </div>

                  <div className="step done">
                    <div className="check" />
                    <div>
                      <div className="label">Devis envoyé & accepté</div>
                      <div className="when">29 avr. · forfait 850 €</div>
                      <div className="desc">Débarras complet appartement + cave, nettoyage final, rapport de valorisation inclus. Accepté par email.</div>
                    </div>
                    <span className="muted" style={{ fontSize: 12 }}>Moi</span>
                  </div>

                  <div className="step next">
                    <div className="check" />
                    <div>
                      <div className="label">Intervention</div>
                      <div className="when">Lundi 5 mai · 8h–13h</div>
                      <div className="desc">Débarras appartement + cave. Photos avant/après. Tri sélectif — meubles Emmaus, reste déchetterie pro.</div>
                    </div>
                    <span className="muted" style={{ fontSize: 12 }}>Planifié</span>
                  </div>

                  <div className="step">
                    <div className="check" />
                    <div>
                      <div className="label">Rapport de valorisation</div>
                      <div className="when">À produire après intervention</div>
                      <div className="desc">Document listant volumes donnés, recyclés, éliminés. Transmis au client et au notaire si demandé.</div>
                    </div>
                    <span className="muted" style={{ fontSize: 12 }}>À faire</span>
                  </div>

                  <div className="step">
                    <div className="check" />
                    <div>
                      <div className="label">Clôture & facturation</div>
                      <div className="when">Après rapport validé</div>
                      <div className="desc">Envoi facture, archivage dossier, demande d'avis client.</div>
                    </div>
                    <span className="muted" style={{ fontSize: 12 }}>À faire</span>
                  </div>
                </div>
              </div>

              {/* Photos avant/après */}
              <div className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                  <h3 style={{ fontSize: 18 }}>Photos avant / après</h3>
                  <button className="btn-link" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--primary)', fontSize: 13 }}>
                    <Icon name="plus" size={13} /> Ajouter
                  </button>
                </div>
                <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                  <span className="pill" style={{ fontSize: 11, background: 'var(--beige-200)' }}>Avant — visite 28 avr.</span>
                </div>
                <div className="photo-grid">
                  <div className="photo" style={{ background: 'linear-gradient(135deg, #C9B6D9, #735894)' }}>
                    <div style={{ position: 'absolute', bottom: 6, left: 8, color: '#fff', fontSize: 11 }}>Salon · avant</div>
                  </div>
                  <div className="photo" style={{ background: 'linear-gradient(135deg, #DFD3B8, #A89A7C)' }}>
                    <div style={{ position: 'absolute', bottom: 6, left: 8, color: '#fff', fontSize: 11 }}>Cuisine · avant</div>
                  </div>
                  <div className="photo" style={{ background: 'linear-gradient(135deg, #C9BC9D, #8C7E68)' }}>
                    <div style={{ position: 'absolute', bottom: 6, left: 8, color: '#fff', fontSize: 11 }}>Cave · avant</div>
                  </div>
                  <div className="photo" style={{ background: 'var(--beige-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', cursor: 'pointer', flexDirection: 'column', gap: 6 }}>
                    <Icon name="camera" size={24} />
                    <span style={{ fontSize: 11 }}>Après</span>
                  </div>
                </div>
                <div className="docs" style={{ marginTop: 12 }}>
                  <div className="doc"><Icon name="file" size={14} /> Devis-M0038-Fontaine.pdf</div>
                  <div className="doc"><Icon name="file" size={14} /> Rapport-valorisation.pdf <span style={{ fontSize: 11, color: 'var(--text-muted)', marginLeft: 6 }}>· à produire</span></div>
                  <div className="doc"><Icon name="file" size={14} /> Photos-avant-visite.zip</div>
                </div>
              </div>
            </div>

            {/* SIDEBAR */}
            <aside style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

              {/* Client */}
              <div className="card">
                <div className="eyebrow">Client</div>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginTop: 10 }}>
                  <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--beige-300)', color: 'var(--text)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-serif)', fontSize: 20, fontWeight: 500 }}>MF</div>
                  <div>
                    <div style={{ fontWeight: 600 }}>Marc Fontaine</div>
                    <div className="muted" style={{ fontSize: 13 }}>Particulier · succession</div>
                  </div>
                </div>
                <div className="divider" style={{ margin: '14px 0' }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 13.5 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span className="muted">Téléphone</span>
                    <a href="tel:0612345678" style={{ color: 'var(--primary)' }}>06 12 34 56 78</a>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span className="muted">E-mail</span>
                    <span style={{ fontSize: 12 }}>marc.fontaine@gmail.com</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span className="muted">Notaire</span>
                    <span>Me Leblanc · Frontenay</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span className="muted">Rapport notaire</span>
                    <span style={{ color: 'var(--success)', fontSize: 12, fontWeight: 600 }}>Demandé</span>
                  </div>
                </div>
              </div>

              {/* Type prestation */}
              <div className="card">
                <div className="eyebrow">Prestation</div>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: 18, fontWeight: 500, marginTop: 8 }}>Débarras de succession</h4>
                <div style={{ display: 'flex', gap: 6, marginTop: 10, flexWrap: 'wrap' }}>
                  <span className="pill" style={{ fontSize: 12 }}>Appartement T3</span>
                  <span className="pill" style={{ fontSize: 12 }}>68 m²</span>
                  <span className="pill" style={{ fontSize: 12 }}>Cave incluse</span>
                  <span className="pill pill-violet" style={{ fontSize: 12 }}>Don Emmaus</span>
                </div>
                <div style={{ marginTop: 16, fontSize: 13.5, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span className="muted">Durée estimée</span>
                    <span>5h</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span className="muted">Accès</span>
                    <span>Clés gardien</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span className="muted">Nettoyage final</span>
                    <span>Inclus</span>
                  </div>
                </div>
              </div>

              {/* Facturation */}
              <div className="card-soft" style={{ padding: 20 }}>
                <div className="eyebrow">Devis accepté</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 10 }}>
                  <span className="serif" style={{ fontSize: 32, color: 'var(--primary)' }}>850 €</span>
                  <span className="muted" style={{ fontSize: 13 }}>forfait tout compris</span>
                </div>
                <div style={{ fontSize: 13, marginTop: 14, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span className="muted">Débarras + cave</span>
                    <span>650 €</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span className="muted">Nettoyage final</span>
                    <span>120 €</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span className="muted">Rapport valorisation</span>
                    <span>Offert</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 10, borderTop: '1px solid var(--border)', fontWeight: 600 }}>
                    <span>Facturation</span>
                    <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>Après intervention</span>
                  </div>
                </div>
              </div>

              {/* Eco */}
              <div className="card" style={{ background: 'var(--beige-50)' }}>
                <div className="eyebrow">Valorisation prévue</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 12, fontSize: 13.5 }}>
                  {[
                    { icon: 'heart',  label: 'Don Emmaus',       val: 'À confirmer' },
                    { icon: 'sprout', label: 'Recyclage métal',  val: 'Estimé 40 kg' },
                    { icon: 'file',   label: 'Rapport',          val: 'À produire' },
                  ].map(r => (
                    <div key={r.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                        <Icon name={r.icon} size={14} color="var(--primary)" />
                        <span>{r.label}</span>
                      </div>
                      <span className="muted" style={{ fontSize: 12 }}>{r.val}</span>
                    </div>
                  ))}
                </div>
              </div>

            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

window.PageMission = PageMission;
