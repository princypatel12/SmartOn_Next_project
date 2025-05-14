'use client';

import AosEffect from "./AosEffect";

// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

export default function AboutSection({ title, subtitle }){
  const handleScrollDown = () => {
    const section = document.getElementById('down-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  // useEffect(() => {
  //   AOS.init({ duration: 800, once: true });
  // }, []);
  return (
    <section
      className="relative bg-gradient-black-green bg-cover bg-center bg-no-repeat min-h-[86vh] flex items-center justify-center px-4 sm:px-6 lg:px-8"
      
    >
      <AosEffect/>
      {/* <div className="absolute inset-0 bg-gradient-black-green opacity-80"></div> */}

      <div className="relative z-10 container mx-auto">
        <div className="flex flex-col items-center text-center mt-10">
          <h1 className="uppercase mb-3 text-gray-400 fs-17 opacity-60 font-medium tracking-widest"
              data-aos="fade-up"
              data-aos-delay="100"
          >
            {title}
          </h1>
          <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[60.8px] leading-tight max-w-md text-shadow-lg"
          data-aos="fade-up"
          data-aos-delay="100"
          >
           {/* {subtitle.split('').map((char, index) => (
          <span
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 50}
            className="inline-block"
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))} */}
            {subtitle}
          </h2>
          {/* Down Arrow */}
          <div className="mt-12">
            <button
              onClick={handleScrollDown}
              className="text-white"
              aria-label="down arrow button"
            >
               <div className="flex flex-col items-center mt-2">
            {/* Line */}
            <div className="w-0.5 h-6 text-white bg-[#FFFFFF]"></div>

            {/* Arrow */}
            <svg
              xmlns="http://www.w3.org/2000/svg"//boilerplate 
              className="w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"//width height of the arrow
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"//give the round curve 
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"//draws a line and give the curv with this 
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


