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
    
    // Use process.stdout.write to ensure logs appear in PM2
    const logMessage = superAdmin 
      ? `\n========================================\n✅ SUPER ADMIN CREATED\n========================================\nLogin: ${superAdminLogin}\nPassword: ${superAdminPassword}\n========================================\n`
      : `\n========================================\nℹ️  SUPER ADMIN ALREADY EXISTS\n========================================\nLogin: ${superAdminLogin}\n(Password was set on first startup)\n========================================\n`;
    
    // Log to both console and process.stdout for PM2
    console.log(logMessage);
    process.stdout.write(logMessage);
    
    if (superAdmin) {
      // Also log to stderr for better visibility in PM2
      process.stderr.write(`\n[SUPER ADMIN] Login: ${superAdminLogin}\n[SUPER ADMIN] Password: ${superAdminPassword}\n\n`);
    }
  } catch (error) {
    const errorMessage = `\n❌ ERROR CREATING SUPER ADMIN: ${error}\n========================================\n`;
    console.error(errorMessage);
    process.stderr.write(errorMessage);
  }
  
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
}
bootstrap();

