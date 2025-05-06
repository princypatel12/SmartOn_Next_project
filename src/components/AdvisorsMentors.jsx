"use client";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react';
import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';
import HighlightText from './HighlightText';
import Link from 'next/link';

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
  useEffect(()=>{
    AOS.init({
      duration:800,once:true
    });
  },[]);
    return(
        <section className="py-12 px-4 max-w-3xl mx-auto">
            <div className="text-center mb-12">
                <span className="uppercase text-sm font-semibold tracking-wider text-black-500">
                Core supporters
                </span>
                <HighlightText title={title} highlight={highlightText}/>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:px-6 md:px-0 max-w-6xl mx-auto">
              {supporters.map((member, index) => (
                <div key={index} className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 200}>
                  <div className="overflow-hidden shadow-md bg-white group transition-all duration-300">
                    <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
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