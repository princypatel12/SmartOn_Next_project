'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation'; 

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href) => pathname === href ? 'text-gray-400' : '';

  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white z-50 shadow-md px-11 ">
      <div className="max-w-7xl py-4 flex justify-between">
        {/* Logo */}
        <Link href="/" className="space-x-2">
          <img
            src="/images/logoTransparentBg.png"
            alt="Smart On Logo"
            className="w-[90px]"
          />
        </Link>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} className="text-[#ED5428]"/> : <Menu size={24} className="text-[#ED5428]" />}
        </button>

        <nav className="hidden md:flex space-x-8 text-[17px] items-center">
          <Link href="/" className={`hover:text-gray-300 transition ${isActive('/')}`}>Home</Link>
          <Link href="/about-us" className={`hover:text-gray-300 transition ${isActive('/about-us')}`}>About Us</Link>
          <Link href="/product" className={`hover:text-gray-300 transition ${isActive('/product')}`}>Product</Link>
          <Link href="/partnerwithsmarton" className={`hover:text-gray-300 transition ${isActive('/partnerwithsmarton')}`}>Partner with Smarton</Link>
          <Link href="/contact-us" className={`hover:text-gray-300 transition ${isActive('/contact-us')}`}>Contact Us</Link>
          <Link href="https://calendly.com/faiz-sunbots/30min" target="_blank">
            <button className="bg-[#ED5428] hover:bg-[#ED5428] text-white text-[16px] flex items-center px-3 py-1.5 leading-6 [letter-spacing:0.5px] rounded shadow transition">
              Book a Demo Now
            </button>
          </Link>
        </nav>
      </div>

      {isOpen && (
        <div className="md:hidden px-6 text-[17px] tracking-[1px] py-4 space-y-4 text-sm bg-white text-black">
          <Link href="/" onClick={() => setIsOpen(false)} className="block hover:text-gray-300">Home</Link>
          <Link href="/about-us" onClick={() => setIsOpen(false)} className="block hover:text-gray-300">About Us</Link>
          <Link href="/product" onClick={() => setIsOpen(false)} className="block hover:text-gray-300">Product</Link>
          <Link href="/partnerwithsmarton" onClick={() => setIsOpen(false)} className="block hover:text-gray-300">Partner with Smarton</Link>
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
