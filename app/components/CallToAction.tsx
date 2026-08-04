import React from 'react';
import Link from 'next/link';
import { CONTACT_PHONE, CONTACT_PHONE_HREF } from '@/app/lib/config';
import styles from './CallToAction.module.css';

const CallToAction: React.FC = () => {
  return (
    <div className={styles.callToAction}>
      <div className={styles.container}>
        <h2 className={styles.fwBold}>Ready for Top-Notch Plumbing Services?</h2>
        <p className={styles.ctaLead}>
          Don&apos;t let plumbing problems disrupt your day. Contact Peach Tree
          Plumbing for reliable and efficient solutions.
        </p>

        {/* Desktop Button */}
        <div className={styles.desktopButton}>
          <Link href="/contact" className={styles.desktopCTAButton}>
            Schedule Your Service Today
          </Link>
        </div>

        {/* Mobile Button */}
        <div className={styles.mobileButton}>
          <a href={CONTACT_PHONE_HREF} className={styles.mobileCTAButton}>
            Call Now: {CONTACT_PHONE}
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
