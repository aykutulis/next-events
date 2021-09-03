import React, { useMemo } from 'react';
import Image from 'next/image';
import moment from 'moment';

import { DummyEvent, EVENT_IMAGES_MAP } from '../../../../dummyData';
import { AddressIcon, ArrowRightIcon, ButtonLink, DateIcon } from '../../../common';
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
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <ButtonLink href={`/events/${item.id}`}>
            <span>Explore Event</span>
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </ButtonLink>
        </div>
      </div>
    </li>
  );
};
