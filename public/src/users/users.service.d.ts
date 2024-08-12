import { PrismaService } from 'prisma/prisma.service';
import { Prisma, User } from '@prisma/client';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    updateUser(params?: {
        where: Prisma.UserWhereUniqueInput;
        data: Prisma.UserUpdateInput;
    }): Promise<User>;
    deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User>;
    getUserById(userId: number): Promise<User>;
    getUserByEmail(userEmail: string): Promise<User>;
    getAllUsers(): Promise<User[]>;
}
