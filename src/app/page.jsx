// Home page.jsx 
import AsSeenOn from "@/components/AsSeenOn";
import HeroSlider from "@/components/HeroSlider";
import SmartOn_ReuseText from "@/components/SmartOn_ReuseText";
import HomeCardSection from "@/components/HomeCardSection";
import SmartOn_TextVideo from "@/components/SmartOn_TextVideo";
import Features_IconText from "@/components/Features_IconText";
import CombinedComponent from "@/components/CombinedComponent";
import AwardCard from "@/components/AwardCard";
import DonorsPartners from "@/components/DonorsPartners";
import PartnersSlider from "@/components/PartnersSlider";
import Testimonials from "@/components/Testimonials";
import LatestBlogs from "@/components/LatestBlogs";

export default function HomePage() {
  return (
    <div>
      {/* 2.hersoslidercomponent  */}
      <HeroSlider />
      {/* 3.asseenoncomponent  */}
      <AsSeenOn />
      {/* 4.smartonreusetextcomponent  */}
      <SmartOn_ReuseText 
      title="what is smarton"
      description="An Educational and Work Assistance Aid for the Blind and Visually Impaired"
      />
      {/* 5.homecardsectioncomponent  */}
      <HomeCardSection/>
      {/* 6.smartontextvideocomponent  */}
      <SmartOn_TextVideo/>
      {/* 4.smartonreusetextcomponent  */}
      <SmartOn_ReuseText 
      title="Features"
      description="Connects with an app that articulates everyday visual information into speech"
      />
      {/* 8.featuresicontextcomponent */}
      <Features_IconText/>
      {/* 9.combinedcomponent with highlighttext component,feedbacksection component and trustbannercomponent  */}
      <CombinedComponent/>
      {/* 4.smartonreusetextcomponent  */}
      <SmartOn_ReuseText 
      title="Awards and Recognition"
      description="Our Achievements"
      />
      {/* 10.awardcardcomponent  */}
      <AwardCard/>
      {/* 11.donorspartnerscomponent  */}
      <DonorsPartners/>
      {/* 12.partnersslidercomponent  */}
      <PartnersSlider/>
      {/* 13.testimonialscomponent   */}
      <Testimonials/>
      {/* 14.latestblogscomponent  */}
      <LatestBlogs/>
  
    </div>
  );
}

