'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function SectionHeading({title,description }) {
  useEffect(() => {
      AOS.init({ duration: 800, once: true });
    }, []);
  
    return (
      <div className="text-center max-w-4xl mx-auto px-4 py-12"data-aos="fade-up">
        <span className="font-manrope text-[#ED5428] uppercase text-[17px]  tracking-widest block mb-1 fw-600">
          {title}
        </span>
        <h2 className="JakartaSans-font text-base sm:text-2xl md:text-3xl font-semibold text-gray-800 tracking-[-1px] leading-tight max-w-md mx-auto shadow-none shadow-in" data-shadow-animation="true" data-animation-delay="1000">
          {description}
        </h2>
      </div>
    );
  }
  