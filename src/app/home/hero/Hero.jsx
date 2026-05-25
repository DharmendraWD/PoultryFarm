// import Link from 'next/link';
// import Image from 'next/image';
// import styles from '../../../css/hero.module.css';
// // import A_Place_For_Chicken_BG from '../../../../public/a-place-for-poultry-to-call-home.jpg';
// import A_Place_For_Chicken_BG from '../../../../public/owned/1.jpeg';
// import A_Chicken from '../../../../public/owned/transparent.webp';
// import Eggs_In_Basket from '../../../../public/owned/cuteChicken.jpg';
// import TypeWriterPara from './TypeWriterPara';
// import Typewriter from '../../../utility/Typewriter';
// import DistantPopup from '../../../utility/DistantPopup';


// export default function Hero() {





//   return (
//     <section className={styles.hero}>

//       {/* Background image */}
//       <div className={`${styles.hero__bg} fadeIn`}>
//         <Image
//           src={A_Place_For_Chicken_BG}
//           alt="Cheeky Farm"
//           fill
//           priority
//           quality={90}
//           style={{ objectFit: 'cover', objectPosition: 'center' }}
//         />
//       </div>

//       {/* Overlays */}
//       <div className={styles.hero__overlay} />
//       <div className={styles['hero__gradient-bottom']} />

//       {/* Center content */}
//       <div className={styles.hero__center} data-aos="fade-up">
//         <p className={styles.hero__eyebrow}>Western Poultry Breeding Farm Pvt. Ltd. Presents</p>

//         <h1 className={`${styles.hero__title} fadeUp`}>Welcome To Our Farm</h1>


//         <p className={styles.hero__subtitle}>
//           <span className={styles['hero__subtitle-script']}>Always Loyal</span>
//           <span className={styles['hero__subtitle-bold']}>&nbsp;And Honest</span>
//         </p>

//         {/* <Link href="/get-started" className={styles.hero__cta}>
//           Get Started
//         </Link> */}

//         {/* <DistantPopup /> */}
//       </div>

//       {/* Bottom strip */}
//       <div className={`${styles.hero__bottom}`}>

//          <div className="absolute bottom-0 left-0 w-full h-[40%] bg-[#3a3a3a] opacity-[0.3]" ></div>

//         {/* Body copy */}
//         <div className={styles['hero__bottom-text']} data-aos="fade-right">
//         <TypeWriterPara />
//           <Link href="/gallery" className={styles['hero__bottom-link']}>
//             → See Gallery
//           </Link>
//         </div>

//         {/* Rooster + eggs */}
//         <div className={styles['hero__bottom-illustration']} data-aos="fade-left">
//           {/*
//             Put your images in /public/images/
//             eggs.png  — basket of brown eggs
//             rooster.png — the black & white rooster
//           */}
//           <Image
//             src={Eggs_In_Basket}
//             alt="Freshfar_eggs"
//             width={130}
//             height={100}
//             className={styles.hero__eggs}
//             style={{ objectFit: 'contain' }}
//           />
//           <Image
//             src={A_Chicken}
//             alt="Farm rooster"
//             width={220}
//             height={260}
//             className={styles.hero__rooster}
//             style={{ objectFit: 'contain' }}
//           />
//         </div>
//       </div>

//     </section>
//   );
// }


'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  GiChicken,
  GiFishingBoat,
  GiWheat,
} from 'react-icons/gi';
import {
  FaLeaf,
  FaFish,
  FaArrowRight,
  FaPhoneAlt,
} from 'react-icons/fa';
import { MdOutlineEgg } from 'react-icons/md';
import { TbChevronDown } from 'react-icons/tb';
import styles from '../../../css/hero.module.css';
import adultChicken from '../../../../public/owned/adultHen2.png';
import fishFarm from '../../../../public/owned/fishFarm1.jpg';
import Agri from '../../../../public/owned/agri2.jpg';

