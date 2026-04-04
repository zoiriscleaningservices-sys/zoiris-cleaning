'use client';
import { useState } from 'react';

export default function ZipFinder() {
  const [isOpen, setIsOpen] = useState(false);
  const [result, setResult] = useState(null); // { text: string, type: 'success' | 'error' }
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [zipCode, setZipCode] = useState('');

  const serviceZips = [
    "36602", "36603", "36604", "36605", "36606", "36607", "36608", "36609", "36618", "36619", "36612", // Mobile
    "36532", // Fairhope
    "36526", // Daphne
    "36527", // Spanish Fort
    "36551", "36533", "36575", "36582" // Eastern Shore
  ];

  const openFinder = () => setIsOpen(true);
  const closeFinder = () => {
    setIsOpen(false);
    setTimeout(() => {
      setFormSubmitted(false);
      setResult(null);
      setZipCode('');
    }, 300);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const zip = formData.get("zipcode").trim();
    setZipCode(zip);

    if (serviceZips.includes(zip)) {
      setResult({ text: "✅ Yes! We provide premium cleaning services in your area.", type: 'success' });
    } else {
      setResult({ text: "❌ Sorry, we currently don’t service this ZIP code.", type: 'error' });
    }

    try {
      await fetch("https://formspree.io/f/meolzlll", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
    } catch (error) {
      console.error("Error submitting to Formspree:", error);
    }

    setFormSubmitted(true);
  };

  return (
    <>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center relative z-10">
        <div></div>
        <div className="flex items-center">
          <button
            className="bg-gray-900 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-700 contact-button text-lg transition"
            onClick={openFinder}
          >
            <i className="fa-solid fa-location-dot fa-fade mr-2"></i>
            Service Area Finder
          </button>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity" 
          onClick={closeFinder}
        >
          <div 
            className="contact-button text-lg bg-white rounded-2xl shadow-xl w-full max-w-lg p-8 text-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-3 right-3 text-gray-900 hover:text-black text-4xl font-bold transition"
              onClick={closeFinder}
            >
              &times;
            </button>
            <h2 className="text-3xl font-extrabold text-black mb-4">
              Service Availability in Mobile, AL
            </h2>
            <p className="text-black mb-6 leading-relaxed">
              Enter your details below to check if <strong>ZOIRIS Cleaning</strong> serves your area.
            </p>

            {!formSubmitted ? (
              <form className="space-y-3" onSubmit={handleSubmit}>
                <div className="flex space-x-2">
                  <input
                    className="flex-1 border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-400"
                    name="name" placeholder="Enter Name" required type="text" 
                  />
                </div>
                <div className="flex space-x-2">
                  <input
                    className="flex-1 border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-400"
                    name="phone" placeholder="Enter Phone" required type="tel" 
                  />
                </div>
                <div className="flex space-x-2">
                  <input
                    className="flex-1 border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-400"
                    id="zipInput" maxLength="5" name="zipcode" placeholder="Enter ZIP Code" required type="text" 
                  />
                </div>
                <button
                  className="bg-neutral-950 text-white px-6 rounded-lg font-semibold hover:bg-neutral-900 contact-button text-lg"
                  type="submit"
                >
                  Check
                </button>
              </form>
            ) : (
              <div>
                <p className={`mt-6 text-lg font-semibold ${result?.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                  {result?.text}
                </p>
                <div className="mt-6">
                  <iframe 
                    allowFullScreen 
                    height="300" 
                    loading="lazy"
                    style={{ width: "100%", border: 0, borderRadius: "12px" }}
                    src={`https://www.google.com/maps?q=${zipCode}&output=embed`}
                  ></iframe>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
