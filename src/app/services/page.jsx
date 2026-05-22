'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from '../../css/service.module.css';

import roosterImg from '../../../public/service/hens.jpg';
import Navbar from '../home/hero/Navbar';


import Link from 'next/link';
import styles2 from '../../css/hero.module.css';
import A_Place_For_Chicken_BG from '../../../public/free-range-chickens.jpg';
import ServicesMidSection from './Middle';


const stats = [
  {
    number: 7,
    suffix: '+',
    label: 'Years of Experience',
  },
  {
    number: 174,
    suffix: '+',
    label: 'Satisfied Customers',
  },
  {
    number: 27,
    suffix: '+',
    label: 'Project Completed',
  },
  {
    number: 42,
    suffix: '',
    label: 'Eggs Daily Production',
  },
];

function Counter({ end, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let start = 0;

    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [started, end, duration]);

  return (
    <h3 ref={ref} className={styles.statNumber}>
      {count}
      {suffix}
    </h3>
  );
}

export default function FarmExperience() {
  return (
    <>

    <section className={styles2.hero}>

      {/* Background image */}
      <div className={`${styles2.hero__bg} fadeIn`}>
        <Image
          src={A_Place_For_Chicken_BG}
          alt="Cheeky Farm"
          fill
          priority
          quality={90}
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>

      {/* Overlays */}
      <div className={styles2.hero__overlay} />
      <div className={styles2['hero__gradient-bottom']} />

      {/* Center content */}
      <div className={styles2.hero__center}>
        <p className={styles2.hero__eyebrow}>Cheeky Presents</p>

        <h1 className={`${styles2.hero__title} fadeUp`}>Our Services</h1>

        <p className={styles2.hero__subtitle}>
          <span className={styles2['hero__subtitle-script']}>Always Loyal</span>
          <span className={styles2['hero__subtitle-bold']}>&nbsp;And Honest</span>
        </p>
      </div>
    </section>



    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* LEFT IMAGE */}
        <div className={styles.imageWrapper}>
          <div className={styles.imageCard}>
            <Image
              src={roosterImg}
              alt="Farm Rooster"
              fill
              className={styles.image}
            />

            {/* Floating badge */}
            <div className={styles.badge}>
              <span className={styles.badgeBig}>100%</span>
              <span className={styles.badgeSmall}>
                Organic <br /> product
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className={styles.content}>
          <p className={styles.subTitle}>OUR SERVICE</p>

          <h2 className={styles.title}>
            HIRE CHICKEN TO <br />
            BE CHICKEN
          </h2>

          <p className={styles.description}>
            Phasellus elementum leo risus, a elementum est mattis in.
            Cras id iaculis ligula. Nullam a fringilla augue.
            Proin imperdiet sapien nulla.
          </p>

          {/* STATS */}
          <div className={styles.statsGrid}>
            {stats.map((item, index) => (
              <div key={index} className={styles.statCard}>
                <Counter
                  end={item.number}
                  suffix={item.suffix}
                />

                <p className={styles.statLabel}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
    
    <ServicesMidSection></ServicesMidSection>
    </>



  );
}