/* ── Business data ──────────────────────────────────────── */
const BUSINESSES = [
  {
    id: 'poultry',
    tab: 'Poultry Farm',
    tabIcon: <GiChicken />,
    tabClass: styles['tab--poultry'],
    color: '#e8a045',
    eyebrow: 'Western Poultry Breeding Farm',
    headline: 'Farm-Fresh',
    accentLine: 'Poultry & Eggs',
    sub:
      'Premium free-range chickens and organically raised eggs — straight from our farm to your table. No antibiotics. No compromise.',
    cta: { label: 'Know More', href: '/services' },
    bgClass: styles['bgPanel--poultry'],
    /* Replace with your actual image imports */
    image: adultChicken.src,
    badges: [
      { icon: <MdOutlineEgg size={20} />, label: 'Free-Range Eggs' },
      { icon: <GiChicken size={20} />, label: 'Organic Chicken' },
    ],
  },
  {
    id: 'agri',
    tab: 'Agriculture',
    tabIcon: <GiWheat />,
    tabClass: styles['tab--agri'],
    color: '#5bbf1a',
    eyebrow: 'Organic Agriculture',
    headline: 'Naturally',
    accentLine: 'Grown Harvest',
    sub:
      'Seasonal vegetables, grains, and herbs cultivated with love and zero synthetic chemicals. Good for you. Good for the soil.',
    cta: { label: 'Explore Products', href: '/services' },
    bgClass: styles['bgPanel--agri'],
    image: Agri.src,
    badges: [
      { icon: <FaLeaf size={18} />, label: '100% Organic' },
      { icon: <GiWheat size={18} />, label: 'Seasonal Crops' },
    ],
  },
  {
    id: 'fish',
    tab: 'Fish Farming',
    tabIcon: <GiFishingBoat />,
    tabClass: styles['tab--fish'],
    color: '#1a9bbf',
    eyebrow: 'Freshwater Fish Farm',
    headline: 'Pristine',
    accentLine: 'Fish & Seafood',
    sub:
      'Sustainably farmed fresh-water fish raised in clean, oxygen-rich ponds. Omega-rich and harvested to order for peak freshness.',
    cta: { label: 'Our Services', href: '/services' },
    bgClass: styles['bgPanel--fish'],
    image: fishFarm.src,
    badges: [
      { icon: <FaFish size={18} />, label: 'Sustainably Farmed' },
      { icon: <FaLeaf size={18} />, label: 'Chemical Free' },
    ],
  },
];

const STATS = [
  { icon: '🐔', number: '50K+', label: 'Birds Raised Annually' },
  { icon: '🌿', number: '12 ac', label: 'Organic Farmland' },
  { icon: '🐟', number: '8 tons', label: 'Fish Harvested / yr' },
];

const TICKER_ITEMS = [
  'Free-Range Poultry',
  'Organic Vegetables',
  'Fresh Fish Daily',
  'Farm to Table',
  'No Antibiotics',
  'Sustainably Grown',
  'Premium Quality',
  'Chemical Free',
  'Free-Range Poultry',
  'Organic Vegetables',
  'Fresh Fish Daily',
  'Farm to Table',
  'No Antibiotics',
  'Sustainably Grown',
  'Premium Quality',
  'Chemical Free',
];

