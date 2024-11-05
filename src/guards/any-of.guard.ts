import { Injectable, CanActivate, ExecutionContext, Type } from '@nestjs/common';

@Injectable()
export class AnyOfGuards implements CanActivate {
  constructor(private readonly guards: Type<CanActivate>[]) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const guardPromises = this.guards.map((Guard) => {
      const guard = new Guard(); // Instantiate each guard
      return guard.canActivate(context);
    });

    // Run all guards concurrently and check if any of them return true
    const results = await Promise.all(guardPromises);
    return results.some((result) => result === true);
  }
}