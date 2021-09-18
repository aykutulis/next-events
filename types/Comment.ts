import { ObjectId } from 'bson';

export interface Comment {
  _id?: string;
  email: string;
  name: string;
  text: string;
  eventId?: string;
}

export interface CommentServer {
  _id?: ObjectId;
  email: string;
  name: string;
  text: string;
  eventId?: string;
}
