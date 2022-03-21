import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { User } from './users/user.model';
import { UserModule } from './users/user.module';
import { AuthModule } from './auth/auth.module';
import { AppGateway } from './gateway/app.gateway';
import { Message } from './message/message.model';
import { MessageModule } from './message/message.module';
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
      models: [User, Message],
      autoLoadModels: true,
    }),
    UserModule,
    MessageModule,
    AuthModule
  ],
  controllers: [],
  providers: [AppGateway],
})

export class AppModule {}
