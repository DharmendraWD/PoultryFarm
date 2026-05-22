'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../../../css/navbar.module.css';
import WhatsappBtn from '../../../includes/Button/WhatsappBtn';
import { useEffect } from 'react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Services', href: '/services' },
  // { label: 'Pages', href: '/pages', hasDropdown: true },
  { label: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const pathname = usePathname();



  const [scrolled, setScrolled] = useState(false);
useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 300);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <>
      <nav 
       className={`${styles.navbar} 
  ${scrolled ? styles.scrolled : ""} 
  ${pathname === "/contact" || pathname === "/gallery" ? styles.contact : ""}`}
      >
        <div className={styles.navbar__inner}>
          {/* Logo */}
          <Link href="/" className={styles.navbar__logo}>
            <svg
              className={styles.logo_svg_wrap}
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="26" cy="26" r="26" fill="#5bbf1a" />
              <ellipse cx="26" cy="30" rx="13" ry="14" fill="#ffffff" />
              <path
                d="M22 14 C22 10, 26 8, 28 12 C29 9, 32 8, 31 13"
                stroke="#e53935"
                strokeWidth="2"
                fill="#e53935"
              />
              <circle cx="29" cy="22" r="2.5" fill="#1a1a1a" />
              <circle cx="30" cy="21.2" r="0.8" fill="white" />
              <path d="M30 25 L34 23 L30 27 Z" fill="#f9a825" />
              <ellipse cx="31" cy="27.5" rx="2" ry="2.5" fill="#e53935" />
              <path
                d="M16 30 Q12 26, 16 22 Q18 28, 22 30"
                fill="#d4d4d4"
                stroke="#bbb"
                strokeWidth="0.5"
              />
            </svg>

            <span className={styles.navbar__logo_text}>Western Poultry Breeding Farm Pvt. Ltd.</span>
          </Link>

          {/* Desktop Nav */}
          <ul className={styles.navbar__nav}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return link.hasDropdown ? (
                <li key={link.label}>
                  <span className={styles.has_dropdown}>
                    <Link
                      href={link.href}
                      className={isActive ? styles.active : ''}
                    >
                      {link.label}
                    </Link>
                  </span>
                </li>
              ) : (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={isActive ? styles.active : ''}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}

            <WhatsappBtn />
          </ul>

          {/* Mobile hamburger */}
          <button
            className={styles.navbar__hamburger}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span
              style={
                mobileOpen
                  ? { transform: 'rotate(45deg) translate(5px, 5px)' }
                  : {}
              }
            />
            <span style={mobileOpen ? { opacity: 0 } : {}} />
            <span
              style={
                mobileOpen
                  ? { transform: 'rotate(-45deg) translate(5px, -5px)' }
                  : {}
              }
            />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`${styles['navbar__mobile-drawer']} ${
          mobileOpen ? styles.open : ''
        }`}
      >
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.label}
              href={link.href}
              className={isActive ? styles.active : ''}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </>
  );
}