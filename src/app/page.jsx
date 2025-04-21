import AsSeenOn from "@/components/AsSeenOn";
import HeroSlider from "@/components/HeroSlider";
import SmartOn_ReuseText from "@/components/SmartOn_ReuseText";
import ImageCards from "@/components/ImageCards";
import CardSection from "@/components/CardSection";
import SmartOn_TextVideo from "@/components/SmartOn_TextVideo";

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
    </div>
  );
}

