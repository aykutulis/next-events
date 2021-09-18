import type { NextApiHandler } from 'next';
import { MongoClient } from 'mongodb';

import { CommentServer } from '../../../types';

interface ReqData {
  comment: CommentServer;
}

interface ResData {
  message?: string;
  comment?: CommentServer;
  comments?: CommentServer[];
}

const handler: NextApiHandler<ResData> = async (req, res) => {
  const client = await MongoClient.connect(process.env.MONGO_URI);
  if (req.method === 'POST') {
    const {
      comment: { email, name, text },
    } = req.body as ReqData;

    if (!email || !email.includes('@') || !name || !name.trim() || !text || !text.trim()) {
      res.status(422).json({ message: 'Invalid input.' });
      return;
    }

    const newComment: CommentServer = {
      email,
      name,
      text,
      eventId: req.query.eventId as string,
    };

    const db = client.db();
    const result = await db.collection('comments').insertOne(newComment);
    newComment._id = result.insertedId;

    res.status(201).json({ message: 'Comment added.', comment: newComment });
  }

  if (req.method === 'GET') {
    const db = client.db();
    const comments = await db.collection<CommentServer>('comments').find().sort({ _id: -1 }).toArray();

    res.status(200).json({ comments });
  }
  client.close();
};

export default handler;
