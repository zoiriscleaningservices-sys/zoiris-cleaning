'use client';
import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const SWIPER_SLIDES = [
  { slug: 'industrial-warehouse-cleaning', name: 'Industrial & Warehouse Cleaning', icon: 'fa-warehouse', desc: 'Heavy-duty cleaning designed for warehouses and factories.' },
  { slug: 'office-janitorial-services', name: 'Office Janitorial Services', icon: 'fa-briefcase', desc: 'Reliable janitorial cleaning to keep your office professional.' },
  { slug: 'school-daycare-cleaning', name: 'School & Daycare Cleaning', icon: 'fa-school', desc: 'Safe, thorough cleaning for educational facilities and daycares.' },
  { slug: 'gutter-cleaning', name: 'Gutter Cleaning', icon: 'fa-cloud-rain', desc: 'Professional gutter cleaning to protect your property\'s exterior.' },
  { slug: 'laundry-services', name: 'Laundry Services', icon: 'fa-shirt', desc: 'Professional laundry and folding services to save you time.' },
  { slug: 'solar-panel-cleaning', name: 'Solar Panel Cleaning', icon: 'fa-solar-panel', desc: 'Maximize energy efficiency with safe solar panel cleaning.' },
  { slug: 'move-out-cleaning', name: 'Move-Out Cleaning', icon: 'fa-truck', desc: 'Leave your old space spotless and ready for inspection.' },
  { slug: 'commercial-cleaning', name: 'Commercial Cleaning', icon: 'fa-building', desc: 'Professional cleaning for offices and businesses of all sizes.' },
  { slug: 'property-management-janitorial', name: 'Property Management Janitorial', icon: 'fa-building-user', desc: 'Reliable cleaning services for property management companies.' },
  { slug: 'deep-cleaning', name: 'Deep Cleaning', icon: 'fa-broom', desc: 'A top-to-bottom detailed clean to eliminate hidden grime.' },
  { slug: 'home-watch-services', name: 'Home Watch Services', icon: 'fa-eye', desc: 'Trustworthy property checks while you are away from home.' },
  { slug: 'move-in-cleaning', name: 'Move-In Cleaning', icon: 'fa-key', desc: 'Fresh, sanitized, and move-in ready from day one.' },
  { slug: 'house-cleaning', name: 'House Cleaning', icon: 'fa-house-chimney', desc: 'Flexible residential cleaning for apartments, condos, and houses.' },
  { slug: 'detailing', name: 'Detailing', icon: 'fa-sparkles', desc: 'Detailed, immaculate cleaning focusing on the little things.' },
  { slug: 'luxury-estate-cleaning', name: 'Luxury Estate Cleaning', icon: 'fa-gem', desc: 'Premium, meticulous cleaning for high-end homes and estates.' },
  { slug: 'gym-fitness-center-cleaning', name: 'Gym & Fitness Center Cleaning', icon: 'fa-dumbbell', desc: 'Hygienic, deep cleaning for fitness centers and athletic clubs.' },
  { slug: 'property-maintenance', name: 'Property Maintenance', icon: 'fa-tools', desc: 'Keep your property in pristine shape entirely year-round.' },
  { slug: 'carpet-cleaning', name: 'Carpet Cleaning', icon: 'fa-rug', desc: 'Deep carpet cleaning that removes dirt, stains, and allergens.' },
  { slug: 'vacation-rental-cleaning', name: 'Vacation Rental Cleaning', icon: 'fa-umbrella-beach', desc: 'Keep your rental property spotless and guest-ready every time.' },
  { slug: 'airbnb-vacation-rental-management', name: 'Airbnb & Rental Management', icon: 'fa-house-user', desc: 'Complete cleaning and management solutions for your rentals.' },
  { slug: 'janitorial-cleaning-services', name: 'Janitorial Cleaning Services', icon: 'fa-clipboard-check', desc: 'Comprehensive janitorial services tailored to your facility.' },
  { slug: 'window-cleaning', name: 'Window Cleaning', icon: 'fa-border-all', desc: 'Streak-free, crystal-clear window cleaning for any property.' },
  { slug: 'pressure-washing', name: 'Pressure Washing', icon: 'fa-water', desc: 'Restore driveways, decks, and exteriors with powerful washing.' },
  { slug: 'church-worship-center-cleaning', name: 'Church & Worship Cleaning', icon: 'fa-church', desc: 'Respectful, detailed cleaning for places of worship.' },
  { slug: 'post-construction-cleanup', name: 'Post-Construction Cleanup', icon: 'fa-hammer', desc: 'Remove dust, debris, and construction mess for a polished look.' },
  { slug: 'medical-dental-facility-cleaning', name: 'Medical Facility Cleaning', icon: 'fa-hospital', desc: 'Sanitation and sterilization services for medical environments.' },
  { slug: 'floor-stripping-waxing', name: 'Floor Stripping & Waxing', icon: 'fa-tablets', desc: 'Revitalize your hard floors with professional stripping and waxing.' },
  { slug: 'airbnb-cleaning', name: 'Airbnb Cleaning', icon: 'fa-house-user', desc: 'Quick turnaround cleaning for Airbnb hosts to keep 5-star ratings.' },
  { slug: 'luxury-estate-management', name: 'Luxury Estate Management', icon: 'fa-crown', desc: 'Comprehensive upkeep and cleaning management for luxury estates.' },
];

