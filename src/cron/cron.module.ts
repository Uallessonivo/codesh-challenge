import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { ArticleSchema } from 'src/schema/article.schema';
import { CronController } from './cron.controller';
import { CronService } from './cron.service';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    HttpModule,
    MongooseModule.forFeature([{ name: 'Article', schema: ArticleSchema }]),
  ],
  controllers: [CronController],
  providers: [CronService],
})
export class CronModule {}
