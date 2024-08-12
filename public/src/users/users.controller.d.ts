import { UsersService } from './users.service';
import { Prisma, User } from '@prisma/client';
export declare class UserController {
    private readonly userService;
    constructor(userService: UsersService);
    getAllUsers(): Promise<User[]>;
    getUserById(id: string): Promise<User | null>;
    updateUser(id: string, data: Prisma.UserUpdateInput): Promise<User | null>;
    deleteUser(id: string): Promise<{
        id: number;
        email: string;
        password: string;
        role: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
