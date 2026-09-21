'use client';

import React from 'react';
import styles from './Testimonials.module.css';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Erin C.',
    quote: 'This has to be the easiest experience I’ve had when it comes to having repairs or updates done to my home. I needed hose line relocated…he was on time, straightforward, and the price was reasonable. Thank you!!!',
    stars: 5,
  },
  {
    name: 'Tom M.',
    quote: 'Johnathan communicates well, flexed with our schedule, arrived on time and completed the work quickly. We’ll use them again the future when the need arises.',
    stars: 5,
  },
  {
    name: 'Debbie P.',
    quote: 'John replaced our kitchen faucet. He arrived as scheduled, completed the job with cleanup at a reasonable cost. I would certainly recommend him.',
    stars: 5,
  },
];

const Testimonials = () => {
  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.testimonialsContainer}>
        <h2 className={styles.testimonialsTitle}>What Our Customers Are Saying</h2>
        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <div className={styles.testimonialCard} key={index}>
              <div className={styles.starRating}>
                {[...Array(testimonial.stars)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className={styles.testimonialText}>&quot;{testimonial.quote}&quot;</p>
              <p className={styles.testimonialAuthor}>- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
