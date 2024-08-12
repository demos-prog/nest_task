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
import { Role } from 'src/auth/role.enum';
import { Roles } from 'src/auth/roles.decorator';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UsersService) {}

  // @UseGuards(AuthGuard)
  @Roles(Role.Admin)
  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  @UseGuards(AuthGuard)
  @Roles(Role.Admin, Role.User)
  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<User | null> {
    const userId = parseInt(id);
    if (isNaN(userId)) {
      return null;
    }
    return this.userService.getUserById(userId);
  }

  @UseGuards(AuthGuard)
  @Roles(Role.Admin, Role.User)
  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() data: Prisma.UserUpdateInput,
  ): Promise<User | null> {
    const userId = parseInt(id);
    if (isNaN(userId)) {
      return null;
    }
    const updatedUser = await this.userService.updateUser({
      where: { id: userId },
      data: data,
    });
    return updatedUser;
  }

  @UseGuards(AuthGuard)
  @Roles(Role.Admin, Role.User)
  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    const userId = parseInt(id);
    if (isNaN(userId)) {
      return null;
    }
    return this.userService.deleteUser({ id: userId });
  }
}
