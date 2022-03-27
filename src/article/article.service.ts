import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Article } from './article';

@Injectable()
export class ArticleService {
  constructor(
    @InjectModel('Article') private readonly articleModel: Model<Article>,
  ) {}

  async getAll(page: number, limit: number) {
    return await this.articleModel
      .find()
      .skip(page * limit)
      .limit(limit)
      .exec();
  }

  async getById(id: string) {
    return await this.articleModel.findById(id).exec();
  }

  async create(article: Article) {
    const createdArticle = new this.articleModel(article);
    return await createdArticle.save();
  }

  async update(id: string, article: Article) {
    await this.articleModel.updateOne({ _id: id }, article).exec();
    return this.getById(id);
  }

  async delete(id: string) {
    return await this.articleModel.deleteOne({ _id: id }).exec();
  }
}
