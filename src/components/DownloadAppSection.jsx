// 'use client';
// import { useEffect } from "react";
// import AOS from 'aos';
// import 'aos/dist/aos.css'

import AosEffect from "./AosEffect";

const steps=[
    {
        number:'01',
        title:'Universal Document Access:',
        description:'Auditory access to physical documents, digital files and previously inaccessible images.'
    },
    {
        number:'02',
        title:'"Anything" Functionality:',
        description:'Interactive questioning of scanned content for detailed auditory responses.'
    },
    {
        number:'03',
        title:'Independent Information Retrieval',
        description:'The user is able to scan material,and then ask questions about that material,for independent learning.'
    },
];
export default function DownloadAppSection(){
    // useEffect(()=>{
    //     AOS.init({
    //         duration:800,
    //         once:true
    //     });
    // },[]);
    return(
        <section className="relative z-10 md:py-12 px-4 md:px-8 bg-white flex justify-end">
            <AosEffect/>
            <div className="text-start w-[450px]">
            <div className="inline-block bg-[#D63E13s] text-white text-[12px] font-semibold uppercase rounded-full px-3 py-1 mb-4">
                How it works
            </div>
            <h3 className="text-3xl rubik-font sm:text-3xl font-bold text-gray-800 mb-10 ">
            Search 'Smarton' on the play store, and download the app, and after registering you will get:
            </h3>
            <div className="space-y-8">
                {steps.map((step,index)=>(
                    <div
                    key={index}
                    className="flex items-start gap-4"
                    data-aos="fade-up"
                    data-aos-delay={index * 200}
                    >
                    {/* steps  */}
                    <div className="relative">
                        <div className="w-12 h-12 bg-[#FFFFFF] hover:bg-[#ED5428] text-gray-800 flex items-center justify-center relative z-10 text-sm border-radius">
                            {step.number}
                        </div>
                        {index !==steps.length - 1 &&(
                            <div className="absolute top-14 left-1/2 transform -translate-x-1/2 h-12 w-0.5 bg-gray-200"></div>
                        )}
                    </div>
                    {/* content  */}
                    <div className="text-left rubik-font">
                        <h4 className="fs-18 font-bold text-black-900 mb-1">
                            {step.title}
                        </h4>
                        <p className="fs-17 text-black-600 max-w-md">
                            {step.description}
                        </p>
                    </div>

                    </div>
                ))}

            </div>
            </div>
        </section>

    );
}