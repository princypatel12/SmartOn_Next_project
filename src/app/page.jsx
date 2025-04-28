import AsSeenOn from "@/components/AsSeenOn";
import HeroSlider from "@/components/HeroSlider";
import SmartOn_ReuseText from "@/components/SmartOn_ReuseText";
// import ImageCards from "@/components/ImageCards";
import CardSection from "@/components/CardSection";
import SmartOn_TextVideo from "@/components/SmartOn_TextVideo";
import Features_IconText from "@/components/Features_IconText";
// import HighlightText from "@/components/HighlightText";
import CombinedComponent from "@/components/CombinedComponent";
import AwardCard from "@/components/AwardCard";
import DonorsPartners from "@/components/DonorsPartners";
import PartnersSlider from "@/components/PartnersSlider";
import Testimonials from "@/components/Testimonials";
import LatestBlogs from "@/components/LatestBlogs";
// import Footer from "@/components/Footer";

// import DonorsPartners from "@/components/Donors&Partners";
// import FeedbackSection from "@/components/FeedbackSection";

export default function HomePage() {
  return (
    <div>
      <HeroSlider />
      <AsSeenOn />
      <SmartOn_ReuseText 
      title="what is smarton"
      description="An Educational and Work Assistance Aid for the Blind and Visually Impaired"
      />
      {/* <ImageCards
      imageSrc="/images/ImageCards/app_image.png"
      title="AI-enabled Assistive App"
      description="A smart application that recognizes and interprets visual information while providing real-time auditory feedback to enhance user experience."
      /> */}
      <CardSection/>
      <SmartOn_TextVideo/>
      <SmartOn_ReuseText 
      title="Features"
      description="Connects with an app that articulates everyday visual information into speech"
      />
      <Features_IconText/>
      {/* <HighlightText
      title="Why"
      highlight="SMARTON?"/> */}
      {/* <FeedbackSection/> */}
      <CombinedComponent/>
      <SmartOn_ReuseText 
      title="Awards and Recognition"
      description="Our Achievements"
      />
      <AwardCard/>
      {/* <HighlightText
      title="Our"
      highlight="Donors & Partners?"
      customstyle="flex justify-start px-12"
      /> */}
      <DonorsPartners/>
      <PartnersSlider/>
      <Testimonials/>
      <LatestBlogs/>
      {/* <Footer/> */}
      
     
    </div>
  );
}

