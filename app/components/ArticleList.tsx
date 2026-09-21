'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './ArticleList.module.css';

type Article = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  image_url: string;
};

type ArticleListProps = {
  articles: Article[];
};

export default function ArticleList({ articles }: ArticleListProps) {
  return (
    <div className={styles.row}>
      {articles.map((article) => (
        <div className={styles.colMd4} key={article.id}>
          <div className={styles.articleCard}>
            <Image
              src={article.image_url}
              alt={article.title}
              className={styles.cardImgTop}
              width={400}
              height={225}
              style={{ objectFit: 'cover' }}
            />
            <div className={styles.cardBody}>
              <h5 className={styles.cardTitle}>{article.title}</h5>
              <p className={styles.cardText}>{article.excerpt}</p>
              <Link href={`/${article.slug}`} className={styles.btn}>
                Read More
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
