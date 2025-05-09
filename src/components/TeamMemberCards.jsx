"use client";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react';
import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';
import HighlightText from './HighlightText';
import Link from 'next/link';

const teamMembers = [
  {
    name: 'Suket Amin',
    role: 'CO-FOUNDER',
    image: '/images/aboutusimg/suket amin.jpeg',
    linkedin: 'https://www.linkedin.com/in/suket-amin/',
  },
  {
    name: 'Deep Parmar',
    role: 'CO-FOUNDER',
    image: '/images/aboutusimg/deep parmar.png',
    linkedin: 'https://www.linkedin.com/in/deep56parmar/',
  },
  {
    name: 'Ravi Jadav',
    role: 'CO-FOUNDER',
    image: '/images/aboutusimg/ravi jadav.png',
    linkedin: 'https://www.linkedin.com/in/jadavravi/',
  },
  {
    name: 'Darshil Chauhan',
    role: 'BACKEND ENGINEER',
    image: '/images/aboutusimg/darshil chauhan.png',
    linkedin: 'https://www.linkedin.com/in/darshil-chauhan-118637215/',
  },
  {
    name: 'Kaushal Soni',
    role: 'Frontend Engineer',
    image: '/images/aboutusimg/kausal soni.jfif',
    linkedin: 'https://www.linkedin.com/in/kaushal-soni-3686a3163/',
  },
  {
    name: 'Riddhi Patel',
    role: 'Backend Engineer',
    image: '/images/aboutusimg/Riddhi_Patel.png',
    linkedin: 'https://www.linkedin.com/in/riddhi-patel-20906221b/',
  },
  {
    name: 'Mohd Faiz',
    role: 'BDE',
    image: '/images/aboutusimg/Mohd Faiz.jpeg',
    linkedin: 'https://www.linkedin.com/in/mdfaizc/',
  },
];

export default function TeamMemberCards({ title, highlightText }) {
  useEffect(() => {
          AOS.init({ duration: 800, once: true });
        }, []);
  return (
    <section className="md:py-12 py-0  px-4 max-w-3xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="uppercase text-sm font-semibold tracking-wider text-black-500">
          Core people
        </span>
        <HighlightText title={title} highlight={highlightText} />
      </div>

      <div className="grid sm:grid-cols-3 md:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center"
          data-aos="fade-up"
          data-aos-delay={index * 200}
          >
            <div className="relative overflow-hidden shadow-md group transition-all duration-300 bg-white hover:shadow-xl">
              <Image
                src={member.image}
                alt="membername"
                width={300}
                height={300}
                className="w-full h-auto object-cover"
              />
              <div className="p-4">
              <div className="transition-transform duration-300 group-hover:-translate-y-1">
                <h4 className="font-bold text-[19px] text-gray-800">{member.name}</h4>
                <p className="uppercase text-[16px] text-gray-700">{member.role}</p>
                </div>
                {member.linkedin && (
                   <div className="mt-2 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2">
               
                    <Link
                      href={member.linkedin}
                      target="_blank"
                      className="inline-block text-black-600 hover:text-black-800"
                    >
                      <FaLinkedin size={20} />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

