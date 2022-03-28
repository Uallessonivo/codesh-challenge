import { CronModule } from './cron/cron.module';
import { ArticleModule } from './article/article.module';
import { AppController } from './app.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    CronModule,
    ArticleModule,
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
  ],

  controllers: [AppController],

  providers: [],
})
export class AppModule {}
