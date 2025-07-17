import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ArticleCard } from '@/components/news/ArticleCard';
import { NewsArticle, NewsCategory } from '@/types/news';

interface CategorySectionProps {
  category: NewsCategory;
  articles: NewsArticle[];
  language: 'en' | 'km';
}

export function CategorySection({ category, articles, language }: CategorySectionProps) {
  const categoryArticles = articles
    .filter(article => article.category.id === category.id)
    .slice(0, 4);

  if (categoryArticles.length === 0) {
    return null;
  }

  return (
    <section className="space-y-6">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div 
            className="w-1 h-8 rounded-full"
            style={{ backgroundColor: category.color }}
          />
          <div>
            <h2 className="text-2xl font-bold khmer-text">
              {category.name[language]}
            </h2>
            {category.description && (
              <p className="text-muted-foreground text-sm khmer-text">
                {category.description[language]}
              </p>
            )}
          </div>
        </div>

        <Button variant="ghost" asChild className="gap-2 group">
          <Link to={`/category/${category.slug}`}>
            {language === 'en' ? 'View All' : 'មើលទាំងអស់'}
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categoryArticles.map((article) => (
          <ArticleCard 
            key={article.id}
            article={article} 
            language={language} 
            variant="default"
          />
        ))}
      </div>
    </section>
  );
}