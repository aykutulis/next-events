import axios from 'axios';
import moment from 'moment';

import { Event, EventFromDb, EventId } from '../types';

export const FIREBASE_ENDPOINT = 'https://next-events-4b226-default-rtdb.firebaseio.com';
export const NEXT_ENDPOINT = '/api';

const firebaseClient = axios.create({
  baseURL: FIREBASE_ENDPOINT,
});

const nextClient = axios.create({
  baseURL: NEXT_ENDPOINT,
});

export interface DbResponse {
  [key: string]: EventFromDb;
}

export const parseDbResponse = (data: DbResponse | undefined): Event[] => {
  if (!data) return [];

  return Object.keys(data).map<Event>((key) => {
    return {
      id: key as EventId,
      ...data[key],
    };
  });
};

export const getAllEvents = async () => {
  const { data } = await firebaseClient.get<DbResponse>('/events.json');

  const events = parseDbResponse(data);

  return events;
};

export const getFeaturedEvents = async () => {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
};

export const getEventById = async (id: EventId | undefined): Promise<Event | undefined> => {
  if (!id) return undefined;

  const allEvents = await getAllEvents();
  return allEvents.find((event) => event.id === id);
};

export const getFilteredEvents = (date: { year?: number; month?: number }, allEvents: Event[]): Event[] | undefined => {
  if (!date.year || !date.month) {
    return undefined;
  }

  const filteredEvents = allEvents.filter((event) => {
    const eventDate = moment(event.date);
    return eventDate.year() === date.year && eventDate.month() === date.month! - 1;
  });

  return filteredEvents;
};

export const postNewsletter = async (email: string) => {
  const { data } = await nextClient.post<{ message: string }>('/newsletter', { email });
  return { data };
};
