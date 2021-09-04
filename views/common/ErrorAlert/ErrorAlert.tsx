import React from 'react';

import styles from './ErrorAlert.module.css';

export const ErrorAlert: React.FC = ({ children }) => {
  return <div className={styles.alert}>{children}</div>;
};
