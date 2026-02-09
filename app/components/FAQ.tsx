'use client';
import React, { useState } from 'react';
import styles from './FAQ.module.css';
import { useFadeIn } from '../hooks/useFadeIn';
import { defaultFaqs, Faq } from '../lib/faqData';

const FAQ = ({ faqs = defaultFaqs }: { faqs?: Faq[] }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [ref, isVisible] = useFadeIn();

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Show the first 5 FAQs by default, or all if the button is clicked
  const displayedFaqs = showAll ? faqs : faqs.slice(0, 5);

  return (
    <div
      ref={ref}
      className={`${styles.faqContainer} ${isVisible ? styles.visible : ''}`}
    >
      {displayedFaqs.map((faq, index) => (
        <div
          key={index}
          className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
        >
          <div className={styles.faqQuestion} onClick={() => toggleFAQ(index)}>
            {faq.question}
            <span className={styles.icon}>
              {activeIndex === index ? '−' : '+'}
            </span>
          </div>
          {activeIndex === index && (
            <div className={styles.faqAnswer}>{faq.answer}</div>
          )}
        </div>
      ))}
      {faqs.length > 5 && (
        <div className={styles.buttonContainer}>
          <button
            onClick={() => setShowAll(!showAll)}
            className={styles.showMoreButton}
          >
            {showAll ? 'Show Less Questions' : 'Show More Questions'}
          </button>
        </div>
      )}
    </div>
  );
};

export default FAQ;
