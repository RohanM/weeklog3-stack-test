import { NextApiRequest, NextApiResponse } from 'next'
import Posts from '../../lib/data/posts'


export default async (req: NextApiRequest, res: NextApiResponse): void => {
  if (req.method === "POST") {
    try {
      const post = await Posts.create(req.body);

      res.statusCode = 200;
      res.json({ post });
    } catch (error) {
      res.statusCode = 422;
    }
  }
};
