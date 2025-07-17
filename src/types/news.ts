export interface NewsArticle {
  id: string;
  title: {
    en: string;
    km: string;
  };
  excerpt: {
    en: string;
    km: string;
  };
  content: {
    en: string;
    km: string;
  };
  imageUrl: string;
  category: {
    id: string;
    name: {
      en: string;
      km: string;
    };
    slug: string;
  };
  author: {
    name: string;
    avatar?: string;
  };
  publishedAt: string;
  readingTime: number; // in minutes
  tags: string[];
  featured: boolean;
  trending: boolean;
}

export interface NewsCategory {
  id: string;
  name: {
    en: string;
    km: string;
  };
  slug: string;
  description?: {
    en: string;
    km: string;
  };
  color: string;
  icon?: string;
}

export interface SearchFilters {
  category?: string;
  dateRange?: {
    from: Date;
    to: Date;
  };
  sortBy: 'relevance' | 'date' | 'popularity';
}