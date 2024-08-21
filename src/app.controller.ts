import { Controller, Get } from '@nestjs/common';
import { Public } from './decorators/public.factory';

@Controller()
export class AppController {
  @Public()
  @Get()
  async hello() {
    return 'hello';
  }
}
