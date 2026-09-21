'use client';

import React from 'react';
import Link from 'next/link';
import styles from './NavigationBar.module.css';
import { SITE_NAME, CONTACT_PHONE, CONTACT_PHONE_HREF } from '@/app/lib/config';

export const NavigationBar = () => {
  return (
    <nav className={styles.fixedNavbar}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.brand}>
          {SITE_NAME}
        </Link>
        <a href={CONTACT_PHONE_HREF} className={styles.phoneLink}>
          TEXT & CALL {CONTACT_PHONE}
        </a>
      </div>
    </nav>
  );
};
