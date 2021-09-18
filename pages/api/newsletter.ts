import type { NextApiHandler } from 'next';
import { MongoClient } from 'mongodb';

interface ReqData {
  email?: string;
}

interface ResData {
  message: string;
}

const handler: NextApiHandler<ResData> = async (req, res) => {
  try {
    if (req.method === 'POST') {
      const { email } = req.body as ReqData;

      if (!email || !email.includes('@')) {
        res.status(422).json({ message: 'Invalid email address.' });
        return;
      }

      const client = await MongoClient.connect(process.env.MONGO_URI);
      const db = client.db();
      await db.collection('newsletter').insertOne({ email });
      client.close();

      res.status(201).json({ message: 'Signed up!' });
    }
  } catch (error) {
    console.log(error);
  }
};

export default handler;
