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
      try {
        const fetchedArticles = await getAllPosts();
        setArticles(fetchedArticles || []);
      } catch (error) {
        console.error("Failed to fetch articles:", error);
        setArticles([]);
      }
    };

    fetchArticles();
  }, []);

  useGSAP(() => {
    if (!scrollerRef.current || articles.length === 0) return;

    const scrollerInner = scrollerRef.current.querySelector(
      `.${styles.scrollerInner}`
    ) as HTMLDivElement;

    if (!scrollerInner) return;

    if (animation.current) {
      animation.current.kill();
    }

    const allArticleCards = Array.from(
      scrollerInner.querySelectorAll(`.${styles.articleCard}`)
    );

    if (allArticleCards.length === 0) return;

    const timeoutId = setTimeout(() => {
      const loopWidth = articles.reduce((acc, article, index) => {
        const card = allArticleCards[index] as HTMLElement;
        if (!card) return acc;
        const style = window.getComputedStyle(card);
        const marginRight = parseInt(style.marginRight, 10) || 0;
        return acc + card.offsetWidth + marginRight;
      }, 0);

      if (loopWidth === 0) return;

      animation.current = gsap.to(scrollerInner, {
        x: -loopWidth,
        duration: articles.length * 8,
        ease: 'linear',
        repeat: -1,
      });
    }, 100);

    return () => clearTimeout(timeoutId);

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
    if (animation.current) {
      animation.current.pause();
      
      const scrollerInner = scrollerRef.current?.querySelector(
        `.${styles.scrollerInner}`
      ) as HTMLDivElement;

      if (scrollerInner) {
        gsap.to(scrollerInner, {
          x: `+=${scrollOffset}`,
          duration: 0.5,
          ease: 'power2.inOut',
          onComplete: () => {
            if (!isPaused) {
              animation.current?.resume();
            }
          }
        });
      }
    }
  };

  if (!articles || articles.length === 0) {
    return <p className="text-center p-5">No articles found.</p>;
  }

  const extendedArticles = [...articles, ...articles];

  return (
    <div className={styles.container}>
      <h2 className={styles.carouselTitle}>From Our Blog</h2>
      <div className={styles.carousel}>
        <button 
          className={`${styles.arrow} ${styles.left}`}
          onClick={() => handleScroll(350)} 
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
          <div className={styles.scrollerInner}>
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
          onClick={() => handleScroll(-350)} 
          aria-label="Scroll right"
        >
          &#x2192;
        </button>
      </div>
    </div>
  );
};

export default ArticleCarouselClient;
