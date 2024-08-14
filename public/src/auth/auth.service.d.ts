import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    createUser(data: Prisma.UserCreateInput): Promise<User>;
    loginUser(email: string, password: string): Promise<{
        access_token: string;
    }>;
    verifyAccessToken(token: string): Promise<boolean>;
}
