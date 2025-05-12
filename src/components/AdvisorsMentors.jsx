// 'use client';
// import { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

import AosEffect from './AosEffect';
import HighlightText from './HighlightText';
import ProfileCard from './ProfileCard';

const supporters=[
    {
        name:'Sayomdeb Mukherjee',
        role:'ADVISOR',
        image:'/images/Aboutusimg/SayomdebSirAdvisor.jpeg',
        linkedin:'https://www.linkedin.com/in/sayomdeb-mukherjee-33875a32/',
    },
    {
        name:'Pranav Desai',
        role:'ADVISOR',
        image:'/images/Aboutusimg/PranavSirAdvisor.jpeg',
        linkedin:'https://www.linkedin.com/in/pranavpdesai/',
    },
    {
        name:'Dinkar Suri',
        role:'ADVISOR',
        image:'/images/Aboutusimg/DinkarSirAdvisor.jpeg',
        linkedin:'https://www.linkedin.com/in/dinkarsuri/',
  
    },
];

export default function AdvisorsMentors({ title, highlightText }) {
  // useEffect(() => {
  //   AOS.init({ duration: 800, once: true });
  // }, []);

  return (
    <section className="py-12 px-4 max-w-3xl mx-auto">
      <AosEffect/>
      <div className="text-center mb-12">
        <span className="uppercase text-sm font-semibold tracking-wider text-black-500">
          Core supporters
        </span>
        <HighlightText title={title} highlight={highlightText} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:px-6 md:px-0 max-w-6xl mx-auto">
        {supporters.map((supporter, index) => (
          <ProfileCard key={index} {...supporter} index={index} />
        ))}
      </div>
    </section>
  );
}