/* ── Component ───────────────────────────────────────────── */
export default function MultiHero() {
  const [active, setActive] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const switchTo = useCallback((idx) => {
    setActive(idx);
    setAnimKey((k) => k + 1);
  }, []);

  /* Auto-rotate every 6 seconds */
  useEffect(() => {
    const id = setInterval(() => {
      setActive((a) => {
        const next = (a + 1) % BUSINESSES.length;
        setAnimKey((k) => k + 1);
        return next;
      });
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const biz = BUSINESSES[active];

  return (
    <section
      className={styles.heroWrapper}
      style={{ '--active-color': biz.color }}
    >
      {/* ── Sliding backgrounds ── */}
      <div className={styles.bgSlider}>
        {BUSINESSES.map((b, i) => (
          <div
            key={b.id}
            className={`${styles.bgPanel} ${b.bgClass} ${i === active ? styles.active : ''}`}
          >
            <Image
              src={b.image}
              alt={b.tab}
              fill
              priority={i === 0}
              quality={90}
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
        ))}
      </div>

      {/* ── Grain texture ── */}
      <div className={styles.grain} aria-hidden />

      {/* ── Floating orbs ── */}
      <div className={`${styles.orb} ${styles['orb--1']}`} aria-hidden />
      <div className={`${styles.orb} ${styles['orb--2']}`} aria-hidden />
      <div className={`${styles.orb} ${styles['orb--3']}`} aria-hidden />

      {/* ── Diagonal accent ── */}
      <div className={styles.diagonalAccent} aria-hidden />

      {/* ── Main content ── */}
      <div className={styles.heroContent}>

        {/* Business switcher tabs */}
        <div className={styles.businessTabs} role="tablist">
          {BUSINESSES.map((b, i) => (
            <button
              key={b.id}
              role="tab"
              aria-selected={i === active}
              className={`${styles.tab} ${b.tabClass} ${i === active ? styles.active : ''}`}
              onClick={() => switchTo(i)}
            >
              <span className={styles.tabIcon}>{b.tabIcon}</span>
              {b.tab}
            </button>
          ))}
        </div>

        {/* Center block */}
        <div className={styles.centerBlock}>

          {/* Text side */}
          <div className={styles.textBlock} key={animKey}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              {biz.eyebrow}
            </div>

            <div className={styles.headlineSlot}>
              <span className={styles.headline}>{biz.headline}</span>
            </div>
            <div className={styles.headlineSlot}>
              <span className={styles.headlineAccent}>{biz.accentLine}</span>
            </div>

            <p className={styles.subText}>{biz.sub}</p>

            <div className={styles.ctaRow}>
              <Link href={biz.cta.href} className={styles.ctaPrimary}>
                {biz.cta.label}
           
              </Link>
              <Link href="/services" className={styles.ctaSecondary}>
           
                View Our All Service
              </Link>
            </div>
          </div>

          {/* Stats side */}
          <div className={styles.statsPanel}>
            {STATS.map((s) => (
              <div key={s.label} className={styles.statCard}>
                <div className={styles.statIcon}>{s.icon}</div>
                <div className={styles.statInfo}>
                  <div className={styles.statNumber}>{s.number}</div>
                  <div className={styles.statLabel}>{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom strip */}
        <div className={styles.bottomStrip}>
          {/* Ticker */}
          <div className={styles.ticker}>
            <div className={styles.tickerInner}>
              {TICKER_ITEMS.map((item, i) => (
                <span key={i} className={styles.tickerItem}>
                  <span className={styles.tickerDot} />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Progress dots */}
          <div className={styles.progressDots}>
            {BUSINESSES.map((b, i) => (
              <button
                key={b.id}
                className={`${styles.dot} ${i === active ? styles.active : ''}`}
                onClick={() => switchTo(i)}
                aria-label={`Go to ${b.tab}`}
                style={i === active ? { background: biz.color } : {}}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Floating organic badge ── */}
      <div className={styles.floatingBadge} aria-hidden>
        <div
          className={styles.badgeCircle}
          style={{ background: biz.color }}
        >
          <span className={styles.badgePct}>100%</span>
          <span className={styles.badgeWord}>Organic</span>
        </div>
      </div>

      {/* ── Scroll hint ── */}
      <div className={styles.scrollHint} aria-hidden>
        <span>Scroll</span>
        <div className={styles.scrollLine} />
        <TbChevronDown size={14} color="rgba(255,255,255,0.4)" />
      </div>
    </section>
  );
}