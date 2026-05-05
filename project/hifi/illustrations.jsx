// illustrations.jsx — soft hand-drawn-style SVG illustrations

// Hero illustration — a cozy living room scene
const HeroIllustration = ({ width = '100%' }) => (
  <svg viewBox="0 0 520 480" width={width} fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', maxWidth: '100%', height: 'auto' }}>
    {/* warm circle background */}
    <circle cx="270" cy="240" r="220" fill="#F3EFF7" />
    <circle cx="270" cy="240" r="220" fill="url(#heroGrad)" />
    <defs>
      <linearGradient id="heroGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#E5DBED" stopOpacity="0.7" />
        <stop offset="1" stopColor="#F5EFE0" stopOpacity="0.4" />
      </linearGradient>
      <linearGradient id="floor" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#DFD3B8" />
        <stop offset="1" stopColor="#C9BC9D" />
      </linearGradient>
    </defs>

    {/* floor */}
    <ellipse cx="270" cy="400" rx="240" ry="42" fill="url(#floor)" opacity="0.5" />

    {/* armchair (back) */}
    <g transform="translate(115 180)">
      <path d="M10 90 Q10 30 50 22 L150 22 Q190 30 190 90 L190 180 L10 180 Z" fill="#4F3973" />
      <path d="M10 90 Q10 30 50 22 L150 22 Q190 30 190 90 L190 180 L10 180 Z" fill="#735894" opacity="0.4" />
      {/* cushion */}
      <ellipse cx="100" cy="100" rx="64" ry="28" fill="#A089BA" opacity="0.7" />
      {/* armrests */}
      <ellipse cx="14" cy="120" rx="14" ry="40" fill="#38274F" />
      <ellipse cx="186" cy="120" rx="14" ry="40" fill="#38274F" />
      {/* feet */}
      <rect x="20" y="178" width="14" height="22" rx="4" fill="#2A2218" />
      <rect x="166" y="178" width="14" height="22" rx="4" fill="#2A2218" />
    </g>

    {/* steaming mug on side table */}
    <g transform="translate(355 285)">
      <rect x="0" y="38" width="68" height="62" rx="4" fill="#7E715A" />
      <rect x="14" y="14" width="40" height="34" rx="6" fill="#FBF7EE" stroke="#4F3973" strokeWidth="2" />
      <path d="M52 22 q10 0 10 8 q0 8 -10 8" fill="none" stroke="#4F3973" strokeWidth="2" />
      {/* steam */}
      <path d="M22 8 q-4 -8 4 -10 q-4 8 4 10" stroke="#A089BA" strokeWidth="1.6" fill="none" strokeLinecap="round" opacity="0.7" />
      <path d="M34 4 q-4 -8 4 -10 q-4 8 4 10" stroke="#A089BA" strokeWidth="1.6" fill="none" strokeLinecap="round" opacity="0.7" />
      <path d="M46 8 q-4 -8 4 -10 q-4 8 4 10" stroke="#A089BA" strokeWidth="1.6" fill="none" strokeLinecap="round" opacity="0.7" />
    </g>

    {/* plant on the right */}
    <g transform="translate(395 200)">
      {/* pot */}
      <path d="M5 70 L65 70 L58 110 L12 110 Z" fill="#A89A7C" />
      <path d="M5 70 L65 70 L62 80 L8 80 Z" fill="#7E715A" />
      {/* leaves */}
      <path d="M35 70 q0 -50 -22 -56 q-2 30 22 56z" fill="#4F7A56" />
      <path d="M35 70 q0 -55 18 -64 q6 30 -18 64z" fill="#4F7A56" opacity="0.85" />
      <path d="M35 70 q0 -38 -8 -52" stroke="#2A2218" strokeWidth="1" fill="none" opacity="0.4" />
      <path d="M35 70 q0 -42 6 -56" stroke="#2A2218" strokeWidth="1" fill="none" opacity="0.4" />
    </g>

    {/* window with sun in top-right */}
    <g transform="translate(360 70)">
      <rect width="100" height="80" rx="8" fill="#FBF7EE" stroke="#7E715A" strokeWidth="2" />
      <line x1="50" y1="0" x2="50" y2="80" stroke="#7E715A" strokeWidth="1.5" />
      <line x1="0" y1="40" x2="100" y2="40" stroke="#7E715A" strokeWidth="1.5" />
      <circle cx="76" cy="22" r="14" fill="#C68B3C" opacity="0.7" />
    </g>

    {/* small heart icon floating */}
    <g transform="translate(110 110)" opacity="0.8">
      <path d="M20 32 s-14 -8 -14 -18 a8 8 0 0114 -5 a8 8 0 0114 5 c0 10 -14 18 -14 18z" fill="#4F3973" />
    </g>

    {/* book stack */}
    <g transform="translate(95 360)">
      <rect width="80" height="14" rx="2" fill="#B0473A" />
      <rect x="6" y="-12" width="68" height="14" rx="2" fill="#4F7A56" />
      <rect x="14" y="-24" width="56" height="14" rx="2" fill="#4F3973" />
    </g>

    {/* picture frame on wall */}
    <g transform="translate(150 70)">
      <rect width="80" height="60" rx="4" fill="#FBF7EE" stroke="#7E715A" strokeWidth="2.5" />
      {/* abstract shapes inside */}
      <circle cx="30" cy="30" r="14" fill="#C9B6D9" />
      <path d="M40 50 Q55 32 70 50 L70 56 L40 56 Z" fill="#A89A7C" />
    </g>

    {/* lamp */}
    <g transform="translate(305 220)">
      <path d="M25 70 L0 0 L50 0 Z" fill="#735894" />
      <line x1="25" y1="70" x2="25" y2="120" stroke="#2A2218" strokeWidth="2" />
      <ellipse cx="25" cy="124" rx="14" ry="3" fill="#2A2218" />
    </g>
  </svg>
);

