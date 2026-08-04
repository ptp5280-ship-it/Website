'use client';
import React from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroImageMobile}>
        <Image
          src="/PTP-LOGO.jpg"
          alt="Peach Tree Plumbing Logo"
          width={300}
          height={300}
          className={styles.imgFluid}
          priority
        />
      </div>
      <div className={styles.heroContent}>
        <h1>Your Trusted Local Plumber</h1>
        <p>
          Fast, friendly, and reliable service for all your plumbing needs.
          <br />
          Serving Denver, Colorado.
          <br />
          Call or text us anytime when you need us!
        </p>
      </div>
      <div className={styles.heroImageDesktop}>
        <Image
          src="/PTP-LOGO.jpg"
          alt="PTP Logo"
          width={500}
          height={500}
          className={styles.imgFluid}
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
