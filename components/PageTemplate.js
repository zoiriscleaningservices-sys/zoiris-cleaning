'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from './Header';
import Footer from './Footer';
import ZipFinder from './ZipFinder';

const SWIPER_SLIDES = [
  { slug: 'industrial-warehouse-cleaning', name: 'Industrial & Warehouse Cleaning', icon: 'fa-warehouse', desc: 'Heavy-duty cleaning designed for warehouses and factories.', img: 'industrial_warehouse_cleaning.jpg' },
  { slug: 'office-janitorial-services', name: 'Office Janitorial Services', icon: 'fa-briefcase', desc: 'Reliable janitorial cleaning to keep your office professional.', img: 'office_janitorial_services.jpg' },
  { slug: 'school-daycare-cleaning', name: 'School & Daycare Cleaning', icon: 'fa-school', desc: 'Safe, thorough cleaning for educational facilities and daycares.', img: 'school_daycare_cleaning.jpg' },
  { slug: 'gutter-cleaning', name: 'Gutter Cleaning', icon: 'fa-cloud-rain', desc: 'Professional gutter cleaning to protect your property\'s exterior.', img: 'gutter_cleaning.jpg' },
  { slug: 'laundry-services', name: 'Laundry Services', icon: 'fa-shirt', desc: 'Professional laundry and folding services to save you time.', img: 'laundry_services.jpg' },
  { slug: 'solar-panel-cleaning', name: 'Solar Panel Cleaning', icon: 'fa-solar-panel', desc: 'Maximize energy efficiency with safe solar panel cleaning.', img: 'solar_panel_cleaning.jpg' },
  { slug: 'move-out-cleaning', name: 'Move-Out Cleaning', icon: 'fa-truck', desc: 'Leave your old space spotless and ready for inspection.', img: 'move_out_cleaning.jpg' },
  { slug: 'commercial-cleaning', name: 'Commercial Cleaning', icon: 'fa-building', desc: 'Professional cleaning for offices and businesses of all sizes.', img: 'commercial_cleaning.jpg' },
  { slug: 'property-management-janitorial', name: 'Property Management Janitorial', icon: 'fa-building-user', desc: 'Reliable cleaning services for property management companies.', img: 'property_management_janitorial.jpg' },
  { slug: 'deep-cleaning', name: 'Deep Cleaning', icon: 'fa-broom', desc: 'A top-to-bottom detailed clean to eliminate hidden grime.', img: 'deep_cleaning.jpg' },
  { slug: 'home-watch-services', name: 'Home Watch Services', icon: 'fa-eye', desc: 'Trustworthy property checks while you are away from home.', img: 'home_watch_services.jpg' },
  { slug: 'move-in-cleaning', name: 'Move-In Cleaning', icon: 'fa-key', desc: 'Fresh, sanitized, and move-in ready from day one.', img: 'move_in_cleaning.jpg' },
  { slug: 'house-cleaning', name: 'House Cleaning', icon: 'fa-house-chimney', desc: 'Flexible residential cleaning for apartments, condos, and houses.', img: 'house_cleaning.jpg' },
  { slug: 'detailing', name: 'Detailing', icon: 'fa-sparkles', desc: 'Detailed, immaculate cleaning focusing on the little things.', img: 'detailing.jpg' },
  { slug: 'luxury-estate-cleaning', name: 'Luxury Estate Cleaning', icon: 'fa-gem', desc: 'Premium, meticulous cleaning for high-end homes and estates.', img: 'luxury_estate_cleaning.jpg' },
  { slug: 'gym-fitness-center-cleaning', name: 'Gym & Fitness Center Cleaning', icon: 'fa-dumbbell', desc: 'Hygienic, deep cleaning for fitness centers and athletic clubs.', img: 'gym_fitness_center_cleaning.jpg' },
  { slug: 'property-maintenance', name: 'Property Maintenance', icon: 'fa-tools', desc: 'Keep your property in pristine shape entirely year-round.', img: 'property_maintenance.jpg' },
  { slug: 'carpet-cleaning', name: 'Carpet Cleaning', icon: 'fa-rug', desc: 'Deep carpet cleaning that removes dirt, stains, and allergens.', img: 'carpet_cleaning.jpg' },
  { slug: 'vacation-rental-cleaning', name: 'Vacation Rental Cleaning', icon: 'fa-umbrella-beach', desc: 'Keep your rental property spotless and guest-ready every time.', img: 'vacation_rental_cleaning.jpg' },
  { slug: 'airbnb-vacation-rental-management', name: 'Airbnb & Rental Management', icon: 'fa-house-user', desc: 'Complete cleaning and management solutions for your rentals.', img: 'airbnb_rental_management.jpg' },
  { slug: 'janitorial-cleaning-services', name: 'Janitorial Cleaning Services', icon: 'fa-clipboard-check', desc: 'Comprehensive janitorial services tailored to your facility.', img: 'janitorial_cleaning_services.jpg' }
];

