// page-devis.jsx — Conversational devis — one question at a time

const STEPS = [
  {
    id: 'situation',
    eyebrow: 'Étape 1 sur 5',
    title: <>Quelle est <em>votre situation</em> ?</>,
    sub: 'Cela nous aide à préparer la bonne équipe et le bon matériel.',
    type: 'choice',
    options: [
      { v: 'succession',   label: 'Succession après décès — débarras d\'un logement' },
      { v: 'demenagement', label: 'Déménagement — remise de clés, bien à vider' },
      { v: 'encombre',     label: 'Logement encombré — accumulation difficile à gérer' },
      { v: 'sinistre',     label: 'Après sinistre — dégât des eaux, incendie, vandalisme' },
      { v: 'insalubre',    label: 'Logement insalubre — remise en état complète' },
      { v: 'pro',          label: 'Prestation professionnelle — notaire, agence, bailleur' },
    ],
  },
  {
    id: 'bien',
    eyebrow: 'Étape 2 sur 5',
    title: <>Quel type de <em>bien</em> est concerné ?</>,
    sub: 'Une estimation suffit — on affine ensemble lors de la visite.',
    type: 'choice',
    options: [
      { v: 'appart',  label: 'Appartement' },
      { v: 'maison',  label: 'Maison individuelle' },
      { v: 'cave',    label: 'Cave, grenier ou dépendance' },
      { v: 'local',   label: 'Local professionnel ou commercial' },
    ],
  },
  {
    id: 'volume',
    eyebrow: 'Étape 3 sur 5',
    title: <>Quel volume <em>estimez-vous</em> ?</>,
    sub: 'Pas besoin d\'être précis — votre impression générale nous aide déjà.',
    type: 'choice',
    options: [
      { v: 'petit',      label: 'Quelques meubles ou affaires — une pièce max' },
      { v: 'moyen',      label: 'Plusieurs pièces à vider' },
      { v: 'grand',      label: 'Logement complet à débarrasser' },
      { v: 'tres_grand', label: 'Grand volume — maison entière, cave incluse, etc.' },
    ],
  },
  {
    id: 'urgence',
    eyebrow: 'Étape 4 sur 5',
    title: <>Quelle est <em>votre urgence</em> ?</>,
    sub: 'Nous nous adaptons à votre calendrier — y compris pour les urgences.',
    type: 'choice',
    options: [
      { v: 'semaine',   label: 'Cette semaine — c\'est urgent' },
      { v: 'mois',      label: 'Dans le mois qui vient' },
      { v: 'pas_presse', label: 'Pas pressé·e — je prends le temps d\'organiser' },
      { v: 'adefinir',  label: 'À définir ensemble' },
    ],
  },
  {
    id: 'contact',
    eyebrow: 'Étape 5 sur 5',
    title: <>Comment <em>vous joindre</em> ?</>,
    sub: 'Nous vous rappelons dans les 48h pour organiser une visite gratuite.',
    type: 'form',
  },
];

const RECAP_LABELS = {
  situation: { succession: 'Succession', demenagement: 'Déménagement', encombre: 'Logement encombré', sinistre: 'Après sinistre', insalubre: 'Logement insalubre', pro: 'Prestation professionnelle' },
  bien:      { appart: 'Appartement', maison: 'Maison', cave: 'Cave / grenier', local: 'Local professionnel' },
  volume:    { petit: 'Quelques meubles', moyen: 'Plusieurs pièces', grand: 'Logement complet', tres_grand: 'Grand volume' },
  urgence:   { semaine: 'Cette semaine', mois: 'Dans le mois', pas_presse: 'Pas pressé·e', adefinir: 'À définir' },
};

