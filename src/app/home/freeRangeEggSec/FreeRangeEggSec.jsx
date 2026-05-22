import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import styles from '../../../css/freRangeEggSec.module.css';
import eggInHand from '../../../../public/owned/adultHen.png';
import eggInBask2 from '../../../../public/owned/adultHen2.png';



export default function FreeRangeEggs() {
  return (
    <section className={styles.section}
    data-aos="zoom-in"
    >
      <div className={styles.inner}>

        {/* Header */}
        <div className={styles.header}>
          <p className={styles.header__eyebrow}>Our Product</p>
          <h2 className={styles.header__title}>Free Range Eggs</h2>
        </div>

        {/* Two-column grid */}
        <div className={styles.grid}>

          {/* Left — large eggs basket image */}
          {/*
            Replace with /public/images/eggs-basket.jpg
            (brown eggs in wicker basket with a whisk, top-down shot)
          */}
          <Image
            src={eggInBask2}
            alt="Fresh free range eggs in a basket"
            width={660}
            height={380}
            className={styles['left-img']}
            style={{ objectFit: 'cover' }}
          />

          {/* Right — small image + text */}
          <div className={styles.right}>
            {/*
              Replace with /public/images/eggs-hand.jpg
              (hands holding white eggs with chickens in background)
            */}
            <Image
              src={eggInHand}
              alt="Farmer holding fresh eggs"
              width={550}
              height={260}
              className={styles['right-img']}
              style={{ objectFit: 'cover' }}
            />

            <div>
              <p className={styles.right__body}>
                Mauris ut commodo neque, lobortis hendrerit nisl. Integer a sem
                ac erat cursus laoreet eget id eros. Donec nec pulvinar odio. Ut
                ante ante, condimentum quis enim.
              </p>
              <Link href="/gallery" className={styles.right__link}>
                <FaArrowRight size={12} />
                See More
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}