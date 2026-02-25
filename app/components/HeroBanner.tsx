import Image from 'next/image';
import '../styles/HeroBanner.css';

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <Image
        src="/PTP-LOGO.jpg"
        alt="Peachtree Plumbing Logo Banner"
        width={720}
        height={405}
        sizes="100vw"
        priority
        style={{ maxWidth: '100%', height: 'auto', alignSelf: 'flex-start' }}
      />
    </div>
  );
};

export default HeroBanner;
