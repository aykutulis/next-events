import { useCallback } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

import { EventList, EventsSearch } from '../../views/containers';
import { getAllEvents } from '../../dummyData';

const ALL_EVENTS = getAllEvents();

const EventsPage: NextPage = () => {
  const router = useRouter();

  const searchHandler = useCallback(
    (year: string, month: string) => {
      const fullPath = `/events/${year}/${month}`;

      router.push(fullPath);
    },
    [router]
  );

  return (
    <>
      <EventsSearch onSearch={searchHandler} />
      <EventList items={ALL_EVENTS} />
    </>
  );
};

export default EventsPage;
