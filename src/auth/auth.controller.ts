import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Prisma } from '@prisma/client';
import { Public } from './decorator.factory';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('register')
  async createUser(@Body() userData: Prisma.UserCreateInput) {
    return this.authService.createUser(userData);
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async loginUser(@Body() loginData: { email: string; password: string }) {
    const { email, password } = loginData;
    return this.authService.loginUser(email, password);
  }
}
