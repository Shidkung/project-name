import { Controller, Get , HttpCode } from '@nestjs/common';
import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/check")
  getHello2(): string {
    return this.appService.getHello2();
  }
}
