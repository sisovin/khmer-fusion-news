import { NewsArticle, NewsCategory } from '@/types/news';

export const categories: NewsCategory[] = [
  {
    id: '1',
    name: { en: 'Politics', km: 'នយោបាយ' },
    slug: 'politics',
    color: 'hsl(var(--primary))',
    icon: 'flag'
  },
  {
    id: '2',
    name: { en: 'Technology', km: 'បច្ចេកវិទ្យា' },
    slug: 'technology',
    color: 'hsl(var(--accent))',
    icon: 'cpu'
  },
  {
    id: '3',
    name: { en: 'Business', km: 'អាជីវកម្ម' },
    slug: 'business',
    color: 'hsl(195 100% 60%)',
    icon: 'trending-up'
  },
  {
    id: '4',
    name: { en: 'Sports', km: 'កីឡា' },
    slug: 'sports',
    color: 'hsl(120 100% 50%)',
    icon: 'trophy'
  },
  {
    id: '5',
    name: { en: 'Culture', km: 'វប្បធម៌' },
    slug: 'culture',
    color: 'hsl(45 100% 60%)',
    icon: 'palette'
  },
  {
    id: '6',
    name: { en: 'Health', km: 'សុខភាព' },
    slug: 'health',
    color: 'hsl(340 100% 60%)',
    icon: 'heart'
  }
];

