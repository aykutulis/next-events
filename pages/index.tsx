import { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';

import { getFeaturedEvents } from '../utils';
import { EventList, NewsletterRegistration } from '../views/containers';
import { Event } from '../types';

interface HomePageProps {
  featuredEvents: Event[];
}

const HomePage: NextPage<HomePageProps> = ({ featuredEvents }) => {
  return (
    <div>
      <Head>
        <title>NextEvents</title>
        <meta name='description' content='Find a lot of great events that allow you to evolve...' />
      </Head>
      <NewsletterRegistration />
      <EventList items={featuredEvents} />
    </div>
  );
};

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      featuredEvents,
    },
    revalidate: 1800,
  };
};

export default HomePage;
