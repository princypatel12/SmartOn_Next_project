'use client';

import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const blogs = [
  {
    title: 'Hot New Smart Vision Glasses: The Future of Visual Assistance',
    date: 'JAN 23, 2025',
  },
  {
    title: 'Game-Changing AI Smart Glasses for the Visually Impaired',
    date: 'OCT 01, 2024',
  },
  {
    title: 'Must-Have Devices for Low Vision: Boosting Independence for all',
    date: 'SEP 30, 2024',
  },
];

export default function LatestBlogs(){
  useEffect(() => {
      AOS.init({ duration: 800, once: true });
    }, []);
  return (
    <section className="py-16 px-11 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Latest Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-[#fb7a53] rounded-md p-8 text-left text-white shadow-lg hover:shadow-xl transition-shadow duration-500 ease-in-out group relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              {/* Title */}
              <h3 className="font-semibold fs-18 mt-6 mb-6 leading-snug text-gray-900">
                {blog.title}
              </h3>
              <div className="h-3.5 relative overflow-hidden">
                {/* Date */}
                <span className="fs-14 text-left absolute inset-0 flex text-white font-semibold text-sm transition-all duration-900 ease-in-out group-hover:-translate-y-full group-hover:opacity-0">
                  {blog.date}
                </span>

                {/* Read More */}
                <span className="fs-14 text-left absolute inset-0 flex text-white font-semibold text-sm translate-y-full opacity-0 transition-all duration-900 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 hover:text-[#000000] underline">
                  READ MORE
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


