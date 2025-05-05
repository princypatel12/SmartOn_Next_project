import Image from 'next/image';

const awardsData = [
  {
    imageSrc: '/images/Award-Img/1. LV Prasad.jpg',
    title: 'Winner at Lv Prasad Startup Challenge 2024',
  },
  {
    imageSrc:'/images/Award-Img/1. IIT-Mandi.jpeg',
    title:'Winner of Himalayan Startup trek 2022'
  },
  {
    imageSrc:'/images/Award-Img/2. IIT BHU.png',
    title:'Runner up for IDAPT Pitch Challenge 2022'
  },
  {
    imageSrc:'/images/Award-Img/2. India Digital Summit.jpg',
    title:'Awarded at Inclusive Tech solution 2024'
  },
  {
    imageSrc:'/images/Award-Img/3. Lemon Ideas.png',
    title:'Top 5 Ideas at the Lemon Ideas Contest'
  },
  {
    imageSrc:'/images/Award-Img/4. VishalWin Foundation.jpg',
    title:'The Emerging startups Award'
  },
  {
    imageSrc:'/images/Award-Img/awardimg_8.avif',
    title:'Recognized at the TechForGood Awards 2024'
  },
  {
    imageSrc:'/images/Award-Img/7. SmartOn_Tata.png',
    title:'Top 50 Startups at the Tata Social Enterprise Challenge'
  }
];

export default function AwardCard() {
  return (
    <section className="mb-8 pb-13 container max-w-3xl  mx-auto">
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {awardsData.map((award, index) => (
          <li key={index} className="text-white">
            <figure className="group relative w-full overflow-hidden shadow-lg">
              <div className="relative bg-[#252B48] transform transition duration-300 group-hover:scale-105">
                <Image
                  src={award.imageSrc}
                  alt={award.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover overflow-hidden"
                />
                <div className="absolute inset-0 group-hover:bg-black/50 transition duration-300" />
              </div>
              <figcaption className="absolute inset-0 flex items-end p-4 sm:p-6">
                <p className="text-white text-lg sm:text-xl fs-22 rubik-font font-semibold leading-snug drop-shadow-md">
                  {award.title}
                </p>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
