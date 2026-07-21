'use client';
import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';
import { FaInstagram, FaYelp } from 'react-icons/fa';
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_HREF,
  GOOGLE_BUSINESS_PROFILE_URL,
  INSTAGRAM_URL,
  YELP_URL,
} from '@/app/lib/config';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const userAgent =
      typeof window.navigator === 'undefined' ? '' : navigator.userAgent;
    const mobile = Boolean(
      userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
      )
    );
    setIsMobile(mobile);
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerColumn}>
          <h3 className={styles.footerColumnTitle}>About Us</h3>
          <p className={styles.footerText}>
            Our mission is to provide reliable, high-quality, and professional
            service with integrity, honesty, and a commitment to customer
            satisfaction and to be the most trusted plumbing service by
            upholding the highest ethical standards and honest business
            practices, building lasting relationships to protect you and your
            home
          </p>
        </div>
        <div className={styles.footerColumn}>
          <h3 className={styles.footerColumnTitle}>Contact Us</h3>
          <p className={styles.footerText}>
            Email:{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className={styles.footerLink}>
              {CONTACT_EMAIL}
            </a>
          </p>
          <p className={styles.footerText}>
            Phone:{' '}
            <a
              href={isMobile ? CONTACT_PHONE_HREF : GOOGLE_BUSINESS_PROFILE_URL}
              className={styles.footerLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              (720) 298-1900
            </a>
          </p>
        </div>
        <div className={styles.footerColumn}>
          <h3 className={styles.footerColumnTitle}>Follow Us</h3>
          <div className={styles.socialIcons}>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <FaInstagram />
            </a>
            <a
              href={YELP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <FaYelp />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.footerLinks}>
        <Link href="/terms-of-service" className={styles.footerLink}>
          Terms of Service
        </Link>
        <Link href="/privacy-policy" className={styles.footerLink}>
          Privacy Policy
        </Link>
        <Link href="/disclaimer" className={styles.footerLink}>
          Disclaimer
        </Link>
        <Link href="/copyright-notice" className={styles.footerLink}>
          Copyright Notice
        </Link>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {currentYear} Peach Tree Plumbing. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
