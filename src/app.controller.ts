import { Controller, Get } from '@nestjs/common';

@Controller('/')
export class AppController {
  @Get()
  getHello(): string {
    return 'Back-end Challenge 🏅 2021 - Space Flight News';
  }
}
