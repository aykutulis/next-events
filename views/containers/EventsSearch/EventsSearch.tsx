import React, { useCallback, useState } from 'react';
import moment from 'moment';

import { ButtonLink } from '../../common';
import styles from './EventsSearch.module.css';

const YEARS = ['2021', '2022'];
const MONTHS = moment.months().map((m, i) => ({ value: i + 1, text: m }));
const DEFAULT_YEAR = '2021';
const DEFAULT_MONTH_VALUE = '1';

interface EventsSearchProps {
  onSearch: (year: string, month: string) => void;
}

export const EventsSearch: React.FC<EventsSearchProps> = ({ onSearch }) => {
  const [year, setYear] = useState(DEFAULT_YEAR);
  const [month, setMonth] = useState(DEFAULT_MONTH_VALUE);

  const submitHandler = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      onSearch(year, month);
    },
    [year, month, onSearch]
  );

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.controls}>
        <div className={styles.control}>
          <label htmlFor='year'>Year</label>
          <select name='year' id='year' value={year} onChange={(e) => setYear(e.target.value)}>
            {YEARS.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.control}>
          <label htmlFor='month'>Month</label>
          <select id='month' value={month} onChange={(e) => setMonth(e.target.value)}>
            {MONTHS.map((m) => (
              <option key={m.value} value={m.value}>
                {m.text}
              </option>
            ))}
          </select>
        </div>
      </div>
      <ButtonLink>Find Events</ButtonLink>
    </form>
  );
};
