import Image from 'next/image';
import '../styles/HeroBanner.css';

const HeroBanner = () => {
  return (
    <div className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Your Trusted Denver Plumber</h1>
          <p className="hero-subtitle">
            Over 15 years of experience, offering transparent pricing on all plumbing services. Call for a free estimate!
          </p>
        </div>
        <div className="hero-image-wrapper">
          <Image
            src="/PTP-LOGO.jpg"
            alt="Peachtree Plumbing van"
            width={720}
            height={405}
            className="hero-image"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
