import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class CronService {
  @Cron('* * * * * *')
  cronJob() {
    console.log('Cron job running...');
  }
}
