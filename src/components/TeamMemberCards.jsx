// 'use client';
// import { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

import AosEffect from './AosEffect';
import HighlightText from './HighlightText';
import ProfileCard from './ProfileCard';

const teamMembers = [
  {
    name: 'Suket Amin',
    role: 'CO-FOUNDER',
    image: '/images/Aboutusimg/suket amin.jpeg',
    linkedin: 'https://www.linkedin.com/in/suket-amin/',
  },
  {
    name: 'Deep Parmar',
    role: 'CO-FOUNDER',
    image: '/images/Aboutusimg/deep parmar.png',
    linkedin: 'https://www.linkedin.com/in/deep56parmar/',
  },
  {
    name: 'Ravi Jadav',
    role: 'CO-FOUNDER',
    image: '/images/Aboutusimg/ravi jadav.png',
    linkedin: 'https://www.linkedin.com/in/jadavravi/',
  },
  {
    name: 'Darshil Chauhan',
    role: 'BACKEND ENGINEER',
    image: '/images/Aboutusimg/darshil chauhan.png',
    linkedin: 'https://www.linkedin.com/in/darshil-chauhan-118637215/',
  },
  {
    name: 'Kaushal Soni',
    role: 'Frontend Engineer',
    image: '/images/Aboutusimg/kausal soni.jfif',
    linkedin: 'https://www.linkedin.com/in/kaushal-soni-3686a3163/',
  },
  {
    name: 'Riddhi Patel',
    role: 'Backend Engineer',
    image: '/images/Aboutusimg/Riddhi_Patel.png',
    linkedin: 'https://www.linkedin.com/in/riddhi-patel-20906221b/',
  },
  {
    name: 'Mohd Faiz',
    role: 'BDE',
    image: '/images/Aboutusimg/Mohd Faiz.jpeg',
    linkedin: 'https://www.linkedin.com/in/mdfaizc/',
  },
];

export default function TeamMemberCards({ title, highlightText }) {
  // useEffect(() => {
  //   AOS.init({ duration: 800, once: true });
  // }, []);
  return (
    <section className="md:py-12 py-0 px-4 max-w-3xl mx-auto">
      <AosEffect/>
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="uppercase text-sm font-semibold tracking-wider text-black-500">
          Core people
        </span>
        <HighlightText title={title} highlight={highlightText} />
      </div>

      <div className="grid sm:grid-cols-3 md:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <ProfileCard key={index} {...member} index={index} />//here use spread operator
        ))}
      </div>
    </section>
  );
}
