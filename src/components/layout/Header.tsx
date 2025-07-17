import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, X, Globe, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { categories } from '@/data/mockData';

interface HeaderProps {
  language: 'en' | 'km';
  onLanguageChange: (lang: 'en' | 'km') => void;
}

export function Header({ language, onLanguageChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-2 text-sm text-muted-foreground border-b border-border/50">
          <div className="flex items-center gap-4">
            <span>{new Date().toLocaleDateString(language === 'km' ? 'km-KH' : 'en-US')}</span>
            <span className="hidden sm:block">|</span>
            <span className="hidden sm:block">
              {language === 'en' ? 'Breaking News' : 'ព័ត៌មានបន្ទាន់'}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => onLanguageChange(language === 'en' ? 'km' : 'en')}
              className="gap-2"
            >
              <Globe className="h-4 w-4" />
              {language === 'en' ? 'ខ្មែរ' : 'ENG'}
            </Button>
            <Button variant="ghost" size="sm">
              <Bell className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Main Header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-white font-bold text-xl">K</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold gradient-text">
                {language === 'en' ? 'Khmer News' : 'ព័ត៌មានខ្មែរ'}
              </h1>
              <p className="text-xs text-muted-foreground">
                {language === 'en' ? 'Your Digital News Source' : 'ប្រភពព័ត៌មានឌីជីថលរបស់អ្នក'}
              </p>
            </div>
          </Link>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center gap-2 max-w-md flex-1 mx-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder={language === 'en' ? 'Search news...' : 'ស្វែងរកព័ត៌មាន...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-muted/50 border-0 focus:bg-background transition-colors"
              />
            </div>
            <Button type="submit" size="sm" className="neon-glow">
              {language === 'en' ? 'Search' : 'ស្វែងរក'}
            </Button>
          </form>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Navigation */}
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block pb-4`}>
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <Link 
              to="/" 
              className="text-primary font-medium hover:text-primary-glow transition-colors"
            >
              {language === 'en' ? 'Home' : 'ទំព័រដើម'}
            </Link>
            
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/category/${category.slug}`}
                className="hover:text-primary transition-colors flex items-center gap-2"
              >
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: category.color }}
                />
                {category.name[language]}
              </Link>
            ))}
          </div>

          {/* Mobile Search */}
          <form onSubmit={handleSearch} className="md:hidden mt-4 flex gap-2">
            <Input
              type="text"
              placeholder={language === 'en' ? 'Search news...' : 'ស្វែងរកព័ត៌មាន...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-muted/50"
            />
            <Button type="submit" size="sm" className="neon-glow">
              <Search className="h-4 w-4" />
            </Button>
          </form>
        </nav>
      </div>
    </header>
  );
}