import { useMemo } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import useSWR from 'swr';

import { ButtonLink, Alert } from '../../views/common';
import { EventList, ResultsTitle } from '../../views/containers';
import { useDateFilterFromSlug } from '../../hooks';
import { getFilteredEvents, ENDPOINT, DbResponse, parseDbResponse } from '../../utils';
import { Event } from '../../types';

/* interface FilteredEventsPageProps {
  filteredEvents?: Event[];
  hasError: boolean;
  date?: { year: number; month: number };
} */

const FilteredEventsPage: NextPage = () => {
  const router = useRouter();
  const { yearFilter, monthFilter } = useDateFilterFromSlug(router.query.slug);
  const { data, error } = useSWR<DbResponse, Error>(
    `${ENDPOINT}/events.json`,
    (input: RequestInfo, init: RequestInit) => fetch(input, init).then((res) => res.json())
  );
  const filteredEvents = useMemo<Event[] | undefined>(() => {
    return getFilteredEvents({ year: yearFilter, month: monthFilter }, parseDbResponse(data));
  }, [yearFilter, monthFilter, data]);

  if (!error && !data) {
    return (
      <Alert variant='info'>
        <p className='center'>Loading</p>
      </Alert>
    );
  }

  if (error || !yearFilter || !monthFilter) {
    return (
      <>
        <Alert variant='error'>
          <p className='center'>Invalid filter. Please adjust your values!</p>
        </Alert>
        <div className='center'>
          <ButtonLink href='/events'>Show All Events</ButtonLink>
        </div>
      </>
    );
  }

  if (filteredEvents?.length === 0) {
    return (
      <>
        <Alert variant='warning'>
          <p className='center'>No event found in this filter!</p>
        </Alert>
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

/* export const getServerSideProps: GetServerSideProps<FilteredEventsPageProps> = async ({ params }) => {
  const slug = params?.slug;

  if (!slug || !Array.isArray(slug) || !YEARS.includes(+slug[0]) || !MONTHS.some((m) => m.value === +slug[1])) {
    return {
      props: {
        hasError: true,
      },
    };
  }

  const [year, month] = slug.map((s) => parseInt(s));

  const allEvents = await getAllEvents();
  const filteredEvents = getFilteredEvents({ year, month }, allEvents);

  return {
    props: {
      filteredEvents,
      hasError: false,
      date: {
        year,
        month,
      },
    },
  };
}; */

export default FilteredEventsPage;
