import React from 'react';
import styles from './EventContent.module.css';

export const EventContent: React.FC = ({ children }) => {
  return <section className={styles.content}>{children}</section>;
};
