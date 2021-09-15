import type { NextApiHandler } from 'next';

import { CommentFromServer, Comment } from '../../../types';

interface ReqData {
  comment: Comment;
}

interface ResData {
  message?: string;
  comment?: CommentFromServer;
  comments?: CommentFromServer[];
}

const handler: NextApiHandler<ResData> = (req, res) => {
  if (req.method === 'POST') {
    const {
      comment: { email, name, text },
    } = req.body as ReqData;

    if (!email || !email.includes('@') || !name || !name.trim() || !text || !text.trim()) {
      res.status(422).json({ message: 'Invalid input.' });
      return;
    }

    const newComment: CommentFromServer = {
      id: Date.now().toString(),
      email,
      name,
      text,
    };

    res.status(201).json({ message: 'Comment added.', comment: newComment });
  }

  if (req.method === 'GET') {
    const dummyList: CommentFromServer[] = [
      { id: 'c1', name: 'Alan', email: 'alan@turing.com', text: 'The first comment!' },
      { id: 'c2', name: 'Sigmund', email: 'sigmund@freud.com', text: 'The second comment!' },
    ];

    res.status(200).json({ comments: dummyList });
  }
};

export default handler;
