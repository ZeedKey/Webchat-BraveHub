import { Module } from '@nestjs/common';
import { SequelizeModule, SequelizeModuleOptions } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { User } from './users/user.model';
import { UserModule } from './users/user.module';
import { AuthModule } from './auth/auth.module';
import { AppGateway } from './gateway/app.gateway';
import { Message } from './message/message.model';
import { MessageModule } from './message/message.module';

const sslConnection: SequelizeModuleOptions =
  process.env.NODE_ENV === 'production'
    ? {
        synchronize: true,
        dialectOptions: {
          ssl: {
            rejectUnauthorized: false,
          },
        },
      }
    : null;

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: `.${process.env.NODE_ENV}.env` }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST || '3000',
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, Message],
      autoLoadModels: true,
      synchronize: true,
      ...sslConnection,
    }),
    UserModule,
    MessageModule,
    AuthModule,
  ],
  controllers: [],
  providers: [AppGateway],
})
export class AppModule {}
