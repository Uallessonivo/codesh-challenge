import { HttpService } from '@nestjs/axios';
import { Controller } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { map } from 'rxjs';
import { ArticleService } from 'src/article/article.service';

@Controller()
export class CronController {
  constructor(
    private readonly httpService: HttpService,
    private readonly articleService: ArticleService,
  ) {}

  @Cron('0 0 9 1/1 * ? *')
  async cronJob() {
    return this.httpService
      .get('https://api.spaceflightnewsapi.net/v3/articles')
      .pipe(
        map((response) => response.data.Results),
        map((results) =>
          results.map((result: any) => this.articleService.create(result)),
        ),
      );
  }
}
