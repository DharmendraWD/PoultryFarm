import Image from 'next/image';
import styles from '../../../css/whychoose.module.css';

import Portrait_Chicken from "../../../../public/portrait-chicken-on-the.jpg"
import chickenBg from "../../../../public/farm-2021-08-30-03-44-32-utc-copy-650x650.jpg"

// import chickVideo from "../../../../public/videos/Littlechicks.mp4"


const checkItems = [
  'Experience: Building on a foundation established in 2075 BS, we combine years of technical expertise with modern farming innovations.',
  'Quality Assurance: From the feed we use to the water our fish swim in, we prioritize health and hygiene at every stage.',
  'Integrated Approach: Our multi-crop and livestock integration reduces waste and ensures a more sustainable footprint for the planet.',
  'Local Impact: We are proud to contribute to the agricultural economy, providing fresh produce and poultry directly from our farm to your community.',
];



function CheckIcon() {
  return (
    <svg
      className={styles['check-icon']}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 10.5L8 14.5L16 6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Organic product speech-bubble badge as inline SVG
function OrganicBadge() {
  return (
    <svg
      viewBox="0 0 145 110"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="100% Organic product"
    >
      {/* Bubble body */}
      <ellipse cx="72" cy="52" rx="70" ry="48" fill="#5bbf1a" />
      {/* Tail of speech bubble */}
      <polygon points="30,90 55,75 20,100" fill="#5bbf1a" />
      {/* Text: Organic */}
      <text
        x="72"
        y="46"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontStyle="italic"
        fontSize="22"
        fontWeight="bold"
        fill="white"
      >
        Organic
      </text>
      {/* Text: product */}
      <text
        x="72"
        y="68"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="13"
        fill="rgba(255,255,255,0.9)"
      >
        product
      </text>
    </svg>
  );
}

export default function WhyChooseUs() {
  return (
    <section className={styles.section}>
      {/* Background image */}
      <div className={styles.section__bg}
      data-aos="fade-up"
     data-aos-anchor-placement="center-center"
      >
        
        <Image
          src={chickenBg}
          alt="Chicken flock background"
          fill
          quality={90}
          style={{ objectFit: 'cover', objectPosition: 'center' }}

        />
      </div>

      {/* Dark overlay */}
      <div className={styles.section__overlay} />

      <div className={styles.inner}>
        {/* ── Left: text ── */}
        <div className={styles.content} data-aos="fade-right">
          <p className={styles.content__eyebrow}>Why Choose Us</p>
          <h2 className={styles.content__title}>
            Get The<br />
            Different Taste<br />
            Here
          </h2>
          <p className={styles.content__desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            elit tellus, luctus nec ullamcorper mattis.
          </p>

          <ul className={styles.checklist}>
            {checkItems.map((item) => (
              <li key={item}>
                <CheckIcon />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ── Right: hen photo card ── */}
        <div className={styles['image-card']} data-aos="fade-left">
          {/* Organic speech bubble */}
          <div className={styles['organic-badge']}>
            <OrganicBadge />
          </div>

          {/* <Image
            src={Portrait_Chicken}
            alt="Fresh organic hen"
            width={300}
            height={360}
            style={{
              objectFit: 'cover',
              borderRadius: '18px',
              width: '100%',
              height: 'auto',
            }}
          /> */}


<div
  style={{
    width: 300,
    height: 360,
    borderRadius: '18px',
    overflow: 'hidden',
  }}
>
  <video
     src="/videos/Littlechicks.mp4"
    autoPlay
    muted
    loop
    playsInline
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
    }}
  />
</div>

        </div>
      </div>
    </section>
  );
}