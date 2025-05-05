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
  const firstItems = partners.slice(0, partners.length - 3);
  const lastThreeItems = partners.slice(-3);
  return (
    <section className="bg-[#1D2130] py-12 px-11">
      <div className="max-w-7xl mx-auto">
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

      
        <div className="flex flex-wrap gap-6 mb-6 justify-center md:justify-start">
          {firstItems.map((fileName, index) => (
            <div
              key={index}
              className="bg-white rounded-md text-center shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="py-2 px-6 flex justify-center items-center h-full">
                <Image
                  src={`/images/partners/${fileName}`}
                  alt={`Partner ${index + 1}`}
                  width={190}
                  height={60}
                  className="object-contain h-[60px]"
                />
              </div>
            </div>
          ))}
        </div>
        {/* last 3 images for align center  */}
        <div className="flex justify-center gap-6 flex-wrap">
          {lastThreeItems.map((fileName, index) => (
            <div
              key={index}
              className="bg-white rounded-md text-center shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="py-2 px-6 flex justify-center items-center h-full">
                <Image
                  src={`/images/partners/${fileName}`}
                  alt={`Partner ${partners.length - 3 + index + 1}`}
                  width={190}
                  height={60}
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
