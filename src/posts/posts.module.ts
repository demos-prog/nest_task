import { Module } from '@nestjs/common';
import { PostsService as PostsService } from './posts.service';
import { PostController } from './posts.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  providers: [PostsService, PrismaService],
  controllers: [PostController],
  exports: [PostsService],
})
export class PostModule {}
