'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import styles from './ArticleCarousel.module.css';

type Article = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
};

const ArticleCarouselClient: React.FC<{ articles: Article[] }> = ({
  articles,
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!scrollerRef.current) return;

    const scroller = scrollerRef.current;
    const scrollerInner = scroller.querySelector(
      `.${styles.scrollerInner}`
    ) as HTMLDivElement;

    if (!scrollerInner) return;

    const articles = Array.from(
      scrollerInner.querySelectorAll(`.${styles.articleCard}`)
    );

    const totalWidth = articles.reduce((acc, article) => acc + article.clientWidth, 0);

    gsap.to(scrollerInner, {
      x: -totalWidth / 2,
      duration: articles.length * 5, // Adjust duration based on the number of articles
      ease: 'linear',
      repeat: -1,
      modifiers: {
        x: (x) => `${parseFloat(x).toFixed(2)}px`,
      },
    });
  }, { scope: scrollerRef });

  if (!articles || articles.length === 0) {
    return <p>No articles found.</p>;
  }

  // Duplicate the articles to create a seamless loop
  const extendedArticles = [...articles, ...articles];

  return (
    <div className={styles.container}>
      <h2 className={styles.carouselTitle}>From Our Blog</h2>
      <div ref={scrollerRef} className={styles.scroller}>
        <div className={styles.scrollerInner}>
          {extendedArticles.map((article, index) => (
            <Link key={`${article.id}-${index}`} href={`/${article.slug}`} className={styles.articleCard}>
              <h5 className={styles.articleTitle}>{article.title}</h5>
              <p className={styles.articleExcerpt}>{article.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleCarouselClient;
