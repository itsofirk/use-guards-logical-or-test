import { Injectable, CanActivate, ExecutionContext, Type } from '@nestjs/common';

@Injectable()
export class AnyOfGuards implements CanActivate {
  constructor(private readonly guards: Type<CanActivate>[]) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const guardPromises = this.guards.map((Guard) => (async () => {
      const guard = new Guard();
      try {
        const result = await guard.canActivate(context);
        if (result) {
          return true; // Resolve with true if the guard passes
        }
        throw false; // Reject with false if the guard fails
      } catch (error) {
        throw error; // Reject with error if the guard throws an error
      }
    })());
    try {
      await promiseAny(guardPromises);
      return true;
    } catch (error) {
        return false; // All guards returned false
    }
  }
}

function promiseAny(promises: Promise<boolean>[]): Promise<boolean> {
  return new Promise((resolve, reject) => {
    let rejections = 0;
    const errors: Error[] = [];

    promises.forEach(promise => {
      promise.then(resolve).catch(error => {
        errors.push(error);
        rejections++;
        if (rejections === promises.length) {
          reject(new Error(`All promises were rejected: ${errors.join(', ')}`));
        }
      });
    });
  });
}