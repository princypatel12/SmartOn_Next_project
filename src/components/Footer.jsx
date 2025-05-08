'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative z-10 bg-black text-[#80858F] pt-12 pb-6 px-11">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-5 gap-6">
        
        {/* Logo and Description */}
        <div className="space-y-2">
          <Link href="/" className="inline-block">
            <Image
             src="/images/logoTransparentBg.png"
             alt="Smart On Logo"
             width={90}
             height={90}
             className="w-[90px]"
            />
          </Link>
          <p className="fs-17 rubik-font leading-[28px]">Experience the world with -<br />Smarton Glasses</p>
          <div className="flex space-x-4 mt-4">
            <FaFacebookF className="w-3 h-3 cursor-pointer text-white" />
            <FaLinkedinIn className="w-3 h-3 cursor-pointer text-white" />
            <FaTwitter className="w-3 h-3 cursor-pointer text-white" />
            <FaInstagram className="w-3 h-3 cursor-pointer text-white" />
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-semibold mb-4 fs-17">Company</h4>
          <ul className="space-y-2 fs-17 rubik-font leading-[28px]">
            <li className="hover:text-[#ED5428] cursor-pointer">Who we are</li>
            <li className="flex items-center gap-2 hover:text-[#ED5428] cursor-pointer">
              Smarton App
              <span className="bg-gray-700 text-white text-xs px-2 py-0.5 rounded-full fs-10">HOT</span>
               </li>
            <li className="hover:text-[#ED5428] cursor-pointer">Partner with Us</li>
            <li className="hover:text-[#ED5428] cursor-pointer">Smarton</li>
          </ul>
        </div>

        {/* Go To */}
        <div>
          <h4 className="text-white font-semibold mb-4 fs-17">Go To</h4>
          <ul className="space-y-2 fs-17 rubik-font leading-[28px]">
            <li className="hover:text-[#ED5428] cursor-pointer"><Link href="/">Home</Link></li>
            <li className="hover:text-[#ED5428] cursor-pointer"><Link href="/product">Product</Link></li>
            <li className="hover:text-[#ED5428] cursor-pointer"><Link href="/partnerwithsmarton">Partner with <br/>Smarton</Link></li>
            <li className="hover:text-[#ED5428] cursor-pointer"><Link href="/">Smarton</Link></li>
            <li className="hover:text-[#ED5428] cursor-pointer"><Link href="/about-us">About Us</Link></li>
          </ul>
        </div>

        {/* Need Help */}
        <div>
          <h4 className="text-white font-semibold mb-4 fs-17">Need help?</h4>
          <p className="fs-17 rubik-font leading-[28px]">Call us</p>
          <p className="text-white mb-4 fs-17 rubik-font leading-[28px]">(+91) 9104156317</p>
          <p className="fs-17 rubik-font leading-[28px]">Email us</p>
          <Link href="mailto:support@sunbots.in" className="text-white underline cursor-pointer fs-17 rubik-font leading-[28px] break-all">support@sunbots.in</Link>
        </div>

        {/* Newsletter */}
        <div className="space-y-4">
          <h4 className="text-white font-semibold fs-17">Subscribe our newsletter</h4>
          <div className="flex items-center bg-gray-800 p-2 rounded-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent outline-none fs-14 flex-grow text-white"
            />
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
            >
              {/* in this d means drawing lines and for draw arc  */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
           </svg>

          </div>
          <Link href="https://calendly.com/faiz-sunbots/30min" target="_blank">
            <button className="bg-[#ED5428] cursor-pointer text-white text-[16px] flex items-center px-3 py-1.5 leading-6 [letter-spacing:0.5px] rounded shadow transition">
              Book a Demo Now
            </button>
          </Link>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm space-y-4 md:flex md:justify-between md:items-center md:space-y-0">
        <p className="fs-16 rubik-font">Copyright © 2022 Sunbots Innovations</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="#" className="hover:text-[#ED5428] fs-16 rubik-font">Privacy policy</Link>
          <Link href="#" className="hover:text-[#ED5428] fs-16 rubik-font">Terms of Service</Link>
          <Link href="#" className="hover:text-[#ED5428] fs-16 rubik-font">Cancellation and Refund Policy</Link>
        </div>
      </div>
    </footer>
  );
}


