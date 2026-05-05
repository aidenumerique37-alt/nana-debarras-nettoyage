// page-stats.jsx — statistiques & pilotage

const MONTHS_DATA = [
  { label: 'Jan', ca: 1200, n: 2 },
  { label: 'Fév', ca: 3400, n: 5 },
  { label: 'Mar', ca: 2100, n: 3 },
  { label: 'Avr', ca: 2850, n: 4, current: true },
];
const MAX_CA = Math.max(...MONTHS_DATA.map(m => m.ca));

const SERVICES_REPARTITION = [
  { label: 'Débarras succession',    n: 5, pct: 42, color: 'var(--primary)'    },
  { label: 'Prestations pro',        n: 3, pct: 25, color: 'var(--violet-400)' },
  { label: 'Nettoyage sinistre',     n: 2, pct: 17, color: 'var(--violet-300)' },
  { label: 'Logement encombré',      n: 1, pct: 9,  color: 'var(--beige-400)'  },
  { label: 'Visite devis',           n: 1, pct: 7,  color: 'var(--beige-300)'  },
];

const PageStats = () => {
  const [period, setPeriod] = React.useState(0);
  const periods = ['Ce mois', '3 mois', '12 mois', 'Tout'];

  return (
    <div className="admin">
      <AdminSidebar active="reports" />
      <div className="main">
        <AdminTopbar title="Statistiques" actions={
          <button className="btn btn-ghost" style={{ padding: '8px 16px', fontSize: 14 }}>
            <Icon name="download" size={14} /> Exporter
          </button>
        } />

        <div className="main-content">

          {/* période */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 20, fontWeight: 500 }}>Avril 2026</h2>
            <div style={{ display: 'flex', gap: 4 }}>
              {periods.map((l, i) => (
                <button key={i} onClick={() => setPeriod(i)} style={{
                  padding: '6px 14px', borderRadius: 999,
                  border: '1px solid var(--border)',
                  background: period === i ? 'var(--primary)' : 'transparent',
                  color:      period === i ? 'var(--on-primary)' : 'var(--text-muted)',
                  fontSize: 13, cursor: 'pointer', fontFamily: 'inherit',
                }}>{l}</button>
              ))}
            </div>
          </div>

          {/* KPI row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 28 }}>
            {[
              { label: "Chiffre d'affaires", val: '2 850 €', sub: '+36 % vs mars',          pos: true  },
              { label: 'Interventions',       val: '4',       sub: '3 clôturées · 1 planifiée', pos: null  },
              { label: "Taux d'acceptation",  val: '75 %',    sub: '3 devis sur 4 acceptés', pos: true  },
              { label: 'Note moyenne',        val: '4,9 / 5', sub: '6 avis clients',         pos: true  },
            ].map((k, i) => (
              <div key={i} className="card" style={{ padding: '20px 22px' }}>
                <div className="eyebrow" style={{ marginBottom: 10 }}>{k.label}</div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 32, lineHeight: 1, color: 'var(--primary)' }}>{k.val}</div>
                <div style={{ fontSize: 12.5, marginTop: 8, color: k.pos === true ? 'var(--success)' : 'var(--text-muted)' }}>{k.sub}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>

            {/* CA mensuel */}
            <div className="card">
              <h3 style={{ fontSize: 16, marginBottom: 24 }}>Chiffre d'affaires mensuel</h3>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12, height: 140 }}>
                {MONTHS_DATA.map((m, i) => (
                  <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, height: '100%', justifyContent: 'flex-end' }}>
                    <div style={{ fontSize: 12, color: m.current ? 'var(--primary)' : 'var(--text-muted)', fontWeight: m.current ? 600 : 400 }}>
                      {m.ca.toLocaleString('fr-FR')} €
                    </div>
                    <div style={{
                      width: '100%', borderRadius: 6,
                      height: `${(m.ca / MAX_CA) * 100}%`,
                      background: m.current ? 'var(--primary)' : 'var(--beige-300)',
                      minHeight: 4,
                    }} />
                    <div style={{ fontSize: 12, color: m.current ? 'var(--primary)' : 'var(--text-muted)', fontWeight: m.current ? 600 : 400 }}>{m.label}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid var(--border)', fontSize: 13, color: 'var(--text-muted)', display: 'flex', justifyContent: 'space-between' }}>
                <span>Cumul 2026</span>
                <span style={{ fontWeight: 600, color: 'var(--text)' }}>9 550 €</span>
              </div>
            </div>

            {/* Répartition */}
            <div className="card">
              <h3 style={{ fontSize: 16, marginBottom: 24 }}>Répartition par prestation</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {SERVICES_REPARTITION.map((s, i) => (
                  <div key={i}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 5 }}>
                      <span>{s.label}</span>
                      <span className="muted" style={{ fontSize: 12 }}>{s.n} · {s.pct} %</span>
                    </div>
                    <div style={{ height: 6, background: 'var(--beige-200)', borderRadius: 4, overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${s.pct}%`, background: s.color, borderRadius: 4 }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Zone */}
            <div className="card">
              <h3 style={{ fontSize: 16, marginBottom: 20 }}>Zone d'intervention · ce mois</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  { city: 'Niort',                   n: 3, km: 18 },
                  { city: 'Mauzé-sur-le-Mignon',     n: 1, km: 12 },
                  { city: 'Melle',                   n: 1, km: 30 },
                  { city: 'Frontenay-Rohan-Rohan',   n: 1, km: 8  },
                ].map((z, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 13.5, paddingBottom: 10, borderBottom: i < 3 ? '1px solid var(--border)' : 'none' }}>
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                      <Icon name="pin" size={13} color="var(--primary)" />
                      <span>{z.city}</span>
                    </div>
                    <div style={{ display: 'flex', gap: 20, color: 'var(--text-muted)', fontSize: 12.5 }}>
                      <span>{z.n} mission{z.n > 1 ? 's' : ''}</span>
                      <span>{z.km} km</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance */}
            <div className="card">
              <h3 style={{ fontSize: 16, marginBottom: 20 }}>Performance</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  { label: 'Délai de réponse moyen',  val: '1h 20',  target: '< 2h',  ok: true  },
                  { label: 'Délai visite devis',       val: '24h',    target: '< 48h', ok: true  },
                  { label: "Délai d'acceptation devis", val: '1,2 j', target: '—',     ok: null  },
                  { label: 'Taux de rappel client',    val: '100 %',  target: '100 %', ok: true  },
                ].map((p, i, arr) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 13.5, paddingBottom: 14, borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none' }}>
                    <span>{p.label}</span>
                    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                      <span style={{ color: 'var(--text-muted)', fontSize: 12 }}>obj. {p.target}</span>
                      <span style={{ fontWeight: 600, minWidth: 48, textAlign: 'right', color: p.ok === true ? 'var(--success)' : p.ok === false ? 'var(--danger)' : 'var(--text)' }}>{p.val}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

window.PageStats = PageStats;
