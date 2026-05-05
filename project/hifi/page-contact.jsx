// page-contact.jsx — Contact page with callback form

const PageContact = () => {
  const [form, setForm] = React.useState({ name: '', phone: '', slot: '', message: '' });
  const [errors, setErrors] = React.useState({});
  const [sent, setSent] = React.useState(false);

  const update = (k, v) => {
    setForm(f => ({ ...f, [k]: v }));
    if (errors[k]) setErrors(e => ({ ...e, [k]: null }));
  };

  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim()) errs.name = 'Requis';
    if (!form.phone.trim()) errs.phone = 'Requis';
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSent(true);
  };

  return (
    <div className="page">
      <SiteNav active="contact" />

      {/* If form sent */}
      {sent ? (
        <section className="container" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center', maxWidth: 520 }}>
            <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'var(--violet-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 28px' }}>
              <Icon name="check" size={40} color="var(--primary)" />
            </div>
            <h2 style={{ marginBottom: 12 }}>Message bien reçu !</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 17, lineHeight: 1.6 }}>
              Sandrine, notre coordinatrice, vous rappelle au <strong>{form.phone}</strong> dans les 2h en journée.
              Si vous avez précisé un créneau préféré, elle en tiendra compte.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 32, flexWrap: 'wrap' }}>
              <button className="btn btn-primary" onClick={() => navigate('home')}>Retour à l'accueil</button>
              <button className="btn btn-ghost" onClick={() => { setSent(false); setForm({ name: '', phone: '', slot: '', message: '' }); }}>
                Envoyer une autre demande
              </button>
            </div>
          </div>
        </section>
      ) : (
        <section className="container">
          <div className="contact-grid">
            {/* Info column */}
            <div>
              <span className="eyebrow" style={{ marginBottom: 16, display: 'inline-block' }}>Contact</span>
              <h1>On vous <span className="serif-italic" style={{ color: 'var(--primary)' }}>répond en 2h</span>.</h1>
              <p style={{ color: 'var(--text-soft)', fontSize: 17, marginTop: 20, marginBottom: 40, lineHeight: 1.6, maxWidth: 420 }}>
                Pas de standard téléphonique. Sandrine, notre coordinatrice, est joignable directement et connaît votre dossier.
              </p>

              <div className="contact-info">
                <div className="contact-row">
                  <div className="contact-icon"><Icon name="phone" size={20} /></div>
                  <div>
                    <h4>Téléphone</h4>
                    <p><a href="tel:+33679806288">06 79 80 62 88</a></p>
                    <p style={{ marginTop: 2, fontSize: 12, color: 'var(--text-muted)' }}>Lundi–vendredi 8h–19h · Samedi 9h–12h</p>
                  </div>
                </div>

                <div className="contact-row">
                  <div className="contact-icon"><Icon name="mail" size={20} /></div>
                  <div>
                    <h4>E-mail</h4>
                    <p><a href="mailto:bonjour@nana.fr">bonjour@nana.fr</a></p>
                    <p style={{ marginTop: 2, fontSize: 12, color: 'var(--text-muted)' }}>Réponse garantie sous 24h ouvrées</p>
                  </div>
                </div>

                <div className="contact-row">
                  <div className="contact-icon"><Icon name="pin" size={20} /></div>
                  <div>
                    <h4>Secteur</h4>
                    <p>Arçais — Marais Poitevin</p>
                    <p>Deux-Sèvres (79)</p>
                    <p style={{ marginTop: 2, fontSize: 12, color: 'var(--text-muted)' }}>Déplacement gratuit dans un rayon de 40 km</p>
                  </div>
                </div>

                <div className="contact-row">
                  <div className="contact-icon"><Icon name="clock" size={20} /></div>
                  <div>
                    <h4>Horaires</h4>
                    <p>Lundi–vendredi : 8h–19h</p>
                    <p>Samedi : 9h–12h</p>
                    <p style={{ marginTop: 2, fontSize: 12, color: 'var(--text-muted)' }}>Urgences : numéro dédié communiqué à nos clients</p>
                  </div>
                </div>
              </div>

              {/* Zone map placeholder */}
              <div style={{ marginTop: 40, background: 'var(--beige-200)', borderRadius: 'var(--r-lg)', padding: 24, border: '1px solid var(--border)' }}>
                <div className="eyebrow" style={{ marginBottom: 10 }}>Zone d'intervention</div>
                <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.55 }}>
                  Nous intervenons dans les Deux-Sèvres (79) et les départements voisins, dans un rayon de 30 à 40 km autour d'Arçais.
                </p>
                <div style={{ marginTop: 16, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {['Niort', 'Arçais', 'Coulon', 'Frontenay-Rohan-Rohan', 'Mauzé-sur-le-Mignon', 'Melle', 'Saint-Maixent-l\'École', 'Fontenay-le-Comte', 'Surgères'].map(v => (
                    <span key={v} className="pill" style={{ fontSize: 12 }}>{v}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Form column */}
            <div>
              <div className="contact-form-card">
                <h3>Être rappelé·e</h3>
                <p>Laissez vos coordonnées — Sandrine vous appelle dans les 2h pour comprendre votre situation et vous proposer la bonne solution.</p>

                <form onSubmit={submit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div className="field">
                    <label>Votre prénom</label>
                    <input
                      className={`input${errors.name ? ' has-error' : ''}`}
                      placeholder="Hélène"
                      value={form.name}
                      onChange={e => update('name', e.target.value)}
                    />
                    {errors.name && <div className="field-error">{errors.name}</div>}
                  </div>

                  <div className="field">
                    <label>Téléphone</label>
                    <input
                      className={`input${errors.phone ? ' has-error' : ''}`}
                      type="tel"
                      placeholder="06 12 34 56 78"
                      value={form.phone}
                      onChange={e => update('phone', e.target.value)}
                    />
                    {errors.phone && <div className="field-error">{errors.phone}</div>}
                  </div>

                  <div className="field">
                    <label>Créneau préféré <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>(facultatif)</span></label>
                    <select
                      className="input"
                      value={form.slot}
                      onChange={e => update('slot', e.target.value)}
                      style={{ cursor: 'pointer' }}>
                      <option value="">Peu importe</option>
                      <option value="matin">Matin (8h–12h)</option>
                      <option value="aprem">Après-midi (13h–17h)</option>
                      <option value="soir">Fin de journée (17h–19h)</option>
                    </select>
                  </div>

                  <div className="field">
                    <label>Votre situation <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>(facultatif)</span></label>
                    <textarea
                      className="textarea"
                      placeholder="Décrivez brièvement ce dont vous avez besoin : pour qui, quel type d'aide, à quelle fréquence…"
                      rows={4}
                      value={form.message}
                      onChange={e => update('message', e.target.value)}
                    />
                  </div>

                  <label style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 13, color: 'var(--text-muted)', marginTop: 4 }}>
                    <input type="checkbox" defaultChecked style={{ marginTop: 3, flexShrink: 0 }} />
                    <span>J'accepte d'être recontacté·e. Mes données restent en France et ne sont jamais partagées.</span>
                  </label>

                  <button type="submit" className="btn btn-primary" style={{ marginTop: 8, width: '100%', padding: '14px', fontSize: 15 }}>
                    Demander à être rappelé·e
                    <Icon name="phone" size={16} />
                  </button>
                </form>

                <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid var(--border)', fontSize: 13, color: 'var(--text-muted)', display: 'flex', gap: 8, alignItems: 'center' }}>
                  <Icon name="shield" size={14} color="var(--primary)" />
                  Données traitées selon le RGPD · Hébergement France · Aucun démarchage commercial
                </div>
              </div>

              {/* Alternate CTA */}
              <div style={{ marginTop: 16, background: 'var(--violet-50)', border: '1px solid var(--violet-200)', borderRadius: 'var(--r-lg)', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 2 }}>Préférez-vous un devis chiffré ?</div>
                  <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>5 questions, 2 minutes, devis sous 24h.</div>
                </div>
                <button className="btn btn-soft" onClick={() => navigate('devis')}>
                  Faire un devis
                  <Icon name="arrow" size={14} />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      <SiteFooter />
    </div>
  );
};

window.PageContact = PageContact;
