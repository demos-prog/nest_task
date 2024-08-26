import { Injectable } from '@nestjs/common';
import { Post, Prisma } from '@prisma/client';
import { GetPostsFilterDto } from 'src/dto/GetPostsFilterDto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.PostCreateInput): Promise<Post> {
    return this.prisma.post.create({ data });
  }

  async getAll(_queryParams: GetPostsFilterDto): Promise<Post[]> {
    const params: Prisma.PostFindManyArgs = {};
    if (_queryParams.userId) {
      params.where = { userId: +_queryParams.userId };
    }
    if (_queryParams.title) {
      params.where = { title: { contains: _queryParams.title } };
    }
    if (_queryParams.skip) params.skip = +_queryParams.skip;

    if (_queryParams.take) params.take = +_queryParams.take;

    return this.prisma.post.findMany(params);
  }

  async getById(id: number): Promise<Post> {
    return this.prisma.post.findUnique({
      where: { id },
    });
  }

  async getByUserId(userId: number): Promise<Post[]> {
    return this.prisma.post.findMany({
      where: { userId },
    });
  }

  async update(params: {
    where: Prisma.PostWhereUniqueInput;
    data: Prisma.PostUpdateInput;
  }): Promise<Post> {
    const { data, where } = params;
    return this.prisma.post.update({
      where,
      data,
    });
  }

  async deleteById(id: number): Promise<Post> {
    return this.prisma.post.delete({
      where: { id: id },
    });
  }
}
