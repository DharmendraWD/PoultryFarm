import Link from 'next/link';
import Image from 'next/image';
import styles from '../../css/aboutus.module.css';
import Free_Range_Chickens from "../../../public/free-range-chickens.jpg"
import styles2 from '../../css/hero.module.css';
import A_Place_For_Chicken_BG from '../../../public/two-newborn-chicken-with-cracked-eggshell.jpg';



export default function   AboutUs() {
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
        <p className={styles2.hero__eyebrow}>Let Know Us</p>

        <h1 className={`${styles2.hero__title} fadeUp`}>About Us</h1>

        <p className={styles2.hero__subtitle}>
          <span className={styles2['hero__subtitle-script']}>Your Best Choice</span>
          <span className={styles2['hero__subtitle-bold']}>&nbsp;For Chicken</span>
        </p>
      </div>
    </section>
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* Left: farm image + badge */}
        <div className={styles['image-wrap']}>
          {/*
            Replace src with your actual farm photo.
            e.g. /public/images/farm-field.jpg
            Shows chickens roaming on green field with farm buildings.
          */}
          <Image
            src={Free_Range_Chickens}
            alt="Free-range chickens on the farm"
            width={640}
            height={420}
            style={{ objectFit: 'cover', borderRadius: '12px', width: '100%', height: 'auto' }}
          />

          {/* 100% Organic badge */}
          <div className={styles.badge}>
            <span className={styles.badge__pct}>100%</span>
            <span className={styles.badge__label}>Organic<br />product</span>
          </div>
        </div>

        {/* Right: text content */}
        <div className={styles.content}>
          <p className={styles.content__eyebrow}>About Us</p>
          <h2 className={styles.content__title}>
            The Typical<br />Rural Taste
          </h2>
          <p className={styles.content__body}>
            Founded in 2075 BS, Western Poultry Breeding Farm Pvt. Ltd. began with a specialized focus on high-quality hatchery operations. As we evolved, so did our vision for a sustainable and food-secure future.
In 2080 BS, we underwent a strategic expansion to transform into a multi-disciplinary agricultural hub. Today, we don't just hatch eggs; we bridge the gap between the farm and your table through integrated Broiler Farming, Aquaculture, and Organic Horticulture. By diversifying our operations, we ensure that every resource is utilized efficiently, creating a circular ecosystem that benefits both the land and our consumers.
          </p>
          <Link href="/contact" className={styles.content__cta}>
            Contact Us
          </Link>
        </div>

      </div>
    </section></>
  );
}