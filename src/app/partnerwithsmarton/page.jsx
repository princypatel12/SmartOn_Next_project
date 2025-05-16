// partnerwithsmarton page.jsx 
import AboutSection from "@/components/AboutSection";
import DonorsPartners from "@/components/DonorsPartners";
import GetInTouchForm from "@/components/GetInTouchForm";
import PartnersSlider from "@/components/PartnersSlider";

export default function PartnerWithSmartonPage(){
    return(
        <main className="pt-15">
        {/* 2.aboutsection component which is commonly used in all pages */}   
        <AboutSection
        title="Meet Us"
        subtitle="Partner with Smarton"/>
        {/* 3.getintouchform component */}
        <GetInTouchForm 
        title="How we can"
        highlightText="help"
        />
        <DonorsPartners/>
        <PartnersSlider/>
        </main>
    );
}