import React from 'react';

import styles from './Alert.module.css';

type AlertVariant = 'success' | 'error' | 'info' | 'warning';

interface AlertProps {
  variant?: AlertVariant;
}

export const Alert: React.FC<AlertProps> = ({ children, variant = 'success' }) => {
  return <div className={`${styles.alert} ${styles[variant]}`}>{children}</div>;
};