// Section illustration — gardening
const GardenIllustration = ({ width = 240 }) => (
  <svg viewBox="0 0 240 200" width={width} fill="none" style={{ display: 'block' }}>
    <circle cx="120" cy="100" r="90" fill="#F5EFE0" />
    {/* watering can */}
    <g transform="translate(50 90)">
      <rect x="0" y="20" width="60" height="50" rx="6" fill="#4F3973" />
      <path d="M60 30 L92 14 L96 22 L62 40z" fill="#4F3973" />
      <circle cx="92" cy="18" r="6" fill="#A089BA" />
      <path d="M22 20 q8 -16 22 0" stroke="#2A2218" strokeWidth="2.4" fill="none" />
    </g>
    {/* sprouts */}
    <g transform="translate(150 100)">
      <path d="M15 60 V25" stroke="#4F7A56" strokeWidth="2.5" />
      <path d="M15 25 q-12 -6 -8 -18 q12 4 8 18z" fill="#4F7A56" />
      <path d="M15 30 q12 -6 16 -18 q-12 0 -16 18z" fill="#4F7A56" />
    </g>
    {/* ground */}
    <ellipse cx="120" cy="170" rx="90" ry="14" fill="#A89A7C" />
  </svg>
);

// Service illustration variant — caring hands
const HandsIllustration = ({ width = 200 }) => (
  <svg viewBox="0 0 240 200" width={width} fill="none" style={{ display: 'block' }}>
    <circle cx="120" cy="100" r="88" fill="#E5DBED" />
    {/* two hands cradling a heart */}
    <g transform="translate(40 70)">
      <path d="M0 60 Q20 40 60 50 L60 80 Q30 92 0 80z" fill="#DFD3B8" />
      <path d="M160 60 Q140 40 100 50 L100 80 Q130 92 160 80z" fill="#DFD3B8" />
      <path d="M80 80 s-26 -10 -26 -32 a14 14 0 0126 -8 a14 14 0 0126 8 c0 22 -26 32 -26 32z" fill="#4F3973" />
    </g>
  </svg>
);

// Cleaning illustration
const CleanIllustration = ({ width = 200 }) => (
  <svg viewBox="0 0 240 200" width={width} fill="none" style={{ display: 'block' }}>
    <circle cx="120" cy="100" r="88" fill="#F3EFF7" />
    {/* sparkles */}
    <g fill="#4F3973">
      <path d="M60 60 l4 12 l12 4 l-12 4 l-4 12 l-4 -12 l-12 -4 l12 -4z" opacity="0.9" />
      <path d="M180 70 l3 9 l9 3 l-9 3 l-3 9 l-3 -9 l-9 -3 l9 -3z" opacity="0.7" />
      <path d="M170 140 l2 6 l6 2 l-6 2 l-2 6 l-2 -6 l-6 -2 l6 -2z" opacity="0.8" />
    </g>
    {/* broom */}
    <g transform="translate(95 60)">
      <line x1="20" y1="0" x2="20" y2="80" stroke="#7E715A" strokeWidth="4" strokeLinecap="round" />
      <path d="M0 80 L40 80 L48 110 L-8 110z" fill="#C68B3C" />
      <line x1="6" y1="86" x2="2" y2="108" stroke="#7E715A" strokeWidth="1" />
      <line x1="14" y1="86" x2="12" y2="108" stroke="#7E715A" strokeWidth="1" />
      <line x1="22" y1="86" x2="22" y2="108" stroke="#7E715A" strokeWidth="1" />
      <line x1="30" y1="86" x2="32" y2="108" stroke="#7E715A" strokeWidth="1" />
      <line x1="38" y1="86" x2="42" y2="108" stroke="#7E715A" strokeWidth="1" />
    </g>
  </svg>
);

