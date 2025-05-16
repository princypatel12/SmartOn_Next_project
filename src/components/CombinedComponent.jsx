// 9.CombinedComponent.jsx -->this is the main component that combines 3 components 
import HighlightText from "@/components/HighlightText";
import FeedbackSection from "@/components/FeedbackSection";
import TrustBanner from "@/components/TrustBanner";
import Image from "next/image";


export default function CombinedComponent(){
    return (
      <section className="relative bg-cover bg-center py-12 px-4">
        <Image
        src="/images/demo-startup-who-we-are-bg.jpg"
        alt="Background image"
        fill
        className="object-cover z-0"
        priority
      />
      <div className="max-w-7xl mx-auto">
       <HighlightText
       title="Why"
       highlight="SMARTON?"/>
       <FeedbackSection/>
       <TrustBanner/>
      </div>
      </section>
    );
  };
  
