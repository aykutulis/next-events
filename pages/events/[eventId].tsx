import { useMemo } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

import { ButtonLink, ErrorAlert } from '../../views/common';
import { EventLogistics, EventSummary, EventContent } from '../../views/containers';
import { getEventById, EVENT_IMAGES_MAP, DummyEvent } from '../../dummyData';

const EventDetailPage: NextPage = () => {
  const router = useRouter();

  const event = useMemo<DummyEvent | undefined>(
    () => getEventById(router.query.eventId as string | undefined),
    [router.query.eventId]
  );

  if (!event) {
    return (
      <>
        <ErrorAlert>
          <p>No event found!</p>
        </ErrorAlert>
        <div className='center'>
          <ButtonLink onClick={() => router.back()}>Back</ButtonLink>
        </div>
      </>
    );
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
