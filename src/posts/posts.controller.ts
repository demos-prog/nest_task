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

@Controller('posts')
@UseGuards(RolesGuard)
export class PostController {
  constructor(private readonly postService: PostsService) {}

  @Roles(Role.User)
  @Post()
  async create(@Body() post: Prisma.PostCreateInput) {
    return this.postService.create(post);
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
  async update(@Param('id') id: string, @Body() post: Prisma.PostCreateInput) {
    return this.postService.update({
      where: { id: parseInt(id) },
      data: post,
    });
  }

  @Roles(Role.User)
  @Delete(':id')
  async deleteById(@Param('id') id: string) {
    return this.postService.deleteById(parseInt(id));
  }
}
