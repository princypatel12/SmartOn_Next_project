// 12.PartnersSlider.jsx 
'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const partners = [
  '/images/ngo/7. Andha kanya Parakash.png',
  '/images/ngo/8. JPM.png',
  '/images/ngo/9. NAB.jpg',
  '/images/ngo/10. Navvikash.jpg',
  '/images/ngo/11. MPWAB.png',
  '/images/ngo/13. KSH.jpg',
  '/images/ngo/1. BPA.jpeg',
  '/images/ngo/2. SighSavers.png',
  '/images/ngo/3. Raah Foundation.jpeg',
  '/images/ngo/4. Chennai.png',
  '/images/ngo/5. Navchetann.png',
  '/images/ngo/6. Rajkot.png',
];

export default function PartnersSlider() {
  return (
    <section className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-12">
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
        
        >
          {partners.map((url, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center py-4">
             
                <Image
                  src={url}
                  alt="partner logo image"
                  width={200}
                  height={60}
                  className="h-[60px] object-contain"
                />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
