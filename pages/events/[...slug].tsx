import { useMemo } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

import { ButtonLink, ErrorAlert } from '../../views/common';
import { EventList, ResultsTitle } from '../../views/containers';
import { useDateFilterFromSlug } from '../../hooks';
import { getFilteredEvents } from '../../dummyData';

const FilteredEventsPage: NextPage = () => {
  const router = useRouter();
  const { yearFilter, monthFilter } = useDateFilterFromSlug(router.query.slug);
  const filteredEvents = useMemo(() => getFilteredEvents(yearFilter, monthFilter), [yearFilter, monthFilter]);

  if (!yearFilter || !monthFilter) {
    return (
      <>
        <ErrorAlert>
          <p className='center'>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className='center'>
          <ButtonLink href='/events'>Show All Events</ButtonLink>
        </div>
      </>
    );
  }

  if (filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p className='center'>No event found in this filter!</p>
        </ErrorAlert>
        <div className='center'>
          <ButtonLink href='/events'>Show All Events</ButtonLink>
        </div>
      </>
    );
  }

  return (
    <>
      <ResultsTitle date={new Date(yearFilter, monthFilter - 1)} />
      <EventList items={filteredEvents} />
    </>
  );
};

export default FilteredEventsPage;
