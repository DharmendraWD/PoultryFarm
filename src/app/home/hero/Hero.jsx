import Link from 'next/link';
import Image from 'next/image';
import styles from '../../../css/hero.module.css';
// import A_Place_For_Chicken_BG from '../../../../public/a-place-for-poultry-to-call-home.jpg';
import A_Place_For_Chicken_BG from '../../../../public/owned/1.jpeg';
import A_Chicken from '../../../../public/owned/transparent.webp';
import Eggs_In_Basket from '../../../../public/owned/cuteChicken.jpg';
import TypeWriterPara from './TypeWriterPara';
import Typewriter from '../../../utility/Typewriter';
import DistantPopup from '../../../utility/DistantPopup';


export default function Hero() {





  return (
    <section className={styles.hero}>

      {/* Background image */}
      <div className={`${styles.hero__bg} fadeIn`}>
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
      <div className={styles.hero__overlay} />
      <div className={styles['hero__gradient-bottom']} />

      {/* Center content */}
      <div className={styles.hero__center} data-aos="fade-up">
        <p className={styles.hero__eyebrow}>Western Poultry Breeding Farm Pvt. Ltd. Presents</p>

        <h1 className={`${styles.hero__title} fadeUp`}>Welcome To Our Farm</h1>


        <p className={styles.hero__subtitle}>
          <span className={styles['hero__subtitle-script']}>Always Loyal</span>
          <span className={styles['hero__subtitle-bold']}>&nbsp;And Honest</span>
        </p>

        {/* <Link href="/get-started" className={styles.hero__cta}>
          Get Started
        </Link> */}

        <DistantPopup />
      </div>

      {/* Bottom strip */}
      <div className={`${styles.hero__bottom}`}>

         <div className="absolute bottom-0 left-0 w-full h-[40%] bg-[#3a3a3a] opacity-[0.3]" ></div>

        {/* Body copy */}
        <div className={styles['hero__bottom-text']} data-aos="fade-right">
        <TypeWriterPara />
          <Link href="/gallery" className={styles['hero__bottom-link']}>
            → See Gallery
          </Link>
        </div>

        {/* Rooster + eggs */}
        <div className={styles['hero__bottom-illustration']} data-aos="fade-left">
          {/*
            Put your images in /public/images/
            eggs.png  — basket of brown eggs
            rooster.png — the black & white rooster
          */}
          <Image
            src={Eggs_In_Basket}
            alt="Freshfar_eggs"
            width={130}
            height={100}
            className={styles.hero__eggs}
            style={{ objectFit: 'contain' }}
          />
          <Image
            src={A_Chicken}
            alt="Farm rooster"
            width={220}
            height={260}
            className={styles.hero__rooster}
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>

    </section>
  );
}