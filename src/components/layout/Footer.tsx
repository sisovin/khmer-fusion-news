import { Link } from 'react-router-dom';
import { Facebook, Twitter, Youtube, Instagram, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'km';
}

export function Footer({ language }: FooterProps) {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-bold">K</span>
              </div>
              <h3 className="text-xl font-bold gradient-text">
                {language === 'en' ? 'Khmer News' : 'ព័ត៌មានខ្មែរ'}
              </h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed khmer-text">
              {language === 'en' 
                ? 'Your trusted source for the latest news from Cambodia and around the world. Delivering accurate, timely, and relevant information to keep you informed.'
                : 'ប្រភពព័ត៌មានដែលអ្នកអាចទុកចិត្តបានសម្រាប់ព័ត៌មានថ្មីៗពីកម្ពុជា និងទូទាំងពិភពលោក។ ផ្តល់ព័ត៌មានត្រឹមត្រូវ ទាន់ពេលវេលា និងពាក់ព័ន្ធ ដើម្បីធ្វើឱ្យអ្នកមានព័ត៌មានគ្រប់គ្រាន់។'
              }
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4 group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">
              {language === 'en' ? 'Quick Links' : 'តំណភ្ជាប់លឿន'}
            </h4>
            <nav className="space-y-2">
              {[
                { en: 'About Us', km: 'អំពីយើង', href: '/about' },
                { en: 'Contact', km: 'ទំនាក់ទំនង', href: '/contact' },
                { en: 'Advertise', km: 'ផ្សាយពាណិជ្ជកម្ម', href: '/advertise' },
                { en: 'Terms of Service', km: 'លក្ខខណ្ឌសេវាកម្ម', href: '/terms' },
                { en: 'Privacy Policy', km: 'គោលនយោបាយឯកជនភាព', href: '/privacy' },
              ].map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors khmer-text"
                >
                  {link[language]}
                </Link>
              ))}
            </nav>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">
              {language === 'en' ? 'Categories' : 'ប្រភេទ'}
            </h4>
            <nav className="space-y-2">
              {[
                { en: 'Politics', km: 'នយោបាយ', href: '/category/politics' },
                { en: 'Technology', km: 'បច្ចេកវិទ្យា', href: '/category/technology' },
                { en: 'Business', km: 'អាជីវកម្ម', href: '/category/business' },
                { en: 'Sports', km: 'កីឡា', href: '/category/sports' },
                { en: 'Culture', km: 'វប្បធម៌', href: '/category/culture' },
                { en: 'Health', km: 'សុខភាព', href: '/category/health' },
              ].map((category, index) => (
                <Link
                  key={index}
                  to={category.href}
                  className="block text-muted-foreground hover:text-primary transition-colors khmer-text"
                >
                  {category[language]}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">
              {language === 'en' ? 'Contact Info' : 'ព័ត៌មានទំនាក់ទំនង'}
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground khmer-text">
                  {language === 'en' 
                    ? '123 Monivong Blvd, Phnom Penh, Cambodia'
                    : '១២៣ ម៉ុនីវង្ស ភ្នំពេញ កម្ពុជា'
                  }
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  +855 23 123 456
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  info@khmernews.com
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground khmer-text">
            {language === 'en' 
              ? '© 2024 Khmer News Portal. All rights reserved.'
              : '© ២០២ោ វេបសាយព័ត៌មានខ្មែរ។ រក្សាសិទ្ធិគ្រប់យ៉ាង។'
            }
          </p>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>{language === 'en' ? 'Made with' : 'បង្កើតដោយ'}</span>
            <span className="text-red-500">♥</span>
            <span>{language === 'en' ? 'in Cambodia' : 'នៅកម្ពុជា'}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}