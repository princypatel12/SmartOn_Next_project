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
      className="relative bg-gradient-black-green bg-cover bg-center bg-no-repeat min-h-[84vh] flex items-center justify-center px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-black-green opacity-80"></div>

      <div className="relative z-10 container mx-auto">
        <div className="flex flex-col items-center text-center mt-10">
          <h1 className="uppercase mb-3 text-white fs-17 opacity-60 font-medium tracking-widest">
            {title}
          </h1>
          <h2 className="text-white font-bold text-[60.8px] leading-none max-w-md text-shadow-lg">
            {subtitle}
          </h2>
          {/* Down Arrow */}
          <div className="mt-12">
            <button
              onClick={handleScrollDown}
              className="text-white focus:outline-none"
            >
               <div className="flex flex-col items-center mt-2">
            {/* Line */}
            <div className="w-0.5 h-6 text-white bg-[#FFFFFF]"></div>

            {/* Arrow */}
            <svg
              // xmlns="http://www.w3.org/2000/svg"
              className="w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          
         

            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
