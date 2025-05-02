'use client';

import Image from "next/image";
import Link from 'next/link';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Keyboard, EffectFade } from "swiper/modules";

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
        modules={[Autoplay, Pagination, Keyboard, EffectFade]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        keyboard={{ enabled: true }}
        effect="slide"
        speed={1200}
        className="h-screen"
      >
        {slides.map((src, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-screen bg-cover bg-center"
              style={{ backgroundImage: `url(${src})` }}
            >
              {/* <div className="absolute inset-0"></div> */}
              <div className="container max-w-full mx-auto h-full flex items-center justify-center text-center px-4">
                <div className="text-white max-w-2xl z-10"data-aos="fade-up" data-aos-once="false">
                <div className="mt-20 space-x-0 space-y-4 sm:space-x-4 sm:space-y-0 flex flex-col sm:flex-row justify-center items-center">
                    <Link
                      href="/about-us"
                      className="btn inline-block bg-[#ED5428] text-[16px] sm:text-[17px] px-6 sm:px-7 py-2.5 sm:py-3 rounded text-white shadow-lg transition hover:scale-105"
                    >
                      About Us
                    </Link>
                    <Link
                      href="/contact-us"
                      className="btn inline-block border border-white text-[16px] sm:text-[17px] px-5 sm:px-6 py-2.5 sm:py-3 rounded text-white shadow-lg transition hover:scale-105 hover:bg-[#FFFFFF] hover:text-black"
                    >
                      Contact Us
                    </Link>
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
