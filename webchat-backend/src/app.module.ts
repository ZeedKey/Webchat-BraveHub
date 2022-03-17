import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { User } from './users/user.model';
import { UserModule } from './users/user.module';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: 'postgres',
      password: '1111',
      database: process.env.DB,
      models: [User],
      autoLoadModels: true,
    }),
    UserModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}
