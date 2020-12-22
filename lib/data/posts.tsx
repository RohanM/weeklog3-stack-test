import { PrismaClient } from '@prisma/client'

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
}

export default new Posts();
