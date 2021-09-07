export const EVENT1_ID: EventId = 'e1';
export const EVENT2_ID: EventId = 'e2';
export const EVENT3_ID: EventId = 'e3';

export type EventId = 'e1' | 'e2' | 'e3';

export interface EventFromDb {
  title: string;
  description: string;
  location: string;
  date: string;
  isFeatured: boolean;
}

export interface Event extends EventFromDb {
  id: EventId;
}
