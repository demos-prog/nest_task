import { AuthService } from './auth.service';
import { Prisma } from '@prisma/client';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    createUser(userData: Prisma.UserCreateInput): Promise<{
        id: number;
        email: string;
        password: string;
        role: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    loginUser(loginData: {
        email: string;
        password: string;
    }): Promise<{
        access_token: string;
    }>;
}
