import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import * as express from 'express';
import { join } from 'path';
import { AuthService } from './auth/auth.service';
import * as crypto from 'crypto';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS
  app.enableCors();
  
  // Global validation pipe
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
    transformOptions: {
      enableImplicitConversion: true,
    },
  }));
  
  // Serve static files from upload directory
  app.use('/upload', express.static(join(__dirname, '..', 'upload')));
  
  // Serve static files from root (for direct file access)
  app.use(express.static(join(__dirname, '..', 'upload')));
  
  // Create super admin on startup
  try {
    const authService = app.get(AuthService);
    const superAdminLogin = 'superadmin';
    const superAdminPassword = crypto.randomBytes(16).toString('hex') + 'A1!';
    
    const superAdmin = await authService.createSuperAdmin(superAdminLogin, superAdminPassword);
    
    if (superAdmin) {
      console.log('\n========================================');
      console.log('✅ SUPER ADMIN CREATED');
      console.log('========================================');
      console.log('Login:', superAdminLogin);
      console.log('Password:', superAdminPassword);
      console.log('========================================\n');
    } else {
      console.log('\n========================================');
      console.log('ℹ️  SUPER ADMIN ALREADY EXISTS');
      console.log('========================================');
      console.log('Login:', superAdminLogin);
      console.log('(Password was set on first startup)');
      console.log('========================================\n');
    }
  } catch (error) {
    console.error('\n❌ ERROR CREATING SUPER ADMIN:', error);
    console.error('========================================\n');
  }
  
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
}
bootstrap();

