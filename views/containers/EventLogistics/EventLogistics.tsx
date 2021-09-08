import React, { useMemo } from 'react';
import Image from 'next/image';

import { AddressIcon, DateIcon } from '../../common';
import { LogisticsItem } from './LogisticsItem';
import { StringFormatter } from '../../../utils';
import styles from './EventLogistics.module.css';

interface EventLogisticsProps {
  date: string;
  address: string;
  image: StaticImageData | string;
  imageAlt: string;
}

export const EventLogistics: React.FC<EventLogisticsProps> = ({ address, date, image, imageAlt }) => {
  const humanReadableDate = useMemo(() => StringFormatter.humanReadableDate(date), [date]);
  const addressText = useMemo(() => StringFormatter.formattedAddress(address), [address]);

  return (
    <section className={styles.logistics}>
      <div className={styles.image}>
        <Image src={image} alt={imageAlt} width={200} height={200} />
      </div>
      <ul className={styles.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
};
