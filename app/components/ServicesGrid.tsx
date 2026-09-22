'use client';

import React from 'react';
import Link from 'next/link';
import { services, slugify } from '../data/services';
import styles from './Services.module.css';

const ServicesGrid = () => {
  return (
    <div className={styles.servicesGrid}>
      {services.map((service, index) => {
        const slug = slugify(service.title);
        return (
          <Link
            href={`/services/${slug}`}
            key={index}
            className={styles.serviceCardLink}
          >
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ServicesGrid;
