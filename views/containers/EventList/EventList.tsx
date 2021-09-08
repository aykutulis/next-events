import React from 'react';

import { Event } from '../../../types';
import { EventItem } from './EventItem';
import styles from './EventList.module.css';

interface EventListProps {
  items?: Event[];
}

export const EventList: React.FC<EventListProps> = ({ items }) => {
  return (
    <ul className={styles.list}>
      {items?.map((item) => (
        <EventItem key={item.id} item={item} />
      ))}
    </ul>
  );
};
