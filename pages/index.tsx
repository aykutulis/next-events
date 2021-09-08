import { NextPage, GetStaticProps } from 'next';

import { getFeaturedEvents } from '../utils';
import { EventList } from '../views/containers';
import { Event } from '../types';

interface HomePageProps {
  featuredEvents: Event[];
}

const HomePage: NextPage<HomePageProps> = ({ featuredEvents }) => {
  return (
    <div>
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
