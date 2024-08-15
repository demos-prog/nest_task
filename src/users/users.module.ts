import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserController } from './users.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  providers: [UsersService, PrismaService],
  controllers: [UserController],
})
export class UserModule {}
