import { Document } from 'mongoose';

class Article extends Document {
  title: string;
  url: string;
  imageUrl: string;
  newSite: string;
  summary: string;
  publishedAt: string;
  featured: boolean;
  launches: [];
  events: [];
}

export { Article };
