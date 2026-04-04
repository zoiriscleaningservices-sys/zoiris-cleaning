import { notFound } from 'next/navigation';
import PageTemplate from '@/components/PageTemplate';
import cities from '@/data/cities';

// Only pre-build the top 15 most populated cities to keep build times under 3 minutes.
// The rest will be generated On-Demand (ISR) via dynamicParams = true.
export const dynamicParams = true;
export const revalidate = 86400; // Cache for 24 hours

export async function generateStaticParams() {
  const topCities = cities.slice(0, 15);
  return topCities.map(city => ({ city: city.slug }));
}

// Rotate through high-converting dynamic intent keywords
const getTopKeyword = (index, cityObj) => {
  const intentModifiers = ["Top-rated", "Affordable", "Best", "Same-Day", "Expert", "Professional", "Local", "Eco-friendly"];
  
  const intent = intentModifiers[index % intentModifiers.length];
  
  const keywords = [
    `${intent} cleaning services in ${cityObj.name}, AL`,
    `Affordable cleaning services near ${cityObj.name} AL`,
    `${intent} house cleaning near me in ${cityObj.name}`,
    `House cleaning experts ${cityObj.name} AL`,
    `Maid service near me ${cityObj.name}`
  ];
  return keywords[index % keywords.length];
};

export async function generateMetadata({ params }) {
  const { city: citySlug } = await params;
  const city = cities.find(c => c.slug === citySlug);
  if (!city) return { title: 'Not Found' };
  
  const keywordTitle = getTopKeyword(city.pop || city.name.length, city);

  return {
    title: `${keywordTitle} | Zoiris Cleaning Services`,
    description: `Looking for ${keywordTitle.toLowerCase()}? Zoiris Cleaning Services offers top-rated residential and commercial cleaning in ${city.name}, AL. Call (251) 930-8621 for a free quote!`,
    alternates: { canonical: `https://www.zoiriscleaning.com/${city.slug}/` },
  };
}

export default async function CityPage({ params }) {
  const { city: citySlug } = await params;
  const city = cities.find(c => c.slug === citySlug);
  if (!city) notFound();

  // Nearby links: pick a random subset to ensure good internal cross-linking without breaking Vercel bounds
  const nearbyLinks = cities
    .filter(c => c.slug !== citySlug)
    .slice(0, 18);

  const heroKeyword = getTopKeyword(city.pop || city.name.length, city);

  return <PageTemplate city={city} nearbyLinks={nearbyLinks} heroKeyword={heroKeyword} />;
}
