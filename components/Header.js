'use client';
import { useState } from 'react';
import Link from 'next/link';

const ALL_SERVICES = [
  { slug: 'house-cleaning', name: 'House Cleaning', category: 'Residential' },
  { slug: 'deep-cleaning', name: 'Deep Cleaning', category: 'Residential' },
  { slug: 'move-in-cleaning', name: 'Move-In Cleaning', category: 'Residential' },
  { slug: 'move-out-cleaning', name: 'Move-Out Cleaning', category: 'Residential' },
  { slug: 'carpet-cleaning', name: 'Carpet Cleaning', category: 'Residential' },
  { slug: 'window-cleaning', name: 'Window Cleaning', category: 'Residential' },
  { slug: 'pressure-washing', name: 'Pressure Washing', category: 'Residential' },
  { slug: 'luxury-estate-cleaning', name: 'Luxury Estate Cleaning', category: 'Residential' },
  { slug: 'laundry-services', name: 'Laundry Services', category: 'Residential' },
  { slug: 'detailing', name: 'Detailing', category: 'Residential' },
  { slug: 'commercial-cleaning', name: 'Commercial Cleaning', category: 'Commercial' },
  { slug: 'office-janitorial-services', name: 'Office Janitorial Services', category: 'Commercial' },
  { slug: 'janitorial-cleaning-services', name: 'Janitorial Cleaning Services', category: 'Commercial' },
  { slug: 'medical-dental-facility-cleaning', name: 'Medical Facility Cleaning', category: 'Commercial' },
  { slug: 'industrial-warehouse-cleaning', name: 'Industrial & Warehouse Cleaning', category: 'Commercial' },
  { slug: 'floor-stripping-waxing', name: 'Floor Stripping & Waxing', category: 'Commercial' },
  { slug: 'gym-fitness-center-cleaning', name: 'Gym & Fitness Center Cleaning', category: 'Commercial' },
  { slug: 'school-daycare-cleaning', name: 'School & Daycare Cleaning', category: 'Commercial' },
  { slug: 'church-worship-center-cleaning', name: 'Church & Worship Cleaning', category: 'Commercial' },
  { slug: 'solar-panel-cleaning', name: 'Solar Panel Cleaning', category: 'Commercial' },
  { slug: 'vacation-rental-cleaning', name: 'Vacation Rental Cleaning', category: 'Property' },
  { slug: 'airbnb-cleaning', name: 'Airbnb Cleaning', category: 'Property' },
  { slug: 'airbnb-vacation-rental-management', name: 'Airbnb & Rental Management', category: 'Property' },
  { slug: 'post-construction-cleanup', name: 'Post-Construction Cleanup', category: 'Property' },
  { slug: 'property-management-janitorial', name: 'Property Management Janitorial', category: 'Property' },
  { slug: 'property-maintenance', name: 'Property Maintenance', category: 'Property' },
  { slug: 'home-watch-services', name: 'Home Watch Services', category: 'Property' },
  { slug: 'luxury-estate-management', name: 'Luxury Estate Management', category: 'Property' },
  { slug: 'gutter-cleaning', name: 'Gutter Cleaning', category: 'Property' },
];

const FEATURED_LOCATIONS = [
  { slug: 'daphne-al', name: 'Daphne' },
  { slug: 'fairhope-al', name: 'Fairhope' },
  { slug: 'foley-al', name: 'Foley' },
  { slug: 'gulf-shores-al', name: 'Gulf Shores' },
  { slug: 'spanish-fort-al', name: 'Spanish Fort' },
  { slug: 'saraland-al', name: 'Saraland' },
  { slug: 'theodore-al', name: 'Theodore' },
  { slug: 'semmes-al', name: 'Semmes' },
  { slug: 'eight-mile-al', name: 'Eight Mile' },
  { slug: 'citronelle-al', name: 'Citronelle' },
  { slug: 'satsuma-al', name: 'Satsuma' },
  { slug: 'gardendale-al', name: 'Gardendale' },
  { slug: 'prichard-al', name: 'Prichard' },
  { slug: 'bay-minette-al', name: 'Bay Minette' },
  { slug: 'fort-payne-al', name: 'Fort Payne' },
];

const residentialServices = ALL_SERVICES.filter(s => s.category === 'Residential');
const commercialServices = ALL_SERVICES.filter(s => s.category === 'Commercial');
const propertyServices = ALL_SERVICES.filter(s => s.category === 'Property');

