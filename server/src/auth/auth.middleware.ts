import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request & { user: string }, res: Response, next: NextFunction) {
    console.log('Request...');
    next();
  }
}
