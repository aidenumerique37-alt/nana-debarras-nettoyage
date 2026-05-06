// page-mediatheque.jsx — médiathèque complète

const INITIAL_MEDIA = [
  { id: 1, name: 'Appartement-avant-niort.jpg',   src: 'https://picsum.photos/seed/nana1/800/600', cat: 'missions',     addedAt: '28 avr. 2026' },
  { id: 2, name: 'Salon-avant-visite.jpg',         src: 'https://picsum.photos/seed/nana2/800/600', cat: 'missions',     addedAt: '28 avr. 2026' },
  { id: 3, name: 'Cuisine-avant-visite.jpg',       src: 'https://picsum.photos/seed/nana3/800/600', cat: 'missions',     addedAt: '28 avr. 2026' },
  { id: 4, name: 'Cave-avant-visite.jpg',          src: 'https://picsum.photos/seed/nana4/800/600', cat: 'missions',     addedAt: '28 avr. 2026' },
  { id: 5, name: 'Salon-apres-debarras.jpg',       src: 'https://picsum.photos/seed/nana5/800/600', cat: 'missions',     addedAt: '5 mai 2026'   },
  { id: 6, name: 'Cuisine-apres-debarras.jpg',     src: 'https://picsum.photos/seed/nana9/800/600', cat: 'missions',     addedAt: '5 mai 2026'   },
  { id: 7, name: 'Equipe-nana-terrain.jpg',        src: 'https://picsum.photos/seed/nana6/800/600', cat: 'presentation', addedAt: '20 fév. 2026' },
  { id: 8, name: 'Vehicule-nana.jpg',              src: 'https://picsum.photos/seed/nana8/800/600', cat: 'presentation', addedAt: '15 jan. 2026' },
  { id: 9, name: 'Logo-Nana-fond-clair.png',       src: 'https://picsum.photos/seed/nana7/400/400', cat: 'branding',     addedAt: '15 jan. 2026' },
];

const CATS_MEDIA = [
  { id: 'all',          label: 'Tout'          },
  { id: 'missions',     label: 'Missions'      },
  { id: 'presentation', label: 'Présentation'  },
  { id: 'branding',     label: 'Logo & charte' },
];

// Sub-component: one thumbnail with its own image-error state + hover
const MediaThumb = ({ m, idx, onPreview, onDelete }) => {
  const [err,     setErr]     = React.useState(false);
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      style={{ position: 'relative', borderRadius: 'var(--r-md)', overflow: 'hidden', background: 'var(--beige-100)', border: '1px solid var(--border)', aspectRatio: '4/3', cursor: 'pointer' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onPreview(idx)}
    >
      {/* Image or fallback */}
      {!err ? (
        <img
          src={m.src}
          alt={m.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          onError={() => setErr(true)}
        />
      ) : (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8, color: 'var(--text-muted)', padding: 12 }}>
          <Icon name="camera" size={28} color="var(--ink-300)" />
          <span style={{ fontSize: 11, textAlign: 'center', wordBreak: 'break-all', lineHeight: 1.4 }}>{m.name}</span>
        </div>
      )}

      {/* Hover overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(0,0,0,.46)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
        opacity: hovered ? 1 : 0,
        transition: 'opacity .16s',
      }}>
        <button
          style={{ width: 38, height: 38, borderRadius: '50%', background: 'rgba(255,255,255,.92)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          onClick={e => { e.stopPropagation(); onPreview(idx); }}
          title="Prévisualiser"
        >
          <Icon name="search" size={16} />
        </button>
        <button
          style={{ width: 38, height: 38, borderRadius: '50%', background: 'rgba(255,255,255,.92)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          onClick={e => { e.stopPropagation(); onDelete(m.id); }}
          title="Supprimer"
        >
          <Icon name="close" size={16} color="var(--danger)" />
        </button>
      </div>

      {/* Name strip */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '20px 10px 6px',
        background: 'linear-gradient(transparent, rgba(0,0,0,.65))',
        color: '#fff', fontSize: 11,
        whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
        pointerEvents: 'none',
      }}>
        {m.name}
      </div>
    </div>
  );
};

