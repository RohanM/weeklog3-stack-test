import { NextApiRequest, NextApiResponse } from 'next'
import Posts from '../../lib/data/posts'


export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const post = await Posts.create(req.body);

    res.statusCode = 200;
    res.json({ post });
  }
};
