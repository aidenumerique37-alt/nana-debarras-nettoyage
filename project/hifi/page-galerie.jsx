// page-galerie.jsx — admin gallery management

// Image/file upload field with drag-drop + URL mode
const UploadField = ({ label, value, onChange, accept = 'image/*' }) => {
  const [urlMode, setUrlMode] = React.useState(false);
  const [urlInput, setUrlInput] = React.useState('');
  const [dragging, setDragging] = React.useState(false);
  const fileRef = React.useRef(null);

  const handleFile = (file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => onChange(ev.target.result);
    reader.readAsDataURL(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  return (
    <div>
      {label && (
        <label style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: 8 }}>{label}</label>
      )}
      <div style={{ display: 'flex', gap: 6, marginBottom: 8 }}>
        {['Fichier', 'URL'].map((m, i) => (
          <button key={m} type="button" onClick={() => setUrlMode(i === 1)}
            style={{
              fontSize: 11, padding: '3px 10px', borderRadius: 6, border: '1px solid var(--border)', cursor: 'pointer',
              background: (i === 1) === urlMode ? 'var(--violet-100)' : 'transparent',
              color: (i === 1) === urlMode ? 'var(--primary)' : 'var(--text-muted)',
              fontFamily: 'inherit', fontWeight: 500,
            }}>{m}</button>
        ))}
      </div>
      {!urlMode ? (
        <>
          <input type="file" accept={accept} ref={fileRef} style={{ display: 'none' }}
            onChange={e => handleFile(e.target.files[0])} />
          <div
            onClick={() => fileRef.current?.click()}
            onDragOver={e => { e.preventDefault(); setDragging(true); }}
            onDragLeave={() => setDragging(false)}
            onDrop={handleDrop}
            style={{
              border: `1.5px dashed ${dragging ? 'var(--primary)' : 'var(--border-strong)'}`,
              borderRadius: 'var(--r-md)', padding: '14px 0', textAlign: 'center',
              cursor: 'pointer', fontSize: 13, color: 'var(--text-muted)',
              background: dragging ? 'var(--violet-100)' : 'transparent', transition: 'all .15s',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
            }}>
            <Icon name="download" size={16} />
            <span>Cliquer ou glisser-déposer</span>
          </div>
        </>
      ) : (
        <div style={{ display: 'flex', gap: 8 }}>
          <input type="url" value={urlInput} onChange={e => setUrlInput(e.target.value)}
            placeholder="https://…" className="input" style={{ flex: 1, fontSize: 13 }}
            onKeyDown={e => { if (e.key === 'Enter' && urlInput) { onChange(urlInput); setUrlInput(''); } }} />
          <button type="button" onClick={() => { if (urlInput) { onChange(urlInput); setUrlInput(''); } }}
            className="btn btn-ghost" style={{ padding: '8px 12px', fontSize: 13 }}>OK</button>
        </div>
      )}
      {value && (
        <div style={{ marginTop: 8, borderRadius: 'var(--r-md)', overflow: 'hidden', height: 88, position: 'relative', background: 'var(--beige-100)' }}>
          <img src={value} style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={e => { e.target.style.display = 'none'; }} />
          <button type="button" onClick={() => onChange('')}
            style={{ position: 'absolute', top: 4, right: 4, background: 'rgba(0,0,0,.55)', border: 'none',
              borderRadius: '50%', width: 22, height: 22, cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="close" size={10} color="white" />
          </button>
        </div>
      )}
    </div>
  );
};

// Compact thumbnail shown in the admin card grid
const GalleryAdminThumb = ({ item }) => {
  const [err, setErr] = React.useState(false);
  const H = 140;

  if (item.type === 'video') {
    const vid = getYouTubeId(item.videoUrl);
    return (
      <div style={{ height: H, background: 'var(--beige-100)', position: 'relative', overflow: 'hidden' }}>
        {vid && !err ? (
          <img src={`https://img.youtube.com/vi/${vid}/mqdefault.jpg`}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={() => setErr(true)} />
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <Icon name="play" size={28} color="var(--text-muted)" />
          </div>
        )}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,.22)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 34, height: 34, borderRadius: '50%', background: 'rgba(255,255,255,.9)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="play" size={14} />
          </div>
        </div>
      </div>
    );
  }

  if (item.type === 'duo') {
    return (
      <div style={{ height: H, position: 'relative', overflow: 'hidden', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'var(--border)' }}>
        <div style={{ overflow: 'hidden', background: 'var(--beige-100)' }}>
          {item.before && <img src={item.before} style={{ width: '100%', height: H, objectFit: 'cover' }}
            onError={e => { e.target.style.display = 'none'; }} />}
        </div>
        <div style={{ overflow: 'hidden', background: 'var(--beige-100)' }}>
          {item.after && <img src={item.after} style={{ width: '100%', height: H, objectFit: 'cover' }}
            onError={e => { e.target.style.display = 'none'; }} />}
        </div>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
          background: 'white', borderRadius: '50%', width: 22, height: 22,
          display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 1px 4px rgba(0,0,0,.2)' }}>
          <Icon name="chevron" size={10} color="var(--text-muted)" />
        </div>
      </div>
    );
  }

  // solo
  return (
    <div style={{ height: H, background: 'var(--beige-100)' }}>
      {item.src && !err ? (
        <img src={item.src} style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          onError={() => setErr(true)} />
      ) : (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          <Icon name="image" size={28} color="var(--text-muted)" />
        </div>
      )}
    </div>
  );
};

const TYPE_META = {
  solo:  { label: 'Photo',        bg: 'var(--violet-100)',          color: 'var(--primary)',      icon: 'image' },
  duo:   { label: 'Avant / Après', bg: 'rgba(34,197,94,.12)',        color: 'rgb(22,163,74)',       icon: 'sparkle' },
  video: { label: 'Vidéo',         bg: 'rgba(239,68,68,.1)',          color: 'rgb(220,38,38)',       icon: 'play' },
};

const GALLERY_CATS = ['succession', 'sinistre', 'nettoyage', 'déménagement', 'encombré', 'insalubre', 'professionnel'];

const PageGalerie = () => {
  const { gallery, setGallery } = React.useContext(GalleryContext);
  const [filter, setFilter]     = React.useState('all');
  const [showForm, setShowForm] = React.useState(false);

  // form fields
  const [fType,     setFType]     = React.useState('solo');
  const [fCaption,  setFCaption]  = React.useState('');
  const [fCat,      setFCat]      = React.useState('succession');
  const [fSrc,      setFSrc]      = React.useState('');
  const [fBefore,   setFBefore]   = React.useState('');
  const [fAfter,    setFAfter]    = React.useState('');
  const [fVideo,    setFVideo]    = React.useState('');
  const [fPublish,  setFPublish]  = React.useState(true);

  const resetForm = () => {
    setFType('solo'); setFCaption(''); setFCat('succession');
    setFSrc(''); setFBefore(''); setFAfter(''); setFVideo(''); setFPublish(true);
  };

  const isValid = () => {
    if (fType === 'solo')  return !!fSrc;
    if (fType === 'duo')   return !!fBefore && !!fAfter;
    if (fType === 'video') return !!getYouTubeId(fVideo);
    return false;
  };

  const addItem = () => {
    if (!isValid()) return;
    const base = { id: String(Date.now()), type: fType, caption: fCaption, category: fCat, published: fPublish };
    const extra = fType === 'solo'  ? { src: fSrc }
                : fType === 'duo'   ? { before: fBefore, after: fAfter }
                :                     { videoUrl: fVideo };
    setGallery(g => [{ ...base, ...extra }, ...g]);
    setShowForm(false);
    resetForm();
  };

  const togglePublish = (id) => setGallery(g => g.map(i => i.id === id ? { ...i, published: !i.published } : i));
  const deleteItem    = (id) => setGallery(g => g.filter(i => i.id !== id));

  const filters = [
    { id: 'all',   label: `Tout (${gallery.length})` },
    { id: 'solo',  label: `Photo (${gallery.filter(i => i.type === 'solo').length})` },
    { id: 'duo',   label: `Avant/Après (${gallery.filter(i => i.type === 'duo').length})` },
    { id: 'video', label: `Vidéo (${gallery.filter(i => i.type === 'video').length})` },
  ];

  const filtered  = filter === 'all' ? gallery : gallery.filter(i => i.type === filter);
  const published = gallery.filter(i => i.published).length;

  const ytPreviewId = fType === 'video' ? getYouTubeId(fVideo) : null;

  return (
    <div className="app">
      <AdminSidebar active="galerie" />
      <main className="main">
        <AdminTopbar
          title="Galerie"
          actions={
            <button className="btn btn-primary" onClick={() => { resetForm(); setShowForm(true); }}
              style={{ padding: '8px 16px', fontSize: 13 }}>
              <Icon name="plus" size={14} /> Ajouter
            </button>
          }
        />

        <div style={{ padding: '24px 32px' }}>
          {/* Live indicator */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, padding: '12px 16px',
            background: published > 0 ? 'rgba(34,197,94,.08)' : 'var(--beige-100)',
            borderRadius: 'var(--r-md)', border: `1px solid ${published > 0 ? 'rgba(34,197,94,.2)' : 'var(--border)'}` }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: published > 0 ? 'rgb(22,163,74)' : 'var(--text-muted)', flexShrink: 0 }} />
            <p style={{ margin: 0, fontSize: 13, color: 'var(--text-muted)' }}>
              {published > 0
                ? <><strong style={{ color: 'var(--text)' }}>{published} élément{published > 1 ? 's' : ''}</strong> publié{published > 1 ? 's' : ''} sur la page d'accueil — visible{published > 1 ? 's' : ''} par vos visiteurs.</>
                : 'Aucun élément publié — la galerie est masquée sur la page d\'accueil.'}
            </p>
          </div>

          {/* Filters */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
            {filters.map(f => (
              <button key={f.id} onClick={() => setFilter(f.id)}
                style={{
                  padding: '6px 14px', borderRadius: 20, fontSize: 13, cursor: 'pointer',
                  border: 'none', fontFamily: 'inherit',
                  background: filter === f.id ? 'var(--violet-700)' : 'var(--beige-100)',
                  color: filter === f.id ? 'var(--beige-50)' : 'var(--text-muted)',
                  fontWeight: filter === f.id ? 600 : 400,
                }}>{f.label}</button>
            ))}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '72px 0' }}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--beige-100)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <Icon name="image" size={24} color="var(--text-muted)" />
              </div>
              <p style={{ fontWeight: 600, fontSize: 15, marginBottom: 6 }}>Aucun élément</p>
              <p style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 24 }}>
                Ajoutez des photos ou vidéos de vos interventions.
              </p>
              <button className="btn btn-primary" onClick={() => { resetForm(); setShowForm(true); }}>
                <Icon name="plus" size={14} /> Ajouter un premier élément
              </button>
            </div>
          )}

          {/* Gallery grid */}
          {filtered.length > 0 && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
              {filtered.map(item => {
                const meta = TYPE_META[item.type];
                return (
                  <div key={item.id} className="card"
                    style={{ padding: 0, overflow: 'hidden', opacity: item.published ? 1 : .5, transition: 'opacity .2s' }}>
                    <GalleryAdminThumb item={item} />
                    <div style={{ padding: '10px 12px', display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 3 }}>
                          <span style={{ fontSize: 11, padding: '2px 7px', borderRadius: 10, fontWeight: 600,
                            background: meta.bg, color: meta.color }}>{meta.label}</span>
                          {item.category && (
                            <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>{item.category}</span>
                          )}
                        </div>
                        <p style={{ margin: 0, fontSize: 13, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', color: item.caption ? 'var(--text)' : 'var(--text-muted)', fontStyle: item.caption ? 'normal' : 'italic' }}>
                          {item.caption || 'Sans légende'}
                        </p>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 4, flexShrink: 0 }}>
                        <button onClick={() => togglePublish(item.id)} title={item.published ? 'Dépublier' : 'Publier'}
                          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, borderRadius: 6,
                            color: item.published ? 'var(--primary)' : 'var(--text-muted)' }}>
                          <Icon name={item.published ? 'eye' : 'eyeOff'} size={15} />
                        </button>
                        <DropMenu items={[
                          { label: item.published ? 'Dépublier' : 'Publier sur la page d\'accueil', icon: 'eye', action: () => togglePublish(item.id) },
                          '---',
                          { label: 'Supprimer', icon: 'close', danger: true, action: () => deleteItem(item.id) },
                        ]} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>

      {/* Add panel — slide in from right */}
      {showForm && (
        <>
          <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.28)', zIndex: 100 }}
            onClick={() => setShowForm(false)} />
          <div style={{
            position: 'fixed', top: 0, right: 0, bottom: 0, width: 460, zIndex: 101,
            background: 'var(--surface)', boxShadow: '-4px 0 32px rgba(0,0,0,.12)',
            display: 'flex', flexDirection: 'column',
          }}>
            {/* Header */}
            <div style={{ padding: '18px 22px', borderBottom: '1px solid var(--border)',
              display: 'flex', alignItems: 'center', gap: 12 }}>
              <button onClick={() => setShowForm(false)} className="icon-btn">
                <Icon name="close" size={16} />
              </button>
              <h3 style={{ margin: 0, fontSize: 16 }}>Nouvel élément</h3>
            </div>

            {/* Body */}
            <div style={{ flex: 1, overflowY: 'auto', padding: 22, display: 'flex', flexDirection: 'column', gap: 20 }}>
              {/* Type selector */}
              <div>
                <label style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase',
                  color: 'var(--text-muted)', display: 'block', marginBottom: 10 }}>Type de contenu</label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
                  {[
                    { id: 'solo',  label: 'Photo',        icon: 'image'   },
                    { id: 'duo',   label: 'Avant / Après', icon: 'sparkle' },
                    { id: 'video', label: 'Vidéo',         icon: 'play'    },
                  ].map(t => (
                    <button key={t.id} type="button" onClick={() => setFType(t.id)}
                      style={{
                        padding: '14px 8px', borderRadius: 'var(--r-md)', cursor: 'pointer',
                        border: `1.5px solid ${fType === t.id ? 'var(--primary)' : 'var(--border)'}`,
                        background: fType === t.id ? 'var(--violet-100)' : 'transparent',
                        color: fType === t.id ? 'var(--primary)' : 'var(--text-muted)',
                        fontFamily: 'inherit', fontWeight: 600, fontSize: 12,
                        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 7, transition: 'all .15s',
                      }}>
                      <Icon name={t.icon} size={18} />
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Type-specific fields */}
              {fType === 'solo' && (
                <UploadField label="Photo" value={fSrc} onChange={setFSrc} />
              )}

              {fType === 'duo' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <UploadField label="Photo Avant" value={fBefore} onChange={setFBefore} />
                  <UploadField label="Photo Après"  value={fAfter}  onChange={setFAfter}  />
                </div>
              )}

              {fType === 'video' && (
                <div>
                  <label style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: 8 }}>URL YouTube</label>
                  <input type="url" value={fVideo} onChange={e => setFVideo(e.target.value)}
                    placeholder="https://www.youtube.com/watch?v=…" className="input"
                    style={{ width: '100%', fontSize: 13, boxSizing: 'border-box' }} />
                  {fVideo && !ytPreviewId && (
                    <p style={{ fontSize: 12, color: 'var(--danger)', marginTop: 6 }}>URL YouTube non reconnue</p>
                  )}
                  {ytPreviewId && (
                    <div style={{ marginTop: 10, borderRadius: 'var(--r-md)', overflow: 'hidden', height: 110, position: 'relative' }}>
                      <img src={`https://img.youtube.com/vi/${ytPreviewId}/mqdefault.jpg`}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        onError={e => { e.target.style.display = 'none'; }} />
                      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,.18)' }}>
                        <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,.92)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Icon name="play" size={15} />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Caption */}
              <div>
                <label style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: 8 }}>
                  Légende <span style={{ fontWeight: 400 }}>(optionnel)</span>
                </label>
                <input type="text" value={fCaption} onChange={e => setFCaption(e.target.value)}
                  placeholder="Débarras après succession, Niort 2025…" className="input"
                  style={{ width: '100%', fontSize: 13, boxSizing: 'border-box' }} />
              </div>

              {/* Category */}
              <div>
                <label style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: 8 }}>Catégorie</label>
                <select value={fCat} onChange={e => setFCat(e.target.value)} className="input"
                  style={{ width: '100%', fontSize: 13, boxSizing: 'border-box' }}>
                  {GALLERY_CATS.map(c => (
                    <option key={c} value={c}>{c.charAt(0).toUpperCase() + c.slice(1)}</option>
                  ))}
                </select>
              </div>

              {/* Publish toggle */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '14px 0', borderTop: '1px solid var(--border)' }}>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>Publier immédiatement</div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>Visible sur la page d'accueil</div>
                </div>
                <div onClick={() => setFPublish(p => !p)} style={{
                  width: 40, height: 22, borderRadius: 999, cursor: 'pointer',
                  background: fPublish ? 'var(--primary)' : 'var(--ink-300)',
                  position: 'relative', transition: 'background .18s', flexShrink: 0,
                }}>
                  <div style={{
                    position: 'absolute', top: 3, width: 16, height: 16, borderRadius: '50%',
                    background: '#fff', transition: 'left .18s',
                    left: fPublish ? 21 : 3, boxShadow: '0 1px 3px rgba(0,0,0,.2)',
                  }} />
                </div>
              </div>
            </div>

            {/* Footer */}
            <div style={{ padding: '14px 22px', borderTop: '1px solid var(--border)',
              display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
              <button onClick={() => setShowForm(false)} className="btn btn-ghost">Annuler</button>
              <button onClick={addItem} className="btn btn-primary"
                style={{ opacity: isValid() ? 1 : .4, cursor: isValid() ? 'pointer' : 'not-allowed' }}
                disabled={!isValid()}>
                <Icon name="plus" size={14} /> Ajouter
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

window.PageGalerie = PageGalerie;
