import { Controller, Get, UseGuards } from '@nestjs/common';
import { Guard1 } from './guards/guard1.guard';
import { Guard2 } from './guards/guard2.guard';
import { Guard3 } from './guards/guard3.guard';
import { AnyOfGuards } from './guards/any-of.guard';

@Controller()
export class AppController {
  @Get('test')
  @UseGuards(Guard1, Guard2 || Guard3)
  testEndpoint() {
    return { message: 'Access granted!' };
  }
}