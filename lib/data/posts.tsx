import { PrismaClient } from '@prisma/client'

import { NewPost } from '../types'

class Posts {
  prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async all() {
    return (await this.prisma.post.findMany()).map(
      post => ({ ...post, createdAt: post.createdAt.toString() })
    );
  }

  create(attrs: NewPost) {
    return this.prisma.post.create({
      data: attrs,
    });
  }
}

export default new Posts();
