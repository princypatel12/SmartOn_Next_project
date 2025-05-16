// 2. HeroSlider component 
'use client';

import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Keyboard } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import Button from './Button';



const slides = [
  "/images/logo/bannerImgs/bannerImg1.png",
  "/images/logo/bannerImgs/bannerImg2.png",
  "/images/logo/bannerImgs/bannerImg3.png",
];

export default function HeroSlider() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  
  return (
    <section className="pt-15 relative">
      <Image
        src="/images/logo/VOSAP_Logo.jpg"
        alt="VOSAP Logo"
        width={80}
        height={148}
        className="absolute top-16 right-5 z-10 "
      />

      <Swiper
        modules={[Autoplay, Pagination, Keyboard]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{  clickable: true }}
        keyboard={{ enabled: true }}
        effect="slide"
        speed={1200}
        className="h-screen"
      >
        {slides.map((src, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-screen bg-cover bg-center">
            <Image
             src={src}
             alt="slider images"
             fill
             priority={index === 0}
             loading={index === 0 ? "eager" : "lazy"}
             className="object-cover"
           />
            
              <div className="max-w-full mx-auto h-full flex items-center justify-center">
                <div className="text-white z-10"data-aos="fade-up" data-aos-once="false">
                <div className="mt-33 space-x-0 space-y-4 sm:space-x-4 sm:space-y-0 flex flex-col sm:flex-row justify-center items-center">
                    
            {/* aboutus button  */}
            <Button href="/about-us" className="group relative overflow-hidden">
               <span className="relative inline-block px-4">
                 <span className="group-hover:-translate-x-6 transition-transform duration-300">
                   About Us
                 </span>
                 <span className="hidden md:inline absolute left-full top-0 group-hover:left-[-0.25rem] transition-all duration-300">
                   →
                 </span>
               </span>
            </Button>
                         

            {/* contactus button  */}
          <Button href="/contact-us" className="group relative inline-flex items-center border border-white bg-transparent px-3 py-2 text-white hover:bg-white hover:text-black overflow-hidden">
             <span className="relative px-3">
               <span className="transition-transform duration-300 group-hover:-translate-x-6">
                 Contact Us
               </span>
               <span className="hidden md:inline absolute top-0 left-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                 →
               </span>
             </span>
           </Button>
           
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
