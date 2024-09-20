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
import { Public } from '../decorators/public.decorator';
import { CreateUserDto } from '../dto/CreateUserDto';
import { LoginUserDto } from '../dto/LoginUserDto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('register')
  async auth(@Body() userData: CreateUserDto) {
    return this.authService.auth(userData);
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Body() loginData: LoginUserDto) {
    return this.authService.login(loginData);
  }

  @Public()
  @Get(':access_token')
  async verifyAccessToken(
    @Param('access_token') access_token: string,
  ): Promise<boolean> {
    return this.authService.verifyAccessToken(access_token);
  }
}
