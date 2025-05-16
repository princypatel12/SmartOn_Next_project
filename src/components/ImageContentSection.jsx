//about-us page component 
// 3.Imagecontent component 
"use client";   
import React from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HighlightText from './HighlightText';

export default function ImageContentSection({imageSrc,title,highlightText,content}){
    const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const backgroundVariants = {
    hidden: { height: 0 },
    visible: { height: '100%', transition: { duration: 0.8, ease: 'easeInOut' } },
  };

  const imageVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.6, duration: 0.8, ease: 'easeOut' },
    },
  };

    return(
        <section id="down-section" className="md:py-16 py-6">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* left image section  */}
                <div
                ref={ref}
                className="relative w-full md:mt-21 overflow-hidden h-full md:h-[450px] rounded"
                >
          {/* Animated background fill */}
          <motion.div
            className="absolute inset-0 bg-[#010048] z-0 rounded"
            initial="hidden"
            animate={controls}
            variants={backgroundVariants}
          />

          {/* Image reveal */}
          <motion.div
            className="relative z-10"
            initial="hidden"
            animate={controls}
            variants={imageVariants}
          >
            <Image
              src={imageSrc}
              alt="Section Image"
              width={800}
              height={500}
              className="w-full h-full object-cover rounded"
            />
          </motion.div>
        </div>
                {/* right content text  */}
                <div className="md:w-[400px] w-full md:px-0 md:pl-12">
                <HighlightText
                 title={title}
                 highlight={highlightText}
                 customstyle="md:text-left text-center md:w-[350px] w-full"
                 /> 
                <p className="mt-6 md:px-0 md:text-justify text-center fs-17 rubik-font leading-7 md:w-[400px] w-full">{content}</p>

                </div>
            </div>
        </section>
    );
}