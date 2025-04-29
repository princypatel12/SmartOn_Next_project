"use client";
import React from 'react';
import Image from 'next/image';
import HighlightText from './HighlightText';

export default function ImageContentSection({imageSrc,title,highlightText,content}){
    return(
        <section id="down-section" className="py-16">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* left image section  */}
                <div className="w-full mt-4">
                <Image 
                 src={imageSrc}
                 alt="Frame 1 image"
                 width={800}
                 height={500}
                 className="w-full rounded"
                />
                </div>
                {/* right content text  */}
                <div className="w-[400px]">
                <HighlightText
                 title={title}
                 highlight={highlightText}
                 customstyle="text-left ml-9"
                 /> 
                <p className="mt-6 ml-9 fs-17 rubik-font leading-7">{content}</p>
                </div>
            </div>
        </section>
    );
}