// Lightbox
const Lightbox = ({ items, index, onClose, onPrev, onNext, onDelete }) => {
  const item = items[index];
  const [err, setErr] = React.useState(false);

  React.useEffect(() => { setErr(false); }, [index]);

  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape')      onClose();
      if (e.key === 'ArrowLeft')   onPrev();
      if (e.key === 'ArrowRight')  onNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  if (!item) return null;

  return (
    <div
      style={{ position: 'fixed', inset: 0, zIndex: 300, background: 'rgba(0,0,0,.93)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      onClick={onClose}
    >
      {/* Controls top-right */}
      <div style={{ position: 'absolute', top: 20, right: 20, display: 'flex', gap: 8 }} onClick={e => e.stopPropagation()}>
        <button
          style={{ padding: '8px 16px', borderRadius: 999, background: 'rgba(220,38,38,.85)', border: 'none', cursor: 'pointer', color: '#fff', fontSize: 13, display: 'flex', alignItems: 'center', gap: 6 }}
          onClick={() => onDelete(item.id)}
        >
          <Icon name="close" size={14} color="#fff" /> Supprimer
        </button>
        <button
          style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,.12)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          onClick={onClose}
        >
          <Icon name="close" size={20} color="#fff" />
        </button>
      </div>

      {/* Prev */}
      {items.length > 1 && (
        <button
          style={{ position: 'absolute', left: 20, top: '50%', transform: 'translateY(-50%)', width: 50, height: 50, borderRadius: '50%', background: 'rgba(255,255,255,.12)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          onClick={e => { e.stopPropagation(); onPrev(); }}
        >
          <Icon name="chevron" size={26} color="#fff" style={{ transform: 'rotate(180deg)' }} />
        </button>
      )}

      {/* Image */}
      <div onClick={e => e.stopPropagation()} style={{ maxWidth: '80vw', maxHeight: '82vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {!err ? (
          <img
            src={item.src}
            alt={item.name}
            style={{ maxWidth: '80vw', maxHeight: '80vh', objectFit: 'contain', borderRadius: 8, boxShadow: '0 8px 40px rgba(0,0,0,.6)' }}
            onError={() => setErr(true)}
          />
        ) : (
          <div style={{ width: 320, height: 240, background: 'rgba(255,255,255,.06)', borderRadius: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12, color: 'rgba(255,255,255,.4)' }}>
            <Icon name="camera" size={40} color="rgba(255,255,255,.3)" />
            <span style={{ fontSize: 13, textAlign: 'center', padding: '0 24px' }}>{item.name}</span>
            <span style={{ fontSize: 12 }}>Impossible de charger l'image</span>
          </div>
        )}
      </div>

      {/* Next */}
      {items.length > 1 && (
        <button
          style={{ position: 'absolute', right: 20, top: '50%', transform: 'translateY(-50%)', width: 50, height: 50, borderRadius: '50%', background: 'rgba(255,255,255,.12)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          onClick={e => { e.stopPropagation(); onNext(); }}
        >
          <Icon name="chevron" size={26} color="#fff" />
        </button>
      )}

      {/* Caption */}
      <div style={{ position: 'absolute', bottom: 24, left: '50%', transform: 'translateX(-50%)', textAlign: 'center', pointerEvents: 'none' }}>
        <div style={{ color: '#fff', fontSize: 14, fontWeight: 500 }}>{item.name}</div>
        <div style={{ color: 'rgba(255,255,255,.45)', fontSize: 12, marginTop: 4 }}>
          {index + 1} / {items.length}{item.addedAt ? ` · ${item.addedAt}` : ''} · ← → pour naviguer · Échap pour fermer
        </div>
      </div>
    </div>
  );
};

const PageMediatheque = () => {
  const [media,    setMedia]    = React.useState(INITIAL_MEDIA.map(m => ({ ...m })));
  const [cat,      setCat]      = React.useState('all');
  const [q,        setQ]        = React.useState('');
  const [lightbox, setLightbox] = React.useState(null);
  const [showUrl,  setShowUrl]  = React.useState(false);
  const [urlInput, setUrlInput] = React.useState('');
  const [urlName,  setUrlName]  = React.useState('');
  const [dragging, setDragging] = React.useState(false);
  const fileRef = React.useRef();
  const nextId  = React.useRef(100);

  const filtered = media.filter(m => {
    if (cat !== 'all' && m.cat !== cat) return false;
    if (q && !m.name.toLowerCase().includes(q.toLowerCase())) return false;
    return true;
  });

  /* ── File upload via FileReader (base64 — toujours lisible) ── */
  const addFromFiles = (files) => {
    [...files].forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setMedia(prev => [...prev, {
          id:      nextId.current++,
          name:    file.name,
          src:     e.target.result,
          cat:     'missions',
          addedAt: 'À l\'instant',
        }]);
      };
      reader.readAsDataURL(file);
    });
  };

  /* ── Add from URL ── */
  const addFromUrl = () => {
    const url = urlInput.trim();
    if (!url) return;
    setMedia(prev => [...prev, {
      id:      nextId.current++,
      name:    urlName.trim() || url.split('/').pop().split('?')[0] || 'image.jpg',
      src:     url,
      cat:     'missions',
      addedAt: 'À l\'instant',
    }]);
    setUrlInput('');
    setUrlName('');
    setShowUrl(false);
  };

  /* ── Delete ── */
  const remove = (id) => {
    setMedia(prev => prev.filter(m => m.id !== id));
    setLightbox(null);
  };

  /* ── Drag & drop ── */
  const onDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    if (e.dataTransfer.files.length) addFromFiles(e.dataTransfer.files);
  };

  /* ── Lightbox helpers ── */
  const lbPrev = () => setLightbox(i => (i - 1 + filtered.length) % filtered.length);
  const lbNext = () => setLightbox(i => (i + 1) % filtered.length);

  const counts = {
    all:          media.length,
    missions:     media.filter(m => m.cat === 'missions').length,
    presentation: media.filter(m => m.cat === 'presentation').length,
    branding:     media.filter(m => m.cat === 'branding').length,
  };

  return (
    <div className="admin">
      <AdminSidebar active="mediatheque" />
      <div className="main">
        <AdminTopbar title="Médiathèque" actions={
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="btn btn-ghost" style={{ padding: '8px 16px', fontSize: 14 }}
                    onClick={() => { setShowUrl(v => !v); }}>
              <Icon name="plus" size={15} /> Depuis un lien
            </button>
            <button className="btn btn-primary" style={{ padding: '8px 16px', fontSize: 14 }}
                    onClick={() => fileRef.current.click()}>
              <Icon name="camera" size={15} /> Importer des photos
            </button>
            <input ref={fileRef} type="file" accept="image/*,video/*" multiple style={{ display: 'none' }}
                   onChange={e => addFromFiles(e.target.files)} />
          </div>
        } />

        <div className="main-content">

          {/* ── URL bar ── */}
          {showUrl && (
            <div style={{ marginBottom: 20, padding: 16, background: 'var(--beige-50)', border: '1px solid var(--border)', borderRadius: 'var(--r-md)', display: 'flex', gap: 10, alignItems: 'flex-end', flexWrap: 'wrap' }}>
              <div className="field" style={{ flex: '2 1 260px', margin: 0 }}>
                <label>URL de l'image</label>
                <input className="input" placeholder="https://exemple.com/photo.jpg"
                       value={urlInput} onChange={e => setUrlInput(e.target.value)}
                       onKeyDown={e => e.key === 'Enter' && addFromUrl()} autoFocus />
              </div>
              <div className="field" style={{ flex: '1 1 160px', margin: 0 }}>
                <label>Nom <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>(optionnel)</span></label>
                <input className="input" placeholder="photo-salon.jpg"
                       value={urlName} onChange={e => setUrlName(e.target.value)}
                       onKeyDown={e => e.key === 'Enter' && addFromUrl()} />
              </div>
              <button className="btn btn-primary" onClick={addFromUrl} style={{ padding: '10px 20px', flexShrink: 0 }}>Ajouter</button>
              <button className="btn btn-ghost" onClick={() => { setShowUrl(false); setUrlInput(''); setUrlName(''); }} style={{ padding: '10px 14px', flexShrink: 0 }}>Annuler</button>
            </div>
          )}

          {/* ── Toolbar ── */}
          <div style={{ display: 'flex', gap: 12, marginBottom: 20, alignItems: 'center', flexWrap: 'wrap' }}>
            <div className="search" style={{ flex: 1, maxWidth: 280 }}>
              <Icon name="search" size={16} />
              <input placeholder="Rechercher un fichier…" value={q} onChange={e => setQ(e.target.value)} />
            </div>
            <div style={{ display: 'flex', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--r-pill)', padding: 3 }}>
              {CATS_MEDIA.map(c => (
                <button key={c.id} onClick={() => setCat(c.id)} style={{
                  padding: '5px 13px', borderRadius: 999, border: 'none',
                  background: cat === c.id ? 'var(--primary)' : 'transparent',
                  color:      cat === c.id ? 'var(--on-primary)' : 'var(--text-muted)',
                  fontSize: 13, fontWeight: 500, cursor: 'pointer',
                }}>
                  {c.label}
                  <span style={{ opacity: .6, marginLeft: 5, fontSize: 11 }}>{counts[c.id]}</span>
                </button>
              ))}
            </div>
            <span style={{ fontSize: 13, color: 'var(--text-muted)', marginLeft: 'auto' }}>
              {filtered.length} fichier{filtered.length > 1 ? 's' : ''}
            </span>
          </div>

          {/* ── Drop zone ── */}
          <div
            onDragOver={e => { e.preventDefault(); setDragging(true); }}
            onDragLeave={e => { if (!e.currentTarget.contains(e.relatedTarget)) setDragging(false); }}
            onDrop={onDrop}
            onClick={() => fileRef.current.click()}
            style={{
              border: `2px dashed ${dragging ? 'var(--primary)' : 'var(--border)'}`,
              borderRadius: 'var(--r-lg)',
              padding: '22px 32px',
              marginBottom: 24,
              display: 'flex', alignItems: 'center', gap: 18,
              background: dragging ? 'var(--violet-50)' : 'transparent',
              cursor: 'pointer', transition: 'all .15s',
            }}>
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: dragging ? 'var(--violet-100)' : 'var(--beige-200)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'background .15s' }}>
              <Icon name="camera" size={22} color="var(--primary)" />
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: 14, color: dragging ? 'var(--primary)' : 'var(--text)', marginBottom: 3 }}>
                {dragging ? 'Relâcher pour importer' : 'Glisser-déposer vos photos ici'}
              </div>
              <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>
                ou cliquer pour parcourir · JPG, PNG, WEBP, GIF
              </div>
            </div>
          </div>

          {/* ── Grid ── */}
          {filtered.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))', gap: 12 }}>
              {filtered.map((m, idx) => (
                <MediaThumb
                  key={m.id}
                  m={m}
                  idx={idx}
                  onPreview={setLightbox}
                  onDelete={remove}
                />
              ))}
            </div>
          ) : (
            <div style={{ padding: '64px 24px', textAlign: 'center', color: 'var(--text-muted)' }}>
              <Icon name="camera" size={44} color="var(--ink-300)" />
              <p style={{ marginTop: 14, fontSize: 15 }}>Aucune photo dans cette catégorie.</p>
              <button className="btn btn-soft" style={{ marginTop: 16 }} onClick={() => fileRef.current.click()}>
                Importer des photos
              </button>
            </div>
          )}

        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightbox !== null && (
        <Lightbox
          items={filtered}
          index={lightbox}
          onClose={() => setLightbox(null)}
          onPrev={lbPrev}
          onNext={lbNext}
          onDelete={remove}
        />
      )}
    </div>
  );
};

window.PageMediatheque = PageMediatheque;