// Childcare illustration
const KidsIllustration = ({ width = 200 }) => (
  <svg viewBox="0 0 240 200" width={width} fill="none" style={{ display: 'block' }}>
    <circle cx="120" cy="100" r="88" fill="#F5EFE0" />
    {/* paper boat */}
    <g transform="translate(60 80)">
      <path d="M0 40 L120 40 L100 70 L20 70z" fill="#4F3973" />
      <path d="M60 40 L60 0 L20 40z" fill="#FBF7EE" stroke="#4F3973" strokeWidth="2" />
      <path d="M62 38 L62 0 L100 38z" fill="#A089BA" />
      {/* waves */}
      <path d="M-10 80 Q10 76 30 80 T70 80 T110 80 T130 80" stroke="#735894" strokeWidth="2.5" fill="none" />
      <path d="M-10 92 Q10 88 30 92 T70 92 T110 92 T130 92" stroke="#A089BA" strokeWidth="2" fill="none" />
    </g>
  </svg>
);

// Senior care illustration
const SeniorIllustration = ({ width = 200 }) => (
  <svg viewBox="0 0 240 200" width={width} fill="none" style={{ display: 'block' }}>
    <circle cx="120" cy="100" r="88" fill="#E5DBED" />
    {/* tea cup */}
    <g transform="translate(80 70)">
      <path d="M0 20 L70 20 L66 70 Q60 84 35 84 Q10 84 4 70 Z" fill="#FBF7EE" stroke="#4F3973" strokeWidth="2.5" />
      <path d="M70 30 q14 0 14 14 q0 14 -14 14" fill="none" stroke="#4F3973" strokeWidth="2.5" />
      <ellipse cx="35" cy="20" rx="35" ry="6" fill="#735894" opacity="0.5" />
      {/* steam */}
      <path d="M16 12 q-4 -10 4 -14 q-4 10 4 14" stroke="#A089BA" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <path d="M30 8 q-4 -10 4 -14 q-4 10 4 14" stroke="#A089BA" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <path d="M44 12 q-4 -10 4 -14 q-4 10 4 14" stroke="#A089BA" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      {/* saucer */}
      <ellipse cx="35" cy="92" rx="44" ry="6" fill="#7E715A" />
    </g>
  </svg>
);

const PetIllustration = ({ width = 200 }) => (
  <svg viewBox="0 0 240 200" width={width} fill="none" style={{ display: 'block' }}>
    <circle cx="120" cy="100" r="88" fill="#F5EFE0" />
    {/* dog face */}
    <g transform="translate(70 60)">
      <ellipse cx="50" cy="50" rx="50" ry="42" fill="#C68B3C" />
      <path d="M0 30 Q-6 4 14 8 Q14 24 22 40 Z" fill="#7E715A" />
      <path d="M100 30 Q106 4 86 8 Q86 24 78 40 Z" fill="#7E715A" />
      <circle cx="34" cy="46" r="4" fill="#2A2218" />
      <circle cx="66" cy="46" r="4" fill="#2A2218" />
      <ellipse cx="50" cy="64" rx="6" ry="5" fill="#2A2218" />
      <path d="M50 70 q-6 8 -14 6" stroke="#2A2218" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M50 70 q6 8 14 6" stroke="#2A2218" strokeWidth="2" fill="none" strokeLinecap="round" />
    </g>
    {/* paw print */}
    <g transform="translate(40 130)" fill="#4F3973" opacity="0.7">
      <circle cx="6" cy="10" r="4" />
      <circle cx="18" cy="6" r="4" />
      <circle cx="30" cy="6" r="4" />
      <circle cx="42" cy="10" r="4" />
      <ellipse cx="24" cy="22" rx="12" ry="9" />
    </g>
  </svg>
);

Object.assign(window, {
  HeroIllustration, GardenIllustration, HandsIllustration,
  CleanIllustration, KidsIllustration, SeniorIllustration, PetIllustration
});
