import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { Guard1 } from './guards/guard1.guard';
import { Guard2 } from './guards/guard2.guard';
import { Guard3 } from './guards/guard3.guard';

@Module({
  controllers: [AppController],
  providers: [Guard1, Guard2, Guard3],
})
export class AppModule {}
