// import React from 'react'

import AboutSection from "@/components/AboutSection";
import HighlightText from "@/components/HighlightText";
import ImageContentSection from "@/components/ImageContentSection";
import MissionVissionSlider from "@/components/MissionVissionSlider";
import TeamMemberCards from "@/components/TeamMemberCards";

export default function AboutPage() {
  return (
    <main className="pt-17"> 
        {/* <h1>About us page</h1> */}
        <AboutSection
        title="About Us"
        subtitle="We specialize in Assistive Technology"
        backgroundImage="https://via.placeholder.com/1920x1100"
      />
      <ImageContentSection
      imageSrc="/images/Aboutusimg/Frame 1.png"
      title="We empower individuals with"
      highlightText="Smarton."
      content="Smarton empowers individuals with visual impairments to reach their academic and professional potential. Our AI-powered device enhances learning and productivity by providing instant auditory access to educational materials, technical documents, and professional resources. With accurate text recognition and object identification, Smarton supports independent study, research, and skill development, helping users excel in STEM and beyond. We are committed to a world where visual impairment is no barrier to growth and success."
      />
      <MissionVissionSlider  
      image1="/images/Aboutusimg/mv1.JPG"
      image2="/images/Aboutusimg/mv2.JPG"
    />
    <ImageContentSection
    imageSrc="/images/Aboutusimg/i-hubimage.jfif"
    title="Founder's"
    highlightText="Note."
    content="At Smarton, we are committed to breaking barriers for the blind and visually impaired by making education truly accessible. We believe knowledge is the key to empowerment, and our AI-powered Smarton App and Glasses provide inclusive and engaging learning experiences. Our mission is to bridge the educational gap by making textbooks, lectures, and interactive learning accessible, foster independence by equipping users with tools to navigate educational environments confidently, and promote lifelong learning by supporting both formal education and personal growth. We are dedicated to continuous innovation, collaborating with educators and the visually impaired community, and advocating for inclusive education policies. By prioritizing accessibility and empowerment, we strive to create a future where everyone has the opportunity to learn, grow, and thrive.
    Suket Amin
    Founder, Smarton"/>
    <TeamMemberCards
    title="The Smarton"
    highlightText="Family"/>
    
       
    </main>
  );
}
