import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class Guard2 implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    console.log('Guard2 executed');
    // For testing, you can set this to true or false
    throw new Error('Guard3 failed');  }
}
