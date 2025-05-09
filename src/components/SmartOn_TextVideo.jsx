'use client';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';
// this is animation library
import { motion} from 'framer-motion';
// react hook for detect the dom element enter or leave viewport 
import { useInView } from 'react-intersection-observer';  

export default function SmartOn_TextVideo() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });
  
  return (
    <motion.section
    ref={ref}
      initial={{ scale: 0.95 }}
      animate={{ scale: inView ? 1 : 0.7 }}//here if true means its on full size and when scroll then its small up to 0.7
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="relative overflow-hidden bg-[#FFF1ED]"
  >
    {/* <section className="relative overflow-hidden bg-[#FFF1ED]"> */}
        <div className="max-w-full mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 p-6 items-center gap-12 my-4">
            {/* Left Content */}
            <div className="text-start">
              <p className="text-black opacity-80 mb-3 font-light text-[22px] rubik-font">
                An AI enabled software platform and smart glasses for the blind that{' '}
                <span className="text-[#DC3131] font-bold rubik-font text-[22px] mb-10">
                  boost their productivity and nurture their growth
                </span>
              </p>

              <h3 className="smarton-commontext font-bold mb-5 leading-tight text-[#1D2130]">
                Experience the world <br />with -{' '}
                <span className="smarton-typewrite smarton-commontext" >
                
                    <Typewriter options={{
                    strings: ['Smarton.'],
                    autoStart: true,
                    loop: true,
                    cursor: '',
                    }}
                    />
                </span>
              </h3>

              <div className="flex flex-col sm:flex-row gap-1 mt-4">
                <Link
                  href="https://www.amazon.in/dp/B0F1CXQKB4"
                  className="btn-gradient-pink-orange text-white text-[16px] px-6 py-3 rounded shadow-md text-center sm:w-auto"
                >
                  Buy Now @ ₹14,999
                </Link>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.smarton.sunbots"
                  className="btn-gradient-pink-orange text-white text-[16px] px-6 py-3 rounded shadow-md text-center sm:w-auto"
                >
                  Download for Android
                </Link>
              </div>
            </div>

            {/* Right Video Content */}
            <div>
              <iframe
                className="w-full aspect-video rounded-2xl shadow-md"
                src="https://www.youtube.com/embed/clJOAVADrsc?si=SZv1u1FifbkrGK-d"
                title="Smarton youtube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
    {/* </section> */}
    </motion.section>
  );
}


