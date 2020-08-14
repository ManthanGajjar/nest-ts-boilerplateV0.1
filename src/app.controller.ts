import { Controller, Get, Post, } from '@nestjs/common';
import { AppService } from './app.service';

// default route will be home here
@Controller('home')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // localhost:3000/home
  @Get()
    getHello(): string {
    return this.appService.getHello();
  }

  @Post('/')
  postHello(req, res) {
      console.log(req);
      return { msg: 'done' };
  }
}
