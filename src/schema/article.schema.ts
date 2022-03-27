import * as mongoose from 'mongoose';

const ArticleSchema = new mongoose.Schema({
  title: String,
  url: String,
  featured: Boolean,
  imageUrl: String,
  newSite: String,
  summary: String,
  publishedAt: String,
  launches: [
    {
      id: String,
      provider: String,
    },
  ],
  events: [
    {
      id: String,
      provider: String,
    },
  ],
});

export { ArticleSchema };