export const mockArticles: NewsArticle[] = [
  {
    id: '1',
    title: {
      en: 'Revolutionary AI Technology Transforms Cambodia\'s Digital Landscape',
      km: 'បច្ចេកវិទ្យា AI បដិវត្តន៍កំពុងផ្លាស់ប្តូរទេសភាពឌីជីថលកម្ពុជា'
    },
    excerpt: {
      en: 'A groundbreaking artificial intelligence initiative is reshaping how Cambodia approaches digital innovation and technological advancement.',
      km: 'គំនិតផ្តួចផ្តើមបញ្ញាសិប្បនិម្មិតដ៏ច្នៃប្រឌិតកំពុងតែកែច្នៃរបៀបដែលកម្ពុជាធ្វើការបន្ដគំនិតផ្តួចផ្តើមឌីជីថល។'
    },
    content: {
      en: `Cambodia is witnessing a technological revolution as new artificial intelligence systems are being implemented across various sectors. 

The government has announced a comprehensive digital transformation plan that aims to position Cambodia as a regional leader in technology adoption. This initiative includes partnerships with international tech companies and significant investments in digital infrastructure.

Key areas of focus include:
- Healthcare digitization and telemedicine platforms
- Smart city initiatives in Phnom Penh and Siem Reap  
- Agricultural technology for improved crop yields
- Educational technology for remote learning

The program is expected to create thousands of new jobs and attract foreign investment in the technology sector. Local universities are also expanding their computer science programs to meet the growing demand for skilled developers.

"This represents a new chapter in Cambodia's development story," said the Minister of Technology. "We are committed to ensuring that all Cambodians can benefit from these technological advances."

The initiative has already shown promising results, with several pilot projects demonstrating significant improvements in efficiency and service delivery across government departments.`,
      km: `កម្ពុជាកំពុងជួបប្រទះនូវបដិវត្តន៍បច្ចេកវិទ្យា នៅពេលដែលប្រព័ន្ធបញ្ញាសិប្បនិម្មិតថ្មីៗកំពុងត្រូវបានអនុវត្តនៅទូទាំងវិស័យផ្សេងៗ។

រដ្ឋាភិបាលបានប្រកាសអំពីផែនការផ្លាស់ប្តូរឌីជីថលដ៏ទូលំទូលាយ ដែលមានគោលបំណងដាក់កម្ពុជាជាអ្នកដឹកនាំក្នុងតំបន់នៃការប្រើប្រាស់បច្ចេកវិទ្យា។ គំនិតផ្តួចផ្តើមនេះរួមបញ្ចូលភាពជាដៃគូជាមួយក្រុមហ៊ុនបច្ចេកវិទ្យាអន្តរជាតិ និងការវិនិយោគយ៉ាងសំខាន់នៅក្នុងហេដ្ឋារចនាសម្ព័ន្ធឌីជីថល។

ផ្នែកសំខាន់ៗដែលត្រូវផ្តោតលើរួមមាន៖
- ការធ្វើឌីជីថលកម្មការថែទាំសុខភាព និងវេទិកាគិលានដ្ឋាន
- គំនិតផ្តួចផ្តើមទីក្រុងឆ្លាតវៃនៅភ្នំពេញ និងសៀមរាប
- បច្ចេកវិទ្យាកសិកម្មសម្រាប់ការកែលម្អផលិតកម្មដំណាំ
- បច្ចេកវិទ្យាអប់រំសម្រាប់ការរៀនពីចម្ងាយ

កម្មវិធីនេះត្រូវបានរំពឹងថានឹងបង្កើតការងារថ្មីរាប់ពាន់ និងទាក់ទាញការវិនិយោគបរទេសក្នុងវិស័យបច្ចេកវិទ្យា។ សាកលវិទ្យាល័យក្នុងស្រុកក៏កំពុងពង្រីកកម្មវិធីវិទ្យាសាស្ត្រកុំព្យូទ័ររបស់ពួកគេ ដើម្បីបំពេញតម្រូវការកើនឡើងសម្រាប់អ្នកអភិវឌ្ឍន៍ដែលមានជំនាញ។

"នេះតំណាងឱ្យជំពូកថ្មីមួយនៅក្នុងរឿងរ៉ាវអភិវឌ្ឍន៍របស់កម្ពុជា" ដូចដែលរដ្ឋមន្ត្រីបច្ចេកវិទ្យាបាននិយាយ។ "យើងប្តេជ្ញាធានាថាកម្ពុជាទាំងអស់អាចទទួលបានអត្ថប្រយោជន៍ពីភាពរីកចម្រើនបច្ចេកវិទ្យាទាំងនេះ។"

គំនិតផ្តួចផ្តើមនេះបានបង្ហាញលទ្ធផលដ៏សន្យាហេតុរួចហើយ ជាមួយនឹងគម្រោងសាកល្បងជាច្រើនបានបង្ហាញការកែលម្អយ៉ាងសំខាន់នៃប្រសិទ្ធភាព និងការផ្តល់សេវានៅទូទាំងនាយកដ្ឋានរដ្ឋាភិបាល។`
    },
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800',
    category: categories[1],
    author: {
      name: 'ស៊ុន ដារា',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
    },
    publishedAt: '2024-01-15T08:30:00Z',
    readingTime: 8,
    tags: ['AI', 'Technology', 'Digital Transformation', 'Cambodia'],
    featured: true,
    trending: true
  },
  {
    id: '2',
    title: {
      en: 'Cambodia\'s Economic Growth Reaches New Heights in 2024',
      km: 'កំណើនសេដ្ឋកិច្ចកម្ពុជាឈានដល់កម្រិតថ្មីក្នុងឆ្នាំ ២០២ោ'
    },
    excerpt: {
      en: 'The kingdom reports unprecedented economic growth driven by tourism recovery and digital sector expansion.',
      km: 'ព្រះរាជាណាចក្ររាយការណ៍ពីកំណើនសេដ្ឋកិច្ចដែលមិនធ្លាប់មានពីមុន បណ្តាលមកពីការស្តារឡើងវិញនៃការទេសចរណ៍ និងការពង្រីកវិស័យឌីជីថល។'
    },
    content: {
      en: 'Cambodia has achieved remarkable economic growth in 2024, with GDP expanding by 7.2% in the first quarter...',
      km: 'កម្ពុជាបានសម្រេចកំណើនសេដ្ឋកិច្ចគួរឱ្យកត់សម្គាល់ក្នុងឆ្នាំ ២០២ោ ជាមួយនឹង GDP ពង្រីក ៧.២% ក្នុងត្រីមាសទីមួយ...'
    },
    imageUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800',
    category: categories[2],
    author: {
      name: 'ចាន់ សុភា',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b5bb?w=150'
    },
    publishedAt: '2024-01-14T10:15:00Z',
    readingTime: 6,
    tags: ['Economy', 'Growth', 'Tourism', 'Business'],
    featured: true,
    trending: false
  },
  {
    id: '3',
    title: {
      en: 'Ancient Khmer Art Exhibition Opens at National Museum',
      km: 'តាំងពិពណ៌សិល្បៈខ្មែរបុរាណនៅសារមន្ទីរជាតិ'
    },
    excerpt: {
      en: 'A stunning collection of ancient Khmer artifacts goes on display, showcasing centuries of artistic heritage.',
      km: 'បណ្តុំវត្ថុបុរាណខ្មែរដ៏អស្ចារ្យមួយត្រូវបានដាក់តាំងបង្ហាញ ដោយបង្ហាញពីបេតិកភណ្ឌសិល្បៈរាប់សតវត្សរ៍។'
    },
    content: {
      en: 'The National Museum of Cambodia has unveiled its most ambitious exhibition to date...',
      km: 'សារមន្ទីរជាតិកម្ពុជាបានសំណកការតាំងពិពណ៌ដ៏មហិមារបស់ខ្លួនរហូតមកដល់សព្វថ្ងៃ...'
    },
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800',
    category: categories[4],
    author: {
      name: 'លី ម៉ាលី',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150'
    },
    publishedAt: '2024-01-13T14:00:00Z',
    readingTime: 5,
    tags: ['Culture', 'Art', 'Museum', 'Heritage'],
    featured: false,
    trending: true
  }
];