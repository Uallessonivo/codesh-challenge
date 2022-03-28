import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { ArticleModule } from 'src/article/article.module';
import { CronController } from './cron.controller';
import { CronService } from './cron.service';

@Module({
  imports: [ScheduleModule.forRoot(), HttpModule, ArticleModule],
  controllers: [CronController],
  providers: [CronService],
})
export class CronModule {}
