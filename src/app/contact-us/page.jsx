// contactus page.jsx
import AboutSection from "@/components/AboutSection";
import AddressSection from "@/components/AddressSection";
import GetInTouchForm from "@/components/GetInTouchForm";
import LocationMapSection from "@/components/LocationMapSection";

export default function ContactUsPage(){
    return(
    <main className="pt-15">
       {/* 2.aboutsection component which is commonly used in all pages */}  
        <AboutSection
        title="Contact us"
        subtitle="Get in touch with our Team"/>
        {/* 3.addresssection component */}
        <AddressSection/>
        {/* 4.getintouchform component */}
        <GetInTouchForm
         title="How we can"
         highlightText="help"/>
         <LocationMapSection/>
    </main>
  );
}