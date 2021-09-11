import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { ButtonLink, Alert } from '../../views/common';
import { EVENT_IMAGES_MAP } from '../../constants';
import { EventLogistics, EventSummary, EventContent, Comments } from '../../views/containers';
import { getEventById, getFeaturedEvents } from '../../utils';
import { Event, EventId } from '../../types';

interface EventDetailPageProps {
  event?: Event | null;
}

const EventDetailPage: NextPage<EventDetailPageProps> = ({ event }) => {
  const router = useRouter();

  if (!event) {
    return (
      <>
        <Alert variant='info'>
          <p>Loading...</p>
        </Alert>
        <div className='center'>
          <ButtonLink onClick={() => router.back()}>Back</ButtonLink>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>NextEvents | {event.title}</title>
        <meta name='description' content={event.description} />
      </Head>
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
      <Comments eventId={event.id} />
    </>
  );
};

type UrlParams = { eventId?: EventId };

export const getStaticProps: GetStaticProps<EventDetailPageProps, UrlParams> = async ({ params }) => {
  const event = await getEventById(params?.eventId);

  return {
    props: {
      event: event || null,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths<UrlParams> = async () => {
  const events = await getFeaturedEvents();

  const paths: { params: UrlParams }[] = events.map((event) => ({ params: { eventId: event.id } }));

  return {
    paths,
    fallback: true,
  };
};

export default EventDetailPage;
