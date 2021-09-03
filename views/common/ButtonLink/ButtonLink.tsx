import React from 'react';
import Link from 'next/link';

import styles from './Button.module.css';

interface ButtonLinkProps {
  href: string;
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({ href, children }) => {
  return (
    <Link href={href}>
      <a className={styles.btn}>{children}</a>
    </Link>
  );
};
