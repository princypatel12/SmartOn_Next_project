'use client';

// import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function AddressSection(){
    const addressData=[
        {
            title:"Registered Office",
            description:"13, Hariharashray Bungalows 1, Near Baghban Party Plot, 100ft road, Thaltej, Ahmedabad, Gujarat, 380 059",
        },
        {
            title:"Let's talk with us",
            description:"Phone: +91 9104156317",
            
        },
        {
            title:"Need live support?",
            description:"Committed staff members are ready to help you.",
            
        },
    ];
    useEffect(() => {
          AOS.init({ duration: 800, once: true });
        }, []);
    return(
        <section id="down-section" className="py-14 mb:px-0 px-4 bg-white rubik-font flex justify-center items-center bg-color">
            <div className="container grid grid-cols-1 md:grid-cols-3 gap-7">
                {addressData.map((card,index) => (
                    <div key={index}
                    className="group perspective"//3d effect
                    data-aos="fade-up"
                    data-aos-delay={index * 200}>
                        <div className="transition-transform duration-700 group-hover:rotate-y-180">
                            <div className="h-[250px] backface-hidden bg-white rounded shadow flex flex-col items-center justify-center text-center">
                                <h3 className="fs-17 font-semibold mb-2">{card.title}</h3>
                                <p className="fs-14 mx-auto">{card.description}</p>
                            </div>
                            
                        </div>
                    </div>
                ))}
            </div>
        </section>

    );
}