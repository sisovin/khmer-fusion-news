import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HomePage } from "@/pages/HomePage";
import { ArticleDetailPage } from "@/pages/ArticleDetailPage";
import { CategoryPage } from "@/pages/CategoryPage";
import { SearchPage } from "@/pages/SearchPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [language, setLanguage] = useState<'en' | 'km'>('en');

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Header language={language} onLanguageChange={setLanguage} />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage language={language} />} />
                <Route path="/article/:id" element={<ArticleDetailPage language={language} />} />
                <Route path="/category/:slug" element={<CategoryPage language={language} />} />
                <Route path="/search" element={<SearchPage language={language} />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer language={language} />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
