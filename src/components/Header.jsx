//1. Header component 
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation'; 
import Button from './Button';


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href) => pathname === href ? 'text-gray-400' : '';

  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white z-50 shadow-md px-11">
      <div className="py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="space-x-2">
          <Image
            src="/images/logoTransparentBg.png"
            alt="Smart On Logo"
            width={90}
            height={90}
            className="w-[90px]"
            priority
          />
        </Link>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu" 
        >
          {isOpen ? <X size={24} className="text-[#D63E13] cursor-pointer"/> : <Menu size={24} className="text-[#D63E13] cursor-pointer" />}
        </button>

        {/* desktop links  */}
        <nav className="hidden md:flex space-x-8 text-[17px] items-center">
          <Link href="/" className={`hover:text-gray-300 transition ${isActive('/')}`}>Home</Link>
          <Link href="/about-us" className={`hover:text-gray-300 transition ${isActive('/about-us')}`}>About Us</Link>
          <Link href="/product" className={`hover:text-gray-300 transition ${isActive('/product')}`}>Product</Link>
          <Link href="/partnerwithsmarton" className={`hover:text-gray-300 transition ${isActive('/partnerwithsmarton')}`}>Partner with Smarton</Link>
          <Link href="/contact-us" className={`hover:text-gray-300 transition ${isActive('/contact-us')}`}>Contact Us</Link>
           <Button
            href="https://calendly.com/faiz-sunbots/30min"
            ariaLabel="Book a Demo"
            target="_blank"
           >
             Book a Demo Now
           </Button>
        </nav>
      </div>

      {/* Mobile Menu links*/}
      {isOpen && (
        <div className="md:hidden px-6 text-[17px] tracking-[1px] py-4 space-y-4 text-sm bg-white text-black">
          <Link href="/" onClick={() => setIsOpen(false)} className="block hover:text-gray-300">Home</Link>
          <Link href="/about-us" onClick={() => setIsOpen(false)} className="block hover:text-gray-300">About Us</Link>
          <Link href="/product" onClick={() => setIsOpen(false)} className="block hover:text-gray-300">Product</Link>
          <Link href="/partnerwithsmarton" onClick={() => setIsOpen(false)} className="block hover:text-gray-300">Partner with Smarton</Link>
          <Link href="/contact-us" onClick={() => setIsOpen(false)} className="block hover:text-gray-300">Contact Us</Link>
          
          <Button
            href="https://calendly.com/faiz-sunbots/30min"
            ariaLabel="Book a Demo"
            target="_blank"
           >          
            Book a Demo Now
          </Button>

        </div>
      )}
    </header>
  );
}
