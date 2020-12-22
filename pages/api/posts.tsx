import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'


export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const prisma = new PrismaClient();

    const post = await prisma.post.create({
      data: req.body,
    });

    res.statusCode = 200;
    res.json({ post });
  }
};
