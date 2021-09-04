import React from 'react';
import Link from 'next/link';

import styles from './Button.module.css';

interface ButtonLinkProps {
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({ href, onClick, children }) => {
  if (href) {
    return (
      <Link href={href}>
        <a className={styles.btn}>{children}</a>
      </Link>
    );
  }

  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
};
