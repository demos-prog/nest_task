import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Prisma, User } from '@prisma/client';
import { RolesGuard } from '../guards/roles.guard';
import { Roles } from '../decorators/roles.decorator';
import { Role } from '../constants';

@Controller('users')
@UseGuards(RolesGuard)
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Roles(Role.Admin)
  @Get()
  async getAll(): Promise<User[]> {
    return this.userService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<User | null> {
    const userId = parseInt(id);
    if (isNaN(userId)) {
      return null;
    }
    return this.userService.getById(userId);
  }

  @Get('email/:email')
  async getByEmail(@Param('email') email: string): Promise<User | null> {
    return this.userService.getByEmail(email);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: Prisma.UserUpdateInput,
  ): Promise<User | null> {
    const userId = parseInt(id);
    if (isNaN(userId)) {
      return null;
    }
    const updatedUser = await this.userService.update({
      where: { id: userId },
      data: data,
    });
    return updatedUser;
  }

  @Roles(Role.Admin)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    const userId = parseInt(id);
    if (isNaN(userId)) {
      return null;
    }
    return this.userService.delete({ id: userId });
  }
}
