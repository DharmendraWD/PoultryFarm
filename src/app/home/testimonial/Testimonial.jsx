import Image from 'next/image';
import img1 from "../../../../public/owned/testimonial/1.png";  
import img2 from "../../../../public/testimonial/2.jpg";  
import img3 from "../../../../public/owned/testimonial/2.png";  
import styles from '../../../css/Testimonial.module.css';

const testimonials = [
  {
    body: 'मेरो अनुभव अनुसार यो फार्मको कुखुरा अत्यन्तै स्वच्छ र स्वस्थ वातावरणमा पालन गरिएको छ। मासु धेरै ताजा, स्वादिलो र पोषणयुक्त छ। पूर्ण रूपमा सन्तुष्ट छु।',
    stars: 5,
    avatar: img1,
    name: 'धर्मेन्द्र ठाकुर',
  },
  {
    body: 'यो फार्मको कुखुरा निकै हाइजेनिक तरिकाले उत्पादन गरिएको छ। पकाउँदा स्वाद एकदमै राम्रो आउँछ र गुणस्तर पनि उच्च स्तरको छ। परिवारका लागि सुरक्षित र भरपर्दो छ।',
    stars: 5,
    avatar: img2,
    name: 'रोशन लामा',
  },
  {
    body: 'धेरै राम्रो फार्म! यहाँको कुखुराको मासु सफा, ताजा र स्वादमा उत्कृष्ट छ। कुनै पनि रसायन वा अस्वच्छता नदेखिने भएकाले म पूर्ण रूपमा सन्तुष्ट छु र अरुलाई पनि सिफारिस गर्छु।',
    stars: 5,
    avatar: img3,
    name: 'बिकेश साह',
  },
];

function Stars({ count }) {
  return (
    <div className={styles.stars}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {testimonials.map((t) => (
          <div key={t.name} className={styles['card-wrap']}
          data-aos="fade-up"

          >
            <div className={styles.card}>
              {/* Opening quote mark */}
              <div className={styles['quote-icon']}>"</div>

              <p className={styles.card__body}>{t.body}</p>

              <Stars count={t.stars} />

              {/*
                Replace avatar srcs with real photos in /public/images/
                avatar-terry.jpg, avatar-royce.jpg, avatar-alan.jpg
              */}
              <Image
                src={t.avatar}
                alt={t.name}
                width={56}
                height={56}
                className={styles.avatar}
                style={{ borderRadius: '50%', objectFit: 'cover' }}
              />
            </div>

            {/* Name sits outside/below card */}
            <p className={styles.card__name}>{t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}