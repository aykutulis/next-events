import React, { useMemo } from 'react';

import { ButtonLink } from '../../common';
import { StringFormatter } from '../../../utils';
import styles from './ResultsTitle.module.css';

interface ResultsTitleProps {
  date: Date | string;
}

export const ResultsTitle: React.FC<ResultsTitleProps> = ({ date }) => {
  const humanReadableDate = useMemo(() => StringFormatter.humanReadableDate(date), [date]);

  return (
    <section className={styles.title}>
      <h1>Events in {humanReadableDate}</h1>
      <ButtonLink href='/events'>Show all events</ButtonLink>
    </section>
  );
};
