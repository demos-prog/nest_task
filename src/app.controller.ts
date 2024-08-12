import { Controller, Get } from '@nestjs/common';
import { Public } from './auth/decorator.factory';

@Controller()
export class AppController {
  @Public()
  @Get()
  async hello() {
    return 'hello';
  }
}
