'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header({ currentCitySlug = 'mobile-al' }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  return (
    <>
      <header className="relative z-[999] w-full">
        {/* Desktop Navigation (Hidden on Mobile) */}
        <nav className="hidden md:block bg-transparent z-[999] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20">
              <div className="flex items-center">
                <Link href={currentCitySlug === 'mobile-al' ? '/' : `/${currentCitySlug}/`} className="flex-shrink-0 cursor-pointer">
                  <img src="/images/logo.png" alt="Zoiris Cleaning service" className="h-28 w-auto transform hover:scale-105 transition duration-300" />
                </Link>
              </div>

              <div className="flex items-center space-x-8 ml-auto">
                <Link href={currentCitySlug === 'mobile-al' ? '/' : `/${currentCitySlug}/`} className="contact-button text-lg">Home</Link>
                <Link href={`/${currentCitySlug}/about/`} className="contact-button text-lg">About</Link>

                {/* SERVICES Dropdown */}
                <div className="relative group inline-block">
                  <button type="button" className="contact-button text-lg flex items-center">
                    Services <i className="fas fa-chevron-down text-sm ml-2"></i>
                  </button>
                  <div className="absolute -left-32 top-full hidden group-hover:grid grid-cols-3 gap-4 w-[900px] z-[999] pt-2">
                    <div className="flex flex-col space-y-2 bg-white/95 p-4 rounded-xl shadow-2xl backdrop-blur-md border border-gray-200">
                      <h4 className="text-xl font-bold text-gray-900 border-b-2 border-indigo-500 pb-2 mb-2 text-center">Residential & Property</h4>
                      <Link href={`/${currentCitySlug}/house-cleaning/`} className="contact-button text-sm hover:scale-105 transition-transform text-center py-2">House Cleaning</Link>
                      <Link href={`/${currentCitySlug}/deep-cleaning/`} className="contact-button text-sm hover:scale-105 transition-transform text-center py-2">Deep Cleaning</Link>
                      <Link href={`/${currentCitySlug}/move-in-cleaning/`} className="contact-button text-sm hover:scale-105 transition-transform text-center py-2">Move-In Cleaning</Link>
                      <Link href={`/${currentCitySlug}/move-out-cleaning/`} className="contact-button text-sm hover:scale-105 transition-transform text-center py-2">Move-Out Cleaning</Link>
                      <Link href={`/${currentCitySlug}/carpet-cleaning/`} className="contact-button text-sm hover:scale-105 transition-transform text-center py-2">Carpet Cleaning</Link>
                      <Link href={`/${currentCitySlug}/window-cleaning/`} className="contact-button text-sm hover:scale-105 transition-transform text-center py-2">Window Cleaning</Link>
                      <Link href={`/${currentCitySlug}/pressure-washing/`} className="contact-button text-sm hover:scale-105 transition-transform text-center py-2">Pressure Washing</Link>
                      <Link href={`/${currentCitySlug}/luxury-estate-cleaning/`} className="contact-button text-sm hover:scale-105 transition-transform text-center py-2">Luxury Estate Cleaning</Link>
                      <Link href={`/${currentCitySlug}/laundry-services/`} className="contact-button text-sm hover:scale-105 transition-transform text-center py-2">Laundry Services</Link>
                      <Link href={`/${currentCitySlug}/Detailing-Mobile-AL/`} className="contact-button text-sm hover:scale-105 transition-transform text-center py-2">Detailing</Link>
                    </div>

                    <div className="flex flex-col space-y-2 bg-white/95 p-4 rounded-xl shadow-2xl backdrop-blur-md border border-gray-200">
                      <h4 className="text-xl font-bold text-gray-900 border-b-2 border-purple-500 pb-2 mb-2 text-center">Commercial & Industrial</h4>
                      <Link href={`/${currentCitySlug}/commercial-cleaning/`} className="contact-button text-sm hover:scale-105 transition-transform text-center py-2">Commercial Cleaning</Link>
                      <Link href={`/${currentCitySlug}/office-janitorial-services/`} className="contact-button text-sm hover:scale-105 transition-transform text-center py-2">Office Janitorial Services</Link>
                      <Link href={`/${currentCitySlug}/janitorial-cleaning-services/`} className="contact-button text-sm hover:scale-105 transition-transform text-center py-2">Janitorial Cleaning Services</Link>
                      <Link href={`/${currentCitySlug}/medical-dental-facility-cleaning/`} className="contact-button text-sm hover:scale-105 transition-transform text-center py-2">Medical Facility Cleaning</Link>
                      <Link href={`/${currentCitySlug}/industrial-warehouse-cleaning/`} className="contact-button text-sm hover:scale-105 transition-transform text-center py-2">Industrial & Warehouse Cleaning</Link>
                      <Link href={`/${currentCitySlug}/floor-stripping-waxing/`} className="contact-button text-sm hover:scale-105 transition-transform text-center py-2">Floor Stripping & Waxing</Link>
                      <Link href={`/${currentCitySlug}/gym-fitness-center-cleaning/`} className="contact-button text-sm hover:scale-105 transition-transform text-center py-2">Gym & Fitness Center Cleaning</Link>
                      <Link href={`/${currentCitySlug}/school-daycare-cleaning/`} className="contact-button text-sm hover:scale-105 transition-transform text-center py-2">School & Daycare Cleaning</Link>
                      <Link href={`/${currentCitySlug}/church-worship-center-cleaning/`} className="contact-button text-sm hover:scale-105 transition-transform text-center py-2">Church & Worship Cleaning</Link>
                      <Link href={`/${currentCitySlug}/solar-panel-cleaning/`} className="contact-button text-sm hover:scale-105 transition-transform text-center py-2">Solar Panel Cleaning</Link>
                    </div>

                    <div className="flex flex-col space-y-2 bg-white/95 p-4 rounded-xl shadow-2xl backdrop-blur-md border border-gray-200">
                      <h4 className="text-xl font-bold text-gray-900 border-b-2 border-pink-500 pb-2 mb-2 text-center">Property Management</h4>
                      <Link href={`/${currentCitySlug}/vacation-rental-cleaning/`} className="contact-button text-sm hover:scale-105 transition-transform text-center py-2">Vacation Rental Cleaning</Link>
                      <Link href={`/${currentCitySlug}/airbnb-cleaning/`} className="contact-button text-sm hover:scale-105 transition-transform text-center py-2">Airbnb Cleaning</Link>
                      <Link href={`/${currentCitySlug}/airbnb-vacation-rental-management/`} className="contact-button text-sm hover:scale-105 transition-transform text-center py-2">Airbnb & Rental Management</Link>
                      <Link href={`/${currentCitySlug}/post-construction-cleanup/`} className="contact-button text-sm hover:scale-105 transition-transform text-center py-2">Post-Construction Cleanup</Link>
                      <Link href={`/${currentCitySlug}/property-management-janitorial/`} className="contact-button text-sm hover:scale-105 transition-transform text-center py-2">Property Management Janitorial</Link>
                      <Link href={`/${currentCitySlug}/property-maintenance/`} className="contact-button text-sm hover:scale-105 transition-transform text-center py-2">Property Maintenance</Link>
                      <Link href={`/${currentCitySlug}/home-watch-services/`} className="contact-button text-sm hover:scale-105 transition-transform text-center py-2">Home Watch Services</Link>
                      <Link href={`/${currentCitySlug}/luxury-estate-management/`} className="contact-button text-sm hover:scale-105 transition-transform text-center py-2">Luxury Estate Management</Link>
                      <Link href={`/${currentCitySlug}/gutter-cleaning/`} className="contact-button text-sm hover:scale-105 transition-transform text-center py-2">Gutter Cleaning</Link>
                    </div>
                  </div>
                </div>

                {/* LOCATIONS Dropdown */}
                <div className="relative group inline-block ml-6">
                  <button type="button" className="contact-button text-lg flex items-center">
                    Locations <i className="fas fa-chevron-down text-sm ml-2"></i>
                  </button>
                  <div className="absolute left-0 top-full hidden group-hover:flex flex-col w-56 z-50">
                    <Link href="/daphne-al/" className="contact-button text-lg hover:bg-blue-700">Daphne</Link>
                    <Link href="/fairhope-al/" className="contact-button text-lg hover:bg-blue-700">Fairhope</Link>
                    <Link href="/foley-al/" className="contact-button text-lg hover:bg-blue-700">Foley</Link>
                    <Link href="/gulf-shores-al/" className="contact-button text-lg hover:bg-blue-700">Gulf Shores</Link>
                    <Link href="/saraland-al/" className="contact-button text-lg hover:bg-blue-700">Saraland</Link>
                  </div>
                </div>

                <Link href={`/${currentCitySlug}/blog/`} className="contact-button text-lg">Blog</Link>
                <Link href={`/${currentCitySlug}/contact/`} className="contact-button text-lg">Contact</Link>
                <a href="#quote" className="contact-button text-lg bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-full shadow-lg shadow-blue-500/30">Get a Quote</a>
              </div>
            </div>
          </div>
        </nav>

        {/* Super Modern Mobile Navigation */}
        <nav className="md:hidden w-full relative z-[999] bg-transparent">
          <div className="px-4 py-2 flex justify-between items-center bg-gradient-to-b from-black/50 to-transparent">
            <div className="flex items-center">
              <Link href={currentCitySlug === 'mobile-al' ? '/' : `/${currentCitySlug}/`} className="flex-shrink-0 cursor-pointer">
                <img src="/images/logo.png" alt="Zoiris Cleaning" className="h-24 w-auto drop-shadow-md" />
              </Link>
            </div>
            <div className="flex items-center space-x-4 pr-2">
              <a href="tel:2512202515" className="text-white hover:text-pink-400 transition-colors duration-300 shadow-md">
                <i className="fas fa-phone-alt animate-pulse text-2xl"></i>
              </a>
              <button onClick={toggleMobileMenu} className="text-white hover:text-pink-400 focus:outline-none transition duration-300 drop-shadow-lg" aria-label="Open mobile menu">
                <i className="fas fa-bars text-3xl"></i>
              </button>
            </div>
          </div>
        </nav>

        {/* Full-Screen Mobile Menu Drawer */}
        <div className={`md:hidden fixed inset-0 bg-gradient-to-br from-gray-900 to-black w-full h-[100dvh] overflow-y-auto z-[99999] transition-opacity duration-300 flex flex-col ${mobileMenuOpen ? 'opacity-100 block' : 'opacity-0 hidden'}`}>
          <div className="px-4 py-3 flex justify-between items-center border-b border-white/10 shrink-0">
            <Link href={currentCitySlug === 'mobile-al' ? '/' : `/${currentCitySlug}/`} className="flex-shrink-0 cursor-pointer" onClick={toggleMobileMenu}>
              <img src="/images/logo.png" alt="Zoiris Cleaning" className="h-20 w-auto drop-shadow-md" />
            </Link>
            <button onClick={toggleMobileMenu} className="text-white hover:text-pink-400 transition-colors duration-300 p-2 mr-2">
              <i className="fas fa-times text-4xl drop-shadow-lg"></i>
            </button>
          </div>

          <div className="px-4 py-6 space-y-3 flex-grow pb-24">
            <Link href={currentCitySlug === 'mobile-al' ? '/' : `/${currentCitySlug}/`} onClick={toggleMobileMenu} className="block px-4 py-4 text-xl font-medium text-white hover:text-blue-400 hover:bg-white/10 rounded-2xl transition duration-300 flex items-center group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                <i className="fas fa-home text-blue-400 group-hover:text-pink-400 text-xl transition-colors duration-300"></i>
              </div>
              <span className="ml-5 tracking-wide">Home</span>
            </Link>

            <Link href={`/${currentCitySlug}/about/`} onClick={toggleMobileMenu} className="block px-4 py-4 text-xl font-medium text-white hover:text-blue-400 hover:bg-white/10 rounded-2xl transition duration-300 flex items-center group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                <i className="fas fa-info-circle text-blue-400 group-hover:text-pink-400 text-xl transition-colors duration-300"></i>
              </div>
              <span className="ml-5 tracking-wide">About Us</span>
            </Link>

            {/* SERVICES DROPDOWN (Mobile) */}
            <div className="relative bg-white/5 rounded-2xl overflow-hidden">
              <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)} className="w-full flex justify-between items-center px-4 py-4 text-xl font-medium text-white hover:text-blue-400 hover:bg-white/10 transition duration-300 group cursor-pointer">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                    <i className="fas fa-broom text-blue-400 group-hover:text-pink-400 text-xl transition-colors duration-300"></i>
                  </div>
                  <span className="ml-5 tracking-wide">Services</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <i className={`fas fa-chevron-down text-lg transition-transform duration-300 transform ${mobileServicesOpen ? 'rotate-180' : ''}`}></i>
                </div>
              </button>
              <div className={`${mobileServicesOpen ? 'block' : 'hidden'} pl-8 pr-4 py-4 space-y-3 mt-1 bg-black/50 backdrop-blur-md rounded-b-2xl border-t border-white/5`}>
                <div className="flex flex-col">
                  {/* Residential */}
                  <div className="mb-2">
                    <h4 className="text-blue-400 font-bold text-sm uppercase tracking-wider mb-2 flex items-center"><i className="fas fa-home mr-2 text-pink-400"></i> Residential</h4>
                    <div className="space-y-2 pl-6 border-l-2 border-blue-500/20">
                      <Link href={`/${currentCitySlug}/house-cleaning/`} onClick={toggleMobileMenu} className="block py-2 text-gray-300 hover:text-white hover:translate-x-2 transition duration-300 text-sm">House Cleaning</Link>
                      <Link href={`/${currentCitySlug}/deep-cleaning/`} onClick={toggleMobileMenu} className="block py-2 text-gray-300 hover:text-white hover:translate-x-2 transition duration-300 text-sm">Deep Cleaning</Link>
                      <Link href={`/${currentCitySlug}/move-in-cleaning/`} onClick={toggleMobileMenu} className="block py-2 text-gray-300 hover:text-white hover:translate-x-2 transition duration-300 text-sm">Move-In Cleaning</Link>
                      <Link href={`/${currentCitySlug}/move-out-cleaning/`} onClick={toggleMobileMenu} className="block py-2 text-gray-300 hover:text-white hover:translate-x-2 transition duration-300 text-sm">Move-Out Cleaning</Link>
                    </div>
                  </div>
                  {/* Commercial */}
                  <div className="mb-2 mt-4">
                    <h4 className="text-purple-400 font-bold text-sm uppercase tracking-wider mb-2 flex items-center"><i className="fas fa-building mr-2 text-pink-400"></i> Commercial</h4>
                    <div className="space-y-2 pl-6 border-l-2 border-purple-500/20">
                      <Link href={`/${currentCitySlug}/commercial-cleaning/`} onClick={toggleMobileMenu} className="block py-2 text-gray-300 hover:text-white hover:translate-x-2 transition duration-300 text-sm">Commercial Cleaning</Link>
                      <Link href={`/${currentCitySlug}/office-janitorial-services/`} onClick={toggleMobileMenu} className="block py-2 text-gray-300 hover:text-white hover:translate-x-2 transition duration-300 text-sm">Office Janitorial</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* LOCATIONS DROPDOWN (Mobile) */}
            <div className="relative bg-white/5 rounded-2xl overflow-hidden">
              <button onClick={() => setMobileLocationsOpen(!mobileLocationsOpen)} className="w-full flex justify-between items-center px-4 py-4 text-xl font-medium text-white hover:text-blue-400 hover:bg-white/10 transition duration-300 group cursor-pointer">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                    <i className="fas fa-map-marker-alt text-blue-400 group-hover:text-pink-400 text-xl transition-colors duration-300"></i>
                  </div>
                  <span className="ml-5 tracking-wide">Locations</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <i className={`fas fa-chevron-down text-lg transition-transform duration-300 transform ${mobileLocationsOpen ? 'rotate-180' : ''}`}></i>
                </div>
              </button>
              <div className={`${mobileLocationsOpen ? 'block' : 'hidden'} pl-16 pr-4 py-4 space-y-3 mt-1 bg-black/50 backdrop-blur-md rounded-b-2xl border-t border-white/5`}>
                <Link href={`/${currentCitySlug}/`} onClick={toggleMobileMenu} className="block py-2 text-gray-300 hover:text-white hover:translate-x-2 transition duration-300 text-sm">Mobile</Link>
                <Link href="/daphne-al/" onClick={toggleMobileMenu} className="block py-2 text-gray-300 hover:text-white hover:translate-x-2 transition duration-300 text-sm">Daphne</Link>
                <Link href="/fairhope-al/" onClick={toggleMobileMenu} className="block py-2 text-gray-300 hover:text-white hover:translate-x-2 transition duration-300 text-sm">Fairhope</Link>
              </div>
            </div>

            <Link href={`/${currentCitySlug}/blog/`} onClick={toggleMobileMenu} className="block px-4 py-4 text-xl font-medium text-white hover:text-blue-400 hover:bg-white/10 rounded-2xl transition duration-300 flex items-center group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                <i className="fas fa-blog text-blue-400 group-hover:text-pink-400 text-xl transition-colors duration-300"></i>
              </div>
              <span className="ml-5 tracking-wide">Blog</span>
            </Link>

            <Link href={`/${currentCitySlug}/contact/`} onClick={toggleMobileMenu} className="block px-4 py-4 text-xl font-medium text-white hover:text-blue-400 hover:bg-white/10 rounded-2xl transition duration-300 flex items-center group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                <i className="fas fa-envelope text-blue-400 group-hover:text-pink-400 text-xl transition-colors duration-300"></i>
              </div>
              <span className="ml-5 tracking-wide">Contact</span>
            </Link>

            <div className="pt-6 mt-4">
              <a href="#quote" onClick={toggleMobileMenu} className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-5 px-6 rounded-2xl shadow-[0_10px_25px_rgba(59,130,246,0.5)] transition duration-300 transform hover:-translate-y-1 cursor-pointer">
                <i className="fas fa-file-invoice-dollar text-2xl group-hover:animate-bounce"></i>
                <span className="text-xl">Get a Free Quote</span>
              </a>
            </div>
            <div className="h-10"></div>
          </div>
        </div>
      </header>

      {/* CONTACT BAR (under navbar) */}
      <div className="contact-button text-lg block mx-auto !mb-4 w-fit md:w-full md:max-w-none md:!m-0 rounded-none md:rounded-none !p-0 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-6xl mx-auto px-4 py-2 flex flex-col md:flex-row justify-between items-center text-white">
          {/* Left: Phone & Email */}
          <div className="flex flex-col md:flex-row md:space-x-6 text-center md:text-left">
            <a href="tel:2512202515" className="flex items-center justify-center space-x-2 hover:underline">
              <i className="fas fa-phone-alt animate-pulse"></i>
              <span>251-220-2515</span>
            </a>
            <a href="mailto:zoiriscleaningservices@gmail.com" className="flex items-center justify-center space-x-2 mt-1 md:mt-0 hover:underline break-all text-sm md:text-base">
              <i className="fas fa-envelope animate-pulse"></i>
              <span>zoiriscleaningservices@gmail.com</span>
            </a>
          </div>

          {/* Right: Social Icons */}
          <div className="flex space-x-2 mt-2 md:mt-0">
            <a href="#" className="w-8 h-8 flex items-center justify-center bg-white text-blue-500 rounded-full hover:bg-gray-200 transition"><i className="fab fa-facebook-f hover:animate-pulse"></i></a>
            <a href="https://www.instagram.com/zoiriscleaning" className="w-8 h-8 flex items-center justify-center bg-white text-blue-500 rounded-full hover:bg-gray-200 transition"><i className="fab fa-instagram hover:animate-pulse"></i></a>
            <a href="https://x.com/zoiriscleaning" className="w-8 h-8 flex items-center justify-center bg-white text-blue-500 rounded-full hover:bg-gray-200 transition"><i className="fab fa-twitter hover:animate-pulse"></i></a>
            <a href="https://www.linkedin.com/in/zoiriscleaning-services-b5b0b2381/" className="w-8 h-8 flex items-center justify-center bg-white text-blue-500 rounded-full hover:bg-gray-200 transition"><i className="fab fa-linkedin-in hover:animate-pulse"></i></a>
          </div>
        </div>
      </div>
    </>
  );
}
