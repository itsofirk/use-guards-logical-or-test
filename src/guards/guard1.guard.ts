import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class Guard1 implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    console.log('Guard1 executed');
    return true; // This guard always allows access
  }
}
