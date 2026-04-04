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
                <a href="#about" className="contact-button text-lg">About</a>




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

            <a href="#about" onClick={toggleMobileMenu} className="block px-4 py-4 text-xl font-medium text-white hover:text-blue-400 hover:bg-white/10 rounded-2xl transition duration-300 flex items-center group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                <i className="fas fa-info-circle text-blue-400 group-hover:text-pink-400 text-xl transition-colors duration-300"></i>
              </div>
              <span className="ml-5 tracking-wide">About Us</span>
            </a>





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
