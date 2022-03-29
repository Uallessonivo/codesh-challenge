import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Article } from './article';

@Injectable()
export class ArticleService {
  constructor(
    @InjectModel('Article') private readonly articleModel: Model<Article>,
  ) {}

  async getAll(page: number, limit: number) {
    const articles = await this.articleModel
      .find()
      .skip(page * limit)
      .limit(limit)
      .exec();

    if (articles.length == 0) {
      throw new HttpException('No articles found', 404);
    }

    return articles;
  }

  async getById(id: string) {
    const article = await this.articleModel.findOne({ _id: id }).exec();

    if (article == null) {
      throw new HttpException('No article found', 404);
    }

    return article;
  }

  async create(article: Article) {
    const createdArticle = new this.articleModel(article);
    return await createdArticle.save();
  }

  async update(id: string, article: Article) {
    const data = await this.articleModel.findOne({ _id: id }).exec();

    if (data == null) {
      throw new HttpException('No article found', 404);
    }

    await this.articleModel.updateOne({ _id: id }, article).exec();
    return this.getById(id);
  }

  async delete(id: string) {
    const data = await this.articleModel.findOne({ _id: id }).exec();

    if (data == null) {
      throw new HttpException('No article found', 404);
    }

    return await this.articleModel.deleteOne({ _id: data.id }).exec();
  }

  async destroyDatabase(token: string) {
    if (token == process.env.TOKEN) {
      await this.articleModel.deleteMany({}).exec();
    } else
      throw new HttpException(
        'You are not authorized to delete the database',
        401,
      );
  }
}
