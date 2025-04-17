'use client';

import Image from 'next/image';

export default function AssistiveAppCard({ imageSrc, title, description }) {
  return (
    <div className="relative w-[350px] max-w-sm group cursor-pointer image-card-style mx-4 px-8">
      {/* Background layer with hover color transition */}
      <div className="absolute inset-0 z-0 duration-300 ease-in-out" />

      {/* Card content */}
      <div className="relative z-10 bg-white py-8 px-2 w-[270px] h-[600px] text-center">
      <Image
          src={imageSrc}
          alt={title}
          width={200}
          height={350}
          className="mx-auto mb-6"
        />
        <h3 className="text-[18px] font-semibold group-hover:text-[#ED5428] transition-colors duration-300">
          {title}
        </h3>
        <p className="rubik-font basic-font text-sm mt-3 leading-relaxed transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );
}
