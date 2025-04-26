'use client';

import Image from 'next/image';

const partners = [
  '1. VOSAP.jpg',
  '2. Informatica.png',
  '3. Waghbakri.jpg',
  '4. CRI Pumps.png',
  '5. NextGen.png',
  '6. rotary club of ahmedabad.png',
  '7. Dr. Shivani Bhatt.png',
  '8. APINO.png',
  '9. Lions Club.png',
  '10. BPA.png',
  '11. Ummeed Foundation.png',
];

export default function DonorsPartners() {
  return (
    <section className="bg-[#1D2130] py-12 px-11">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="mb-10 text-center md:text-left">
          <h3 className="text-white text-2xl md:text-3xl font-medium font-semibold tracking-tight">
            Our{' '}
            <span className="font-extrabold text-[#FFFFFF] inline-block relative z-10">
              Donors & Partners
              <span className="absolute bottom-[8px] z-[-1] left-0 w-full h-[10px] bg-[#ED5428] opacity-90"></span>
            </span>
          </h3>
        
        </div>

        {/* Partner Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {partners.map((fileName, index) => (
            <div
              key={index}
              className="bg-white rounded-md text-center shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="py-2 px-6 flex justify-center items-center h-full">
                <Image
                  src={`/images/partners/${fileName}`}
                  alt={`Partner ${index + 1}`}
                  width={250}
                  height={50}
                  className="object-contain h-[60px]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
