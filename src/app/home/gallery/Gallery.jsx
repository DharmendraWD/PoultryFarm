import Image from 'next/image';
import styles from '../../../css/gallery.module.css';

import img1 from "../../../../public/owned/hens7.png";
import img2 from "../../../../public/owned/LittleChicks.png";
import img3 from "../../../../public/owned/adultHen.png";
import img4 from "../../../../public/owned/adultHen2.png";
import img5 from "../../../../public/owned/hens6.png";
import img6 from "../../../../public/owned/littleChicks2.png";
import img7 from "../../../../public/owned/hens3.png";
import img8 from "../../../../public/owned/hens4.png";
import img9 from "../../../../public/owned/hens9.png";
import img10 from "../../../../public/owned/hens8.png";

const smImages = [
  { img: img1, alt: 'Baby chick', cls: 'img-sm-1' },
  { img: img2, alt: 'Hen flock', cls: 'img-sm-2' },
  { img: img3, alt: 'Chicken on grass', cls: 'img-sm-3' },
  { img: img4, alt: 'Rooster portrait', cls: 'img-sm-4' },
  { img: img5, alt: 'Eggs basket', cls: 'img-sm-5' },
  { img: img6, alt: 'Hands holding eggs', cls: 'img-sm-6' },
  { img: img7, alt: 'Colourful rooster', cls: 'img-sm-7' },
  { img: img8, alt: 'Chickens in yard', cls: 'img-sm-8' },
  { img: img9, alt: 'Chickens in yard', cls: 'img-sm-8' },
  { img: img10, alt: 'Chickens in yard', cls: 'img-sm-8' },
];


export default function Gallery() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.grid}>

          {/* Large image 1 — tall, spans 2 rows */}
          <div className={`${styles['img-large-1']}`}>
            <div className={styles['img-wrap']}>
              <img
                src={img1.src}
                alt="Chickens at the farm"
                // fill
                sizes="(max-width: 560px) 50vw, (max-width: 860px) 25vw, 17vw"
                style={{ objectFit: 'cover' }}

              />
            </div>
          </div>

          {/* Large image 2 — wide landscape, spans 2 rows */}
          <div className={`${styles['img-large-2']}`}>
            <div className={styles['img-wrap']}>
              <img
                src={img2.src}
                alt="Farm polytunnel buildings"
                // fill
                sizes="(max-width: 560px) 50vw, (max-width: 860px) 25vw, 34vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* 8 small images in 2 cols × 4 rows */}
          {smImages?.map((img, i) => (
            <div key={i} className={styles[img.cls]}>
              <div className={styles['img-wrap']}>
                <img
                  src={img.img.src}
                  alt={img.alt}
                  // fill
                  sizes="(max-width: 560px) 50vw, (max-width: 860px) 25vw, 17vw"
                  style={{ objectFit: 'cover' }}
                />

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}