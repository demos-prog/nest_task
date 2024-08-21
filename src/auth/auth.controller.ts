import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Prisma } from '@prisma/client';
import { Public } from '../decorators/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('register')
  async auth(@Body() userData: Prisma.UserCreateInput) {
    return this.authService.auth(userData);
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Body() loginData: { email: string; password: string }) {
    const { email, password } = loginData;
    return this.authService.login(email, password);
  }

  @Public()
  @Get(':access_token')
  async verifyAccessToken(
    @Param('access_token') access_token: string,
  ): Promise<boolean> {
    return this.authService.verifyAccessToken(access_token);
  }
}
