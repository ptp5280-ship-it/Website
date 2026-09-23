import React from 'react';
import styles from './ContentContainer.module.css';

export default function ContentContainer({ children }: { children: React.ReactNode }) {
  return <div className={`${styles.container} ${styles.my5}`}>{children}</div>;
}
