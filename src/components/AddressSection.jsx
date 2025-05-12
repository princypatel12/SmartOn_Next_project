// 'use client';

import  Link  from "next/link";
import AosEffect from "./AosEffect";
import { FiMapPin, FiHeadphones, FiMail } from "react-icons/fi";


// import React from 'react';
// import { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
export default function AddressSection(){
    const addressData=[
        {
            title:"Registered Office",
            description:"13, Hariharashray Bungalows 1, Near Baghban Party Plot, 100ft road, Thaltej, Ahmedabad, Gujarat, 380 059",
            buttonText: "Location Map",
            buttonLink: "#location",
        },
        {
            title:"Let's talk with us",
            description:"Phone: +91 9104156317",
            buttonText: "Talk With Us",
            buttonLink: "tel:+919104156317", 
        },
        {
            title:"Need live support?",
            description:"Committed staff members are ready to help you.",
            buttonText: "Support Desk",
            buttonLink: "mailto:support@sunbots.in",
        },
    ];
    const iconComponents = [
        <FiMapPin className="text-[#ED5428] text-4xl mb-4" />,
        <FiHeadphones className="text-[#ED5428] text-4xl mb-4" />,
        <FiMail className="text-[#ED5428] text-3xl mb-4" />,
    ];
    // useEffect(() => {
    //       AOS.init({ duration: 800, once: true });
    //     }, []);
    return (
    <section
      id="down-section"
      className="py-14 px-4 bg-white rubik-font flex justify-center items-center bg-color"
    >
      <AosEffect />
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-7">
        {addressData.map((card, index) => (
          <div
            key={index}
            className="group perspective"
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <div className="relative w-full h-[300px] transition-transform duration-700 transform-style preserve-3d group-hover:rotate-y-180">
              {/* FRONT SIDE */}
              <div className="absolute inset-0 bg-white rounded shadow flex flex-col items-center justify-center text-center backface-hidden">
                {iconComponents[index]}
                <h3 className="fs-22 font-semibold mb-2">{card.title}</h3>
              <p className="fs-17 mx-auto px-10">{card.description}</p>
              </div>

              {/* BACK SIDE */}
              <div
                className="absolute inset-0 bg-cover bg-center rounded flex items-center justify-center text-center rotate-y-180 backface-hidden"
              >
                <div className="bg-black/20 w-full h-full rounded flex items-center justify-center">
                  <Link
                    href={card.buttonLink}
                    className="px-5 py-2 bg-[#ED5428] text-white rounded text-sm font-semibold"
                  >
                    {card.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

}