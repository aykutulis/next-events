import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';

import { ButtonLink, ErrorAlert } from '../../views/common';
import { EVENT_IMAGES_MAP } from '../../constants';
import { EventLogistics, EventSummary, EventContent } from '../../views/containers';
import { getEventById, getAllEvents } from '../../utils';
import { Event, EventId } from '../../types';

interface EventDetailPageProps {
  event?: Event;
}

const EventDetailPage: NextPage<EventDetailPageProps> = ({ event }) => {
  const router = useRouter();

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

type UrlParams = { eventId?: EventId };

export const getStaticProps: GetStaticProps<EventDetailPageProps, UrlParams> = async ({ params }) => {
  const event = await getEventById(params?.eventId);

  return {
    props: {
      event,
    },
  };
};

export const getStaticPaths: GetStaticPaths<UrlParams> = async () => {
  const events = await getAllEvents();

  const paths: { params: UrlParams }[] = events.map((event) => ({ params: { eventId: event.id } }));

  return {
    paths,
    fallback: false,
  };
};

export default EventDetailPage;
