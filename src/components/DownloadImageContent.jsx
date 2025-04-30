import Image from 'next/image';
import Link from 'next/link';
export default function DownloadImageContent(){
    return(
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 items-center justify-between gap-12">
                    {/* left image  */}
                    <div className="grid grid-cols-2 gap-6">
                        <div className="w-full">
                            <Image 
                            src="/images/productimg/image1.png"
                            alt="dowanloadappimage1"
                            width={300}
                            height={300}
                            className="rounded-lg"
                            />
                        </div>
                        <div className="w-full">
                            <Image
                            src="/images/productimg/image2.png"
                            alt="downloadappimage2"
                            width={300}
                            height={300}
                            className="rounded-lg"
                            />
                        </div>
                    </div>
                    {/* right content  */}
                    <div className="w-full text-center rubik-font text-left">
                        <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">Download the Smarton app now!</h3>
                        <p className="text-gray-800 mb-8 fs-18 leading-[32px] w-[400px]">A complete toolbox to experience the world around you.</p>
                        <div className="flex flex-wrap justify-center md:justify-start gap-4 ">
                            <Link href="" className="w-40">
                            <Image 
                            src="/images/productimg/app-store-white.svg"
                            alt="Download on app store"
                            width={180} 
                            height={50}
                            className="rounded shadow-lg pointer"/>
                            </Link>
                            <Link href="https://play.google.com/store/apps/details?id=com.smarton.sunbots&pcampaignid=web_share"
                            className="w-40">
                            <Image
                            src="/images/productimg/play-store-white.svg"
                            alt="play store image"
                            width={180}
                            height={50}
                            className="rounded shadow-lg pointer"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </section>
      
    );
}