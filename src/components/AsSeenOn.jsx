// "use client";

import Image from "next/image";

export default function AsSeenOn() {
  return (
    <section className="py-2 bg-[#ED5428]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <p className="mb-0 font-bold text-[30px] md:text-md text-white">As Seen On</p>
          <div className="flex flex-wrap items-center justify-center gap-17 text-white pt-4 py-5">
            <Image
              src="https://cdn.prod.website-files.com/620ddd6ca74234b02f0d9495/65c3d87023cfa1c5bc39cdf1_TEDx.png"
              alt="TEDx"
              width={80}
              height={60}
            //   className="h-auto w-auto"
            />
            <Image
               src="https://nasscom.in/emerge50/images/emerge50-logo.jpg"
               alt="Nasscom"
               width={80}
               height={60}
            //    className="h-auto w-auto"
            /> 
             <Image
               src="https://media.assettype.com/TNIE/import/2018/12/23/original/NDTV.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true"
               alt="NDTV"
               width={80}
               height={60}
            //    className="h-auto w-auto"
             />
             <p className="bg-white text-left pl-2 text-orange-700 text-sm font-extrabold rounded-md min-w-[90px] w-[156px] ">
               & 20+ National Media Portals
             </p> 
          </div>
        </div>
      </div>
    </section>
  );
}
