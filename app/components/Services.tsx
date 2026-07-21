'use client';

import React from 'react';
import styles from './Services.module.css';
import {
  FaTools,
  FaFaucet,
  FaWater,
  FaExclamationTriangle,
  FaToilet,
  FaHome,
  FaBuilding,
  FaFire,
} from 'react-icons/fa';
import Link from 'next/link'; // Import Link from Next.js

// Helper function to create SEO-friendly slugs
const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

const services = [
  {
    title: 'Emergency Plumbing',
    description: '24/7 emergency services for all your plumbing needs.',
    icon: <FaExclamationTriangle />,
  },
  {
    title: 'Water Heaters',
    description: 'Installation, repair, and maintenance of water heaters.',
    icon: <FaWater />,
  },
  {
    title: 'Leak Detection',
    description:
      'Advanced leak detection to protect your home from water damage.',
    icon: <FaFaucet />,
  },
  {
    title: 'Pipe Repair',
    description: 'Comprehensive pipe repair and replacement services.',
    icon: <FaTools />,
  },
  {
    title: 'Toilet Repair',
    description:
      'Repair and installation of all types of toilets and fixtures.',
    icon: <FaToilet />,
  },
  {
    title: 'Natural Gas Plumbing',
    description:
      'Safe and reliable installation and repair of natural gas lines for your water heater, stove, fireplace, and outdoor bbq.',
    icon: <FaFire />,
  },
  {
    title: 'Residential Plumbing',
    description:
      'From leaky faucets to full-scale renovations, we provide reliable and efficient plumbing solutions for your home.',
    icon: <FaHome />,
  },
  {
    title: 'Commercial Plumbing',
    description:
      'Our team is equipped to handle the complex plumbing needs of your business, ensuring minimal disruption to a an-import.',
    icon: <FaBuilding />,
  },
];

const Services = () => {
  return (
    <section id="services" className={styles['services-section']}>
      <div className={styles['services-container']}>
        <div className={styles['title-container']}>
          <Link href="/services">
            <h2 className={styles['services-title']}>Our Services</h2>
          </Link>
        </div>
        <div className={styles['services-grid']}>
          {services.map((service, index) => {
            const slug = slugify(service.title);
            return (
              <Link href={`/services/${slug}`} key={index} className={styles['service-card-link']}>
                <div className={styles['service-card']}>
                  <div className={styles['service-icon']}>{service.icon}</div>
                  <h3 className={styles['service-title']}>{service.title}</h3>
                  <p className={styles['service-description']}>
                    {service.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
