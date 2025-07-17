import { HeroCarousel } from '@/components/home/HeroCarousel';
import { TrendingNews } from '@/components/home/TrendingNews';
import { CategorySection } from '@/components/home/CategorySection';
import { mockArticles, categories } from '@/data/mockData';

interface HomePageProps {
  language: 'en' | 'km';
}

export function HomePage({ language }: HomePageProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-12">
        {/* Hero Carousel */}
        <section>
          <HeroCarousel articles={mockArticles} language={language} />
        </section>

        {/* Trending News */}
        <TrendingNews articles={mockArticles} language={language} />

        {/* Category Sections */}
        {categories.map((category) => (
          <CategorySection 
            key={category.id}
            category={category}
            articles={mockArticles}
            language={language}
          />
        ))}

        {/* Newsletter Signup */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 khmer-text">
            {language === 'en' 
              ? 'Stay Updated with the Latest News' 
              : 'ទទួលបានព័ត៌មានថ្មីៗជាប្រចាំ'
            }
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto khmer-text">
            {language === 'en' 
              ? 'Subscribe to our newsletter and never miss important news from Cambodia and around the world.'
              : 'ចុះឈ្មោះជាវប្រចាំ និងកុំខកខានព័ត៌មានសំខាន់ៗពីកម្ពុជា និងពិភពលោក។'
            }
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder={language === 'en' ? 'Enter your email' : 'បញ្ចូលអ៊ីមែល'} 
              className="flex-1 px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors neon-glow">
              {language === 'en' ? 'Subscribe' : 'ជាវ'}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}