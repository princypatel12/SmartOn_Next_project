import AboutSection from "@/components/AboutSection";
import DownloadAppSection from "@/components/DownloadAppSection";
import DownloadImageContent from "@/components/DownloadImageContent";
import ProductCardSection from "@/components/ProductCardSection";

export default function ProductPage(){
    return(
        <main className="pt-15"> 
        <AboutSection
        title="Our Mobile Application"
        subtitle="Explore the world of SMARTON opportunities"/>
        <ProductCardSection/>
        <DownloadAppSection/>
        <DownloadImageContent/>
        </main>
    )
}