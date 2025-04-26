'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const partners = [
  'https://www.sunbots.in/images/ngo/7.%20Andha%20kanya%20Parakash.png',
  'https://www.sunbots.in/images/ngo/8.%20JPM.png',
  'https://www.sunbots.in/images/ngo/9.%20NAB.jpg',
  'https://www.sunbots.in/images/ngo/10.%20Navvikash.jpg',
  'https://www.sunbots.in/images/ngo/11.%20MPWAB.png',
  'https://www.sunbots.in/images/ngo/13.%20KSH.jpg',
  'https://www.sunbots.in/images/ngo/1.%20BPA.jpeg',
  'https://www.sunbots.in/images/ngo/2.%20SighSavers.png',
  'https://www.sunbots.in/images/ngo/3.%20Raah%20Foundation.jpeg',
  'https://www.sunbots.in/images/ngo/4.%20Chennai.png',
  'https://www.sunbots.in/images/ngo/5.%20Navchetann.png',
  'https://www.sunbots.in/images/ngo/6.%20Rajkot.png',
];

export default function PartnersSlider() {
  return (
    <section className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={4000}
          loop={true}
          slidesPerView={2}
          breakpoints={{
            768: { slidesPerView: 3 },
            992: { slidesPerView: 4 },
          }}
          allowTouchMove={false}
        >
          {partners.map((url, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center py-4">
              <a href="#" className="block">
                <Image
                  src={url}
                  alt={`Partner ${index + 1}`}
                  width={200}
                  height={60}
                  className="h-[60px] object-contain"
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
