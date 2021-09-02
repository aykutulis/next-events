import { NextPage } from 'next';

import { getFeaturedEvents } from '../dummyData';
import { EventList } from '../views';

const featuredEvents = getFeaturedEvents();

const HomePage: NextPage = () => {
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
};

export default HomePage;
