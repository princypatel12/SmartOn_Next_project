// product page.js 
import AboutSection from "@/components/AboutSection";
import DownloadAppSection from "@/components/DownloadAppSection";
import DownloadImageContent from "@/components/DownloadImageContent";
import ProductCardSection from "@/components/ProductCardSection";

export default function ProductPage(){
    return(
        <main className="pt-15"> 
        {/* 2.aboutsection component which is commonly used in all pages */}
        <AboutSection
        title="Our Mobile Application"
        subtitle="Explore the world of SMARTON opportunities"/>
        {/* 3.productcatdsection component */}
        <ProductCardSection/>
        {/* 4.downloadappsection component */}
        <DownloadAppSection/>
        {/* 5.downloadimagecontent component  */}
        <DownloadImageContent/>
        </main>
    );
}