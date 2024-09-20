import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async update(params?: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<User> {
    const { where, data } = params;
    return this.prisma.user.update({
      where,
      data,
    });
  }

  async delete(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({
      where,
    });
  }

  async getById(userId: number): Promise<User> {
    return this.prisma.user.findUnique({
      where: { id: userId },
      include: { posts: true },
    });
  }

  async getByEmail(userEmail: string): Promise<User> {
    return this.prisma.user.findUnique({
      where: { email: userEmail },
      include: { posts: true },
    });
  }

  async getAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }
}
