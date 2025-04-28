'use client';

import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-[#80858F] pt-12 pb-6 px-11">
      <div className="max-w-7xl mx-auto grid grid-cols-5 gap-2">
        
        {/* Logo and Description */}
        <div className="space-y-4 ">
        <Link href="/" className="space-x-2">
          <img
            src="/images/logoTransparentBg.png"
            alt="Smart On Logo"
            className="w-[90px] mb-4"
          />
        </Link>

          <p className="fs-17 rubik-font leading-[32px]">Experience the world with -<br />Smarton Glasses</p>
          <div className="flex space-x-4 mt-4">
            <FaFacebookF className="w-3 h-3 cursor-pointer hover:text-white fs-18" />
            <FaLinkedinIn className="w-3 h-3 cursor-pointer hover:text-white fs-18" />
            <FaTwitter className="w-3 h-3 cursor-pointer hover:text-white fs-18" />
            <FaInstagram className="w-3 h-3 cursor-pointer hover:text-white fs-18" />
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-semibold mb-4 fs-17">Company</h4>
          <ul className="space-y-2 fs-17 rubik-font leading-[32px]">
            <li className="hover:text-[#ED5428]">Who we are</li>
            <li className="flex items-center gap-2 hover:text-[#ED5428]">
              Smarton App
              <span className="bg-gray-700 text-white text-xs px-2 py-0.5 rounded-full fs-10">HOT</span>
            </li>
            <li className="hover:text-[#ED5428]">Partner with Us</li>
            <li className="hover:text-[#ED5428]">Smarton</li>
          </ul>
        </div>

        {/* Go To */}
        <div>
          <h4 className="text-white font-semibold mb-4 fs-17">Go To</h4>
          <ul className="space-y-2 fs-17 rubik-font leading-[32px]">
            <li className="hover:text-[#ED5428]">Home</li>
            <li className="hover:text-[#ED5428]">Product</li>
            <li className="hover:text-[#ED5428]">Partner with Smarton</li>
            <li className="hover:text-[#ED5428]">Smarton</li>
            <li className="hover:text-[#ED5428]">About US</li>
          </ul>
        </div>

        {/* Need Help */}
        <div>
          <h4 className="text-white font-semibold mb-4 fs-17">Need help?</h4>
          <p className="fs-17 rubik-font leading-[32px]">Call us</p>
          <p className="text-white font-bold mb-4 fs-17 rubik-font leading-[32px]">(+91) 9104156317</p>
          <p className="fs-17 rubik-font leading-[32px]">Email us</p>
          <p className="text-white underline cursor-pointer fs-17 rubik-font leading-[32px]">support@sunbots.in</p>
        </div>

        {/* Newsletter */}
        <div className="space-y-4">
          <h4 className="text-white font-semibold fs-17">Subscribe our newsletter</h4>
          <div className="flex items-center bg-gray-800 p-2 rounded-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent outline-none text-sm flex-grow px-2 text-white"
            />
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 12H4m0 0l4-4m-4 4l4 4" />
            </svg>
          </div>
          <button className="w-full bg-[#ED5428] hover:bg-[#ED5428] text-white py-2 px-3 rounded-md font-semibold transition">
            Book a Demo Now
          </button>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm space-y-4 md:flex md:justify-between md:items-center md:space-y-0">
        <p className="fs-16 rubik-font">Copyright © 2022 Sunbots Innovations</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="#" className="hover:underline fs-16 rubik-font">Privacy policy</Link>
          <Link href="#" className="hover:underline fs-16 rubik-font">Terms of Service</Link>
          <Link href="#" className="hover:underline fs-16 rubik-font">Cancellation and Refund Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
