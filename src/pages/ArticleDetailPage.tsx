import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, User, Share2, Bookmark, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArticleCard } from '@/components/news/ArticleCard';
import { mockArticles } from '@/data/mockData';

interface ArticleDetailPageProps {
  language: 'en' | 'km';
}

export function ArticleDetailPage({ language }: ArticleDetailPageProps) {
  const { id } = useParams<{ id: string }>();
  const article = mockArticles.find(a => a.id === id);

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-16">
          <h1 className="text-2xl font-bold mb-4">
            {language === 'en' ? 'Article Not Found' : 'រកមិនឃើញអត្ថបទ'}
          </h1>
          <p className="text-muted-foreground mb-6">
            {language === 'en' 
              ? 'The article you are looking for does not exist or has been removed.'
              : 'អត្ថបទដែលអ្នកកំពុងស្វែងរកមិនមាន ឬត្រូវបានលុបចេញ។'
            }
          </p>
          <Button asChild>
            <Link to="/">
              {language === 'en' ? 'Back to Home' : 'ត្រលប់ទៅទំព័រដើម'}
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'km' ? 'km-KH' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const relatedArticles = mockArticles
    .filter(a => a.id !== article.id && a.category.id === article.category.id)
    .slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Navigation */}
      <Button variant="ghost" asChild className="mb-6 gap-2">
        <Link to="/">
          <ArrowLeft className="h-4 w-4" />
          {language === 'en' ? 'Back' : 'ត្រលប់'}
        </Link>
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Article */}
        <article className="lg:col-span-2 space-y-6">
          {/* Article Header */}
          <div className="space-y-4">
            <Badge variant="outline">
              {article.category.name[language]}
            </Badge>
            
            <h1 className="text-3xl md:text-4xl font-bold leading-tight khmer-text">
              {article.title[language]}
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed khmer-text">
              {article.excerpt[language]}
            </p>
          </div>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-4 py-4 border-y border-border">
            <div className="flex items-center gap-3">
              <img 
                src={article.author.avatar} 
                alt={article.author.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-medium khmer-text">{article.author.name}</p>
                <p className="text-sm text-muted-foreground">
                  {language === 'en' ? 'Author' : 'អ្នកនិពន្ធ'}
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-1 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span className="text-sm">{formatDate(article.publishedAt)}</span>
            </div>
            
            <div className="text-sm text-muted-foreground">
              {article.readingTime} {language === 'en' ? 'min read' : 'នាទីអាន'}
            </div>

            <div className="ml-auto flex gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <Share2 className="h-4 w-4" />
                {language === 'en' ? 'Share' : 'ចែករំលែក'}
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Bookmark className="h-4 w-4" />
                {language === 'en' ? 'Save' : 'រក្សាទុក'}
              </Button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="rounded-xl overflow-hidden">
            <img 
              src={article.imageUrl} 
              alt={article.title[language]}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none khmer-text">
            {article.content[language].split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Article Tags */}
          <div className="flex flex-wrap gap-2 pt-6 border-t border-border">
            <span className="text-sm font-medium text-muted-foreground">
              {language === 'en' ? 'Tags:' : 'ស្លាក:'}
            </span>
            {article.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </article>

        {/* Sidebar */}
        <aside className="space-y-6">
          {/* Article Stats */}
          <div className="floating-card p-6 rounded-xl">
            <h3 className="font-semibold mb-4">
              {language === 'en' ? 'Article Stats' : 'ស្ថិតិអត្ថបទ'}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Eye className="h-4 w-4" />
                  {language === 'en' ? 'Views' : 'ចំនួនមើល'}
                </span>
                <span className="font-medium">1,234</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Share2 className="h-4 w-4" />
                  {language === 'en' ? 'Shares' : 'ចែករំលែក'}
                </span>
                <span className="font-medium">89</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Bookmark className="h-4 w-4" />
                  {language === 'en' ? 'Bookmarks' : 'បានរក្សាទុក'}
                </span>
                <span className="font-medium">45</span>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="floating-card p-6 rounded-xl">
              <h3 className="font-semibold mb-4">
                {language === 'en' ? 'Related Articles' : 'អត្ថបទពាក់ព័ន្ធ'}
              </h3>
              <div className="space-y-4">
                {relatedArticles.map((relatedArticle) => (
                  <ArticleCard 
                    key={relatedArticle.id}
                    article={relatedArticle} 
                    language={language} 
                    variant="compact"
                  />
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}