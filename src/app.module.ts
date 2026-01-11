import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { CategoryModule } from './category/category.module';
import { BrandModule } from './brand/brand.module';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';
import { ContactModule } from './contact/contact.module';

import { Category } from './category/entities/category.entity';
import { Brand } from './brand/entities/brand.entity';
import { Product } from './product/entities/product.entity';
import { User } from './user/entities/user.entity';

import { HealthController } from './health/health.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST', 'localhost'),
        port: configService.get<number>('DB_PORT', 5432),
        username: configService.get('DB_USERNAME', 'postgres'),
        password: configService.get('DB_PASSWORD', 'postgres'),
        database: configService.get('DB_DATABASE', 'gpg_db'),
        entities: [Category, Brand, Product, User],
        synchronize: false,
        logging: false,
      }),
    }),

    TypeOrmModule.forFeature([
      Category,
      Brand,
      Product,
      User,
    ]),

    CategoryModule,
    BrandModule,
    ProductModule,
    AuthModule,
    ContactModule, 
  ],

  controllers: [HealthController],
  providers: [],
})
export class AppModule {}
