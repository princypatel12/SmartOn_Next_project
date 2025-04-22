'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function FeedbackSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const feedbacks = [
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

  return (
    // <section
    //   className="bg-cover bg-center py-12 px-4 mb-16"
    //   style={{ backgroundImage: "url('/images/demo-startup-who-we-are-bg.jpg')" }}
    // >
      <div className="max-w-7xl mx-auto pt-7 pb-3 px-4 mb-16">
        {/* Section Heading */}
        {/* <div className="text-center mb-12" data-aos="fade-up">
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800">
            Why{' '}
            <span className="text-[#ED5428] font-extrabold relative inline-block">
              SMARTON?
              <span className="absolute bottom-[-10px] left-0 w-full h-[8px] bg-gradient-to-r from-emerald-400 to-green-500 opacity-60" />
            </span>
          </h3>
        </div> */}

        {/* Feedback Cards */}
        <div className="flex flex-wrap justify-center gap-5">
          {feedbacks.map((item, index) => (
            <div
              key={index}
              className="box-shadow-quadruple-large box-shadow-quadruple-large-hover w-full sm:w-[200px] md:w-[250px] bg-white rounded-2xl shadow-lg pt-8 pb-8 ps-3 pe-3"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <p className="mb-4 fs-24 rubik-font text-center">
                SMARTON Feedback by {item.name}
              </p>
              <div className="aspect-video overflow-hidden rounded-lg">
                <iframe
                  src={item.videoUrl}
                  title={`Feedback by ${item.name}`}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    // </section>
  );
}
