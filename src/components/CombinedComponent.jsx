import HighlightText from "@/components/HighlightText";
import FeedbackSection from "@/components/FeedbackSection";
import TrustBanner from "@/components/TrustBanner";


export default function CombinedComponent(){
    return (
      <section className="bg-cover bg-center py-12 px-4" style={{ backgroundImage: "url('/images/demo-startup-who-we-are-bg.jpg')" }}>
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
  
