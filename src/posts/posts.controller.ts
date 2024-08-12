import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { Prisma } from '@prisma/client';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostsService) {}

  @Post()
  async createPost(@Body() post: Prisma.PostCreateInput) {
    return this.postService.createPost(post);
  }

  @Get()
  async getAllPosts() {
    return this.postService.getAllPosts();
  }

  @Get(':id')
  async getPostById(@Param('id') id: string) {
    return this.postService.getPostById(parseInt(id));
  }

  @Put(':id')
  async updatePost(
    @Param('id') id: string,
    @Body() post: Prisma.PostCreateInput,
  ) {
    return this.postService.updatePost({
      where: { id: parseInt(id) },
      data: post,
    });
  }

  @Delete(':id')
  async deletePostById(@Param('id') id: string) {
    return this.postService.deletePostById(parseInt(id));
  }
}
