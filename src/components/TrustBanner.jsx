'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function TrustBanner() {
     useEffect(() => {
        AOS.init({ duration: 800, once: true });
      }, []);

    return (
      <div className="mt-5 sm:mt-[30px]" data-aos="fade-up" data-aos-delay="200">
        <div className="w-full text-center">
          <div className="inline-block bg-neutral-800 font-semibold text-white uppercase rounded-full px-3 py-1 mr-2 sm:my-2 rubik-font fs-12">
            trust
          </div>
          <div className="inline-block align-middle">
            <span className="text-[24px] font-semibold text-gray-800 block tracking-tight fs-24">
              Join the 9000+ users trusting Smarton.
            </span>
          </div>
        </div>
      </div>
    );
  }
  