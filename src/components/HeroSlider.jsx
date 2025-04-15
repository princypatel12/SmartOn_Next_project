"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Keyboard, EffectFade } from "swiper/modules";

const slides = [
  "/images/logo/bannerImgs/bannerImg1.png",
  "/images/logo/bannerImgs/bannerImg2.png",
  "/images/logo/bannerImgs/bannerImg3.png",
];

export default function HeroSlider() {
  return (
    <section className="p-0 bg-gray-900 relative">
      <Image
        src="/images/logo/VOSAP_Logo.jpg"
        alt="Top Right Logo"
        width={80}
        height={140}
        className="absolute top-13 right-6 z-10 "
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
              <div className="absolute inset-0"></div>
              <div className="container mx-auto h-full flex items-center justify-center text-center px-4">
                <div className="text-white max-w-2xl z-10">
                  <div className="mb-6 space-x-4">
                    <a
                      href="/about-us"
                    //   target="_blank"
                      className="inline-block bg-orange-600 px-6 py-3 rounded-sm text-white shadow-lg transition hover:scale-105"
                    >
                      About Us
                    </a>
                    <a
                      href="/contact-us"
                    //   target="_blank"
                      className="inline-block border border-white px-6 py-3 rounded-sm text-white shadow-lg transition hover:scale-105"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Optional custom navigation or pagination */}
    </section>
  );
}
