import { PostsService } from './posts.service';
import {
  Controller,
  UseGuards,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { RolesGuard } from 'src/guards/roles.guard';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from 'src/constants';
import { PostCreateDto } from 'src/dto/PostCreateDto';

@Controller('posts')
@UseGuards(RolesGuard)
export class PostController {
  constructor(private readonly postService: PostsService) {}

  @Roles(Role.User)
  @Post()
  async create(@Body() post: PostCreateDto) {
    const postInput: Prisma.PostCreateInput = {
      ...post,
      user: { connect: { id: post.user } },
    };
    return this.postService.create(postInput);
  }

  @Get()
  async getAll() {
    return this.postService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.postService.getById(parseInt(id));
  }

  @Roles(Role.User)
  @Put(':id')
  async update(@Param('id') id: string, @Body() post: PostCreateDto) {
    const postUpdateInput: Prisma.PostUpdateInput = {
      ...post,
      user: { connect: { id: post.user } },
    };
    return this.postService.update({
      where: { id: parseInt(id) },
      data: postUpdateInput,
    });
  }

  @Roles(Role.User)
  @Delete(':id')
  async deleteById(@Param('id') id: string) {
    return this.postService.deleteById(parseInt(id));
  }
}
