import { Controller, Get } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    // private readonly configModule: ConfigModule,
  ) {}

  @Get()
  getHello(): string {
    return 'Helo'
    
  }
}
