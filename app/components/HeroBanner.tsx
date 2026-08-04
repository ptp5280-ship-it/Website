import Image from 'next/image';
import styles from './HeroBanner.module.css';

const HeroBanner = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Your Trusted Denver Plumber</h1>
          <p className={styles.heroSubtitle}>
            Over 15 years of experience, offering transparent pricing on all plumbing services. Call for a free estimate!
          </p>
        </div>
        <div className={styles.heroImageWrapper}>
          <Image
            src="/PTP-LOGO.jpg"
            alt="Peachtree Plumbing van"
            width={720}
            height={405}
            className={styles.heroImage}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
