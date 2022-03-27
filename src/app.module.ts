import { CronModule } from './cron/cron.module';
import { CronController } from './cron/cron.controller';
import { ArticleModule } from './article/article.module';
import { AppController } from './app.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [CronModule, ArticleModule, MongooseModule.forRoot('string url')],

  controllers: [AppController],

  providers: [],
})
export class AppModule {}
