// 'use client';

import Image from 'next/image';
import HighlightText from "./HighlightText";
import AosEffect from './AosEffect';
// import { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

const testimonials = [
  {
    text: 'Smarton glasses empower me with AI-driven navigation, text reading, and currency recognition, making daily life easier and more independent. A game-changer for accessibility!',
    name: 'Divya',
    role: 'From Chennai',
    image: '/images/testimonials/Divya.png',
  },
  {
    text: 'Smarton glasses provide real-time AI assistance, helping me navigate, read text, and recognize objects effortlessly. A must-have for independence and accessibility!',
    name: 'Zakir',
    role: 'Student',
    image: '/images/testimonials/Zakir.png',
  },
  {
    text: 'Smarton glasses redefine accessibility with AI-driven text reading, object recognition, and navigation, making everyday life smoother and more independent. I highly recommend it!',
    name: 'Yasif',
    role: "Blind People's Association",
    image: '/images/testimonials/Yasif.png',
  },
];

export default function Testimonials() {
    // useEffect(() => {
    //       AOS.init({ duration: 800, once: true });
    //     }, []);
  return (
    <section className="bg-white py-12 px-11">
      <AosEffect/>
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="uppercase text-sm font-semibold tracking-[1px] leading-[32px]">What our users say</span>
          <HighlightText title="User" highlight="Testimonials" />
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
         <div key={index} 
         className="flex flex-col w-full"
         data-aos="fade-up"
         data-aos-delay={index * 200}>
         {/* Card */}
          <div className="bg-white p-6 rounded shadow-md text-start rubik-font leading-relaxed h-auto min-h-[220px]">
        <p className="text-gray-700 fs-17 sm:text-base">
          {item.text}
        </p>
      </div>

      {/* Image, name, and role */}
      <div className="mt-6 flex items-center">
        <Image
          src={item.image}
          alt={item.name}
          width={70}
          height={70}
          className="rounded-full object-cover w-[70px] h-[70px]"
        />
        <div className="flex flex-col ml-4">
          <div className="font-bold text-gray-700 fs-18">{item.name}</div>
          <div className="fs-18 text-gray-700">{item.role}</div>
        </div>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}
