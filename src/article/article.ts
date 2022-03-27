import { Document } from 'mongoose';

class Article extends Document {
  title: string;
  url: string;
  featured: boolean;
  imageUrl: string;
  newSite: string;
  summary: string;
  publishedAt: string;
  launches: [];
  events: [];
}

export { Article };
