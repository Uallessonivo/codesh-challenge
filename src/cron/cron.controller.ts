import { HttpService } from '@nestjs/axios';
import { Controller } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { lastValueFrom, map } from 'rxjs';
import { CronService } from 'src/cron/cron.service';

@Controller()
export class CronController {
  constructor(
    private readonly http: HttpService,
    private cronService: CronService,
  ) {}

  @Cron('0 0 9 1/1 * ? *')
  async cronJob() {
    const obj = await this.getEndpoint(
      'https://api.spaceflightnewsapi.net/v3/articles',
    );

    this.cronService.create(obj);
  }

  private getEndpoint(url: string): Promise<any> {
    return lastValueFrom(
      this.http.get<any>(url).pipe(
        map((res) => {
          return res.data;
        }),
      ),
    );
  }
}
