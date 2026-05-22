

import { FaLocationArrow, FaPhoneSquare } from "react-icons/fa";
import logo from "../../public/logo-cheeky2.png"
import styles from "../css/footer.module.css";
import Link from "next/link";
import { CiMail } from "react-icons/ci";
import { IoMdCall } from "react-icons/io";

export default function Footer() {
  const phoneNumber = "+9779866114605";

const message = `
Hi, I want to order:
Chicken: 2kg
Eggs: 1 tray
`;
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* LEFT */}
        <div className={styles.col}>
          <div className={styles.logoWrap}>
            <div className={styles.logoCircle}>
              <span>🐔</span>
            </div>
            <h2 className={styles.logoText}>CHEEKY</h2>
          </div>

          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper mattis.
          </p>
        </div>

        {/* SERVICE */}
        <div className={styles.col}>
          <h3 className={styles.title}>Service</h3>
          <ul className={styles.list}>
            <Link href="/">Go to Home</Link>
            <Link href="/gallery">Our Gallery</Link>
            <Link href="/contact">Contact Us</Link>
            <Link href="/Services">Services</Link>
          </ul>
        </div>

        {/* LINKS */}
        <div className={styles.col}>
          <h3 className={styles.title}>Further Links</h3>
          <ul className={styles.list}>
              <Link 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
     className=""
    >
      Get In Touch on WhatsApp
    </Link>
          <Link href="tel:+9779812345678">
 Call Now
</Link>

          </ul>
        </div>

        {/* CONTACT */}
        <div className={styles.col}>
          <h3 className={styles.title}>Get In Touch</h3>

          <div className={styles.contact}>
            <p> <FaLocationArrow /> Basantpur, Kathmandu 24</p>
            <p><FaPhoneSquare />207-8767-452</p>
            <p><CiMail /> support@site.com</p>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className={styles.bottom}>
        Copyright © 2026 Cheeky | Powered by Aayu Softtech
      </div>
    </footer>
  );
}