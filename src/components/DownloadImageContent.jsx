// "use client";
// import { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import Image from 'next/image';
// import Link from 'next/link';

// export default function DownloadImageContent() {
//   const containerRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"],
//   });

//   const image1Y = useTransform(scrollYProgress, [0, 1], [0, -250]);
//   const image2Y = useTransform(scrollYProgress, [0, 1], [0, 250]);

//   return (
//     <section ref={containerRef} className="bg-gray-100 py-16">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
//         <div className="grid grid-cols-2 gap-4 px-4 md:px-0">
//             <motion.div style={{ y: image1Y }} className="relative z-0">
//               <Image 
//                 src="/images/productimg/image1.png"
//                 alt="downloadappimage1"
//                 width={300}
//                 height={300}
//                 className="rounded-lg w-full h-auto"
//               />
//             </motion.div>
//             <motion.div style={{ y: image2Y }} className="relative z-0">
//               <Image
//                 src="/images/productimg/image2.png"
//                 alt="downloadappimage2"
//                 width={300}
//                 height={300}
//                 className="rounded-lg w-full h-auto"
//               />
//             </motion.div>
//           </div>
          
//           {/* Right content */}
//           <div className="w-full text-center md:text-left rubik-font px-4 md:px-0">
//             <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 mb-4 rubik-font">
//               Download the Smarton app now!
//             </h3>
//             <p className="text-gray-800 mb-8 fs-18 sm:text-lg leading-[32px] max-w-md mx-auto md:mx-0">
//               A complete toolbox to experience the world around you.
//             </p>
//             <div className="flex flex-wrap justify-center md:justify-start gap-4">
//               <Link href="" className="w-40">
//                 <Image 
//                   src="/images/productimg/app-store-white.svg"
//                   alt="Download on app store"
//                   width={180} 
//                   height={50}
//                   className="rounded shadow-lg pointer"
//                 />
//               </Link>
//               <Link
//                 href="https://play.google.com/store/apps/details?id=com.smarton.sunbots&pcampaignid=web_share"
//                 className="w-40"
//               >
//                 <Image
//                   src="/images/productimg/play-store-white.svg"
//                   alt="play store image"
//                   width={180}
//                   height={50}
//                   className="rounded shadow-lg pointer"
//                 />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';

export default function DownloadImageContent() {
  const containerRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(true);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024); // Tailwind 'lg'
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const image1Y = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const image2Y = useTransform(scrollYProgress, [0, 1], [0, 250]);

  // Helper: choose div or motion.div
  const MotionOrDiv = isDesktop ? motion.div : "div";

  return (
    <section ref={containerRef} className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">

          {/* Left images */}
          <div className="grid grid-cols-2 gap-4 px-4 md:px-0">
            <MotionOrDiv style={isDesktop ? { y: image1Y } : {}} className="relative z-0">
              <Image 
                src="/images/productimg/image1.png"
                alt="downloadappimage1"
                width={300}
                height={300}
                className="rounded-lg w-full h-auto"
              />
            </MotionOrDiv>
            <MotionOrDiv style={isDesktop ? { y: image2Y } : {}} className="relative z-0">
              <Image
                src="/images/productimg/image2.png"
                alt="downloadappimage2"
                width={300}
                height={300}
                className="rounded-lg w-full h-auto"
              />
            </MotionOrDiv>
          </div>

          {/* Right content */}
          <div className="w-full text-center md:text-left rubik-font px-4 md:px-0">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 mb-4 rubik-font">
              Download the Smarton app now!
            </h3>
            <p className="text-gray-800 mb-8 fs-18 sm:text-lg leading-[32px] max-w-xs mx-auto md:mx-0">
              A complete toolbox to experience the world around you.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Link href="" className="w-40">
                <Image 
                  src="/images/productimg/app-store-white.svg"
                  alt="Download on app store"
                  width={180} 
                  height={50}
                  className="rounded shadow-lg pointer"
                />
              </Link>
              <Link
                href="https://play.google.com/store/apps/details?id=com.smarton.sunbots&pcampaignid=web_share"
                className="w-40"
              >
                <Image
                  src="/images/productimg/play-store-white.svg"
                  alt="play store image"
                  width={180}
                  height={50}
                  className="rounded shadow-lg pointer"
                />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
