'use client';

import Image from "next/image";
// import Link from 'next/link';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Keyboard } from "swiper/modules";
// import { ArrowRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import Button from './Button';
// import AosEffect from "./AosEffect";


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
      {/* <AosEffect/> */}
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
             priority
             className="object-cover"
           />
            
              <div className="max-w-full mx-auto h-full flex items-center justify-center">
                <div className="text-white z-10"data-aos="fade-up" data-aos-once="false">
                <div className="mt-33 space-x-0 space-y-4 sm:space-x-4 sm:space-y-0 flex flex-col sm:flex-row justify-center items-center">
                    {/* <Link
                      href="/about-us"
                      className="inline-block bg-[#ED5428] text-[19px] sm:text-[17px] font-bold px-5 sm:px-7 py-2.5 sm:py-3.5 rounded group text-white shadow-lg"
                    >
              <span className="relative inline-block transition-all duration-300 px-2"> */}
                    {/* <span className="group-hover:translate-x-[-1.5rem] transition-all duration-300"> */}
                      {/* About Us */}
                    {/* </span> */}
                    {/* <span className="hidden md:inline absolute left-full group-hover:left-[-19] transition-all duration-300">
                      → */}
                      {/* <ArrowRight className="inline-block w-4 h-4 ml-1" /> */}
                    {/* </span>
               </span>
                    </Link> */}
                    <Button href="/about-us" className="group relative overflow-hidden">
                     <span className="relative inline-block transition-all duration-300 px-4">
                        <span className="group-hover:translate-x-[-1.5rem] transition-all duration-300">
                           About Us </span>
                     <span className="hidden md:inline absolute left-full group-hover:-left-1 transition-all duration-300 mx-[-6]">
                          →
                    </span>
                    </span>
                    </Button>

                    {/* <Link
                      href="/contact-us"
                      className="group inline-block border border-white font-bold text-[19px] sm:text-[17px] px-3 sm:px-6 py-2.5 sm:py-3.5 rounded text-white shadow-lg transition hover:scale-105 hover:bg-[#FFFFFF] hover:text-black"
                    >
                      <span className="relative inline-block transition-all duration-300 px-2">
                      Contact Us
                      <span className="hidden md:inline opacity-0 absolute left-full group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-black transition duration-300">
                        → */}
                        {/* <ArrowRight className="inline-block w-4 h-4 ml-1" /> */}
                      {/* </span>
                    </span>
                    </Link> */}
                    <Button href="/contact-us" className="group relative bg-transparent border border-white overflow-hidden text-white hover:bg-[#FFFFFF] hover:text-black">
                     <span className="relative inline-block transition-all duration-300 px-3">
                        <span className="group-hover:translate-x-[-1.5rem] transition-all duration-300">
                           Contact Us </span>
                     <span className="hidden md:inline opacity-0 absolute  left-full group-hover:opacity-100 transition-all duration-300 mx-[-6]">
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
