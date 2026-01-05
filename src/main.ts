import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import * as express from 'express';
import { join } from 'path';
import { AuthService } from './auth/auth.service';
import * as crypto from 'crypto';

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

  setTimeout(async () => {
    try {
      const authService = app.get(AuthService);
      const login = 'superadmin';
      const password = crypto.randomBytes(16).toString('hex') + 'A1!';
      const created = await authService.createSuperAdmin(login, password);

      if (created) {
        const msg = `
========================================
SUPER ADMIN CREATED
========================================
Login: ${login}
Password: ${password}
========================================
`;
        console.log(msg);
        process.stdout.write(msg);
        process.stderr.write(msg);
      }
    } catch (err) {
      const msg = `
ERROR CREATING SUPER ADMIN
${err}
========================================
`;
      console.error(msg);
      process.stderr.write(msg);
    }
  }, 2000);
}

bootstrap();
