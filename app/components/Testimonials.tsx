'use client';

import React from 'react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: 'Erin C.',
    quote:
      'This has to be the easiest experience I’ve had when it comes to having repairs or updates done to my home. I needed hose line relocated…he was on time, straightforward, and the price was reasonable. Thank you!!!',
  },
  {
    name: 'Tom M.',
    quote:
      'Johnathan communicates well, flexed with our schedule, arrived on time and completed the work quickly. We’ll use them again the future when the need arises.',
  },
  {
    name: 'Debbie P.',
    quote:
      'John replaced our kitchen faucet. He arrived as scheduled, completed the job with cleanup at a reasonable cost. I would certainly recommend him.',
  },
];

const Testimonials = () => {
  return (
    <section className={styles.testimonialsSection}>
      <h2 className={`${styles.textCenter} ${styles.marginBottom5}`}>What Our Customers Are Saying</h2>
      <div className={styles.row}>
        {testimonials.map((testimonial, index) => (
          <div className={`${styles.col} ${styles.colMd4} ${styles.marginBottom4}`} key={index}>
            <div className={`${styles.card} ${styles.h100}`}>
              <div className={styles.cardBody}>
                <blockquote className={`${styles.blockquote} ${styles.marginBottom0}`}>
                  <p>&quot;{testimonial.quote}&quot;</p>
                  <footer className={styles.blockquoteFooter}>
                    {testimonial.name}
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
