import { useCallback } from 'react';
import { NextPage, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import { EventList, EventsSearch } from '../../views/containers';
import { getAllEvents } from '../../utils';
import { Event } from '../../types';

interface EventsPageProps {
  allEvents: Event[];
}

const EventsPage: NextPage<EventsPageProps> = ({ allEvents }) => {
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
      <EventList items={allEvents} />
    </>
  );
};

export const getStaticProps: GetStaticProps<EventsPageProps> = async () => {
  const allEvents = await getAllEvents();

  return {
    props: {
      allEvents,
    },
    revalidate: 60,
  };
};

export default EventsPage;
