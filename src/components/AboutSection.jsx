'use client';

import React from 'react';

const AboutSection = ({ title, subtitle, backgroundImage }) => {
  const handleScrollDown = () => {
    const section = document.getElementById('down-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section
      className="relative bg-gradient-black-green bg-cover bg-center bg-no-repeat min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-black-green opacity-80"></div>

      <div className="relative z-10 container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h1 className="uppercase mb-4 text-white opacity-60 text-sm sm:text-base font-medium tracking-widest">
            {title}
          </h1>
          <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl leading-tight max-w-md text-shadow-lg">
            {subtitle}
          </h2>
          {/* Down Arrow */}
          <div className="mt-12">
            <button
              onClick={handleScrollDown}
              className="text-white animate-bounce focus:outline-none"
            >
              {/* SVG Arrow Icon */}
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          {/* <section id="down-section" className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Welcome to our story!</h3>
          <p>We are experts in providing assistive solutions.</p>
        </div>
      </section> */}
         
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