export default function SiteHeader({ citySlug = 'mobile-al' }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);

  return (
    <header className="relative z-[999] w-full">
      {/* Desktop Nav */}
      <nav className="hidden md:block bg-transparent z-[999] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0 cursor-pointer" onClick={() => window.location.href = '/'}>
                <img src="/images/logo.png" alt="Zoiris Cleaning service" className="h-28 w-auto transform hover:scale-105 transition duration-300" />
              </div>
            </div>
            <div className="flex items-center space-x-8 ml-auto">
              <a href="/" className="contact-button text-lg">Home</a>
              <a href={`/${citySlug}/about/`} className="contact-button text-lg">About</a>

              {/* Services Dropdown */}
              <div className="relative group inline-block">
                <button type="button" className="contact-button text-lg flex items-center">
                  Services <i className="fas fa-chevron-down text-sm ml-2"></i>
                </button>
                <div className="absolute -left-32 top-full hidden group-hover:grid grid-cols-3 gap-4 w-[900px] z-[999] pt-2">
                  <div className="flex flex-col space-y-2 bg-white/95 p-4 rounded-xl shadow-2xl backdrop-blur-md border border-gray-200">
                    <h4 className="text-xl font-bold text-gray-900 border-b-2 border-indigo-500 pb-2 mb-2 text-center">Residential & Property</h4>
                    {residentialServices.map(s => (
                      <a key={s.slug} className="contact-button text-sm hover:scale-105 transition-transform text-center py-2" href={`/${citySlug}/${s.slug}/`}>{s.name}</a>
                    ))}
                  </div>
                  <div className="flex flex-col space-y-2 bg-white/95 p-4 rounded-xl shadow-2xl backdrop-blur-md border border-gray-200">
                    <h4 className="text-xl font-bold text-gray-900 border-b-2 border-purple-500 pb-2 mb-2 text-center">Commercial & Industrial</h4>
                    {commercialServices.map(s => (
                      <a key={s.slug} className="contact-button text-sm hover:scale-105 transition-transform text-center py-2" href={`/${citySlug}/${s.slug}/`}>{s.name}</a>
                    ))}
                  </div>
                  <div className="flex flex-col space-y-2 bg-white/95 p-4 rounded-xl shadow-2xl backdrop-blur-md border border-gray-200">
                    <h4 className="text-xl font-bold text-gray-900 border-b-2 border-pink-500 pb-2 mb-2 text-center">Property Management</h4>
                    {propertyServices.map(s => (
                      <a key={s.slug} className="contact-button text-sm hover:scale-105 transition-transform text-center py-2" href={`/${citySlug}/${s.slug}/`}>{s.name}</a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Locations Dropdown */}
              <div className="relative group inline-block ml-6">
                <button type="button" className="contact-button text-lg flex items-center">
                  Locations <i className="fas fa-chevron-down text-sm ml-2"></i>
                </button>
                <div className="absolute left-0 top-full hidden group-hover:flex flex-col w-56 z-50">
                  {FEATURED_LOCATIONS.map(loc => (
                    <a key={loc.slug} className="contact-button text-lg hover:bg-blue-700" href={`/${loc.slug}/`}>{loc.name}</a>
                  ))}
                </div>
              </div>

              <a href={`/${citySlug}/blog/`} className="contact-button text-lg">Blog</a>
              <a href={`/${citySlug}/contact/`} className="contact-button text-lg">Contact</a>
              <a href="#quote" className="contact-button text-lg bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-full shadow-lg shadow-blue-500/30">Get a Quote</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Nav */}
      <nav className="md:hidden w-full relative z-[999] bg-transparent">
        <div className="px-4 py-2 flex justify-between items-center bg-gradient-to-b from-black/50 to-transparent">
          <div className="flex items-center">
            <div className="flex-shrink-0 cursor-pointer" onClick={() => window.location.href = '/'}>
              <img src="/images/logo.png" alt="Zoiris Cleaning" className="h-24 w-auto drop-shadow-md" />
            </div>
          </div>
          <div className="flex items-center space-x-4 pr-2">
            <a href="tel:2512202515" className="text-white hover:text-pink-400 transition-colors duration-300 shadow-md">
              <i className="fas fa-phone-alt animate-pulse text-2xl"></i>
            </a>
            <button onClick={() => setMobileOpen(!mobileOpen)}
              className="text-white hover:text-pink-400 focus:outline-none transition duration-300 drop-shadow-lg" aria-label="Open mobile menu">
              <i className="fas fa-bars text-3xl"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 bg-gradient-to-br from-gray-900 to-black w-full h-screen overflow-y-auto z-[99999] flex flex-col">
          <div className="px-4 py-3 flex justify-between items-center border-b border-white/10 shrink-0">
            <div className="flex-shrink-0 cursor-pointer" onClick={() => window.location.href = '/'}>
              <img src="/images/logo.png" alt="Zoiris Cleaning" className="h-20 w-auto drop-shadow-md" />
            </div>
            <button onClick={() => setMobileOpen(false)} className="text-white hover:text-pink-400 transition-colors duration-300 p-2 mr-2">
              <i className="fas fa-times text-4xl drop-shadow-lg"></i>
            </button>
          </div>
          <div className="px-4 py-6 space-y-3 flex-grow pb-24">
            <a href="/" className="block px-4 py-4 text-xl font-medium text-white hover:text-blue-400 hover:bg-white/10 rounded-2xl transition duration-300 flex items-center group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                <i className="fas fa-home text-blue-400 group-hover:text-pink-400 text-xl transition-colors duration-300"></i>
              </div>
              <span className="ml-5 tracking-wide">Home</span>
            </a>
            <a href={`/${citySlug}/about/`} className="block px-4 py-4 text-xl font-medium text-white hover:text-blue-400 hover:bg-white/10 rounded-2xl transition duration-300 flex items-center group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                <i className="fas fa-info-circle text-blue-400 group-hover:text-pink-400 text-xl transition-colors duration-300"></i>
              </div>
              <span className="ml-5 tracking-wide">About Us</span>
            </a>

            {/* Mobile Services Dropdown */}
            <div className="relative bg-white/5 rounded-2xl overflow-hidden">
              <button onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full flex justify-between items-center px-4 py-4 text-xl font-medium text-white hover:text-blue-400 hover:bg-white/10 transition duration-300 group cursor-pointer">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                    <i className="fas fa-broom text-blue-400 group-hover:text-pink-400 text-xl transition-colors duration-300"></i>
                  </div>
                  <span className="ml-5 tracking-wide">Services</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <i className={`fas fa-chevron-down text-lg transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`}></i>
                </div>
              </button>
              {servicesOpen && (
                <div className="pl-8 pr-4 py-4 space-y-3 mt-1 bg-black/50 backdrop-blur-md rounded-b-2xl border-t border-white/5">
                  <div className="flex flex-col">
                    <div className="mb-2">
                      <h4 className="text-blue-400 font-bold text-sm uppercase tracking-wider mb-2 flex items-center">
                        <i className="fas fa-home mr-2 text-pink-400"></i> Residential
                      </h4>
                      <div className="space-y-2 pl-6 border-l-2 border-blue-500/20">
                        {residentialServices.map(s => (
                          <a key={s.slug} className="block py-2 text-gray-300 hover:text-white hover:translate-x-2 transition duration-300 text-sm" href={`/${citySlug}/${s.slug}/`}>{s.name}</a>
                        ))}
                      </div>
                    </div>
                    <div className="mb-2">
                      <h4 className="text-purple-400 font-bold text-sm uppercase tracking-wider mb-2 flex items-center">
                        <i className="fas fa-building mr-2 text-pink-400"></i> Commercial
                      </h4>
                      <div className="space-y-2 pl-6 border-l-2 border-purple-500/20">
                        {commercialServices.map(s => (
                          <a key={s.slug} className="block py-2 text-gray-300 hover:text-white hover:translate-x-2 transition duration-300 text-sm" href={`/${citySlug}/${s.slug}/`}>{s.name}</a>
                        ))}
                      </div>
                    </div>
                    <div className="mb-2">
                      <h4 className="text-pink-400 font-bold text-sm uppercase tracking-wider mb-2 flex items-center">
                        <i className="fas fa-key mr-2 text-purple-400"></i> Property Mgmt
                      </h4>
                      <div className="space-y-2 pl-6 border-l-2 border-pink-500/20">
                        {propertyServices.map(s => (
                          <a key={s.slug} className="block py-2 text-gray-300 hover:text-white hover:translate-x-2 transition duration-300 text-sm" href={`/${citySlug}/${s.slug}/`}>{s.name}</a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Locations */}
            <div className="relative bg-white/5 rounded-2xl overflow-hidden">
              <button onClick={() => setLocationsOpen(!locationsOpen)}
                className="w-full flex justify-between items-center px-4 py-4 text-xl font-medium text-white hover:text-blue-400 hover:bg-white/10 transition duration-300 group cursor-pointer">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                    <i className="fas fa-map-marker-alt text-blue-400 group-hover:text-pink-400 text-xl transition-colors duration-300"></i>
                  </div>
                  <span className="ml-5 tracking-wide">Locations</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <i className={`fas fa-chevron-down text-lg transition-transform duration-300 ${locationsOpen ? 'rotate-180' : ''}`}></i>
                </div>
              </button>
              {locationsOpen && (
                <div className="pl-16 pr-4 py-4 space-y-3 mt-1 bg-black/50 backdrop-blur-md rounded-b-2xl border-t border-white/5">
                  {FEATURED_LOCATIONS.map(loc => (
                    <a key={loc.slug} className="block py-2 text-gray-300 hover:text-white hover:translate-x-2 transition duration-300 text-sm" href={`/${loc.slug}/`}>{loc.name}</a>
                  ))}
                </div>
              )}
            </div>

            <a href={`/${citySlug}/blog/`} className="block px-4 py-4 text-xl font-medium text-white hover:text-blue-400 hover:bg-white/10 rounded-2xl transition duration-300 flex items-center group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                <i className="fas fa-blog text-blue-400 group-hover:text-pink-400 text-xl transition-colors duration-300"></i>
              </div>
              <span className="ml-5 tracking-wide">Blog</span>
            </a>
            <a href={`/${citySlug}/contact/`} className="block px-4 py-4 text-xl font-medium text-white hover:text-blue-400 hover:bg-white/10 rounded-2xl transition duration-300 flex items-center group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                <i className="fas fa-envelope text-blue-400 group-hover:text-pink-400 text-xl transition-colors duration-300"></i>
              </div>
              <span className="ml-5 tracking-wide">Contact</span>
            </a>
            <div className="pt-6 mt-4">
              <a href="#quote" onClick={() => setMobileOpen(false)}
                className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-5 px-6 rounded-2xl shadow-lg transition duration-300 transform hover:-translate-y-1 cursor-pointer">
                <i className="fas fa-file-invoice-dollar text-2xl"></i>
                <span className="text-xl">Get a Free Quote</span>
              </a>
            </div>
            <div className="h-10"></div>
          </div>
        </div>
      )}

      {/* Contact Bar */}
      <div className="contact-button text-lg">
        <div className="max-w-6xl mx-auto px-4 py-2 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row md:space-x-6 text-center md:text-left">
            <a href="tel:2512202515" className="flex items-center justify-center space-x-2 hover:underline">
              <i className="fas fa-phone-alt fa-beat"></i>
              <span>251-220-2515</span>
            </a>
            <a href="mailto:zoiriscleaningservices@gmail.com" className="flex items-center justify-center space-x-2 mt-1 md:mt-0 hover:underline break-all text-sm md:text-base">
              <i className="fas fa-envelope fa-beat"></i>
              <span>zoiriscleaningservices@gmail.com</span>
            </a>
          </div>
          <div className="flex space-x-2 mt-2 md:mt-0">
            {[
              { href: 'https://www.facebook.com/profile.php?id=61580024794494', icon: 'fa-facebook-f', label: 'Facebook' },
              { href: 'https://www.instagram.com/zoiriscleaning', icon: 'fa-instagram', label: 'Instagram' },
              { href: 'https://x.com/zoiriscleaning', icon: 'fa-twitter', label: 'Twitter' },
              { href: 'https://www.linkedin.com/in/zoiriscleaning-services-b5b0b2381/', icon: 'fa-linkedin-in', label: 'LinkedIn' },
              { href: 'https://www.yelp.com/user_details?userid=7SDy8Urgj43gfYxrR5o2eQ', icon: 'fa-yelp', label: 'Yelp' },
              { href: 'https://www.youtube.com/channel/UCTewa53AZduD2H9J04RogCw', icon: 'fa-youtube', label: 'YouTube' },
              { href: 'https://www.pinterest.com/zoiriolysh/_profile/', icon: 'fa-pinterest-p', label: 'Pinterest' },
            ].map(social => (
              <a key={social.icon} href={social.href} className="w-8 h-8 flex items-center justify-center bg-white text-blue-500 rounded-full hover:bg-gray-200 transition">
                <i className={`fab ${social.icon} fa-beat`}></i>
                <span className="sr-only">{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
