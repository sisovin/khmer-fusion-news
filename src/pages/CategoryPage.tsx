import { useParams } from 'react-router-dom';
import { Filter, SortAsc } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArticleCard } from '@/components/news/ArticleCard';
import { mockArticles, categories } from '@/data/mockData';

interface CategoryPageProps {
  language: 'en' | 'km';
}

export function CategoryPage({ language }: CategoryPageProps) {
  const { slug } = useParams<{ slug: string }>();
  const category = categories.find(c => c.slug === slug);
  
  if (!category) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-16">
          <h1 className="text-2xl font-bold mb-4">
            {language === 'en' ? 'Category Not Found' : 'រកមិនឃើញប្រភេទ'}
          </h1>
          <p className="text-muted-foreground">
            {language === 'en' 
              ? 'The category you are looking for does not exist.'
              : 'ប្រភេទដែលអ្នកកំពុងស្វែងរកមិនមាន។'
            }
          </p>
        </div>
      </div>
    );
  }

  const categoryArticles = mockArticles.filter(article => 
    article.category.id === category.id
  );

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="space-y-6 mb-8">
        <div className="flex items-center gap-4">
          <div 
            className="w-2 h-12 rounded-full"
            style={{ backgroundColor: category.color }}
          />
          <div>
            <h1 className="text-3xl md:text-4xl font-bold khmer-text">
              {category.name[language]}
            </h1>
            {category.description && (
              <p className="text-muted-foreground mt-2 khmer-text">
                {category.description[language]}
              </p>
            )}
          </div>
        </div>

        {/* Filters and Sorting */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <p className="text-muted-foreground">
            {categoryArticles.length} {language === 'en' ? 'articles found' : 'អត្ថបទត្រូវបានរកឃើញ'}
          </p>
          
          <div className="flex gap-4">
            <Select>
              <SelectTrigger className="w-40">
                <SortAsc className="h-4 w-4 mr-2" />
                <SelectValue placeholder={language === 'en' ? 'Sort by' : 'តម្រៀប'} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="latest">
                  {language === 'en' ? 'Latest' : 'ថ្មីបំផុត'}
                </SelectItem>
                <SelectItem value="oldest">
                  {language === 'en' ? 'Oldest' : 'ចាស់បំផុត'}
                </SelectItem>
                <SelectItem value="popular">
                  {language === 'en' ? 'Most Popular' : 'ពេញនិយមបំផុត'}
                </SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              {language === 'en' ? 'Filter' : 'តម្រង'}
            </Button>
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      {categoryArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryArticles.map((article) => (
            <ArticleCard 
              key={article.id}
              article={article} 
              language={language} 
              variant="default"
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-muted-foreground text-lg khmer-text">
            {language === 'en' 
              ? 'No articles found in this category.'
              : 'រកមិនឃើញអត្ថបទក្នុងប្រភេទនេះ។'
            }
          </p>
        </div>
      )}
    </div>
  );
}