import { useMemo } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

import { EventLogistics, EventSummary, EventContent } from '../../views/containers';
import { getEventById, EVENT_IMAGES_MAP } from '../../dummyData';

const EventDetailPage: NextPage = () => {
  const router = useRouter();

  const event = useMemo(() => getEventById(router.query.eventId as string), [router.query.eventId]);

  if (!event) {
    return <p>No event found!</p>;
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        imageAlt={event.title}
        image={EVENT_IMAGES_MAP[event.id]}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export default EventDetailPage;
