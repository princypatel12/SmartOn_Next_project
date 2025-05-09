"use client";
import React, { useRef } from 'react';//stores mutable value 
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';//hooks use here
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    lable: 'Our Mission',
    heading: 'Empowering Independence',
    description:"To empower individuals with visual impairments through innovative, AI-driven technology, enhancing their Education, Productivity and Growth in life.",
  },
  {
    lable: 'Our Vision',
    heading: 'Creating a Barrier-Free Future',
    description:"Aligned with VOSAP's Vision 2047, Divyangjan including VI and Blind should be contributing $1Tn to India's Economy by 2047",
  },
  {
    lable: 'Core Value',
    heading: 'Driven by Innovation and Empathy',
    description:'Smarton values innovation, empathy, and accessibility, empowering individuals with visual impairments to live independently with reliable, user-friendly technology.',
  },
];

export default function MissionVisionSlider({ image1, image2 }) {
  const containerRef = useRef(null); 
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],//top of the element and bottom of the element
  });

  // const x = useTransform(scrollYProgress, [0, 1], [100, -80]);
  const y = useTransform(scrollYProgress, [0, 1], [-80, 100]);//moves element up 80 and down 100

  return (
    <section className="relative md:pb-20 md:mb-12 mb-0">
      <div className="max-w-4xl px-6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 ">
        {/* left side Text Section */}
        <div>
          <Swiper
            modules={[Navigation, Autoplay, Pagination, Keyboard]}
            slidesPerView={1}
            loop={true}
            navigation={{
              nextEl: '.swiper-next',
              prevEl: '.swiper-prev',
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            keyboard={{ enabled: true }}
            className="mb-6"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="mb-2 font-semibold text-[#ED5428] fs-17 uppercase tracking-wide">
                {slide.lable}
                </div>
                <h3 className="text-xl sm:text-2xl md:text-4xl font-semibold mb-3  w-full md:w-[500px]">{slide.heading}</h3>
                <p className="text-black-700 rubik-font fs-17 w-full md:w-[420px] leading-7">{slide.description}</p>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex space-x-2">
            <button className="swiper-prev border border-gray-300 px-3 py-2 bg-white border-radius hover:bg-gray-100">
              &larr;
            </button>
            <button className="swiper-next text-gray-800 border border-gray-300 px-3 py-2 bg-white border-radius hover:bg-gray-100">
              &rarr;
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div ref={containerRef} className="relative flex flex-col items-center md:items-end space-y-6 md:space-y-0">
          {/* Image-1 */}
          <div 
          // style={{ x }}
          className="w-[100%] relative z-0">
            <Image
              src={image1}
              alt="mv1 image"
              width={600}
              height={400}
              className="rounded w-full h-auto"
            />
          </div>
          {/* image-2  */}
         <div className="hidden md:block relative left-[60%] w-full z-10">
           <motion.div
             style={{ y }}
             className="absolute top-1/2 -translate-y-2/4 right-[110%] w-[70%]"
           >
             <Image
               src={image2}
               alt="mv2 image"
               width={400}
               height={250}
               className="rounded"
             />
           </motion.div>
         </div>


          {/*second image on mobile  */}
          <div className="block md:hidden w-[100%]">
            <Image
              src={image2}
              alt="mv2 image"
              width={600}
              height={400}
              className="rounded w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
