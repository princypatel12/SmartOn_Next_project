import Image from "next/image";

export default function AsSeenOn() {
  const asSeenLogo = [
    {
      src:"/images/AsSeenOn-image/TED-ximg.png",
      alt:"TEDx",
    },
    {
      src:"/images/AsSeenOn-image/emerge50-logo.jpg",
      alt:"Nasscom",
    },
    {
      src:"/images/AsSeenOn-image/NDTV.avif",
      alt:"NDTV",
    },
  ];
  return (
    <section className="py-2 overflow-hidden bg-[#ED5428] rubik-font">
      <div className="container mx-auto max-w-full px-4">
        <div className="flex flex-col items-center justify-center">
          <p className="font-bold text-[30px] md:text-md text-white pb-1 ">As Seen On</p>
          <div className="flex flex-wrap items-center justify-center gap-17 pt-4 py-5">
             {asSeenLogo.map((logo,index)=>(
              <Image key={index} src={logo.src} alt={logo.alt} width={80} height={60} />
             ))}
             <p className="bg-white text-left pl-2 text-[#DE3131] text-sm font-extrabold rounded-md w-[147px] h-16 leading-tight flex items-center">
               & 20+ National Media Portals
             </p> 
          </div>
        </div>
      </div>
    </section>
  );
}
