import React from 'react';

import styles from './LogisticsItem.module.css';

interface LogisticsItemProps {
  icon: React.ComponentType;
}

export const LogisticsItem: React.FC<LogisticsItemProps> = ({ icon: Icon, children }) => {
  return (
    <li className={styles.item}>
      <span className={styles.icon}>
        <Icon />
      </span>
      <span>{children}</span>
    </li>
  );
};
