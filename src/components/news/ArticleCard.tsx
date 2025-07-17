import { Link } from 'react-router-dom';
import { Clock, User, TrendingUp } from 'lucide-react';
import { NewsArticle } from '@/types/news';
import { Badge } from '@/components/ui/badge';

interface ArticleCardProps {
  article: NewsArticle;
  language: 'en' | 'km';
  variant?: 'default' | 'featured' | 'compact';
}

export function ArticleCard({ article, language, variant = 'default' }: ArticleCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'km' ? 'km-KH' : 'en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (variant === 'compact') {
    return (
      <Link to={`/article/${article.id}`} className="group block">
        <article className="flex gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
          <div className="w-20 h-20 rounded-lg bg-muted overflow-hidden flex-shrink-0">
            <img 
              src={article.imageUrl} 
              alt={article.title[language]}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-medium line-clamp-2 group-hover:text-primary transition-colors khmer-text">
              {article.title[language]}
            </h3>
            <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {formatDate(article.publishedAt)}
              </span>
              <span>{article.readingTime} min</span>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  if (variant === 'featured') {
    return (
      <Link to={`/article/${article.id}`} className="group block">
        <article className="relative overflow-hidden rounded-2xl floating-card h-[400px] md:h-[500px]">
          <div className="absolute inset-0">
            <img 
              src={article.imageUrl} 
              alt={article.title[language]}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </div>
          
          <div className="relative h-full flex flex-col justify-end p-6 md:p-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 flex-wrap">
                <Badge 
                  variant="secondary" 
                  className="glass-effect text-white border-white/20"
                >
                  {article.category.name[language]}
                </Badge>
                {article.trending && (
                  <Badge variant="secondary" className="glass-effect text-white border-white/20 gap-1">
                    <TrendingUp className="h-3 w-3" />
                    {language === 'en' ? 'Trending' : 'និយម'}
                  </Badge>
                )}
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-white group-hover:text-primary-glow transition-colors khmer-text">
                {article.title[language]}
              </h2>
              
              <p className="text-gray-200 line-clamp-3 khmer-text">
                {article.excerpt[language]}
              </p>
              
              <div className="flex items-center gap-4 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <img 
                    src={article.author.avatar} 
                    alt={article.author.name}
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="khmer-text">{article.author.name}</span>
                </div>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {formatDate(article.publishedAt)}
                </span>
                <span>{article.readingTime} min</span>
              </div>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link to={`/article/${article.id}`} className="group block">
      <article className="floating-card rounded-xl overflow-hidden">
        <div className="aspect-video bg-muted overflow-hidden">
          <img 
            src={article.imageUrl} 
            alt={article.title[language]}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
        
        <div className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <Badge variant="outline">
              {article.category.name[language]}
            </Badge>
            {article.trending && (
              <Badge variant="secondary" className="gap-1">
                <TrendingUp className="h-3 w-3" />
                {language === 'en' ? 'Trending' : 'និយម'}
              </Badge>
            )}
          </div>
          
          <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2 khmer-text">
            {article.title[language]}
          </h3>
          
          <p className="text-muted-foreground mb-4 line-clamp-3 khmer-text">
            {article.excerpt[language]}
          </p>
          
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span className="khmer-text">{article.author.name}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {formatDate(article.publishedAt)}
              </span>
              <span>{article.readingTime} min</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}