'use client';

import Image from 'next/image';

export default function AwardComponent({ imageSrc, title }) {
  return (
    <div className="justify-center flex flex-wrap">
    <li className="text-white">
      <figure className="relative mb-0 overflow-hidden">
        <div className="bg-[#252B48]">
          <Image
            src={imageSrc}
            alt={title}
            width={350}
            height={300}
            // className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <figcaption className="absolute inset-0 flex flex-col justify-end p-[50px] lg:p-[25px]">
          <p className="text-white text-[22px] font-bold">{title}</p>
        </figcaption>
      </figure>
    </li>
    </div>
     
  );
}
