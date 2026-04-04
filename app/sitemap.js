import cities from '@/data/cities';
import services from '@/data/services';

export default function sitemap() {
  const BASE = 'https://www.zoiriscleaning.com';
  const now = new Date().toISOString();

  const urls = [
    { url: BASE, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
  ];

  // City pages
  for (const city of cities) {
    urls.push({ url: `${BASE}/${city.slug}/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 });
    // Service pages for each city
    for (const service of services) {
      urls.push({ url: `${BASE}/${city.slug}/${service.slug}/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 });
    }
  }

  return urls;
}
