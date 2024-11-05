import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class Guard3 implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    console.log('Guard3 executed');
    // For testing, you can set this to true or false
    return false; // Change to true to test behavior
  }
}
