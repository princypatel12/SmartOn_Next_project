import AwardComponent from './AwardComponent';

const awards = [
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
    <section className="mb-8 pb-13">
      <ul className="grid grid-cols-3 gap-5 px-12">
        {awards.map((award, index) => (
          <AwardComponent
            key={index}
            imageSrc={award.imageSrc}
            title={award.title}
          />
        ))}
      </ul>
    </section>
  );
}
