import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class Guard3 implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    console.log('Guard3 executed');
    throw new Error('Guard3 failed');
  }
}
