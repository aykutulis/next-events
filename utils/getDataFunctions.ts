import axios from 'axios';

import { Event, EventFromDb, EventId } from '../types';

const ENDPOINT = 'https://next-events-4b226-default-rtdb.firebaseio.com';

const client = axios.create({
  baseURL: ENDPOINT,
});

export const getAllEvents = async () => {
  const { data } = await client.get<{ [key: string]: EventFromDb }>('/events.json');

  const events = Object.keys(data).map<Event>((key) => {
    return {
      id: key as EventId,
      ...data[key],
    };
  });

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
