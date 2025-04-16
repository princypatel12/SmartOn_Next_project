import AsSeenOn from "@/components/AsSeenOn";
import HeroSlider from "@/components/HeroSlider";
import SmartOn_ReuseText from "@/components/SmartOn_ReuseText";

export default function HomePage() {
  return (
    <div>
      <HeroSlider />
      <AsSeenOn />
      <SmartOn_ReuseText 
      title="what is smarton"
      description="An Educational and Work Assistance Aid for the Blind and Visually Impaired"
      />
    </div>
  );
}

