'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from './Header';
import Footer from './Footer';

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
    if (typeof window !== 'undefined' && window.Swiper) {
      new window.Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: { delay: 3000, disableOnInteraction: false },
        pagination: { el: ".swiper-pagination", clickable: true },
        navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
        breakpoints: {
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        },
      });
    }

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
  }, []);

  return (
    <>
      <div className="floating-bubbles">
        <div className="bubble blue" style={{ width: '80px', height: '80px', left: '10%', animationDelay: '0s' }}></div>
        <div className="bubble pink" style={{ width: '120px', height: '120px', left: '20%', animationDelay: '2s' }}></div>
        <div className="bubble purple" style={{ width: '60px', height: '60px', left: '35%', animationDelay: '4s' }}></div>
        <div className="bubble blue" style={{ width: '100px', height: '100px', left: '70%', animationDelay: '1s' }}></div>
        <div className="bubble green" style={{ width: '90px', height: '90px', left: '85%', animationDelay: '3s' }}></div>
      </div>

      <Header />

      {/* Service Area Finder Nav */}
      <div className="container mx-auto px-6 py-4 flex justify-between items-center relative z-10">
        <div></div>
        <div className="flex items-center">
          <button className="bg-gray-900 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-700 contact-button text-lg transition" onClick={() => setFinderOpen(true)}>
            <i className="fa-solid fa-location-dot animate-pulse"></i> Service Area Finder
          </button>
        </div>
      </div>

      {/* ZIP Finder Modal */}
      {finderOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[99999]" onClick={() => setFinderOpen(false)}>
          <div className="contact-button text-lg rounded-2xl shadow-xl w-full max-w-lg p-8 text-center relative bg-white m-4" onClick={e => e.stopPropagation()}>
            <button className="absolute top-3 right-3 text-gray-900 hover:text-black text-4xl font-bold transition" onClick={() => setFinderOpen(false)}>×</button>
            <h2 className="text-3xl font-extrabold text-black mb-4">Service Availability in {cityName}, AL</h2>
            <p className="text-black mb-6 leading-relaxed">Enter your details below to check if <strong>ZOIRIS Cleaning</strong> serves your area.</p>
            
            {!showMap && (
              <form className="space-y-3" onSubmit={handleFinderSubmit}>
                <div className="flex space-x-2"><input className="flex-1 border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-400" name="name" placeholder="Enter Name" required type="text" /></div>
                <div className="flex space-x-2"><input className="flex-1 border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-400" name="phone" placeholder="Enter Phone" required type="tel" /></div>
                <div className="flex space-x-2"><input className="flex-1 border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-400" maxLength="5" name="zipcode" placeholder="Enter ZIP Code" required type="text" /></div>
                <button className="bg-neutral-950 text-white px-6 py-3 rounded-lg font-semibold hover:bg-neutral-900 w-full" type="submit">Check</button>
              </form>
            )}
            
            {showMap && (
              <div>
                <p className={`mt-6 text-lg font-bold ${zipError ? 'text-red-600' : 'text-green-600'}`}>{zipResult}</p>
                <div className="mt-6">
                  <iframe src={mapUrl} height="300" style={{ width: '100%', border: 0, borderRadius: '12px' }} title="Map"></iframe>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="hero-image min-h-screen pt-24 pb-12 flex items-center justify-center relative" id="home">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative text-center px-4 sm:px-6 lg:px-8 max-w-3xl z-10 w-full">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4 animate-fadeIn">
            {h1Text}
          </h1>
          <p className="text-base md:text-lg text-white font-medium max-w-md mx-auto mb-6 leading-relaxed">
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

      {/* About Section */}
      <section className="px-6 py-12 relative z-10 bg-white/80 backdrop-blur-sm" id="about">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 sm:text-4xl">
            About Zoiris Cleaning Service – {cityName} & Baldwin County Experts
          </h2>
          <div className="mt-4 h-1 w-20 bg-blue-600 mx-auto rounded"></div>
          <p className="mt-4 text-gray-800 text-base md:text-lg leading-relaxed">
            <strong>Zoiris Cleaning Services</strong> sets the standard for exceptional <em>Cleaning Services in {cityName} and Baldwin County</em>.
            We provide expert <strong>Cleaning Services {cityName}</strong>, apartment cleaning, office cleaning, thorough deep cleaning, move-in/out services, and eco-friendly options to guarantee your space is immaculate.
          </p>
          <div className="flex flex-col md:flex-row items-center mt-12 text-left">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-6">
              <img alt="Professional eco-friendly cleaning" className="rounded-xl shadow-xl w-full h-auto" src="/images/services_action.png" />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Story</h3>
              <p className="text-gray-800 text-base md:text-lg mb-4 leading-relaxed">From a small family-run service to one of {cityName}’s most trusted cleaning companies, our mission is simple: provide <strong>affordable, reliable, and high-quality cleaning</strong>.</p>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h3>
              <p className="text-gray-800 text-base md:text-lg mb-4 leading-relaxed">Our team uses <strong>eco-friendly, non-toxic products</strong> and advanced cleaning techniques to ensure a spotless finish every time.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 mt-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-full p-3"><i className="fas fa-hand-holding-heart text-blue-600 text-lg"></i></div>
                  <div className="ml-3"><h4 className="text-base font-semibold text-gray-900">Honesty</h4><p className="mt-1 text-gray-800 text-sm">Clear communication and dependable results.</p></div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-full p-3"><i className="fas fa-clock text-blue-600 text-lg"></i></div>
                  <div className="ml-3"><h4 className="text-base font-semibold text-gray-900">Punctuality</h4><p className="mt-1 text-gray-800 text-sm">We respect your schedule and arrive on time.</p></div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-full p-3"><i className="fas fa-leaf text-blue-600 text-lg"></i></div>
                  <div className="ml-3"><h4 className="text-base font-semibold text-gray-900">Eco-Friendly</h4><p className="mt-1 text-gray-800 text-sm">Safe, non-toxic products for your home.</p></div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-full p-3"><i className="fas fa-medal text-blue-600 text-lg"></i></div>
                  <div className="ml-3"><h4 className="text-base font-semibold text-gray-900">Quality</h4><p className="mt-1 text-gray-800 text-sm">Attention to detail with consistent results.</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 relative z-10 bg-gray-50/90 backdrop-blur-md" id="services">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
            Professional Cleaning Services for Homes & Businesses
          </h2>
          <p className="text-center text-gray-800 max-w-3xl mx-auto mb-12">
            Zoiris Cleaning Service delivers trusted <strong>residential and commercial cleaning</strong> solutions. Whether you need a one-time detail clean or recurring services, we make every home and business shine in {cityName}.
          </p>

          <div className="swiper mySwiper rounded-xl overflow-hidden shadow-2xl">
            <div className="swiper-wrapper">
              {SWIPER_SLIDES.map((slide, index) => (
                <div key={index} className="swiper-slide bg-white rounded-xl shadow-md border border-gray-100">
                  <div className="block h-full">
                    <img alt={slide.name} className="h-48 w-full object-cover" src={`/images/services/${slide.img}`} />
                    <div className="p-6">
                      <div className="flex items-center justify-center mb-4">
                        <i className={`fa-solid ${slide.icon} text-3xl text-blue-600`}></i>
                      </div>
                      <h3 className="font-bold text-xl mb-2 text-center text-gray-900">{slide.name}</h3>
                      <p className="text-sm text-center mb-4 text-gray-600 h-10">{slide.desc}</p>
                      <div className="text-center mt-4">
                        <Link href={`/${citySlug}/${slide.slug}/`} className="text-blue-600 hover:text-purple-600 font-bold transition">
                          Learn More <i className="fa-solid fa-arrow-right ml-1"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="swiper-button-next text-blue-600 !right-2"></div>
            <div className="swiper-button-prev text-blue-600 !left-2"></div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>

      {/* FUTURISTIC CONTACT FORM SECTION */}
      <section id="quote" className="relative py-20 overflow-hidden scroll-mt-28 z-10" style={{ background: 'linear-gradient(135deg,#0a0a1a 0%,#0d1b3e 50%,#0a0a1a 100%)' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(96,165,250,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(96,165,250,0.05) 1px,transparent 1px)', backgroundSize: '50px 50px', pointerEvents: 'none' }}></div>
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
              <div className="relative bg-white/[0.03] border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-[0_0_60px_rgba(102,126,234,0.09)]">
                
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

      <Footer />
    </>
  );
}
