import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
    @UseGuards(LocalAuthGuard)
    @Post("auth/login")
    async login(@Request() req){
      return req.user
    }
}
