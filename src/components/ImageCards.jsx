// 'use client';

import Image from 'next/image';
import AosEffect from './AosEffect';
// import { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

export default function ImageCards({ cardsData = [] }){
  // useEffect(() => {
  //   AOS.init({ duration: 800, once: true });
  // }, []);
  return (
    <section className="py-4 px-6">
      <AosEffect/>
      <div className="flex flex-wrap justify-center">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="relative w-[310px] sm:w-[350px] group cursor-pointer image-card-style mx-auto sm:mx-4 mb-8"
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <div className="relative z-10 bg-white py-5 px-4 sm:px-2 text-center shadow-md h-[650px]">
              <Image
                src={card.imageSrc}
                alt={card.title}
                width={270}
                height={420}
                className="mx-auto mb-6 max-w-[270px]"
              />
              <h3 className="text-[18px] font-semibold hover:text-[#ED5428] transition-colors duration-300">
                {card.title}
              </h3>
              <p className="rubik-font basic-font fs-17 px-6 mt-3 leading-relaxed transition-colors duration-300">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


