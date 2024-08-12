import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PostController } from './posts/posts.controller';
import { UserModule } from './users/users.module';
import { PostModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UserModule,
    PostModule,
    AuthModule,
  ],
  controllers: [PostController, AppController],
})
export class AppModule {}
