import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  app.use(cookieParser());
  app.enableCors({
    origin: configService.get<string>('client'),
    credentials: true,
  });
  const logger = new Logger();
  const port = configService.get<number>('server.port');
  await app.listen(port);
  logger.verbose(`Listening On Port ${port}`);
}
bootstrap();
