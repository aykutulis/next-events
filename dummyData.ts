import e1 from './assets/e1.jpg';
import e2 from './assets/e2.jpg';
import e3 from './assets/e3.jpg';

export type EventId = 'e1' | 'e2' | 'e3';

export const EVENT1_ID: EventId = 'e1';
export const EVENT2_ID: EventId = 'e2';
export const EVENT3_ID: EventId = 'e3';

export const EVENT_IMAGES_MAP = {
  [EVENT1_ID]: e1,
  [EVENT2_ID]: e2,
  [EVENT3_ID]: e3,
};

export interface DummyEvent {
  id: EventId;
  title: string;
  description: string;
  location: string;
  date: string;
  isFeatured: boolean;
}

const DUMMY_EVENTS: DummyEvent[] = [
  {
    id: EVENT1_ID,
    title: 'Programming for everyone',
    description:
      'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
    location: 'Somestreet 25, 12345 San Somewhereo',
    date: '2021-05-12',
    isFeatured: false,
  },
  {
    id: EVENT2_ID,
    title: 'Networking for introverts',
    description:
      "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
    location: 'New Wall Street 5, 98765 New Work',
    date: '2021-05-30',
    isFeatured: true,
  },
  {
    id: EVENT3_ID,
    title: 'Networking for extroverts',
    description:
      'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
    location: 'My Street 12, 10115 Broke City',
    date: '2022-04-10',
    isFeatured: true,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter: { year: number; month: number }) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });

  return filteredEvents;
}

export function getEventById(id: string) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}
