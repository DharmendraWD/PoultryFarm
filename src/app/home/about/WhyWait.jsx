import Link from 'next/link';
import styles from '../../../css/whyWait.module.css';
import chickenDrawing from "../../../../public/chickenDrawing.png";
import Image from 'next/image';



const cards = [
  {
    title: 'Cheeky Farm Market',
    time: '9.00 am - 04.00 pm',
    days: 'Monday - Wednesday',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    href: '/farm-market',
  },
  {
    title: 'Poult Open Dinner',
    time: '6.00 pm - 08.00 pm',
    days: 'Thursday - Friday',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    href: '/open-dinner',
  },
  {
    title: 'Weekend Farm Tour',
    time: '8.00 am - 03.00 pm',
    days: 'Saturday - Sunday',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    href: '/farm-tour',
  },
];

// Calendar SVG icon
function CalendarIcon() {
  return (
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={styles['icon-cal']}>
      <rect x="1" y="3" width="14" height="12" rx="2" ry="2" fill="none" stroke="#666" strokeWidth="1.4" />
      <line x1="5" y1="1" x2="5" y2="5" stroke="#666" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="11" y1="1" x2="11" y2="5" stroke="#666" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="1" y1="7" x2="15" y2="7" stroke="#666" strokeWidth="1.2" />
    </svg>
  );
}

export default function WhyWait() {
  return (
<section className={`${styles.hero} ${styles.section} relative overflow-hidden`}>

  {/* BACKGROUND LAYER ONLY */}
  <div
  data-aos="fade-rigth"
    className="absolute inset-0 opacity-[40%] pointer-events-none"
    style={{
      backgroundImage: `url(${chickenDrawing.src})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right 20px center",
      backgroundSize: "contain",
    }}
  />

  {/* CONTENT (NOT AFFECTED) */}
  <div className="relative z-10">
    
    {/* Header */}
    <div className={styles.header} data-aos="fade-left">
      <p className={styles.header__eyebrow}>Come To See Our Farm</p>
      <h2 className={styles.header__title}>Why Wait?</h2>
      <p className={styles.header__desc}>
       Come and see our farm in person and get to know our products.
      </p>
    </div>

    {/* Cards */}
    <div className={styles.cards}>
      {cards.map((card) => (
        <div key={card.title} className={styles.card} data-aos="fade-up">
          <h3 className={styles.card__title}>{card.title}</h3>

          <div className={styles.card__meta}>
            <div className={styles['card__meta-row']}>
              <span className={styles.dot} />
              <span>{card.time}</span>
            </div>

            <div className={styles['card__meta-row']}>
              <CalendarIcon />
              <span>{card.days}</span>
            </div>
          </div>

          <p className={styles.card__body} data-aos="fade-up">{card.body}</p>

          <Link href={card.href} className={styles.card__link}>
            → Learn More
          </Link>
        </div>
      ))}
    </div>

  </div>
</section>
  );
}