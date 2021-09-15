import type { NextApiHandler } from 'next';

interface ReqData {
  email?: string;
}

interface ResData {
  message: string;
}

const handler: NextApiHandler<ResData> = (req, res) => {
  if (req.method === 'POST') {
    const { email } = req.body as ReqData;

    if (!email || !email.includes('@')) {
      res.status(422).json({ message: 'Invalid email address.' });
      return;
    }

    res.status(201).json({ message: 'Signed up!' });
  }
};

export default handler;