export default function PageTemplate({ city, service, nearbyLinks, heroKeyword }) {
  const citySlug = city?.slug || 'mobile-al';
  const cityName = city?.name || 'Mobile';
  const serviceName = service?.name || null;
  const serviceDesc = service?.description || null;

  const h1Text = heroKeyword || (serviceName ? `Professional ${serviceName} in ${cityName}, Alabama` : `#1 Cleaning Services in ${cityName}, Alabama`);

  const [finderOpen, setFinderOpen] = useState(false);
  const [zipResult, setZipResult] = useState('');
  const [zipError, setZipError] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [mapUrl, setMapUrl] = useState('');

  const handleFinderSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const zip = data.get('zipcode').trim();
    
    const serviceZips = [
      "36602", "36603", "36604", "36605", "36606", "36607", "36608", "36609", "36618", "36619", "36612",
      "36532", "36526", "36527", "36551", "36533", "36575", "36582"
    ];

    if (serviceZips.includes(zip)) {
      setZipResult('✅ Yes! We provide premium cleaning services in your area.');
      setZipError(false);
    } else {
      setZipResult('❌ Sorry, we currently don’t service this ZIP code.');
      setZipError(true);
    }
    
    setMapUrl(`https://www.google.com/maps?q=${zip}&output=embed`);
    setShowMap(true);
    e.target.style.display = 'none';

    try {
      fetch("https://formspree.io/f/meolzlll", { method: "POST", body: data });
    } catch {}
  };

  const [heroFormStatus, setHeroFormStatus] = useState('idle');
  const [quoteFormStatus, setQuoteFormStatus] = useState('idle');

  const handleHeroSubmit = async (e) => {
    e.preventDefault();
    setHeroFormStatus('sending');
    const data = new FormData(e.target);
    const ghlPayload = {
      first_name: data.get('first_name') || '',
      last_name: data.get('last_name') || '',
      phone: data.get('phone') || '',
      email: data.get('email') || '',
      state: data.get('state') || '',
      city: data.get('city') || '',
      full_name: (data.get('first_name') || '') + ' ' + (data.get('last_name') || ''),
      source: 'Hero Form - Zoiris Cleaning Services'
    };
    try {
      await Promise.all([
        fetch('https://formspree.io/f/meolzlll', { method: 'POST', body: data, headers: { 'Accept': 'application/json' } }),
        fetch('https://services.leadconnectorhq.com/hooks/MpbUmdHRCJjL5urxlQWn/webhook-trigger/c78e3c57-3802-40cb-a7bb-46050ee2af4d', { method: 'POST', body: JSON.stringify(ghlPayload), headers: { 'Content-Type': 'application/json' } })
      ]);
      setHeroFormStatus('success');
    } catch {
      setHeroFormStatus('error');
    }
  };

  const handleQuoteSubmit = async (e) => {
    e.preventDefault();
    setQuoteFormStatus('sending');
    const data = new FormData(e.target);
    try {
      await fetch('https://formspree.io/f/xkgvorgd', { method: 'POST', body: data, headers: { 'Accept': 'application/json' } });
      setQuoteFormStatus('success');
    } catch {
      setQuoteFormStatus('error');
    }
  };

  useEffect(() => {
    let swiperInstance = null;
    
    const initSwiper = () => {
      if (typeof window !== 'undefined' && window.Swiper) {
        // Destroy existing instance if it exists to prevent React Strict Mode duplicates
        const swiperEl = document.querySelector(".mySwiper");
        if (swiperEl && swiperEl.swiper) {
          swiperEl.swiper.destroy(true, true);
        }

        swiperInstance = new window.Swiper(".mySwiper", {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          autoplay: { delay: 4000, disableOnInteraction: false },
          pagination: { el: ".swiper-pagination", clickable: true },
          navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
          breakpoints: {
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          },
        });
      } else {
        // Retry if Swiper tag hasn't loaded yet
        setTimeout(initSwiper, 500);
      }
    };
    
    initSwiper();

    const scrollToHash = () => {
      if (window.location.hash) {
        const id = window.location.hash.substring(1);
        const el = document.getElementById(id);
        if (el) {
          const header = document.querySelector('header');
          const offset = header ? header.offsetHeight : 0;
          const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    };
    // small delay to ensure DOM is ready
    setTimeout(scrollToHash, 100);
    
    return () => {
      if (swiperInstance) {
        swiperInstance.destroy(true, true);
      }
    };
  }, []);

  const schemaOrg = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `https://www.zoiriscleaning.com/${citySlug}/#localbusiness`,
        "name": `Zoiris Cleaning Services ${cityName}`,
        "description": `Professional ${serviceName ? serviceName.toLowerCase() : 'cleaning services'} in ${cityName}, Alabama.`,
        "url": `https://www.zoiriscleaning.com/${citySlug}/${service ? service.slug + '/' : ''}`,
        "telephone": "+1-251-220-2515",
        "priceRange": "$$",
        "image": "https://www.zoiriscleaning.com/images/logo.png",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": cityName,
          "addressRegion": "AL",
          "addressCountry": "US"
        },
        "areaServed": {
          "@type": "City",
          "name": cityName
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": `Do you provide ${serviceName ? serviceName.toLowerCase() : 'cleaning services'} in ${cityName}, AL?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Yes, Zoiris Cleaning Services provides top-rated ${serviceName ? serviceName.toLowerCase() : 'cleaning solutions'} throughout ${cityName} and the surrounding areas.`
            }
          },
          {
            "@type": "Question",
            "name": `How much does ${serviceName ? serviceName.toLowerCase() : 'cleaning'} cost in ${cityName}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `The cost of ${serviceName ? serviceName.toLowerCase() : 'cleaning'} in ${cityName} depends on the size of the property and the specific services requested. Contact us at 251-220-2515 for a free, instant quote.`
            }
          },
          {
            "@type": "Question",
            "name": `Are your cleaning products safe for pets and children?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Absolutely. We prioritize the use of eco-friendly, non-toxic cleaning products that are completely safe for your entire family, including pets.`
            }
          }
        ]
      }
    ]
  };

  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />
      <div className="floating-bubbles">
        <div className="bubble blue" style={{ width: '80px', height: '80px', left: '10%', animationDelay: '0s' }}></div>
        <div className="bubble pink" style={{ width: '120px', height: '120px', left: '20%', animationDelay: '2s' }}></div>
        <div className="bubble purple" style={{ width: '60px', height: '60px', left: '35%', animationDelay: '4s' }}></div>
        <div className="bubble blue" style={{ width: '100px', height: '100px', left: '70%', animationDelay: '1s' }}></div>
        <div className="bubble green" style={{ width: '90px', height: '90px', left: '85%', animationDelay: '3s' }}></div>
      </div>

      <Header currentCitySlug={city?.slug || 'mobile-al'} />

      <ZipFinder />


      {/* Hero Section */}
      <section className="min-h-screen pt-24 pb-12 flex items-center justify-center relative bg-slate-900" id="home">
        <img src="/images/hero_mansion_final.png?v=fixed3" data-testid="hero-bg-img" alt="Mansion Interior" className="absolute inset-0 w-full h-full object-cover" style={{ zIndex: 0, opacity: 0.7 }} />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: 0 }}></div>
        <div className="relative text-center px-4 sm:px-6 lg:px-8 max-w-3xl z-10 w-full">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4 animate-fadeIn" style={{ textShadow: "0px 4px 20px rgba(0,0,0,0.9), 0px 2px 5px rgba(0,0,0,1)" }}>
            {h1Text}
          </h1>
          <p className="text-base md:text-lg text-white font-medium max-w-md mx-auto mb-6 leading-relaxed" style={{ textShadow: "0px 3px 15px rgba(0,0,0,0.9), 0px 1px 4px rgba(0,0,0,1)" }}>
            <strong>Zoiris Cleaning Service</strong> provides trusted <em>{serviceName ? serviceName.toLowerCase() : 'residential & commercial cleaning'}</em> across <strong>{cityName}, Baldwin County, and nearby cities</strong>. 
            From deep cleans to move-in/out and eco-friendly solutions, we make your space spotless. 
            <span className="font-semibold text-blue-400"> Book online 24/7</span>.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:2512202515" className="contact-button text-lg"><i className="fas fa-phone mr-2 animate-pulse"></i>Call Now</a>
            <a href="mailto:zoiriscleaningservices@gmail.com" className="contact-button text-lg"><i className="fas fa-envelope mr-2 animate-pulse"></i>Email Us</a>
            <a href="#quote" className="contact-button text-lg"><i className="fa-solid fa-circle-check animate-pulse mr-2"></i>Get a Free Quote</a>
          </div>

          <div className="flex justify-center mt-6">
            <a href="#quote" className="animate-bounce text-white hover:text-blue-400 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>

          {/* LET US CALL YOU Hero Form */}
          <div className="mt-8 w-full max-w-[600px] mx-auto hidden sm:block">
            <div style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.22)', borderRadius: '24px', padding: '30px 32px', backdropFilter: 'blur(22px)', WebkitBackdropFilter: 'blur(22px)', boxShadow: '0 20px 60px rgba(0,0,0,0.35)' }}>
              
              <div className="text-center mb-2">
                <span style={{ display: 'inline-block', background: 'rgba(96,165,250,0.15)', border: '1px solid rgba(96,165,250,0.3)', color: '#93c5fd', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: '999px' }}>Free & No Commitment</span>
              </div>
              
              <h3 className="text-center text-xl font-black text-white mb-1 leading-tight">
                Let Us Call <span style={{ background: 'linear-gradient(90deg,#667eea,#a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>You</span>
              </h3>
              <p className="text-center text-sm text-white/50 mb-5">Drop your info below and we'll reach out within minutes!</p>

              {heroFormStatus === 'idle' || heroFormStatus === 'sending' ? (
                <form onSubmit={handleHeroSubmit} autoComplete="off">
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="hf-wrap"><span className="hf-ico"><i className="fas fa-user"></i></span><input className="hf-input" type="text" name="first_name" placeholder="First Name" required /></div>
                    <div className="hf-wrap"><span className="hf-ico"><i className="fas fa-user"></i></span><input className="hf-input" type="text" name="last_name" placeholder="Last Name" required /></div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="hf-wrap"><span className="hf-ico"><i className="fas fa-phone-alt"></i></span><input className="hf-input" type="tel" name="phone" placeholder="Phone Number" required pattern="[0-9+()\-\s]{7,20}" /></div>
                    <div className="hf-wrap"><span className="hf-ico"><i className="fas fa-envelope"></i></span><input className="hf-input" type="email" name="email" placeholder="Email Address" required /></div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="hf-wrap"><span className="hf-ico"><i className="fas fa-map"></i></span><input className="hf-input" type="text" name="state" placeholder="State" defaultValue="AL" /></div>
                    <div className="hf-wrap"><span className="hf-ico"><i className="fas fa-city"></i></span><input className="hf-input" type="text" name="city" placeholder="City" defaultValue={cityName} /></div>
                  </div>

                  <div className="flex flex-col gap-2 mb-4">
                    <label className="flex items-start gap-2 cursor-pointer">
                      <input type="checkbox" name="consent_nonmarketing" className="mt-[3px] min-w-[15px] w-[15px] h-[15px] accent-blue-400 shrink-0" required />
                      <span className="text-[11px] text-white/60 leading-tight text-left">I consent to Receive SMS Notifications, Alerts from <strong className="text-white">Zoiris Cleaning Services</strong>. Message frequency varies. Message & data rates may apply. Text HELP to <strong className="text-white">+1 251-220-2515</strong> for assistance. You can reply STOP to unsubscribe at any time.</span>
                    </label>
                    <label className="flex items-start gap-2 cursor-pointer">
                      <input type="checkbox" name="consent_marketing" className="mt-[3px] min-w-[15px] w-[15px] h-[15px] accent-blue-400 shrink-0" />
                      <span className="text-[11px] text-white/60 leading-tight text-left">By checking this box I agree to receive occasional marketing messages from <strong className="text-white">Zoiris Cleaning Services</strong>.</span>
                    </label>
                    <div className="pl-6 mt-1 text-left">
                      <span className="text-[11px] text-white/60 leading-tight">By submitting this form, you agree to our <Link href="/terms.html" className="text-blue-400 underline">Terms & Conditions</Link> and <Link href="/privacy.html" className="text-blue-400 underline">Privacy Policy</Link>.</span>
                    </div>
                  </div>

                  <button type="submit" className="hf-btn shadow-[0_5px_24px_rgba(102,126,234,0.5)]" disabled={heroFormStatus === 'sending'}>
                    {heroFormStatus === 'sending' ? <><i className="fas fa-spinner fa-spin mr-2"></i> Sending...</> : <><i className="fas fa-phone-alt mr-2"></i> Call Me — I'm Ready!</>}
                  </button>
                </form>
              ) : heroFormStatus === 'success' ? (
                <div className="mt-4 text-center p-6 bg-emerald-500/10 border border-emerald-400/30 rounded-2xl">
                  <div className="text-4xl mb-2">🎉</div>
                  <p className="text-lg font-bold text-emerald-300 mb-2">Thank You — We'll Be Right With You!</p>
                  <p className="text-sm text-white/70 mb-2">Your request has been received. A member of our team will call you within <strong className="text-emerald-300">15 minutes</strong>.</p>
                  <p className="text-xs text-white/40">Zoiris Cleaning Services • (251) 930-8621</p>
                </div>
              ) : (
                <div className="mt-4 text-center p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 font-semibold text-sm">
                  <i className="fas fa-exclamation-circle mr-2"></i> Something went wrong. Call <a href="tel:2512202515" className="text-red-400">251-220-2515</a>.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Massive Localized SEO Content Hub */}
      <section className="px-6 py-16 relative z-10 border-y border-white/5" id="about">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-md tracking-tight">
              {serviceName ? `Premium ${serviceName} in ${cityName}, Alabama` : `Top-Rated Cleaning Services in ${cityName}, AL`}
            </h2>
            <div className="mt-6 h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <article className="prose prose-invert prose-lg max-w-none text-gray-200">
            <p className="lead text-xl text-gray-100 font-medium mb-8">
              At <strong>Zoiris Cleaning Services</strong>, we know that finding a reliable, high-quality cleaner in <em>{cityName}</em> can be overwhelmingly difficult. That is exactly why we built our company around a single mission: delivering the most meticulous, spotless, and eco-friendly {serviceName ? serviceName.toLowerCase() : 'residential and commercial cleaning'} solutions across {cityName} and all of Baldwin County.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 items-start mt-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Why Mobile & Baldwin County Choose Us</h3>
                <p className="mb-6 leading-relaxed">
                  Whether you are managing a busy household in {cityName}, preparing an apartment for new tenants, or maintaining a massive commercial warehouse, cleanliness directly impacts your quality of life and business reputation. 
                </p>
                <p className="leading-relaxed mb-6">
                  Unlike fly-by-night operations, Zoiris is a fully insured, top-tier cleaning agency. We do not just wipe down surfaces—we perform deep sanitation. Our local {cityName} teams arrive fully equipped with advanced commercial-grade vacuums, heavy-duty degreasers, and non-toxic, pet-safe eco-friendly solutions. 
                </p>
                <ul className="space-y-3 mt-4 list-none pl-0">
                  <li className="flex items-center"><i className="fas fa-check-circle text-blue-400 mr-3"></i> <strong>100% Satisfaction Guarantee</strong> - We don't leave until it's spotless.</li>
                  <li className="flex items-center"><i className="fas fa-check-circle text-blue-400 mr-3"></i> <strong>Vetted & Insured Staff</strong> - Absolute peace of mind for your property.</li>
                  <li className="flex items-center"><i className="fas fa-check-circle text-blue-400 mr-3"></i> <strong>Eco-Friendly Products</strong> - Tough on dirt, completely safe for children & pets.</li>
                  <li className="flex items-center"><i className="fas fa-check-circle text-blue-400 mr-3"></i> <strong>Same-Day Availability</strong> - Fast dispatches across {cityName}.</li>
                </ul>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-2xl transform rotate-3"></div>
                <img alt={`Professional ${serviceName ? serviceName.toLowerCase() : 'cleaners'} working in ${cityName}`} className="rounded-2xl shadow-2xl w-full h-auto border border-white/10 relative z-10" src="/images/services_action.png" />
                <div className="absolute -bottom-6 -left-6 bg-slate-800 border border-white/10 p-6 rounded-2xl shadow-xl z-20 backdrop-blur-xl">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">🌟</div>
                    <div>
                      <p className="text-white font-bold text-lg leading-tight">4.9/5 Average Rating</p>
                      <p className="text-gray-400 text-sm">Based on 230+ {cityName} Reviews</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 bg-black/40 border border-white/10 p-8 rounded-3xl backdrop-blur-md shadow-2xl shadow-black/50">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Comprehensive {serviceName || 'Cleaning'} Solutions Tailored for You</h3>
              <p className="text-center text-gray-300 max-w-3xl mx-auto mb-8">
                Every property in {cityName} is unique, which is why we offer completely bespoke cleaning packages. From scrubbing baseboards and high-dusting ceiling fans to sanitizing grout and appliance deep-cleaning, we handle the dirty work so you can reclaim your time.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <div className="p-4 bg-black/30 border border-white/5 rounded-2xl hover:bg-black/50 transition shadow-lg shadow-black/20">
                  <i className="fas fa-home text-3xl text-blue-400 mb-3"></i>
                  <h4 className="font-bold text-white">Residential</h4>
                  <p className="text-sm text-gray-400 mt-2">Recurring maid services for busy families.</p>
                </div>
                <div className="p-4 bg-black/30 border border-white/5 rounded-2xl hover:bg-black/50 transition shadow-lg shadow-black/20">
                  <i className="fas fa-building text-3xl text-purple-400 mb-3"></i>
                  <h4 className="font-bold text-white">Commercial</h4>
                  <p className="text-sm text-gray-400 mt-2">Janitorial services for offices & retail.</p>
                </div>
                <div className="p-4 bg-black/30 border border-white/5 rounded-2xl hover:bg-black/50 transition shadow-lg shadow-black/20">
                  <i className="fas fa-broom text-3xl text-emerald-400 mb-3"></i>
                  <h4 className="font-bold text-white">Deep Cleaning</h4>
                  <p className="text-sm text-gray-400 mt-2">Heavy-duty sanitation for ignored spaces.</p>
                </div>
                <div className="p-4 bg-black/30 border border-white/5 rounded-2xl hover:bg-black/50 transition shadow-lg shadow-black/20">
                  <i className="fas fa-truck-moving text-3xl text-pink-400 mb-3"></i>
                  <h4 className="font-bold text-white">Move-In/Out</h4>
                  <p className="text-sm text-gray-400 mt-2">Score your full security deposit back.</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative z-10" id="services">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="px-5 py-2 bg-blue-500/20 border border-blue-400/30 text-blue-200 rounded-3xl text-sm font-bold tracking-widest shadow-sm">OUR SERVICES</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-6 text-white drop-shadow-md">Professional Cleaning Services in {cityName}</h2>
            <p className="mt-5 text-gray-200 max-w-2xl mx-auto text-lg leading-relaxed shadow-sm">
              Zoiris Cleaning Service delivers trusted <strong className="text-white drop-shadow-sm">residential and commercial cleaning</strong> solutions. Whether you need a one-time detail clean or recurring services, we make every space shine.
            </p>
          </div>

          <div className="relative w-full overflow-visible px-4">
            <div className="swiper mySwiper pb-14 pt-4">
              <div className="swiper-wrapper">
                {SWIPER_SLIDES.map((slide, index) => (
                  <div key={index} className="swiper-slide">
                    <div className="card_box group h-[450px] sm:h-[550px] w-full" data-aos="fade-up" data-aos-delay={(index % 3) * 100}>
                      <span className="card_box_ribbon"></span>
                      <img src={`/images/services/${slide.img}`} className="w-full h-full object-cover absolute inset-0 z-0 opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700" alt={slide.name} />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent z-0"></div>
                      <div className="relative z-10 p-6 md:p-8 flex flex-col h-full justify-end items-start w-full">
                        <i className={`fa-solid ${slide.icon} text-4xl text-white/50 mb-3 absolute top-6 right-6 group-hover:text-white/80 transition-colors`}></i>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 drop-shadow-md">{slide.name}</h3>
                        <p className="text-gray-200 text-sm md:text-base mb-6 line-clamp-3">{slide.desc}</p>
                        
                        <Link href={`/${citySlug}/${slide.slug}/`} className="button05 mt-auto sm:mt-4 inline-flex">
                          <span className="button05_text">Learn More</span>
                          <span className="button05_icon-wrap">
                            <span className="button05_dot"></span><span className="button05_dot"></span><span className="button05_dot"></span>
                            <i className="fa-solid fa-arrow-right ml-1 text-xs"></i>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="swiper-pagination mt-8"></div>
            </div>
            {/* Nav buttons placed outside wrapper for better look */}
            <div className="swiper-button-prev hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -ml-6 z-20"></div>
            <div className="swiper-button-next hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 -mr-6 z-20"></div>
          </div>
        </div>
      </section>

      {/* FUTURISTIC CONTACT FORM SECTION */}
      <section id="quote" className="relative py-20 overflow-hidden scroll-mt-28 z-10">
        <div style={{ position: 'absolute', top: '-100px', left: '-100px', width: '400px', height: '400px', background: 'radial-gradient(circle,rgba(102,126,234,0.2) 0%,transparent 70%)', pointerEvents: 'none', animation: 'zcs-orb 6s ease-in-out infinite' }}></div>
        <div style={{ position: 'absolute', bottom: '-100px', right: '-100px', width: '500px', height: '500px', background: 'radial-gradient(circle,rgba(167,139,250,0.15) 0%,transparent 70%)', pointerEvents: 'none', animation: 'zcs-orb 8s ease-in-out infinite reverse' }}></div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-14">
            <p className="text-[0.72rem] font-bold tracking-[.22em] uppercase text-blue-400 mb-2">✦ Contact Us ✦</p>
            <h2 className="text-[clamp(1.9rem,4vw,2.9rem)] font-black text-white mb-3 leading-tight">
              Get Your <span className="zcs-badge">Free Quote</span> Today
            </h2>
            <p className="text-sm text-white/50 max-w-[480px] mx-auto">Tell us about your space and we'll reach out within minutes.</p>
            <div className="w-[60px] h-[3px] rounded bg-gradient-to-r from-indigo-500 to-blue-400 mx-auto mt-4"></div>
          </div>

          <div className="grid lg:grid-cols-5 gap-10 items-start">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="relative bg-black/40 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl shadow-black/50">
                
                {quoteFormStatus === 'idle' || quoteFormStatus === 'sending' ? (
                  <form onSubmit={handleQuoteSubmit} className="grid gap-4" autoComplete="off">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="zcs-field"><input className="zcs-input" type="text" name="first_name" placeholder="First" required /><span className="zcs-label">First Name</span><span className="zcs-icon"><i className="fas fa-user"></i></span></div>
                      <div className="zcs-field"><input className="zcs-input" type="text" name="last_name" placeholder="Last" required /><span className="zcs-label">Last Name</span><span className="zcs-icon"><i className="fas fa-user-tag"></i></span></div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="zcs-field"><input className="zcs-input" type="tel" name="phone" placeholder="Phone" required pattern="[0-9+()\-\s]{7,20}" /><span className="zcs-label">Phone Number</span><span className="zcs-icon"><i className="fas fa-phone-alt"></i></span></div>
                      <div className="zcs-field"><input className="zcs-input" type="email" name="email" placeholder="Email" required /><span className="zcs-label">Email Address</span><span className="zcs-icon"><i className="fas fa-envelope"></i></span></div>
                    </div>
                    <div className="zcs-field"><input className="zcs-input" type="text" name="address" placeholder="Address" /><span className="zcs-label">Street Address</span><span className="zcs-icon"><i className="fas fa-map-marker-alt"></i></span></div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="zcs-field"><input className="zcs-input" type="text" name="state" placeholder="State" defaultValue="AL" /><span className="zcs-label">State</span><span className="zcs-icon"><i className="fas fa-map"></i></span></div>
                      <div className="zcs-field"><input className="zcs-input" type="text" name="city" placeholder="City" defaultValue={cityName} /><span className="zcs-label">City</span><span className="zcs-icon"><i className="fas fa-city"></i></span></div>
                    </div>
                    
                    <div className="zcs-field">
                      <span className="zcs-icon"><i className="fas fa-broom"></i></span>
                      <select className="zcs-input" id="zcs_service" name="service_type" required onChange={e => { e.target.classList.add('filled') }} defaultValue={serviceName || ""}>
                        <option value="" disabled></option>
                        <option value="Residential Cleaning">🏠 Residential Cleaning</option>
                        <option value="Commercial Cleaning">🏢 Commercial Cleaning</option>
                        <option value="Deep Cleaning">🧹 Deep Cleaning</option>
                        <option value="Move In / Out">📦 Move In / Out Cleaning</option>
                        <option value="Airbnb Cleaning">🛎️ Airbnb Cleaning</option>
                        <option value="Post-Construction">🏗️ Post-Construction Cleanup</option>
                        <option value="Office Cleaning">💼 Office Cleaning</option>
                        <option value="Other">✨ Other</option>
                      </select>
                      <span className="zcs-label" id="zcs_service_lbl">Type of Service Needed</span>
                    </div>

                    <div className="zcs-field">
                      <textarea className="zcs-input" name="message" rows="3" placeholder="Message"></textarea>
                      <span className="zcs-label" style={{ top: '16px' }}>Message or Special Requests</span>
                      <span className="zcs-icon" style={{ top: '18px', transform: 'none' }}><i className="fas fa-comment-alt"></i></span>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2 mt-2">
                      <label className="flex items-start gap-2 cursor-pointer">
                        <input type="checkbox" name="consent_nonmarketing" className="mt-1 min-w-[15px] w-[15px] h-[15px] accent-blue-400 shrink-0" required />
                        <span className="text-[11px] text-white/70 leading-tighter">I consent to Receive SMS Notifications, Alerts from <strong className="text-white">Zoiris Cleaning Services</strong>. Message frequency varies. Message & data rates may apply. Text HELP to <strong className="text-white">+1 251-220-2515</strong>. Reply STOP to unsubscribe.</span>
                      </label>
                      <div className="pl-6 mt-1"><span className="text-[11px] text-white/70">By submitting this form, you agree to our <Link href="/terms.html" className="text-blue-400 underline">Terms & Conditions</Link> and <Link href="/privacy.html" className="text-blue-400 underline">Privacy Policy</Link>.</span></div>
                    </div>

                    <button type="submit" className="zcs-btn mt-2" disabled={quoteFormStatus === 'sending'}>
                      {quoteFormStatus === 'sending' ? <><i className="fas fa-spinner fa-spin mr-2"></i> Sending...</> : <><i className="fas fa-paper-plane mr-2"></i> Send & Get My Free Quote</>}
                    </button>
                  </form>
                ) : quoteFormStatus === 'success' ? (
                  <div className="text-center p-8 bg-emerald-500/10 border border-emerald-400/30 rounded-2xl">
                    <div className="text-4xl mb-2">✅</div>
                    <p className="text-lg font-bold text-emerald-300 mb-2">Thank You for Reaching Out!</p>
                    <p className="text-sm text-white/70 mb-2">We have received your request and will contact you within <strong className="text-emerald-300">15 minutes</strong>.</p>
                  </div>
                ) : (
                  <div className="text-center p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 font-semibold text-sm">
                    <i className="fas fa-exclamation-circle mr-2"></i> Something went wrong. Call us at 251-220-2515.
                  </div>
                )}
              </div>
            </div>

            {/* Info Cards */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div className="zcs-glass">
                <p className="text-xs font-bold tracking-widest text-blue-400 mb-1 uppercase">Direct Contact</p>
                <h3 className="text-xl font-bold text-white mb-6">Reach Us Anytime</h3>
                
                <div className="flex flex-col gap-4">
                  <a href="tel:2512202515" className="flex items-center gap-4 group">
                    <div className="zcs-info-pill bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 group-hover:scale-110 transition"><i className="fas fa-phone-alt"></i></div>
                    <div><p className="text-[10px] text-white/40 uppercase font-bold tracking-wider mb-0.5">Phone</p><p className="font-bold text-white leading-none">251-220-2515</p></div>
                  </a>
                  <a href="mailto:zoiriscleaningservices@gmail.com" className="flex items-center gap-4 group">
                    <div className="zcs-info-pill bg-blue-500/10 border border-blue-500/30 text-blue-400 group-hover:scale-110 transition"><i className="fas fa-envelope"></i></div>
                    <div><p className="text-[10px] text-white/40 uppercase font-bold tracking-wider mb-0.5">Email</p><p className="font-bold text-white leading-none text-sm break-all">zoiriscleaningservices@gmail.com</p></div>
                  </a>
                  <div className="flex items-center gap-4">
                    <div className="zcs-info-pill bg-purple-500/10 border border-purple-500/30 text-purple-400"><i className="fas fa-clock"></i></div>
                    <div><p className="text-[10px] text-white/40 uppercase font-bold tracking-wider mb-0.5">Hours</p><p className="font-bold text-white leading-none text-sm">24/7 Emergency Service</p></div>
                  </div>
                </div>
              </div>
              
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-800 to-emerald-600 p-8 shadow-xl shadow-emerald-900/30">
                <div className="absolute -top-8 -right-8 w-28 h-28 bg-white/10 rounded-full blur-xl"></div>
                <h3 className="text-xl font-bold text-white mb-2 relative z-10 flex items-center"><i className="fab fa-whatsapp text-2xl mr-2"></i> WhatsApp Us</h3>
                <p className="text-emerald-100 text-sm mb-4 relative z-10">Prefer to text? Message us photos of your space for a faster estimate.</p>
                <a href="https://wa.me/12512202515" target="_blank" rel="noopener noreferrer" className="relative z-10 inline-block bg-white text-emerald-700 font-bold px-6 py-3 rounded-xl hover:bg-emerald-50 transition transform hover:-translate-y-1">Chat on WhatsApp</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Dynamic FAQ Section for Local SEO Dominance */}
      <section className="py-20 relative z-10 border-t border-white/5" id="faqs">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="px-5 py-2 bg-purple-500/20 border border-purple-400/30 text-purple-200 rounded-3xl text-sm font-bold tracking-widest shadow-sm">FAQS</span>
            <h2 className="text-3xl md:text-5xl font-extrabold mt-6 text-white drop-shadow-md">Frequently Asked Questions</h2>
            <p className="mt-4 text-gray-300 mx-auto text-lg">
              Everything you need to know about our <strong className="text-white drop-shadow-sm">{serviceName || 'Cleaning Services'}</strong> in {cityName}.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { q: `Do you provide ${serviceName ? serviceName.toLowerCase() : 'cleaning services'} in ${cityName}, AL?`, a: `Yes, Zoiris Cleaning Services provides top-rated ${serviceName ? serviceName.toLowerCase() : 'cleaning solutions'} throughout ${cityName} and the surrounding areas.` },
              { q: `How much does ${serviceName ? serviceName.toLowerCase() : 'cleaning'} cost in ${cityName}?`, a: `The cost of ${serviceName ? serviceName.toLowerCase() : 'cleaning'} in ${cityName} depends on the size of the property and the specific services requested. Contact us at 251-220-2515 for a free, instant quote.` },
              { q: `Are your cleaning products safe for pets and children?`, a: `Absolutely. We prioritize the use of eco-friendly, non-toxic cleaning products that are completely safe for your entire family, including pets.` },
              { q: `Do I need to supply the equipment for my ${serviceName ? serviceName.toLowerCase() : 'cleaning'} appointment?`, a: `No, our ${cityName} cleaning teams arrive fully equipped with commercial-grade vacuums, mops, and eco-friendly supplies to complete the job to perfection.` }
            ].map((faq, idx) => (
              <div key={idx} className="bg-black/40 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md shadow-xl shadow-black/40 transition-all duration-300 hover:bg-black/60">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
                >
                  <span className="font-bold text-white text-lg pr-4">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 transition-transform duration-300 ${activeFaq === idx ? 'rotate-180 bg-blue-500/30 text-blue-300' : 'text-gray-400'}`}>
                    <i className="fas fa-chevron-down"></i>
                  </div>
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${activeFaq === idx ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-gray-300 leading-relaxed border-t border-white/10 pt-4 mt-2">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer currentCitySlug={city?.slug || 'mobile-al'} />
    </main>
  );
}
