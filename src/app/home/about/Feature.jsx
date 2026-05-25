import { IoFishSharp } from 'react-icons/io5';
import styles from '../../../css/feature.module.css';
import { LuTreePalm } from 'react-icons/lu';
import { MdHealthAndSafety, MdOutlineSentimentVerySatisfied } from 'react-icons/md';
import { SiThunderbird } from 'react-icons/si';


const features = [
  {
    icon: <SiThunderbird style={{ color: 'var(--color-primary)' }}/>,
    title: 'Healthy Chicken',
    body: 'We are committed to providing healthy chicken.',
    active: false,
  },
  {
    icon: <IoFishSharp style={{ color: 'var(--color-primary)' }}/>,
    title: 'Hygienic Fish Farming',
    body: 'We are committed to providing healthy fish.',
    active: false,
  },
  {
    icon: <LuTreePalm style={{ color: 'var(--color-primary)' }}/>,
    title: 'Organic Agriculture',
    body: 'We are committed to providing healthy, organic Vegetables.',
    active: false,
  },
  {
    icon: <MdHealthAndSafety style={{ color: 'var(--iconOnPrimaryBgClr)' }}/>,
    title: 'We Care About Your Health',
    body: 'We are committed to providing healthy, organic Vegetables.',
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