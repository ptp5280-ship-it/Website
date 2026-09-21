'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import styles from './ArticleCarousel.module.css';
import { getAllPosts } from '../lib/blog';

type Article = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
};

const ArticleCarouselClient: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const animation = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      const fetchedArticles = await getAllPosts();
      setArticles(fetchedArticles);
    };

    fetchArticles();
  }, []);

  useGSAP(() => {
    if (!scrollerRef.current || articles.length === 0) return;

    const scrollerInner = scrollerRef.current.querySelector(
      `.${styles.scrollerInner}`
    ) as HTMLDivElement;

    if (!scrollerInner) return;

    const articleElements = Array.from(
      scrollerInner.querySelectorAll(`.${styles.articleCard}`)
    );
    const totalWidth = articleElements.reduce((acc, article) => acc + article.clientWidth, 0);

    animation.current = gsap.to(scrollerInner, {
      x: -totalWidth / 2,
      duration: articleElements.length * 5,
      ease: 'linear',
      repeat: -1,
      modifiers: {
        x: (x) => `${parseFloat(x).toFixed(2)}px`,
      },
    });
  }, { scope: scrollerRef, dependencies: [articles] });

  useEffect(() => {
    if (animation.current) {
      if (isPaused) {
        animation.current.pause();
      } else {
        animation.current.resume();
      }
    }
  }, [isPaused]);

  const handleScroll = (scrollOffset: number) => {
    if (scrollerRef.current) {
      const scroller = scrollerRef.current;
      gsap.to(scroller, { 
        scrollLeft: scroller.scrollLeft + scrollOffset, 
        duration: 0.8, 
        ease: 'power3.inOut' 
      });
    }
  };

  if (!articles || articles.length === 0) {
    return <p>No articles found.</p>;
  }

  const extendedArticles = [...articles, ...articles];

  return (
    <div className={styles.container}>
      <h2 className={styles.carouselTitle}>From Our Blog</h2>
      <div className={styles.carousel}>
        <button 
          className={`${styles.arrow} ${styles.left}`}
          onClick={() => handleScroll(-350)} 
          aria-label="Scroll left"
        >
          &#x2190;
        </button>
        <div 
          ref={scrollerRef}
          className={styles.scroller}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className={`${styles.scrollerInner} ${isPaused ? styles.paused : ''}`}>
            {extendedArticles.map((article, index) => (
              <Link key={`${article.id}-${index}`} href={`/${article.slug}`} className={styles.articleCard}>
                <h5 className={styles.articleTitle}>{article.title}</h5>
                <p className={styles.articleExcerpt}>{article.excerpt}</p>
                <span className={styles.btn}>Read More</span>
              </Link>
            ))}
          </div>
        </div>
        <button 
          className={`${styles.arrow} ${styles.right}`}
          onClick={() => handleScroll(350)} 
          aria-label="Scroll right"
        >
          &#x2192;
        </button>
      </div>
    </div>
  );
};

export default ArticleCarouselClient;
