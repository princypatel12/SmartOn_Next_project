// 'use client';

import AosEffect from "./AosEffect";

// import { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

const feedbackData = [
  {
    name: 'Aditi Pandya',
    videoUrl: 'https://www.youtube.com/embed/wDJj3SVzr_g?si=B0uJ7ETt8akHX3US',
  },
  {
    name: 'Ramesh Vala',
    videoUrl: 'https://www.youtube.com/embed/qgcotnzgQrg?si=OEiH_BRxmCK3XLDj',
  },
  {
    name: 'Priyanka Gohil',
    videoUrl: 'https://www.youtube.com/embed/cGsBMIwX5XI?si=bO_0r_ffeQ4uOwMN',
  },
  {
    name: 'Jagruti',
    videoUrl: 'https://www.youtube.com/embed/eN1ALEunYfA?si=90ewXIJ_bI3V3U1a',
  },
];

export default function FeedbackSection() {
  // useEffect(() => {
  //   AOS.init({ duration: 800, once: true });
  // }, []);
  return (
      <div className="max-w-7xl mx-auto pt-7 pb-3 px-4 mb-10">
        <AosEffect/>
        {/* Feedback Cards */}
        <div className="flex flex-wrap justify-center gap-5">
          {feedbackData.map((item, index) => (
            <div
              key={index}
              className="box-shadow-quadruple-large box-shadow-quadruple-large-hover w-[300] h-[510px] sm:w-[200px] md:w-[250px] bg-white rounded-2xl shadow-lg px-3 py-3"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <p className="mb-4 font-24 rubik-font bold-text text-center">
                SMARTON Feedback by {item.name}
              </p>
              <div className="aspect-ratio overflow-hidden rounded-lg">
                <iframe
                  src={item.videoUrl}
                  className="w-full h-[350px]"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}
