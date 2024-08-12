import { Injectable } from '@nestjs/common';
import { Post, Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async createPost(data: Prisma.PostCreateInput): Promise<Post> {
    return this.prisma.post.create({ data });
  }

  async getAllPosts(): Promise<Post[]> {
    return this.prisma.post.findMany();
  }

  async getPostById(id: number): Promise<Post> {
    return this.prisma.post.findUnique({
      where: { id },
    });
  }

  async getPostsByUserId(userId: number): Promise<Post[]> {
    return this.prisma.post.findMany({
      where: { userId },
    });
  }

  async updatePost(params: {
    where: Prisma.PostWhereUniqueInput;
    data: Prisma.PostUpdateInput;
  }): Promise<Post> {
    const { data, where } = params;
    return this.prisma.post.update({
      where,
      data,
    });
  }

  async deletePostById(id: number): Promise<Post> {
    return this.prisma.post.delete({
      where: { id: id },
    });
  }
}
