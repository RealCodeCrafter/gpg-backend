import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import * as express from 'express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  app.use('/upload', express.static(join(__dirname, '..', 'upload')));
  app.use(express.static(join(__dirname, '..', 'upload')));

  const port = Number(process.env.PORT) || 3000;
  await app.listen(port);
}

bootstrap();
