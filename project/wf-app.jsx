// wf-app.jsx — Main app: tweaks + design canvas with all variations

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "stone",
  "font": "Patrick Hand",
  "sketchy": "low",
  "density": "regular",
  "clean": false
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const palette = BEIGE_PALETTES[t.palette] || BEIGE_PALETTES.stone;
  const pageProps = {
    palette, font: t.font, sketchy: t.sketchy, density: t.density, clean: t.clean,
  };

  // Standard frame sizes
  const W_PUB = 760, H_PUB = 560;
  const W_ADMIN = 900, H_ADMIN = 560;
  const W_FORM = 720, H_FORM = 560;

  return (
    <>
      <DesignCanvas>
        <DCSection id="palettes" title="🎨 Palettes de couleurs" subtitle="14 directions à base de beige — chaque carte montre fond, surfaces, accent et encre">
          {Object.entries(BEIGE_PALETTES).map(([k, pal]) => (
            <DCArtboard key={k} id={`pal-${k}`} label={pal.label} width={300} height={360}>
              <PaletteSwatch palKey={k} pal={pal} font={t.font} />
            </DCArtboard>
          ))}
        </DCSection>

        <DCSection id="home" title="① Page d'accueil publique" subtitle="Premier contact — pose le ton humain & rassurant">
          <DCArtboard id="home-1" label="A · Hero photo + 2 services" width={W_PUB} height={H_PUB}><HomeV1 {...pageProps} /></DCArtboard>
          <DCArtboard id="home-2" label="① Page d'accueil publique" width={W_PUB} height={H_PUB}><HomeV2 {...pageProps} /></DCArtboard>
          <DCArtboard id="home-3" label="C · Sélecteur situation" width={W_PUB} height={H_PUB}><HomeV3 {...pageProps} /></DCArtboard>
          <DCArtboard id="home-4" label="D · Récit / sections" width={W_PUB} height={H_PUB}><HomeV4 {...pageProps} /></DCArtboard>
        </DCSection>

        <DCSection id="service" title="② Page service (débarras / nettoyage)" subtitle="Détails d'une prestation — convaincre + rassurer">
          <DCArtboard id="srv-1" label="A · Classique + tarif" width={W_PUB} height={H_PUB}><ServiceV1 {...pageProps} /></DCArtboard>
          <DCArtboard id="srv-2" label="B · Calculatrice de prix" width={W_PUB} height={H_PUB}><ServiceV2 {...pageProps} /></DCArtboard>
          <DCArtboard id="srv-3" label="C · Cas concrets / récit" width={W_PUB} height={H_PUB}><ServiceV3 {...pageProps} /></DCArtboard>
          <DCArtboard id="srv-4" label="D · Comparatif débarras vs nettoyage" width={W_PUB} height={H_PUB}><ServiceV4 {...pageProps} /></DCArtboard>
        </DCSection>

        <DCSection id="devis" title="③ Formulaire de devis multi-étapes" subtitle="Conversion — abaisser la friction sans perdre l'info">
          <DCArtboard id="dv-1" label="A · Linéaire 5 étapes" width={W_FORM} height={H_FORM}><DevisV1 {...pageProps} /></DCArtboard>
          <DCArtboard id="dv-2" label="B · Conversationnel" width={W_FORM} height={H_FORM}><DevisV2 {...pageProps} /></DCArtboard>
          <DCArtboard id="dv-3" label="C · Sidebar + récap live" width={W_FORM} height={H_FORM}><DevisV3 {...pageProps} /></DCArtboard>
          <DCArtboard id="dv-4" label="D · Express 3 questions" width={W_FORM} height={H_FORM}><DevisV4 {...pageProps} /></DCArtboard>
        </DCSection>

        <DCSection id="dash" title="④ Dashboard admin (vue d'ensemble)" subtitle="Back-office — autonomie totale pour le gérant">
          <DCArtboard id="ds-1" label="A · KPIs + 2 colonnes" width={W_ADMIN} height={H_ADMIN}><DashV1 {...pageProps} /></DCArtboard>
          <DCArtboard id="ds-2" label="B · Inbox-first" width={W_ADMIN} height={H_ADMIN}><DashV2 {...pageProps} /></DCArtboard>
          <DCArtboard id="ds-3" label="C · Pipeline kanban" width={W_ADMIN} height={H_ADMIN}><DashV3 {...pageProps} /></DCArtboard>
          <DCArtboard id="ds-4" label="D · CMS-first (contenu site)" width={W_ADMIN} height={H_ADMIN}><DashV4 {...pageProps} /></DCArtboard>
        </DCSection>

        <DCSection id="mission" title="⑤ Détail d'une mission" subtitle="Tout savoir sur un chantier en cours">
          <DCArtboard id="ms-1" label="A · Sections classiques" width={W_ADMIN} height={H_ADMIN}><MissionV1 {...pageProps} /></DCArtboard>
          <DCArtboard id="ms-2" label="B · Timeline-first" width={W_ADMIN} height={H_ADMIN}><MissionV2 {...pageProps} /></DCArtboard>
          <DCArtboard id="ms-3" label="C · Onglets" width={W_ADMIN} height={H_ADMIN}><MissionV3 {...pageProps} /></DCArtboard>
          <DCArtboard id="ms-4" label="D · Carte + sidebar" width={W_ADMIN} height={H_ADMIN}><MissionV4 {...pageProps} /></DCArtboard>
        </DCSection>

        <DCSection id="planning" title="⑥ Calendrier de planning" subtitle="Organiser les équipes et les chantiers">
          <DCArtboard id="pl-1" label="A · Vue semaine grille" width={W_ADMIN} height={H_ADMIN}><PlanningV1 {...pageProps} /></DCArtboard>
          <DCArtboard id="pl-2" label="B · Liste agenda" width={W_ADMIN} height={H_ADMIN}><PlanningV2 {...pageProps} /></DCArtboard>
          <DCArtboard id="pl-3" label="C · Vue mois" width={W_ADMIN} height={H_ADMIN}><PlanningV3 {...pageProps} /></DCArtboard>
          <DCArtboard id="pl-4" label="D · Par équipe (gantt)" width={W_ADMIN} height={H_ADMIN}><PlanningV4 {...pageProps} /></DCArtboard>
        </DCSection>
      </DesignCanvas>

      <TweaksPanel title="Tweaks · Wireframes Nana">
        <TweakSection label="Teinte beige" />
        <TweakSelect
          label="Palette"
          value={t.palette}
          options={Object.entries(BEIGE_PALETTES).map(([k,p]) => ({ value:k, label:p.label }))}
          onChange={(v) => setTweak('palette', v)}
        />

        <TweakSection label="Typographie" />
        <TweakToggle
          label="Police nette (sans-serif)"
          value={t.clean}
          onChange={(v) => setTweak('clean', v)}
        />
        <TweakSelect
          label="Police manuscrite"
          value={t.font}
          options={[
            { value:'Patrick Hand', label:'Patrick Hand (lisible)' },
            { value:'Caveat',       label:'Caveat (manuscrit)' },
            { value:'Kalam',        label:'Kalam (marker)' },
          ]}
          onChange={(v) => setTweak('font', v)}
        />

        <TweakSection label="Aspect" />
        <TweakRadio
          label="Niveau sketchy"
          value={t.sketchy}
          options={[
            { value:'low',    label:'Net' },
            { value:'medium', label:'Croqué' },
            { value:'high',   label:'Très brouillon' },
          ]}
          onChange={(v) => setTweak('sketchy', v)}
        />
        <TweakRadio
          label="Densité"
          value={t.density}
          options={[
            { value:'compact', label:'Compact' },
            { value:'regular', label:'Régulier' },
            { value:'airy',    label:'Aéré' },
          ]}
          onChange={(v) => setTweak('density', v)}
        />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
