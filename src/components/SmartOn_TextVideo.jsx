// 'use client';

import Link from 'next/link';
import React from 'react';

export default function SmartOn_TextVideo() {
  return (
    <section className="relative overflow-hidden py-0 bg-[#FFF1ED]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 items-center items-center gap-12 my-4">
            {/* Left Content */}
            <div className="lg:w-1/2 text-start lg:pr-10">
              <p className="text-lg text-black opacity-80 mb-3 font-light text-[22px] rubik-font">
                An AI enabled software platform and smart glasses for the blind that{' '}
                <span className="text-[#DC3131] font-bold rubik-font text-[22px] mb-10">
                  boost their productivity and nurture their growth
                </span>
              </p>

              <h3 className="smarton-commontext font-bold mb-5 leading-tight text-[#1D2130]">
                Experience the world with -{' '}
                <span className="smarton-typewrite smarton-commontext" id="typewriter">
                  Smarton.
                </span>
              </h3>

              <div className="flex flex-col sm:flex-row gap-1 mt-4">
                <Link
                  href="https://www.amazon.in/dp/B0F1CXQKB4"
                  className="btn-gradient-pink-orange text-white text-[16px] px-6 py-3 rounded shadow-md text-center"
                >
                  Buy Now @ ₹14,999
                </Link>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.smarton.sunbots"
                  className="btn-gradient-pink-orange text-white text-[16px] px-6 py-3 rounded shadow-md text-center"
                >
                  Download for Android
                </Link>
              </div>
            </div>

            {/* Right Video Content */}
            <div className="lg:w-1/2 text-center lg:pl-10">
              <iframe
                className="w-full aspect-video rounded-2xl shadow-md"
                src="https://www.youtube.com/embed/clJOAVADrsc?si=SZv1u1FifbkrGK-d"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
    </section>
  );
}


