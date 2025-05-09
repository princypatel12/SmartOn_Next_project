"use client";
import React from 'react';
import Image from 'next/image';
import HighlightText from './HighlightText';

export default function ImageContentSection({imageSrc,title,highlightText,content}){
    return(
        <section id="down-section" className="md:py-16 py-6">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* left image section  */}
                <div className="relative w-full md:mt-16">
        
                <Image 
                 src={imageSrc}
                 alt="Frame 1 image"
                 width={800}
                 height={500}
                 className="w-full rounded"
                />
                
                </div>
                {/* right content text  */}
                <div className="md:w-[400px] w-full md:px-0 md:pl-12">
                <HighlightText
                 title={title}
                 highlight={highlightText}
                 customstyle="md:text-left text-center md:w-[350px] w-full"
                 /> 
                <p className="mt-6 md:px-0 md:text-justify text-center fs-17 rubik-font leading-7 md:w-[400px] w-full">{content}</p>

                </div>
            </div>
        </section>
    );
}