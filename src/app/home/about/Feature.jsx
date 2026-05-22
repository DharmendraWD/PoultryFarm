import styles from '../../../css/feature.module.css';

// ── SVG Icons ──────────────────────────────────────────────

function ChickenIcon() {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      {/* Body */}
      <ellipse cx="28" cy="42" rx="18" ry="14" />
      {/* Head */}
      <circle cx="46" cy="24" r="10" />
      {/* Comb */}
      <path d="M41 15 Q43 9 45 14 Q47 8 49 13 Q51 7 52 13" strokeLinecap="round" fill="currentColor" />
      {/* Beak */}
      <path d="M55 24 L62 22 L55 28 Z" />
      {/* Eye */}
      <circle cx="49" cy="22" r="2" fill="white" />
      <circle cx="50" cy="22" r="1" fill="#333" />
      {/* Wing */}
      <path d="M16 36 Q10 28 16 20 Q20 30 26 36" opacity="0.4" />
      {/* Tail */}
      <path d="M10 38 Q2 30 4 20 Q10 28 12 36" opacity="0.5" />
      {/* Legs */}
      <line x1="24" y1="54" x2="20" y2="64" strokeWidth="3" strokeLinecap="round" />
      <line x1="32" y1="54" x2="36" y2="64" strokeWidth="3" strokeLinecap="round" />
      {/* Feet */}
      <path d="M20 64 L14 67 M20 64 L20 68 M20 64 L26 67" strokeLinecap="round" strokeWidth="2" />
      <path d="M36 64 L30 67 M36 64 L36 68 M36 64 L42 67" strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
}

function CoopIcon() {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      {/* Roof */}
      <polygon points="4,28 32,6 60,28" />
      {/* Walls */}
      <rect x="8" y="28" width="48" height="30" />
      {/* Door arch */}
      <path d="M24 58 L24 44 Q32 36 40 44 L40 58" fill="none" strokeWidth="2" stroke="white" />
      {/* Window */}
      <rect x="10" y="32" width="10" height="10" fill="none" stroke="white" strokeWidth="1.5" />
      <line x1="15" y1="32" x2="15" y2="42" stroke="white" strokeWidth="1" />
      <line x1="10" y1="37" x2="20" y2="37" stroke="white" strokeWidth="1" />
      {/* Chimney */}
      <rect x="42" y="10" width="8" height="14" />
    </svg>
  );
}

function EggsIcon() {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      {/* Basket base */}
      <path d="M8 40 Q8 58 32 58 Q56 58 56 40 Z" />
      {/* Basket weave lines */}
      <line x1="8" y1="48" x2="56" y2="48" stroke="white" strokeWidth="1.2" />
      <line x1="20" y1="40" x2="16" y2="58" stroke="white" strokeWidth="1" />
      <line x1="32" y1="40" x2="32" y2="58" stroke="white" strokeWidth="1" />
      <line x1="44" y1="40" x2="48" y2="58" stroke="white" strokeWidth="1" />
      {/* Basket handle */}
      <path d="M18 40 Q18 28 32 28 Q46 28 46 40" fill="none" strokeWidth="3" strokeLinecap="round" />
      {/* Eggs */}
      <ellipse cx="22" cy="36" rx="7" ry="9" fill="white" stroke="currentColor" strokeWidth="1.5" />
      <ellipse cx="34" cy="34" rx="7" ry="9" fill="white" stroke="currentColor" strokeWidth="1.5" />
      <ellipse cx="46" cy="36" rx="6" ry="8" fill="white" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function FodderIcon() {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      {/* Bag body */}
      <rect x="12" y="20" width="40" height="38" rx="4" ry="4" />
      {/* Bag top tie */}
      <path d="M20 20 Q32 12 44 20" fill="none" strokeWidth="3" strokeLinecap="round" />
      {/* Leaf/grain icon */}
      <path d="M32 32 Q24 28 22 36 Q28 40 32 36 Q36 40 42 36 Q40 28 32 32Z" fill="white" />
      {/* Stem */}
      <line x1="32" y1="36" x2="32" y2="48" stroke="white" strokeWidth="2" strokeLinecap="round" />
      {/* Ground dots = grains */}
      <circle cx="26" cy="50" r="2" fill="white" />
      <circle cx="32" cy="52" r="2" fill="white" />
      <circle cx="38" cy="50" r="2" fill="white" />
    </svg>
  );
}

// ── Feature data ──────────────────────────────────────────

const features = [
  {
    icon: <ChickenIcon />,
    title: 'Healthy Chicken',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    active: false,
  },
  {
    icon: <CoopIcon />,
    title: 'Hygienic Coop',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    active: false,
  },
  {
    icon: <EggsIcon />,
    title: 'Fresh Eggs',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    active: false,
  },
  {
    icon: <FodderIcon />,
    title: 'Organic Fodder',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    active: true,   // green highlighted card
  },
];

// ── Component ─────────────────────────────────────────────

export default function Features() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {features.map((f) => (
          <div
            key={f.title}
            className={`${styles.card} ${f.active ? styles['card--active'] : ''}`}
            data-aos="fade-up"
          >
            <div className={styles.card__icon}>{f.icon}</div>
            <h3 className={styles.card__title}>{f.title}</h3>
            <p className={styles.card__body}>{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}