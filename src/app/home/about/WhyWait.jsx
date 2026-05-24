import Link from 'next/link';
import styles from '../../../css/whyWait.module.css';
import chickenDrawing from "../../../../public/chickenDrawing.png";
import Image from 'next/image';
import { IoShieldCheckmark } from 'react-icons/io5';



const cards = [
  {
    title: 'Our Farm Open and Close Time',
    time: '7.00 am - 7.00 pm',
    days: 'Sunday - Saturday',
    body: 'We Have 24/7 Open. You can visit our farm at any time and get to know our products.',
    href: '',
  },
  {
    title: 'Fresh Organic Produce',
    time: '7.00 pm - 7.00 pm',
    days: 'Sunday - Saturday',
    body: 'We provide fresh, naturally grown vegetables, fruits, and dairy products directly from our farm to ensure quality and healthy living.',
    href: '',
  },
  {
    title: 'Farm Visit & Activities',
    time: '7.00 am - 7.00 pm',
    days: 'Sunday - Saturday',
    body: 'Enjoy guided farm tours, animal feeding, and outdoor activities designed for families, students, and nature lovers.',
    href: '',
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
           <IoShieldCheckmark className='text-[24px]' />

          </Link>
        </div>
      ))}
    </div>

  </div>
</section>
  );
}