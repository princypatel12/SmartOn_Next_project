"use client";
import React from 'react';
import Image from 'next/image';
import {Swiper,SwiperSlide}from 'swiper/react';
import {Navigation,Autoplay,Pagination,Keyboard} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides=[
    {
        lable:'Our Mission',
        heading:'Empowering Independence',
        description:"To empower individuals with visual impairments through innovative, AI-driven technology, enhancing their Education, Productivity and Growth in life.",
    },
    {
        label: 'Our Vision',
        heading: 'Creating a Barrier-Free Future',
        description:"Aligned with VOSAP's Vision 2047, Divyangjan including VI and Blind should be contributing $1Tn to India's Economy by 2047",
    },
    {
        label: 'Core Value',
        heading: 'Driven by Innovation and Empathy',
        description:'Smarton values innovation, empathy, and accessibility, empowering individuals with visual impairments to live independently with reliable, user-friendly technology.',
      },
];

export default function MissionVissonSlider({image1,image2}){
    return(
        <section className="relative bg-[url('/images/Aboutusimg/vertical-line-bg.svg')] bg-no-repeat py-20 ">
            <div className="container mx-auto gap-9 grid grid-cols-2">
                {/* slider section with content  */}
                <div className="w-full">
                   <Swiper modules={[Navigation,Autoplay,Pagination,Keyboard]}
                   slidesPerView={1}
                   loop={true}
                //    pagination={{clickable:true}}
                   navigation={{
                    nextEl:'.swiper-next',
                    prevEl:'.swiper-prev',
                   }}
                   autoplay={{delay:4000,disableOnInteraction:false}}
                   keyboard={{enabled:true}}
                   className="mb-6"
                   >
                    {slides.map((slide,index)=>(
                        <SwiperSlide key={index}>
                            <div className="mb-4 text-sm font-semibold uppercase tracking-wide">
                                {slide.lable}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{slide.heading}</h3>
                            <p>{slide.description}</p>
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
                {/* right image section  */}
                <div className="flex flex-col items-end">
                    <div className="w-[80%] z-0 relative">
                        <Image
                        src={image1}
                        alt="mv1 image"
                        width={600}
                        height={400}
                        className="rounded"/>
                    </div>
                    <div className="absolute top-54 left-120 w-[25%] z-10">
                        <Image 
                        src={image2}
                        alt="mv2 image"
                        width={400}
                        height={250}
                        className="rounded"/>
                    </div>
                </div>
            </div>
        </section>
    )

}