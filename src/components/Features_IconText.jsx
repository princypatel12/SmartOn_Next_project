'use client';
import Image from 'next/image'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const features = [
  {
    title: 'Smart Eye',
    description: 'Get a description of the scene in front of you.',
    icon: '/images/icons/eye-scan.png',
  },
  {
    title: 'AI Tutor',
    description: 'Chat with our AI to get your answers instantly.',
    icon: '/images/icons/tutor.png',
  },
  {
    title: 'Doc AI',
    description: 'Scan your document and get a summary instantly.',
    icon: '/images/icons/ai-file.png',
  },
  {
    title: 'Object Identification',
    description: 'Identify popular objects and hear where they are.',
    icon: '/images/icons/identification.png',
  },
  {
    title: 'Currency Identification',
    description: 'Identify banknotes in multiple currencies.',
    icon: '/images/icons/money.png',
  },
  {
    title: 'Text Recognition',
    description: 'Immediately speaks out text as it appears in front of you.',
    icon: '/images/icons/text-recognising.png',
  },
]

const Features_IconText = () => {
     useEffect(() => {
        AOS.init({ duration: 800, once: true });
      }, []);
  return (
    <section className="background-position-center-top">
    <div
      className="grid grid-cols-3 gap-4 justify-center px-11"
      data-anime='{"el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad"}'
      
    >
      {features.map((feature, index) => (
        <div
          key={index}
          className="p-6 overflow-hidden bg-white"
          data-aos="fade-up"
          data-aos-delay={index * 200} //this is for the delay on each feature animation 
        >
          <div className="px-5 flex flex-col items-center text-center">
            <div className="mb-5">
              <Image src={feature.icon} alt={feature.title} width={50} height={50} />
            </div>
            <p className="inline-block font-alt font-bold mb-[5px] text-[18px] text-[#ed5328]
            ">{feature.title}</p>
            <p className="feature_description rubik-font">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
    </section>
  )
}

export default Features_IconText
