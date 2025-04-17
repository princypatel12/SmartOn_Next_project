// import Link from 'next/link';
// export default function Header() {
//   return (
//     <header className="fixed top-0 left-0 w-full bg-black text-white z-50 shadow-md">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//         {/* Logo */}
//         <Link href="/" className="flex items-center space-x-2 mr-14">
//           <img
//             src="/images/logoTransparentBg.png"
//             alt="Smart On Logo" 
//             className="w-[100px]"
//           />
          
//         </Link>
//         {/* Navigation */}
//         <nav className="hidden md:flex space-x-8 text-sm">
//           <Link href="/" className="hover:text-gray-300 transition">Home</Link>
//           <Link href="/about-us" className="hover:text-gray-300 transition">About Us</Link>
//           <Link href="/application" className="hover:text-gray-300 transition">Product</Link>
//           <Link href="/event" className="hover:text-gray-300 transition">Partner with Smarton</Link>
//           <Link href="/contact-us" className="hover:text-gray-300 transition">Contact Us</Link>
//         </nav>
//         {/* CTA */}
//         <Link href="https://calendly.com/faiz-sunbots/30min" target="_blank">
//           <button className="bg-[#ED5428] hover:bg-[#ED5428] text-white text-sm px-4 py-1 rounded-sm shadow transition mr-7">
//             Book a Demo Now
//           </button>
//         </Link>
//       </div>
//     </header>
//   );
// }




'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; 

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="/images/logoTransparentBg.png"
            alt="Smart On Logo"
            className="w-[100px]"
          />
        </Link>

        {/* Hamburger - Mobile only */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} className="text-[#ED5428]"/> : <Menu size={24} className="text-[#ED5428]" />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-sm items-center">
          <Link href="/" className="hover:text-gray-300 transition">Home</Link>
          <Link href="/about-us" className="hover:text-gray-300 transition">About Us</Link>
          <Link href="/application" className="hover:text-gray-300 transition">Product</Link>
          <Link href="/event" className="hover:text-gray-300 transition">Partner with Smarton</Link>
          <Link href="/contact-us" className="hover:text-gray-300 transition">Contact Us</Link>
          <Link href="https://calendly.com/faiz-sunbots/30min" target="_blank">
            <button className="bg-[#ED5428] hover:bg-[#ED5428] text-white text-[17px] px-3 py-2 rounded shadow transition">
              Book a Demo Now
            </button>
          </Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 text-[17px] tracking-[1px] py-4 space-y-4 text-sm bg-white text-black">
          <Link href="/" onClick={() => setIsOpen(false)} className="block hover:text-gray-300">Home</Link>
          <Link href="/about-us" onClick={() => setIsOpen(false)} className="block hover:text-gray-300">About Us</Link>
          <Link href="/application" onClick={() => setIsOpen(false)} className="block hover:text-gray-300">Product</Link>
          <Link href="/event" onClick={() => setIsOpen(false)} className="block hover:text-gray-300">Partner with Smarton</Link>
          <Link href="/contact-us" onClick={() => setIsOpen(false)} className="block hover:text-gray-300">Contact Us</Link>
          <Link href="https://calendly.com/faiz-sunbots/30min" target="_blank">
            <button className="bg-[#ED5428] text-white text-[14px] px-4 py-2 rounded shadow transition">
              Book a Demo Now
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}
