import { PostsService } from './posts.service';
import { Role } from 'src/users/role.enum';
import { Roles } from 'src/users/roles.decorator';
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
  async deletePostById(@Param('id') id: string) {
    return this.postService.deleteById(parseInt(id));
  }
}
