"use client";

import styles from "../../css/contact.module.css";
import {
  FaFacebook,
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function ContactUs() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>

        {/* HEADER */}
        <div className={styles.header}>
          <h2>Get in Touch</h2>
          <p>
            Fresh chicken orders, wholesale supply, or general inquiries —
            we are here to help you anytime.
          </p>
        </div>

        {/* SOCIAL CARDS */}
        <div className={styles.socialGrid}>

          {/* FACEBOOK */}
          <a
            href="https://www.facebook.com/your-profile"
            target="_blank"
            className={styles.socialCard}
          >
            <FaFacebook className={styles.fbIcon} />

            <div>
              <h3>Facebook</h3>
              <p>Follow our updates & farm activities</p>
            </div>
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/9779800000000"
            target="_blank"
            className={styles.socialCard}
          >
            <FaWhatsapp className={styles.waIcon} />

            <div>
              <h3>WhatsApp</h3>
              <p>Chat for quick orders & delivery</p>
            </div>
          </a>

          {/* PHONE */}
          <div className={styles.socialCard}>
            <FaPhoneAlt className={styles.icon} />
            <div>
              <h3>Call Us</h3>
              <p>+977-9800000000</p>
            </div>
          </div>

          {/* EMAIL */}
          <div className={styles.socialCard}>
            <FaEnvelope className={styles.icon} />
            <div>
              <h3>Email</h3>
              <p>farm@email.com</p>
            </div>
          </div>
        </div>

        {/* FORM SECTION */}
        {/* <div className={styles.formWrapper}>
          <div className={styles.formInfo}>
            <h3>Send Us a Message</h3>
            <p>
              Fill out the form and we will contact you for orders or inquiries.
            </p>

            <div className={styles.location}>
              <FaMapMarkerAlt />
              <span>Kathmandu, Nepal</span>
            </div>
          </div>

        
          <form className={styles.form}>
            <input type="text" placeholder="Your Name" required />
            <input type="text" placeholder="Your Address" required />
            <input type="tel" placeholder="Phone Number" required />
            <textarea placeholder="Your Message" rows="5"></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div> */}

      </div>
    </section>
  );
}