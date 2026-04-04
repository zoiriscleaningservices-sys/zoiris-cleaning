'use client';
export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-200 py-16 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left: Logo & Description */}
        <div className="space-y-6 relative z-10">
          <a className="flex items-center space-x-3 group" href="/">
            <img alt="Zoiris Cleaning Logo"
              className="h-28 w-auto transition-all duration-300 group-hover:scale-105 rounded-full"
              src="/images/logo.png" />
          </a>
          <p className="text-gray-400 text-sm leading-relaxed text-justify">
            Zoiris Cleaning is your trusted partner for professional cleaning services in Mobile, AL, and surrounding
            areas like Daphne, Fairhope, Midtown Mobile, Downtown Mobile, West Mobile, Eastern Shore, and Spanish Fort.
            We specialize in residential and commercial cleaning, deep cleans, move-in/move-out services, carpet and
            window cleaning, Airbnb and vacation rentals, post-construction cleanup, and pressure washing.
          </p>
          <div className="space-y-3 pt-4">
            <p className="flex items-center text-gray-300"><i className="fas fa-map-marker-alt w-6 text-blue-500 mr-2"></i><span>Mobile, AL</span></p>
            <p className="flex items-center text-gray-300"><i className="fas fa-phone-alt w-6 text-blue-500 mr-2"></i><a className="hover:text-white transition-colors" href="tel:+12512202515">251-220-2515</a></p>
            <p className="flex items-center text-gray-300"><i className="fas fa-envelope w-6 text-blue-500 mr-2"></i><a className="hover:text-white transition-colors" href="mailto:zoiriscleaningservices@gmail.com">zoiriscleaningservices@gmail.com</a></p>
            <p className="flex items-center text-gray-300"><i className="fas fa-sitemap w-6 text-blue-500 mr-2"></i><a className="hover:text-white transition-colors" href="/sitemap.xml">Sitemap</a></p>
          </div>
        </div>

        {/* Middle: Services */}
        <div className="relative z-10">
          <h3 className="text-white font-bold text-xl mb-6 tracking-wide border-b border-gray-800 pb-2 inline-block">Our Services</h3>
          <ul className="space-y-3 text-gray-400">
            {[
              ['/mobile-al/house-cleaning/', 'fa-broom', 'text-blue-600', 'Residential Cleaning'],
              ['/mobile-al/deep-cleaning/', 'fa-sparkles', 'text-purple-500', 'Deep Cleaning'],
              ['/mobile-al/commercial-cleaning/', 'fa-building', 'text-gray-500', 'Commercial Cleaning'],
              ['/mobile-al/airbnb-cleaning/', 'fa-home', 'text-pink-500', 'Airbnb Cleaning'],
              ['/mobile-al/carpet-cleaning/', 'fa-layer-group', 'text-orange-500', 'Carpet Cleaning'],
              ['/mobile-al/window-cleaning/', 'fa-window-maximize', 'text-cyan-500', 'Window Cleaning'],
              ['/mobile-al/move-in-cleaning/', 'fa-box-open', 'text-yellow-500', 'Move-In Cleaning'],
              ['/mobile-al/move-out-cleaning/', 'fa-door-open', 'text-red-500', 'Move-Out Cleaning'],
              ['/mobile-al/post-construction-cleanup/', 'fa-hard-hat', 'text-yellow-600', 'Post-Construction'],
              ['/mobile-al/vacation-rental-cleaning/', 'fa-umbrella-beach', 'text-teal-500', 'Vacation Rental'],
              ['/mobile-al/pressure-washing/', 'fa-water', 'text-blue-400', 'Pressure Washing'],
            ].map(([href, icon, color, label]) => (
              <li key={href}><a className={`hover:text-blue-400 transition-all duration-200 flex items-center group`} href={href}>
                <i className={`fas ${icon} w-6 ${color} mr-2`}></i> {label}
              </a></li>
            ))}
          </ul>
        </div>

        {/* Right: Service Areas + Quick Links */}
        <div className="relative z-10">
          <h3 className="text-white font-bold text-xl mb-6 tracking-wide border-b border-gray-800 pb-2 inline-block">Service Areas</h3>
          <div className="bg-gray-900/50 rounded-lg p-4 mb-6 border border-gray-800">
            <ul className="grid grid-cols-2 gap-2 text-gray-400 text-sm">
              {['Spanish Fort', 'Saraland', 'Daphne', 'Eight Mile', 'Satsuma', 'Montrose', 'Theodore', 'Semmes',
                'Creola', 'Stapleton', 'Fairhope', 'Point Clear', 'Loxley', 'Saint Elmo', 'Irvington', 'Wilmer',
                'Bay Minette', 'Coden', 'Chunchula', 'Silverhill', 'Axis', 'Bucks'].map(city => (
                  <li key={city}><a className="hover:text-blue-400 transition-colors flex items-center"
                    href={`/${city.toLowerCase().replace(/ /g, '-')}-al/`}>
                    <i className="fas fa-map-pin text-xs mr-2 text-red-500"></i> {city}
                  </a></li>
                ))}
            </ul>
          </div>

          <h3 className="text-white font-bold text-lg mb-4 tracking-wide">Quick Links</h3>
          <ul className="flex flex-wrap gap-4 text-gray-400 text-sm">
            {[['/', 'fa-home', 'Home'], ['/mobile-al/about/', 'fa-info-circle', 'About'],
              ['/mobile-al/blog/', 'fa-blog', 'Blog'], ['/mobile-al/contact/', 'fa-envelope', 'Contact'],
              ['/apply/', 'fa-user-plus', 'Apply'], ['/terms.html', 'fa-file-contract', 'Terms'],
              ['/privacy.html', 'fa-shield-alt', 'Privacy']].map(([href, icon, label]) => (
              <li key={href}><a className="hover:text-white transition-colors flex items-center" href={href}>
                <i className={`fas ${icon} mr-2 text-blue-500`}></i> {label}
              </a></li>
            ))}
          </ul>
          <p className="mt-8 text-gray-500 text-xs text-center lg:text-left">
            © {new Date().getFullYear()} Zoiris Cleaning. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* Social Media Wall */}
      <div className="mt-12 border-t border-gray-800 pt-8 relative z-10 bg-black/20">
        <div className="flex flex-wrap justify-center gap-6 text-2xl">
          {[
            ['https://facebook.com', 'fa-facebook', 'hover:text-blue-500'],
            ['https://instagram.com/zoiriscleaning', 'fa-instagram', 'hover:text-pink-500'],
            ['https://x.com/zoiriscleaning', 'fa-x-twitter', 'hover:text-sky-400'],
            ['https://linkedin.com', 'fa-linkedin', 'hover:text-blue-400'],
            ['https://youtube.com', 'fa-youtube', 'hover:text-red-500'],
            ['https://tiktok.com', 'fa-tiktok', 'hover:text-gray-200'],
            ['https://pinterest.com', 'fa-pinterest', 'hover:text-red-600'],
            ['https://snapchat.com', 'fa-snapchat', 'hover:text-yellow-400'],
            ['https://reddit.com', 'fa-reddit', 'hover:text-orange-500'],
            ['https://tumblr.com', 'fa-tumblr', 'hover:text-indigo-400'],
            ['https://discord.com', 'fa-discord', 'hover:text-indigo-500'],
            ['https://wa.me/12519308621', 'fa-whatsapp', 'hover:text-green-500'],
            ['https://telegram.org', 'fa-telegram', 'hover:text-sky-500'],
            ['https://yelp.com', 'fa-yelp', 'hover:text-red-400'],
            ['https://github.com', 'fa-github', 'hover:text-gray-400'],
          ].map(([href, icon, hoverClass]) => (
            <a key={href} className={`text-gray-500 hover:scale-110 transition-transform duration-200 ${hoverClass}`}
              href={href} target="_blank" rel="noopener noreferrer">
              <i className={`fab ${icon}`}></i>
            </a>
          ))}
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-green-900/10 opacity-50 pointer-events-none"></div>
    </footer>
  );
}
