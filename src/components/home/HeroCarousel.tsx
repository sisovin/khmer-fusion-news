import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ArticleCard } from '@/components/news/ArticleCard';
import { NewsArticle } from '@/types/news';

interface HeroCarouselProps {
  articles: NewsArticle[];
  language: 'en' | 'km';
}

export function HeroCarousel({ articles, language }: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const featuredArticles = articles.filter(article => article.featured).slice(0, 5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredArticles.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [featuredArticles.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? featuredArticles.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredArticles.length);
  };

  if (featuredArticles.length === 0) {
    return (
      <div className="w-full h-96 bg-muted rounded-2xl flex items-center justify-center">
        <p className="text-muted-foreground">
          {language === 'en' ? 'No featured articles available' : 'មិនមានអត្ថបទពិសេស'}
        </p>
      </div>
    );
  }

  return (
    <div className="relative group">
      {/* Main Carousel */}
      <div className="relative overflow-hidden rounded-2xl">
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {featuredArticles.map((article, index) => (
            <div key={article.id} className="w-full flex-shrink-0">
              <ArticleCard 
                article={article} 
                language={language} 
                variant="featured" 
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-effect text-white hover:bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity neon-glow"
          onClick={goToPrevious}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-effect text-white hover:bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity neon-glow"
          onClick={goToNext}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {featuredArticles.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-110 neon-glow' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Thumbnail Navigation (Desktop) */}
      <div className="hidden lg:flex gap-4 mt-6">
        {featuredArticles.map((article, index) => (
          <button
            key={article.id}
            className={`flex-1 group/thumb transition-all duration-300 ${
              index === currentSlide ? 'opacity-100' : 'opacity-60 hover:opacity-80'
            }`}
            onClick={() => goToSlide(index)}
          >
            <div className="flex gap-3 p-3 rounded-lg bg-card/50 hover:bg-card transition-colors">
              <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                <img 
                  src={article.imageUrl} 
                  alt={article.title[language]}
                  className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex-1 min-w-0 text-left">
                <h4 className="font-medium text-sm line-clamp-2 khmer-text">
                  {article.title[language]}
                </h4>
                <p className="text-xs text-muted-foreground mt-1">
                  {article.category.name[language]}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}