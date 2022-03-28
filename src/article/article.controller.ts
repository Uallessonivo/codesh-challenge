import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Article } from './article';
import { ArticleService } from './article.service';

@Controller('articles')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  @Get(':skip/:limit')
  async getAll(
    @Param('skip') skip: number,
    @Param('limit') limit: number,
  ): Promise<Article[]> {
    return await this.articleService.getAll(skip, limit);
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Article> {
    return await this.articleService.getById(id);
  }

  @Post()
  async create(@Body() article: Article): Promise<Article> {
    return await this.articleService.create(article);
  }

  @Put(':id')
  async update(@Param('id') id: string, article: Article): Promise<Article> {
    return await this.articleService.update(id, article);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.articleService.delete(id);
  }

  @Delete()
  async destroyDatabase(@Body('destroystring') token: string) {
    return await this.articleService.destroyDatabase(token);
  }
}
