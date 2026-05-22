

import { FaLocationArrow, FaPhoneSquare } from "react-icons/fa";
import logo from "../../public/logo-cheeky2.png"
import styles from "../css/footer.module.css";
import Link from "next/link";
import { CiMail } from "react-icons/ci";
import { IoMdCall } from "react-icons/io";

export default function Footer() {
  const phoneNumber = "+9779840914606";

const message = `
Hello
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
            <h2 className={styles.logoText}>Western Poultry Breeding Farm Pvt. Ltd.</h2>
          </div>

          <p className={styles.desc}>
            In Western Poultry Breeding Farm Pvt. Ltd. we are committed to providing high-quality Products to meet the needs of our customers.
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
<Link
  href="https://www.google.com/maps/search/?api=1&query=Basantpur+Kathmandu+24"
  target="_blank"
  rel="noopener noreferrer"
  className="flex gap-1 items-center"
>
  <FaLocationArrow />
  <span>Basantpur, Kathmandu 24</span>
</Link>
            <Link href="tel:+9779812345678" className="flex gap-1 items-center">
            <FaPhoneSquare />
<span> Call Now</span>
</Link>
<Link
  href="mailto:western.poultry015@gmail.com"
  className="flex gap-1 items-center"
>
  <CiMail />
  <span>western.poultry015@gmail.com</span>
</Link>
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