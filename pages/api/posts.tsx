import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'


export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const prisma = new PrismaClient();

    const title = req.body.post;

    const post = await prisma.post.create({
      data: { title },
    });

    res.statusCode = 200;
    res.json({ post });
  }
};
