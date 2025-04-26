'use client';

import Image from 'next/image';

const testimonials = [
  {
    text: 'Smarton glasses empower me with AI-driven navigation, text reading, and currency recognition, making daily life easier and more independent. A game-changer for accessibility!',
    name: 'Divya',
    role: 'From Chennai',
    image: '/images/testimonials/Divya.png',
  },
  {
    text: 'Smarton glasses provide real-time AI assistance, helping me navigate, read text, and recognize objects effortlessly. A must-have for independence and accessibility!',
    name: 'Zakir',
    role: 'Student',
    image: '/images/testimonials/Zakir.png',
  },
  {
    text: 'Smarton glasses redefine accessibility with AI-driven text reading, object recognition, and navigation, making everyday life smoother and more independent. I highly recommend it!',
    name: 'Yasif',
    role: "Blind People's Association",
    image: '/images/testimonials/Yasif.png',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-12 px-11">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="uppercase fs-17 text-sm font-semibold tracking-[1px] leading-[32px]">What our users say</span>
          <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mt-2">
            User{' '}
            <span className="relative inline-block font-extrabold text-black">
              Testimonials
              <span className="absolute left-0 bottom-[-8px] w-full h-[8px] bg-gradient-to-r from-emerald-400 to-green-500 opacity-60 z-[-1]"></span>
            </span>
          </h3>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-3 gap-8 rubik-font fs-17">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-xl flex flex-col justify-between h-full"
            >
              <p className="text-gray-700 mb-6">{item.text}</p>
              <div className="flex items-center gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <div>
                  <div className="font-bold text-gray-900 text-lg">{item.name}</div>
                  <div className="text-sm text-gray-500">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
