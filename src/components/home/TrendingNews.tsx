import { TrendingUp, Clock } from 'lucide-react';
import { ArticleCard } from '@/components/news/ArticleCard';
import { NewsArticle } from '@/types/news';

interface TrendingNewsProps {
  articles: NewsArticle[];
  language: 'en' | 'km';
}

export function TrendingNews({ articles, language }: TrendingNewsProps) {
  const trendingArticles = articles.filter(article => article.trending).slice(0, 5);

  if (trendingArticles.length === 0) {
    return null;
  }

  return (
    <section className="space-y-6">
      {/* Section Header */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 text-primary">
          <TrendingUp className="h-6 w-6" />
          <h2 className="text-2xl font-bold gradient-text">
            {language === 'en' ? 'Trending Now' : 'និយមឥឡូវនេះ'}
          </h2>
        </div>
        <div className="h-px bg-gradient-to-r from-primary/50 to-transparent flex-1" />
      </div>

      {/* Trending Articles */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Featured Article */}
        <div className="lg:col-span-2">
          <ArticleCard 
            article={trendingArticles[0]} 
            language={language} 
            variant="featured"
          />
        </div>

        {/* Side Articles */}
        <div className="space-y-4">
          <div className="glass-effect rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">
                {language === 'en' ? 'Latest Updates' : 'ព័ត៌មានថ្មីៗ'}
              </h3>
            </div>
            
            <div className="space-y-4">
              {trendingArticles.slice(1, 5).map((article, index) => (
                <ArticleCard 
                  key={article.id}
                  article={article} 
                  language={language} 
                  variant="compact"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}