const PageDevis = () => {
  const [step, setStep] = React.useState(0);
  const [answers, setAnswers] = React.useState({});
  const [formData, setFormData] = React.useState({ firstName: '', phone: '', email: '', postal: '', notes: '' });
  const [formErrors, setFormErrors] = React.useState({});
  const [done, setDone] = React.useState(false);

  // Keyboard navigation
  React.useEffect(() => {
    const onKey = (e) => {
      if (done) return;
      const s = STEPS[step];
      if (s.type === 'choice') {
        if (e.key >= '1' && e.key <= '9') {
          const i = parseInt(e.key, 10) - 1;
          if (s.options[i]) pick(s.id, s.options[i].v);
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [step, done]);

  const pick = (id, v) => {
    setAnswers(a => ({ ...a, [id]: v }));
    setTimeout(() => setStep(s => Math.min(s + 1, STEPS.length - 1)), 280);
  };

  const updateField = (k, v) => {
    setFormData(d => ({ ...d, [k]: v }));
    if (formErrors[k]) setFormErrors(e => ({ ...e, [k]: null }));
  };

  const prev = () => setStep(s => Math.max(s - 1, 0));

  const submit = () => {
    const errs = {};
    if (!formData.firstName.trim()) errs.firstName = 'Votre prénom est requis';
    if (!formData.phone.trim())     errs.phone = 'Un numéro de téléphone est requis';
    if (!formData.email.trim())     errs.email = 'Une adresse e-mail est requise';
    if (!formData.postal.trim())    errs.postal = 'Votre code postal est requis';
    setFormErrors(errs);
    if (Object.keys(errs).length === 0) setDone(true);
  };

  // ── CONFIRMATION ──
  if (done) {
    return (
      <div className="devis-page">
        <div className="devis-top">
          <Wordmark onClick={() => navigate('home')} />
          <button className="btn btn-ghost" onClick={() => navigate('home')}>Retour à l'accueil</button>
        </div>
        <div className="devis-stage" style={{ textAlign: 'center', alignItems: 'center' }}>
          <div style={{ width: 88, height: 88, borderRadius: '50%', background: 'var(--violet-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 28px' }}>
            <Icon name="check" size={44} color="var(--primary)" />
          </div>
          <h1 style={{ marginBottom: 14 }}>Merci, <em>on s'en occupe</em>.</h1>
          <p style={{ color: 'var(--text-soft)', fontSize: 18, maxWidth: 520, margin: '0 auto' }}>
            Notre équipe vous contacte au <strong>{formData.phone}</strong> pour organiser une visite gratuite sous 48h.
            {answers.urgence === 'semaine' && ' Votre demande est marquée urgente — nous traitons votre dossier en priorité.'}
          </p>

          <div className="card" style={{ maxWidth: 460, margin: '36px auto', textAlign: 'left' }}>
            <div className="eyebrow" style={{ marginBottom: 12 }}>Récapitulatif</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 14.5 }}>
              {[
                { label: 'Situation', key: 'situation' },
                { label: 'Type de bien', key: 'bien' },
                { label: 'Volume estimé', key: 'volume' },
                { label: 'Urgence', key: 'urgence' },
              ].map(row => (
                <div key={row.key} style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span className="muted">{row.label}</span>
                  <span>{(RECAP_LABELS[row.key] || {})[answers[row.key]] || '—'}</span>
                </div>
              ))}
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 10, borderTop: '1px solid var(--border)' }}>
                <span className="muted">Code postal</span>
                <span>{formData.postal || '—'}</span>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 8, flexWrap: 'wrap' }}>
            <button className="btn btn-primary" onClick={() => navigate('home')}>Retour à l'accueil</button>
            <button className="btn btn-ghost" onClick={() => { setDone(false); setStep(0); setAnswers({}); setFormData({ firstName: '', phone: '', email: '', postal: '', notes: '' }); }}>
              Faire une autre demande
            </button>
          </div>
        </div>
      </div>
    );
  }

  const s = STEPS[step];
  const selected = answers[s.id];
  const isLast = step === STEPS.length - 1;

  return (
    <div className="devis-page">
      {/* Top bar */}
      <div className="devis-top">
        <Wordmark onClick={() => navigate('home')} />
        <div className="progress">
          <span>{step + 1} / {STEPS.length}</span>
          <div className="progress-bar">
            <div style={{ width: `${((step + 1) / STEPS.length) * 100}%` }} />
          </div>
        </div>
        <button className="btn btn-ghost" onClick={() => navigate('home')} style={{ padding: '8px 14px', fontSize: 13 }}>
          Quitter
        </button>
      </div>

      {/* Step content — key forces remount = CSS animation */}
      <div className="devis-stage" key={step}>
        <div className="devis-step-content">
          <span className="eyebrow">{s.eyebrow}</span>
          <h1>{s.title}</h1>
          <p className="sub">{s.sub}</p>

          {s.type === 'choice' && (
            <div className="option-row">
              {s.options.map((o, i) => (
                <div key={o.v}
                     className={`option${selected === o.v ? ' selected' : ''}`}
                     onClick={() => pick(s.id, o.v)}>
                  <span className="radio" />
                  <span style={{ flex: 1 }}>{o.label}</span>
                  <kbd>{i + 1}</kbd>
                </div>
              ))}
            </div>
          )}

          {s.type === 'form' && (
            <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 540 }}>
              <div className="field">
                <label>Votre prénom</label>
                <input
                  className={`input${formErrors.firstName ? ' has-error' : ''}`}
                  placeholder="Marie"
                  value={formData.firstName}
                  onChange={e => updateField('firstName', e.target.value)}
                />
                {formErrors.firstName && <div className="field-error">{formErrors.firstName}</div>}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div className="field">
                  <label>Téléphone</label>
                  <input
                    className={`input${formErrors.phone ? ' has-error' : ''}`}
                    type="tel"
                    placeholder="06 12 34 56 78"
                    value={formData.phone}
                    onChange={e => updateField('phone', e.target.value)}
                  />
                  {formErrors.phone && <div className="field-error">{formErrors.phone}</div>}
                </div>
                <div className="field">
                  <label>E-mail</label>
                  <input
                    className={`input${formErrors.email ? ' has-error' : ''}`}
                    type="email"
                    placeholder="marie@exemple.fr"
                    value={formData.email}
                    onChange={e => updateField('email', e.target.value)}
                  />
                  {formErrors.email && <div className="field-error">{formErrors.email}</div>}
                </div>
              </div>

              <div className="field">
                <label>Code postal</label>
                <input
                  className={`input${formErrors.postal ? ' has-error' : ''}`}
                  placeholder="79210"
                  maxLength={5}
                  value={formData.postal}
                  onChange={e => updateField('postal', e.target.value)}
                  style={{ maxWidth: 160 }}
                />
                {formErrors.postal && <div className="field-error">{formErrors.postal}</div>}
              </div>

              <div className="field">
                <label>Quelque chose à préciser ? <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>(facultatif)</span></label>
                <textarea
                  className="textarea"
                  placeholder="Étage, accès, situation particulière, délai de remise de clés…"
                  rows={3}
                  value={formData.notes}
                  onChange={e => updateField('notes', e.target.value)}
                />
              </div>

              <label style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 13.5, color: 'var(--text-muted)', marginTop: 4 }}>
                <input type="checkbox" defaultChecked style={{ marginTop: 3, flexShrink: 0 }} />
                <span>J'accepte d'être recontacté·e. Mes données restent en France et ne sont jamais partagées.</span>
              </label>
            </div>
          )}

          <div className="devis-actions">
            {step > 0 ? (
              <button className="btn btn-ghost" onClick={prev}>← Précédent</button>
            ) : <span />}
            {isLast ? (
              <button className="btn btn-primary" onClick={submit}>
                Envoyer ma demande
                <Icon name="arrow" size={16} />
              </button>
            ) : (
              <button className="btn btn-ghost" onClick={() => setStep(s => s + 1)}
                      disabled={s.type === 'choice' && !selected}
                      style={{ opacity: s.type === 'choice' && !selected ? .35 : 1 }}>
                Suivant →
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Keyboard hint */}
      {!isLast && s.type === 'choice' && (
        <div className="kbd-hint">
          Astuce&nbsp;: appuyez sur <kbd>1</kbd>–<kbd>{s.options.length}</kbd> pour choisir
        </div>
      )}
    </div>
  );
};

window.PageDevis = PageDevis;
