'use client';

import React from 'react';
import styles from './Services.module.css';
import Link from 'next/link';
import ServicesGrid from './ServicesGrid';

const Services = () => {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.servicesContainer}>
        <div className={styles.titleContainer}>
          <Link href="/services">
            <h2 className={styles.servicesTitle}>Our Services</h2>
          </Link>
        </div>
        <ServicesGrid />
      </div>
    </section>
  );
};

export default Services;