const QUICK_SERVICES = [
  { slug: 'commercial-cleaning', name: 'Commercial Cleaning', icon: 'fa-building' },
  { slug: 'deep-cleaning', name: 'Deep Cleaning', icon: 'fa-soap' },
  { slug: 'house-cleaning', name: 'House Cleaning', icon: 'fa-broom' },
  { slug: 'move-in-cleaning', name: 'Move-In Cleaning', icon: 'fa-box-open' },
  { slug: 'move-out-cleaning', name: 'Move-Out Cleaning', icon: 'fa-truck-moving' },
  { slug: 'vacation-rental-cleaning', name: 'Vacation Rental Cleaning', icon: 'fa-umbrella-beach' },
  { slug: 'airbnb-cleaning', name: 'Airbnb Cleaning', icon: 'fa-airbnb' },
  { slug: 'post-construction-cleanup', name: 'Post-Construction Cleanup', icon: 'fa-hammer' },
  { slug: 'carpet-cleaning', name: 'Carpet Cleaning', icon: 'fa-rug' },
];

export default function PageTemplate({ city, service, nearbyLinks, heroKeyword }) {
  const citySlug = city?.slug || 'mobile-al';
  const cityName = city?.name || 'Mobile';
  const serviceName = service?.name || null;
  const serviceDesc = service?.description || null;

  const breadcrumbText = serviceName ? `${serviceName} in ${cityName}` : `Cleaning Services in ${cityName}`;
  const h1Text = heroKeyword || (serviceName ? `Professional ${serviceName} in ${cityName}, Alabama` : `Premium Cleaning Services in ${cityName}, Alabama`);

  const heroParagraph = service
    ? `<strong>Zoiris Cleaning Service</strong> provides trusted <em>${serviceName}</em> in <strong>${cityName}, AL</strong>. Our expert team delivers spotless results every time. <span class="font-semibold text-blue-400">Book online 24/7</span>.`
    : `<strong>Zoiris Cleaning Service</strong> provides trusted <em>residential & commercial cleaning</em> across <strong>${cityName}, Baldwin County, and nearby cities</strong>. From deep cleans to move-in/out and eco-friendly solutions, we make your home or business spotless. <span class="font-semibold text-blue-400">Book online 24/7</span>.`;

  useEffect(() => {
    // Init Swiper after mount
    if (typeof window !== 'undefined' && window.Swiper) {
      initSwiper();
    } else {
      const interval = setInterval(() => {
        if (window.Swiper) {
          initSwiper();
          clearInterval(interval);
        }
      }, 300);
    }

    function initSwiper() {
      new window.Swiper('.mySwiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: { delay: 3000, disableOnInteraction: false },
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        breakpoints: { 640: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } },
      });
    }

    // Smooth scroll for anchors
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', e => {
        const id = link.getAttribute('href').slice(1);
        const el = document.getElementById(id);
        if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth' }); }
      });
    });
  }, []);

  return (
    <div className="min-h-screen py-0 px-0 overflow-x-hidden">
      {/* Floating Bubbles */}
      <div className="floating-bubbles">
        <div className="bubble" style={{ width: '80px', height: '80px', left: '10%', animationDelay: '0s' }}></div>
        <div className="bubble" style={{ width: '120px', height: '120px', left: '20%', animationDelay: '2s' }}></div>
        <div className="bubble" style={{ width: '60px', height: '60px', left: '35%', animationDelay: '4s' }}></div>
        <div className="bubble" style={{ width: '100px', height: '100px', left: '70%', animationDelay: '1s' }}></div>
        <div className="bubble" style={{ width: '90px', height: '90px', left: '85%', animationDelay: '3s' }}></div>
      </div>

      <main id="main-content">
        <Header citySlug={citySlug} />

        {/* Service Area Finder Button */}
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div></div>
          <div className="flex items-center">
            <button className="bg-gray-900 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-700 contact-button text-lg transition" onClick={() => document.getElementById('finderModal').classList.remove('hidden')}>
              <i className="fa-solid fa-location-dot fa-fade"></i> Service Area Finder
            </button>
          </div>
        </div>

        {/* ZIP Finder Modal */}
        <div className="fixed inset-0 bg-black bg-opacity-50 hidden flex items-center justify-center z-50" id="finderModal" onClick={() => document.getElementById('finderModal').classList.add('hidden')}>
          <div className="contact-button text-lg rounded-2xl shadow-xl w-full max-w-lg p-8 text-center relative" onClick={e => e.stopPropagation()}>
            <button className="absolute top-3 right-3 text-gray-900 hover:text-black text-4xl font-bold transition" onClick={() => document.getElementById('finderModal').classList.add('hidden')}>×</button>
            <h2 className="text-3xl font-extrabold text-black mb-4">Service Availability in {cityName}, AL</h2>
            <p className="text-black mb-6 leading-relaxed">Enter your details below to check if <strong>ZOIRIS Cleaning</strong> serves your area.</p>
            <form className="space-y-3" id="finderForm" onSubmit={e => {
              e.preventDefault();
              const serviceZips = ["36602","36603","36604","36605","36606","36607","36608","36609","36618","36619","36612","36532","36526","36527","36551","36533","36575","36582"];
              const zip = new FormData(e.target).get('zipcode').trim();
              const result = document.getElementById('result');
              const mapFrame = document.getElementById('map');
              if (serviceZips.includes(zip)) {
                result.textContent = '✅ Yes! We provide premium cleaning services in your area.';
                result.className = 'mt-6 text-green-600 font-bold';
              } else {
                result.textContent = '❌ Sorry, we currently don\'t service this ZIP code.';
                result.className = 'mt-6 text-red-600 font-bold';
              }
              mapFrame.src = `https://www.google.com/maps?q=${zip}&output=embed`;
              e.target.classList.add('hidden');
              document.getElementById('confirmationSection').classList.remove('hidden');
              fetch('https://formspree.io/f/meolzlll', { method: 'POST', body: new FormData(e.target) }).catch(() => {});
            }}>
              <input className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-400" name="name" placeholder="Enter Name" required type="text" />
              <input className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-400" name="phone" placeholder="Enter Phone" required type="tel" />
              <input className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-400" maxLength={5} name="zipcode" placeholder="Enter ZIP Code" required type="text" />
              <button className="bg-neutral-950 text-white px-6 rounded-lg font-semibold hover:bg-neutral-900 contact-button text-lg" type="submit">Check</button>
            </form>
            <div className="hidden" id="confirmationSection">
              <p className="mt-6 text-lg font-semibold" id="result"></p>
              <div className="mt-6" id="mapContainer">
                <iframe allowFullScreen height="300" id="map" loading="lazy" style={{ width: '100%', border: 0, borderRadius: '12px' }}></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="hero-image min-h-screen pt-24 pb-12 flex items-center justify-center relative" id="home">
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          <div className="relative text-center px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">{h1Text}</h1>
            <p className="text-base md:text-lg text-white font-medium max-w-md mx-auto mb-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: heroParagraph }} />
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:2512202515" className="contact-button text-lg"><i className="fas fa-phone mr-2 fa-beat"></i>Call Now</a>
              <a href="mailto:zoiriscleaningservices@gmail.com" className="contact-button text-lg"><i className="fas fa-envelope mr-2 fa-beat"></i>Email Us</a>
              <a href="#quote" className="contact-button text-lg"><i className="fa-solid fa-circle-check fa-beat"></i> Get a Free Quote</a>
            </div>
            <div className="flex justify-center mt-6">
              <button onClick={() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })}
                className="animate-bounce text-black hover:text-blue-600 focus:outline-none" aria-label="Scroll down">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Hero Form - Let Us Call You */}
            <div style={{ marginTop: '32px', width: '100%', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
              <div style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.22)', borderRadius: '24px', padding: '30px 32px', backdropFilter: 'blur(22px)', WebkitBackdropFilter: 'blur(22px)', boxShadow: '0 20px 60px rgba(0,0,0,0.35)' }}>
                <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                  <span style={{ display: 'inline-block', background: 'rgba(96,165,250,0.15)', border: '1px solid rgba(96,165,250,0.3)', color: '#93c5fd', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: '999px' }}>Free & No Commitment</span>
                </div>
                <h3 style={{ textAlign: 'center', fontSize: '1.4rem', fontWeight: 900, color: '#fff', margin: '0 0 6px', lineHeight: 1.2 }}>
                  Let Us Call <span style={{ background: 'linear-gradient(90deg,#667eea,#a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>You</span>
                </h3>
                <p style={{ textAlign: 'center', fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', margin: '0 0 20px' }}>Drop your info below and we'll reach out within minutes!</p>
                <form id="heroCallForm" autoComplete="off" onSubmit={async e => {
                  e.preventDefault();
                  const btn = document.getElementById('heroCallBtn');
                  btn.disabled = true;
                  btn.innerHTML = '<i class="fas fa-spinner fa-spin" style="margin-right:8px;"></i> Sending…';
                  const data = new FormData(e.target);
                  const ghlPayload = {
                    first_name: data.get('first_name') || '', last_name: data.get('last_name') || '',
                    phone: data.get('phone') || '', email: data.get('email') || '',
                    state: data.get('state') || '', city: data.get('city') || '',
                    full_name: (data.get('first_name') || '') + ' ' + (data.get('last_name') || ''),
                    source: 'Hero Form - Zoiris Cleaning Services Website'
                  };
                  try {
                    const [formspree] = await Promise.all([
                      fetch('https://formspree.io/f/meolzlll', { method: 'POST', body: data, headers: { 'Accept': 'application/json' } }),
                      fetch('https://services.leadconnectorhq.com/hooks/MpbUmdHRCJjL5urxlQWn/webhook-trigger/c78e3c57-3802-40cb-a7bb-46050ee2af4d', { method: 'POST', body: JSON.stringify(ghlPayload), headers: { 'Content-Type': 'application/json' } })
                    ]);
                    if (formspree.ok) { e.target.style.display = 'none'; document.getElementById('heroCallSuccess').style.display = 'block'; }
                    else throw new Error();
                  } catch {
                    document.getElementById('heroCallError').style.display = 'block';
                    btn.disabled = false;
                    btn.innerHTML = '<i class="fas fa-phone-alt" style="margin-right:8px;"></i> Call Me — I\'m Ready!';
                  }
                }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
                    <div className="hf-wrap"><span className="hf-ico"><i className="fas fa-user"></i></span><input className="hf-input" type="text" name="first_name" placeholder="First Name" required /></div>
                    <div className="hf-wrap"><span className="hf-ico"><i className="fas fa-user"></i></span><input className="hf-input" type="text" name="last_name" placeholder="Last Name" required /></div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
                    <div className="hf-wrap"><span className="hf-ico"><i className="fas fa-phone-alt"></i></span><input className="hf-input" type="tel" name="phone" placeholder="Phone Number" required /></div>
                    <div className="hf-wrap"><span className="hf-ico"><i className="fas fa-envelope"></i></span><input className="hf-input" type="email" name="email" placeholder="Email Address" required /></div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
                    <div className="hf-wrap"><span className="hf-ico"><i className="fas fa-map"></i></span><input className="hf-input" type="text" name="state" placeholder="State" /></div>
                    <div className="hf-wrap"><span className="hf-ico"><i className="fas fa-city"></i></span><input className="hf-input" type="text" name="city" placeholder="City" defaultValue={cityName} /></div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px' }}>
                    <label style={{ display: 'flex', alignItems: 'flex-start', gap: '9px', cursor: 'pointer' }}>
                      <input type="checkbox" name="consent_nonmarketing" style={{ marginTop: '3px', minWidth: '15px', width: '15px', height: '15px', accentColor: '#60a5fa', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.55 }}>I consent to Receive SMS Notifications, Alerts from <strong style={{ color: '#fff' }}>Zoiris Cleaning Services</strong>. Message frequency varies. Message & data rates may apply. Text HELP to <strong style={{ color: '#fff' }}>+1 251-220-2515</strong> for assistance. You can reply STOP to unsubscribe at any time.</span>
                    </label>
                    <label style={{ display: 'flex', alignItems: 'flex-start', gap: '9px', cursor: 'pointer' }}>
                      <input type="checkbox" name="consent_marketing" style={{ marginTop: '3px', minWidth: '15px', width: '15px', height: '15px', accentColor: '#60a5fa', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.55 }}>By checking this box I agree to receive occasional marketing messages from <strong style={{ color: '#fff' }}>Zoiris Cleaning Services</strong>.</span>
                    </label>
                    <div style={{ marginTop: '4px', paddingLeft: '24px' }}>
                      <span style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.55 }}>By submitting this form, you agree to our <a href="/terms/" target="_blank" style={{ color: '#60a5fa', textDecoration: 'underline' }}>Terms & Conditions</a> and <a href="/privacy-policy/" target="_blank" style={{ color: '#60a5fa', textDecoration: 'underline' }}>Privacy Policy</a>.</span>
                    </div>
                  </div>
                  <button type="submit" className="hf-btn" id="heroCallBtn">
                    <i className="fas fa-phone-alt" style={{ marginRight: '8px' }}></i> Call Me — I'm Ready!
                  </button>
                </form>
                <div id="heroCallSuccess" style={{ display: 'none', marginTop: '16px', textAlign: 'center', padding: '22px 18px', background: 'linear-gradient(135deg,rgba(52,211,153,0.12),rgba(16,185,129,0.08))', border: '1px solid rgba(52,211,153,0.3)', borderRadius: '16px' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '8px' }}>🎉</div>
                  <p style={{ fontSize: '1rem', fontWeight: 800, color: '#6ee7b7', margin: '0 0 6px' }}>Thank You — We'll Be Right With You!</p>
                  <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.65)', margin: '0 0 10px', lineHeight: 1.5 }}>Your request has been received. A member of our team will call you within <strong style={{ color: '#6ee7b7' }}>15 minutes</strong> during business hours.</p>
                </div>
                <div id="heroCallError" style={{ display: 'none', marginTop: '14px', textAlign: 'center', padding: '13px', background: 'rgba(248,113,113,0.1)', border: '1px solid rgba(248,113,113,0.3)', borderRadius: '11px', color: '#f87171', fontWeight: 600, fontSize: '0.87rem' }}>
                  <i className="fas fa-exclamation-circle" style={{ marginRight: '6px' }}></i> Something went wrong. Call <a href="tel:2512202515" style={{ color: '#f87171' }}>251-220-2515</a>.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="px-6 py-12" id="about">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              {service ? `${serviceName} in ${cityName}, AL — Expert Cleaners` : `About Zoiris Cleaning Service – ${cityName} & Baldwin County Experts`}
            </h2>
            <div className="mt-4 h-1 w-20 bg-blue-600 mx-auto rounded"></div>
            <p className="mt-4 text-gray-800 text-base md:text-lg leading-relaxed">
              {service
                ? serviceDesc
                : <><strong>Zoiris Cleaning Services</strong> sets the standard for exceptional <em>Cleaning Services in {cityName}, AL</em>. We provide expert house cleaning, apartment cleaning, office cleaning, thorough deep cleaning, move-in/out services, post-construction maid service, and eco-friendly options to guarantee your space is immaculate, hygienic, and inviting.</>
              }
            </p>
            <div className="flex flex-col md:flex-row items-center mt-8">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-6">
                <img alt={`Professional eco-friendly cleaning in ${cityName} Alabama by Zoiris team`} className="rounded-xl shadow-xl w-full h-auto" src="/images/services_action.png" />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Story</h3>
                <p className="text-gray-800 text-base md:text-lg mb-4 leading-relaxed">From a small family-run service to one of Mobile and Baldwin County's most trusted cleaning companies, our mission is simple: provide <strong>affordable, reliable, and high-quality cleaning</strong> that makes life easier for homes and businesses.</p>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h3>
                <p className="text-gray-800 text-base md:text-lg mb-4 leading-relaxed">Our team uses <strong>eco-friendly, non-toxic products</strong> and <strong>advanced cleaning techniques</strong> to ensure a spotless finish every time. Whether it's recurring residential service, move-in/move-out, or office cleaning, we guarantee consistent, professional results.</p>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Core Values</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  {[
                    { icon: 'fa-hand-holding-heart', title: 'Honesty', desc: 'Clear communication and dependable results.' },
                    { icon: 'fa-clock', title: 'Punctuality', desc: 'We respect your schedule and arrive on time.' },
                    { icon: 'fa-leaf', title: 'Eco-Friendly', desc: 'Safe, non-toxic products for your home and the environment.' },
                    { icon: 'fa-medal', title: 'Quality', desc: 'Attention to detail with consistent, top-tier results.' },
                  ].map(v => (
                    <div key={v.title} className="flex items-start">
                      <div className="flex-shrink-0 bg-blue-100 rounded-full p-3">
                        <i className={`fas ${v.icon} text-blue-600 text-lg`}></i>
                      </div>
                      <div className="ml-3">
                        <h4 className="text-base font-semibold text-gray-900">{v.title}</h4>
                        <p className="mt-1 text-gray-800 text-sm">{v.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-lightGray" id="services">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
              Professional Cleaning Services for Homes & Businesses in {cityName}
            </h2>
            <p className="text-center text-gray-800 max-w-3xl mx-auto mb-12">
              Zoiris Cleaning Service delivers trusted <strong>residential and commercial cleaning</strong> solutions designed to keep your space spotless, sanitized, and stress-free. Our expert cleaners specialize in <strong>deep cleaning, move-in and move-out cleaning, vacation rental turnovers, and post-construction cleanup</strong>. Whether you need a one-time detail clean or recurring services, we make every home and business shine with unmatched quality.
            </p>
          </div>
        </section>

        {/* Swiper */}
        <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            {SWIPER_SLIDES.map(slide => (
              <div key={slide.slug} className="swiper-slide">
                <div className="contact-button text-lg">
                  <div className="p-6">
                    <div className="flex items-center justify-center mb-4">
                      <i className={`fa-solid ${slide.icon} text-xl`}></i>
                    </div>
                    <h3 className="font-bold text-xl mb-2 text-center">{slide.name}</h3>
                    <p className="text-sm text-center mb-4">{slide.desc}</p>
                    <div className="text-center">
                      <a className="contact-button text-lg" href={`/${citySlug}/${slide.slug}/`}>Learn More About {slide.name} <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-button-next text-blue-600"></div>
          <div className="swiper-button-prev text-blue-600"></div>
          <div className="swiper-pagination"></div>
        </div>

        {/* Quote Section */}
        <section id="quote" className="relative py-20 overflow-hidden scroll-mt-28" style={{ background: 'linear-gradient(135deg,#0a0a1a 0%,#0d1b3e 50%,#0a0a1a 100%)' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(96,165,250,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(96,165,250,0.05) 1px,transparent 1px)', backgroundSize: '50px 50px', pointerEvents: 'none' }}></div>
          <div style={{ position: 'absolute', top: '-100px', left: '-100px', width: '400px', height: '400px', background: 'radial-gradient(circle,rgba(102,126,234,0.2) 0%,transparent 70%)', pointerEvents: 'none', animation: 'zcs-orb 6s ease-in-out infinite' }}></div>
          <div style={{ position: 'absolute', bottom: '-100px', right: '-100px', width: '500px', height: '500px', background: 'radial-gradient(circle,rgba(167,139,250,0.15) 0%,transparent 70%)', pointerEvents: 'none', animation: 'zcs-orb 8s ease-in-out infinite reverse' }}></div>
          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <div className="text-center mb-14">
              <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '.22em', textTransform: 'uppercase', color: '#60a5fa', marginBottom: '10px' }}>✦ Contact Us ✦</p>
              <h2 style={{ fontSize: 'clamp(1.9rem,4vw,2.9rem)', fontWeight: 900, color: '#fff', margin: '0 0 12px', lineHeight: 1.2 }}>
                Get Your <span className="zcs-badge">Free Quote</span> Today
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem', maxWidth: '480px', margin: '0 auto' }}>Tell us about your space and we'll reach out within minutes.</p>
              <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg,#667eea,#60a5fa)', borderRadius: '10px', margin: '18px auto 0' }}></div>
            </div>

            <div className="grid lg:grid-cols-5 gap-10 items-start">
              {/* Form */}
              <div className="lg:col-span-3">
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: '24px', padding: '34px 30px', backdropFilter: 'blur(22px)', WebkitBackdropFilter: 'blur(22px)', boxShadow: '0 0 60px rgba(102,126,234,0.09)' }}>
                  <form id="contactForm" autoComplete="off" style={{ display: 'grid', gap: '14px' }} onSubmit={async e => {
                    e.preventDefault();
                    const btn = document.getElementById('zcsSubmitBtn');
                    btn.disabled = true;
                    btn.innerHTML = '<i class="fas fa-spinner fa-spin" style="margin-right:8px;"></i> Sending…';
                    const data = new FormData(e.target);
                    const ghlPayload = {
                      first_name: data.get('first_name') || '', last_name: data.get('last_name') || '',
                      phone: data.get('phone') || '', email: data.get('email') || '',
                      address: data.get('address') || '', city: data.get('city') || '',
                      state: data.get('state') || '', service_type: data.get('service_type') || '',
                      message: data.get('message') || '',
                      full_name: (data.get('first_name') || '') + ' ' + (data.get('last_name') || ''),
                      source: 'Quote Form - Zoiris Cleaning Services Website'
                    };
                    try {
                      const [formspree] = await Promise.all([
                        fetch('https://formspree.io/f/xkgvorgd', { method: 'POST', body: data, headers: { 'Accept': 'application/json' } }),
                        fetch('https://services.leadconnectorhq.com/hooks/MpbUmdHRCJjL5urxlQWn/webhook-trigger/2fc8a295-4595-48ba-a780-9c5ebca1e6f1', { method: 'POST', body: JSON.stringify(ghlPayload), headers: { 'Content-Type': 'application/json' } })
                      ]);
                      if (formspree.ok) {
                        e.target.style.display = 'none';
                        document.getElementById('formError').style.display = 'none';
                        const s = document.getElementById('formSuccess');
                        s.style.display = 'block';
                        s.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      } else throw new Error();
                    } catch {
                      document.getElementById('formError').style.display = 'block';
                      btn.disabled = false;
                      btn.innerHTML = '<i class="fas fa-paper-plane" style="margin-right:8px;"></i> Send & Get My Free Quote';
                    }
                  }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                      <div className="zcs-field"><input className="zcs-input" type="text" name="first_name" placeholder="First Name" required /><span className="zcs-label">First Name</span><span className="zcs-icon"><i className="fas fa-user"></i></span></div>
                      <div className="zcs-field"><input className="zcs-input" type="text" name="last_name" placeholder="Last Name" required /><span className="zcs-label">Last Name</span><span className="zcs-icon"><i className="fas fa-user-tag"></i></span></div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                      <div className="zcs-field"><input className="zcs-input" type="tel" name="phone" placeholder="Phone" required /><span className="zcs-label">Phone Number</span><span className="zcs-icon"><i className="fas fa-phone-alt"></i></span></div>
                      <div className="zcs-field"><input className="zcs-input" type="email" name="email" placeholder="Email" required /><span className="zcs-label">Email Address</span><span className="zcs-icon"><i className="fas fa-envelope"></i></span></div>
                    </div>
                    <div className="zcs-field"><input className="zcs-input" type="text" name="address" placeholder="Address" /><span className="zcs-label">Street Address</span><span className="zcs-icon"><i className="fas fa-map-marker-alt"></i></span></div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                      <div className="zcs-field"><input className="zcs-input" type="text" name="state" placeholder="State" /><span className="zcs-label">State</span><span className="zcs-icon"><i className="fas fa-map"></i></span></div>
                      <div className="zcs-field"><input className="zcs-input" type="text" name="city" placeholder="City" defaultValue={cityName} /><span className="zcs-label">City</span><span className="zcs-icon"><i className="fas fa-city"></i></span></div>
                    </div>
                    <div className="zcs-field">
                      <span className="zcs-icon"><i className="fas fa-broom"></i></span>
                      <select className="zcs-input" name="service_type" required onChange={e => { e.target.classList.add('filled'); const lbl = e.target.nextElementSibling; if(lbl) { lbl.style.top='-10px'; lbl.style.left='10px'; lbl.style.fontSize='0.67rem'; lbl.style.color='#93c5fd'; lbl.style.background='rgba(10,18,50,0.95)'; lbl.style.padding='0 6px'; lbl.style.borderRadius='4px'; } }}>
                        <option value="" disabled defaultValue></option>
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
                    <div className="zcs-field"><textarea className="zcs-input" name="message" rows={3} placeholder="Message"></textarea><span className="zcs-label" style={{ top: '16px' }}>Message or Special Requests</span><span className="zcs-icon" style={{ top: '18px', transform: 'none' }}><i className="fas fa-comment-alt"></i></span></div>
                    <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '14px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer' }}>
                        <input type="checkbox" name="consent_nonmarketing" style={{ marginTop: '3px', minWidth: '15px', width: '15px', height: '15px', accentColor: '#60a5fa' }} />
                        <span style={{ fontSize: '0.71rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>I consent to Receive SMS Notifications, Alerts from <strong style={{ color: '#fff' }}>Zoiris Cleaning Services</strong>. Message frequency varies. Message & data rates may apply. Text HELP to <strong style={{ color: '#fff' }}>+1 251-220-2515</strong> for assistance. You can reply STOP to unsubscribe at any time.</span>
                      </label>
                      <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer' }}>
                        <input type="checkbox" name="consent_marketing" style={{ marginTop: '3px', minWidth: '15px', width: '15px', height: '15px', accentColor: '#60a5fa' }} />
                        <span style={{ fontSize: '0.71rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>By checking this box I agree to receive occasional marketing messages from <strong style={{ color: '#fff' }}>Zoiris Cleaning Services</strong>.</span>
                      </label>
                      <div style={{ marginTop: '4px', paddingLeft: '25px' }}>
                        <span style={{ fontSize: '0.71rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>By submitting this form, you agree to our <a href="/terms/" target="_blank" style={{ color: '#60a5fa', textDecoration: 'underline' }}>Terms & Conditions</a> and <a href="/privacy-policy/" target="_blank" style={{ color: '#60a5fa', textDecoration: 'underline' }}>Privacy Policy</a>.</span>
                      </div>
                    </div>
                    <button type="submit" className="zcs-btn" id="zcsSubmitBtn">
                      <i className="fas fa-paper-plane" style={{ marginRight: '8px' }}></i> Send & Get My Free Quote
                    </button>
                  </form>
                  <div id="formSuccess" style={{ display: 'none', textAlign: 'center', padding: '26px 20px', background: 'linear-gradient(135deg,rgba(52,211,153,0.1),rgba(16,185,129,0.06))', border: '1px solid rgba(52,211,153,0.28)', borderRadius: '16px' }}>
                    <div style={{ fontSize: '2.2rem', marginBottom: '10px' }}>✅</div>
                    <p style={{ fontSize: '1.05rem', fontWeight: 800, color: '#6ee7b7', margin: '0 0 8px' }}>Thank You for Reaching Out!</p>
                    <p style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.7)', margin: '0 0 6px', lineHeight: 1.6 }}>We have received your request and one of our professional cleaning specialists will contact you within <strong style={{ color: '#6ee7b7' }}>15 minutes</strong> during business hours.</p>
                    <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', margin: 0 }}>Zoiris Cleaning Services • (251) 930-8621 • {cityName}, AL</p>
                  </div>
                  <div id="formError" style={{ display: 'none', textAlign: 'center', padding: '15px', background: 'rgba(248,113,113,0.1)', border: '1px solid rgba(248,113,113,0.3)', borderRadius: '12px', color: '#f87171', fontWeight: 600, fontSize: '0.9rem' }}>
                    <i className="fas fa-exclamation-circle" style={{ marginRight: '6px' }}></i> Something went wrong. Call us at 251-220-2515.
                  </div>
                </div>
              </div>

              {/* Right side contact */}
              <div className="lg:col-span-2" style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div className="zcs-glass">
                  <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#60a5fa', margin: '0 0 6px' }}>Direct Contact</p>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff', margin: '0 0 20px' }}>Reach Us Anytime</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <a href="tel:2512202515" style={{ display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none' }}>
                      <div className="zcs-info-pill" style={{ background: 'linear-gradient(135deg,rgba(52,211,153,0.2),rgba(16,185,129,0.1))', border: '1px solid rgba(52,211,153,0.3)' }}><i className="fas fa-phone-alt" style={{ color: '#34d399' }}></i></div>
                      <div><p style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '.09em', margin: '0 0 2px', fontWeight: 600 }}>Phone</p><p style={{ fontSize: '1rem', fontWeight: 800, color: '#fff', margin: 0 }}>251-220-2515</p></div>
                    </a>
                    <a href="mailto:zoiriscleaningservices@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none' }}>
                      <div className="zcs-info-pill" style={{ background: 'linear-gradient(135deg,rgba(96,165,250,0.2),rgba(37,99,235,0.1))', border: '1px solid rgba(96,165,250,0.3)' }}><i className="fas fa-envelope" style={{ color: '#60a5fa' }}></i></div>
                      <div style={{ minWidth: 0 }}><p style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '.09em', margin: '0 0 2px', fontWeight: 600 }}>Email</p><p style={{ fontSize: '0.8rem', fontWeight: 700, color: '#fff', margin: 0, wordBreak: 'break-all' }}>zoiriscleaningservices@gmail.com</p></div>
                    </a>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                      <div className="zcs-info-pill" style={{ background: 'linear-gradient(135deg,rgba(167,139,250,0.2),rgba(124,58,237,0.1))', border: '1px solid rgba(167,139,250,0.3)' }}><i className="fas fa-clock" style={{ color: '#a78bfa' }}></i></div>
                      <div><p style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '.09em', margin: '0 0 2px', fontWeight: 600 }}>Hours</p><p style={{ fontSize: '0.95rem', fontWeight: 800, color: '#fff', margin: 0 }}>24/7 Emergency Service</p></div>
                    </div>
                  </div>
                </div>
                {/* WhatsApp */}
                <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '20px', background: 'linear-gradient(135deg,#065f46,#059669)', padding: '26px', boxShadow: '0 8px 30px rgba(5,150,105,0.35)' }}>
                  <div style={{ position: 'absolute', top: '-28px', right: '-28px', width: '110px', height: '110px', background: 'rgba(255,255,255,0.07)', borderRadius: '50%' }}></div>
                  <div style={{ position: 'absolute', bottom: '-18px', left: '-18px', width: '80px', height: '80px', background: 'rgba(255,255,255,0.06)', borderRadius: '50%' }}></div>
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '11px', marginBottom: '10px' }}>
                      <div style={{ width: '42px', height: '42px', background: 'rgba(255,255,255,0.16)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i className="fab fa-whatsapp" style={{ color: '#fff', fontSize: '1.35rem' }}></i></div>
                      <h3 style={{ color: '#fff', fontSize: '1.15rem', fontWeight: 800, margin: 0 }}>Quick WhatsApp</h3>
                    </div>
                    <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '0.84rem', margin: '0 0 16px', lineHeight: 1.5 }}>Get an instant response — we typically reply in under 2 minutes!</p>
                    <a href="https://wa.me/12519308621" target="_blank" rel="noreferrer"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#fff', color: '#065f46', padding: '11px 20px', borderRadius: '11px', fontWeight: 700, fontSize: '0.88rem', textDecoration: 'none', boxShadow: '0 4px 14px rgba(0,0,0,0.2)', transition: 'transform .2s,box-shadow .2s' }}>
                      <i className="fab fa-whatsapp" style={{ fontSize: '1.15rem' }}></i> Chat Now on WhatsApp
                    </a>
                  </div>
                </div>
                <div className="zcs-glass" style={{ textAlign: 'center', padding: '20px' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '7px' }}>⚡</div>
                  <p style={{ fontSize: '0.92rem', fontWeight: 700, color: '#fff', margin: '0 0 4px' }}>Lightning Fast Response</p>
                  <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', margin: 0 }}>We call back within <strong style={{ color: '#60a5fa' }}>15 minutes</strong> during business hours.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Services Grid */}
        <section className="py-16" id="services-preview">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">Our Services in {cityName}, AL</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl mx-auto">
              {QUICK_SERVICES.map(s => (
                <a key={s.slug} className="contact-button text-lg" href={`/${citySlug}/${s.slug}/`}>
                  <div className="flex items-center gap-3">
                    <div className="contact-button text-lg"><i className={`fa-solid ${s.icon} text-xl`}></i></div>
                    <h3 className="contact-button text-lg">{s.name}</h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Nearby Locations */}
        {nearbyLinks && nearbyLinks.length > 0 && (
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
                We Also Serve Nearby Cities
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {nearbyLinks.map(loc => (
                  <a key={loc.slug} href={`/${loc.slug}/`}
                    className="px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200 text-sm font-medium shadow-sm">
                    <i className="fas fa-map-marker-alt text-blue-400 mr-2"></i>
                    {loc.name}, AL
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        <section className="py-16 px-4" id="faq">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
              Frequently Asked Questions — {service ? serviceName : 'Cleaning Services'} in {cityName}, AL
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: `How often should I get my ${service ? serviceName.toLowerCase() : 'house cleaned'} in ${cityName}, AL?`,
                  a: `Most ${cityName} homeowners schedule ${service ? serviceName.toLowerCase() : 'house cleaning'} every 2 weeks. Zoiris Cleaning Services also offers weekly, bi-weekly, and monthly plans. Call 251-220-2515 to find the right schedule for you.`
                },
                {
                  q: `How much does ${service ? serviceName.toLowerCase() : 'house cleaning'} cost in ${cityName}, AL?`,
                  a: `${service ? serviceName : 'House cleaning'} in ${cityName}, AL typically ranges from $120–$280 depending on home size and frequency. Zoiris Cleaning Services offers competitive pricing with no hidden fees. Get a free quote at zoiriscleaning.com.`
                },
                {
                  q: 'Do you bring your own cleaning supplies?',
                  a: "Yes! Zoiris Cleaning Services brings all professional-grade, eco-friendly supplies. You don't need to provide anything — just unlock the door and we'll handle the rest."
                },
                {
                  q: `Can I get same-day ${service ? serviceName.toLowerCase() : 'cleaning'} in ${cityName}, AL?`,
                  a: `Yes, Zoiris Cleaning Services offers same-day ${service ? serviceName.toLowerCase() : 'house cleaning'} in ${cityName}, AL based on availability. Call 251-220-2515 now to check open slots today.`
                },
                {
                  q: `What is included in a standard ${service ? serviceName.toLowerCase() : 'house cleaning'}?`,
                  a: `Our standard ${service ? serviceName.toLowerCase() : 'house cleaning'} includes vacuuming, mopping, dusting, bathroom sanitation, kitchen wipe-down, and trash removal. Ask about our deep cleaning add-on for extra detail.`
                },
              ].map((faq, i) => (
                <details key={i} className="bg-white rounded-xl shadow-md p-4 cursor-pointer group">
                  <summary className="font-semibold text-gray-900 text-lg list-none flex justify-between items-center">
                    {faq.q}
                    <i className="fas fa-chevron-down text-blue-500 group-open:rotate-180 transition-transform duration-300"></i>
                  </summary>
                  <p className="mt-3 text-gray-700 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <Footer citySlug={citySlug} cityName={cityName} />
      </main>
    </div>
  );
}
