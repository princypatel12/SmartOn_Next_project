'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function SmartOn_ReuseText({ title, description }) {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="text-center max-w-full mx-auto py-12" data-aos="fade-up">
      <span className="font-manrope text-[#ED5428] uppercase text-[17px] tracking-widest block mb-1 font-semibold">
        {title}
      </span>
      <h2 className="JakartaSans-font text-[45px] font-semibold text-gray-800 tracking-[-1px] leading-tight max-w-md mx-auto">
        {description}
      </h2>
    </div>
  );
}
