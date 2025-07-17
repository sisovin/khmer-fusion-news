import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArticleCard } from '@/components/news/ArticleCard';
import { mockArticles, categories } from '@/data/mockData';

interface SearchPageProps {
  language: 'en' | 'km';
}

export function SearchPage({ language }: SearchPageProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('relevance');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      setSearchParams({ q: query });
    } else {
      setSearchParams({});
    }
  };

  useEffect(() => {
    const query = searchParams.get('q');
    if (query) {
      setSearchQuery(query);
    }
  }, [searchParams]);

  // Simple search implementation
  const filteredArticles = mockArticles.filter(article => {
    const query = searchQuery.toLowerCase();
    const matchesSearch = !query || 
      article.title[language].toLowerCase().includes(query) ||
      article.excerpt[language].toLowerCase().includes(query) ||
      article.content[language].toLowerCase().includes(query) ||
      article.tags.some(tag => tag.toLowerCase().includes(query));
    
    const matchesCategory = selectedCategory === 'all' || 
      article.category.id === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search Header */}
      <div className="space-y-6 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold khmer-text">
          {language === 'en' ? 'Search News' : 'ស្វែងរកព័ត៌មាន'}
        </h1>

        {/* Search Bar */}
        <div className="relative max-w-2xl">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder={language === 'en' ? 'Search for news, topics, or keywords...' : 'ស្វែងរកព័ត៌មាន ប្រធានបទ ឬពាក្យគន្លឹះ...'}
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="pl-12 h-12 text-lg"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder={language === 'en' ? 'All Categories' : 'ប្រភេទទាំងអស់'} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">
                {language === 'en' ? 'All Categories' : 'ប្រភេទទាំងអស់'}
              </SelectItem>
              {categories.map((category) => (
                <SelectItem key={category.id} value={category.id}>
                  {category.name[language]}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder={language === 'en' ? 'Sort by' : 'តម្រៀបតាម'} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="relevance">
                {language === 'en' ? 'Relevance' : 'ការពាក់ព័ន្ធ'}
              </SelectItem>
              <SelectItem value="date">
                {language === 'en' ? 'Date' : 'កាលបរិច្ឆេទ'}
              </SelectItem>
              <SelectItem value="popularity">
                {language === 'en' ? 'Popularity' : 'ប្រជាប្រិយភាព'}
              </SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            {language === 'en' ? 'More Filters' : 'តម្រងបន្ថែម'}
          </Button>
        </div>
      </div>

      {/* Search Results */}
      <div className="space-y-6">
        {/* Results Count */}
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground">
            {searchQuery ? (
              <>
                {filteredArticles.length} {language === 'en' ? 'results for' : 'លទ្ធផលសម្រាប់'} 
                <span className="font-medium text-foreground ml-1">"{searchQuery}"</span>
              </>
            ) : (
              `${filteredArticles.length} ${language === 'en' ? 'articles available' : 'អត្ថបទដែលមាន'}`
            )}
          </p>
        </div>

        {/* Articles Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
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
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
              <Search className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2 khmer-text">
              {language === 'en' ? 'No results found' : 'រកមិនឃើញលទ្ធផល'}
            </h3>
            <p className="text-muted-foreground khmer-text">
              {language === 'en' 
                ? 'Try adjusting your search terms or filters to find what you\'re looking for.'
                : 'សាកល្បងកែប្រែពាក្យស្វែងរក ឬតម្រងដើម្បីរកអ្វីដែលអ្នកកំពុងស្វែងរក។'
              }
            </p>
          </div>
        )}
      </div>
    </div>
  );
}