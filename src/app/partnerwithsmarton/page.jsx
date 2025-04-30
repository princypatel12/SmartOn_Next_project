import AboutSection from "@/components/AboutSection";
import DonorsPartners from "@/components/DonorsPartners";
import GetInTouchForm from "@/components/GetInTouchForm";
import PartnersSlider from "@/components/PartnersSlider";

export default function PartnerWithSmartonPage(){
    return(
        <main className="pt-17">
        <AboutSection
        title="Meet Us"
        subtitle="Partner with Smarton"/>
        <GetInTouchForm 
        title="How we can"
        highlightText="help"
        />
        <DonorsPartners/>
        <PartnersSlider/>
        </main>
    )
}