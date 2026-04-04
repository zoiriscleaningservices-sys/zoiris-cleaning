import PageTemplate from '@/components/PageTemplate';
import cities from '@/data/cities';

const MOBILE = { slug: 'mobile-al', name: 'Mobile', state: 'AL', county: 'Mobile' };
const nearbyLinks = cities.slice(0, 12).filter(c => c.slug !== 'mobile-al');

export const metadata = {
  title: '#1 Cleaning Service in Mobile, AL | Zoiris Cleaning Services',
  description: 'Cleaning Services in Mobile, AL. Zoiris Cleaning Services offer the best house cleaning and maid services in the Mobile area. Call (251) 930-8621 for a free quote today!',
  alternates: { canonical: 'https://zoiriscleaning.com/' },
};

export default function HomePage() {
  return <PageTemplate city={MOBILE} nearbyLinks={nearbyLinks} />;
}
