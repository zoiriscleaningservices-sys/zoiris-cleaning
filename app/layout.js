import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '#1 Cleaning Service in Mobile, AL | Zoiris Cleaning Services',
  description: 'Cleaning Services in Mobile, AL. Zoiris Cleaning Services offer the best house cleaning and maid services in the Mobile area. Call (251) 930 8621 for a free quote today!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css" />
        <link as="image" fetchPriority="high" href="/images/location_hero.png" rel="preload" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <script src="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js" defer></script>
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CleaningService",
              "name": "Zoiris Cleaning Services",
              "@id": "https://zoiriscleaning.com/#business",
              "url": "https://zoiriscleaning.com/",
              "telephone": "+12519308621",
              "priceRange": "$$",
              "image": "https://zoiriscleaning.com/images/logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Downtown Mobile",
                "addressLocality": "Mobile",
                "addressRegion": "AL",
                "postalCode": "36602",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 30.6944,
                "longitude": -88.0431
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  "opens": "00:00",
                  "closes": "23:59"
                }
              ],
              "description": "Zoiris Cleaning Services is Mobile AL's #1 rated residential, commercial, Airbnb, and specialty cleaning company. Fully insured, eco-friendly, 100% satisfaction guaranteed.",
              "sameAs": [
                "https://www.facebook.com/zoiriscleaningservices",
                "https://www.instagram.com/zoiriscleaning",
                "https://x.com/zoiriscleaning",
                "https://www.yelp.com/biz/zoiris-cleaning-service-mobile",
                "https://www.linkedin.com/in/zoiriscleaning-services-b5b0b2381/"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "232",
                "bestRating": "5",
                "worstRating": "1"
              }
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Zoiris Cleaning Services",
              "url": "https://zoiriscleaning.com/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://zoiriscleaning.com/mobile-al/{search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How often should I get my house cleaned in Mobile, AL?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most homeowners in Mobile, AL schedule house cleaning every 2 weeks. Zoiris Cleaning Services also offers weekly, bi-weekly, and monthly plans. Call 251-220-2515 to find the right schedule for you."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much does house cleaning cost in Mobile, AL?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "House cleaning in Mobile, AL typically ranges from $120–$280 depending on home size and frequency. Zoiris Cleaning Services offers competitive pricing with no hidden fees. Get a free quote at zoiriscleaning.com."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you bring your own cleaning supplies?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! Zoiris Cleaning Services brings all professional-grade, eco-friendly supplies. You don't need to provide anything — just unlock the door and we'll handle the rest."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I get same-day house cleaning in Mobile, AL?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Zoiris Cleaning Services offers same-day house cleaning in Mobile, AL based on availability. Call 251-220-2515 now to check open slots today."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is included in a standard house cleaning?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our standard house cleaning includes vacuuming, mopping, dusting, bathroom sanitation, kitchen wipe-down, and trash removal. Ask about our deep cleaning add-on for extra detail."
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className={`min-h-screen overflow-x-hidden ${inter.className}`}>
        {children}
      </body>
    </html>
  )
}
