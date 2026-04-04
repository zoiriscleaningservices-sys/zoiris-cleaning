import { notFound } from 'next/navigation';
import PageTemplate from '@/components/PageTemplate';
import cities from '@/data/cities';
import services from '@/data/services';

// Limit pre-rendering to the absolute top combinations to keep build time super fast.
// Next.js will generate the remaining ~10,000 pages On-Demand via ISR!
export const dynamicParams = true;
export const revalidate = 86400; // Cache for 24 hours

export async function generateStaticParams() {
  const topCities = cities.slice(0, 5); // Just top 5 cities
  const topServices = services.slice(0, 5); // Just top 5 services
  
  const params = [];
  for (const city of topCities) {
    for (const service of topServices) {
      params.push({ city: city.slug, service: service.slug });
    }
  }
  return params;
}

// Generate the ultimate high-converting SEO keyword mix
const getTopKeyword = (cityObj, serviceObj) => {
  const rawKeywords = [
    `Best ${serviceObj.name.toLowerCase()} in ${cityObj.name}`,
    `Affordable ${serviceObj.name.toLowerCase()} in ${cityObj.name} AL`,
    `${serviceObj.name} near me in ${cityObj.name}`,
    `Top-rated ${serviceObj.name.toLowerCase()} ${cityObj.name}`,
    `${cityObj.name} ${serviceObj.name.toLowerCase()} company`
  ];
  // Stable random selection based on slugs
  const index = cityObj.slug.length + serviceObj.slug.length;
  return rawKeywords[index % rawKeywords.length];
};

export async function generateMetadata({ params }) {
  const { city: citySlug, service: serviceSlug } = await params;
  const city = cities.find(c => c.slug === citySlug);
  const service = services.find(s => s.slug === serviceSlug);
  if (!city || !service) return { title: 'Not Found' };
  
  const keywordTitle = getTopKeyword(city, service);

  return {
    title: `${keywordTitle} | Zoiris Cleaning Services`,
    description: `Looking for ${keywordTitle.toLowerCase()}? Zoiris Cleaning Services provides professional, eco-friendly ${service.name.toLowerCase()} for homes and businesses in ${city.name}, AL. Call (251) 930-8621!`,
    alternates: { canonical: `https://zoiriscleaning.com/${city.slug}/${service.slug}/` },
  };
}

export default async function ServicePage({ params }) {
  const { city: citySlug, service: serviceSlug } = await params;
  const city = cities.find(c => c.slug === citySlug);
  const service = services.find(s => s.slug === serviceSlug);
  if (!city || !service) notFound();

  const nearbyLinks = cities
    .filter(c => c.slug !== citySlug)
    .slice(0, 18);

  const heroKeyword = getTopKeyword(city, service);

  return <PageTemplate city={city} service={service} nearbyLinks={nearbyLinks} heroKeyword={heroKeyword} />;
}
