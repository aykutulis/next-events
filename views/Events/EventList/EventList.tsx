import React from 'react';

import { DummyEvent } from '../../../dummyData';
import { EventItem } from '../EventItem';
import styles from './EventList.module.css';

interface EventListProps {
  items: DummyEvent[];
}

export const EventList: React.FC<EventListProps> = ({ items }) => {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <EventItem key={item.id} item={item} />
      ))}
    </ul>
  );
};
