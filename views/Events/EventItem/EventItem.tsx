import React, { useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import moment from 'moment';

import { DummyEvent, EVENT_IMAGES_MAP } from '../../../dummyData';
import styles from './EventItem.module.css';

interface EventItemProps {
  item: DummyEvent;
}

export const EventItem: React.FC<EventItemProps> = ({ item }) => {
  const humanReadableDate = useMemo(() => moment(item.date).format('dddd, MMMM Do YYYY'), [item.date]);

  const formattedAddress = useMemo(() => item.location.replace(', ', '\n'), [item.location]);

  return (
    <li className={styles.item}>
      <Image src={EVENT_IMAGES_MAP[item.id]} alt={item.title} />
      <div className={styles.content}>
        <div>
          <h2>{item.title}</h2>
          <div className={styles.date}>
            <time>{humanReadableDate}</time>
          </div>
          <div className={styles.address}>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Link href={`/events/${item.id}`}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
};
