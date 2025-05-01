import AboutSection from "@/components/AboutSection";
import AddressSection from "@/components/AddressSection";
import GetInTouchForm from "@/components/GetInTouchForm";

export default function ContactUsPage(){
    return(
    <main className="pt-17">
        <AboutSection
        title="Contact us"
        subtitle="Get in touch with our Team"/>
        <AddressSection/>
        <GetInTouchForm
         title="How we can"
         highlightText="help"/>
    </main>
  );
}