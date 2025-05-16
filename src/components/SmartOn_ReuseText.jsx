// 4.SmartOn_ReuseText.jsx 
import AosEffect from "./AosEffect";//this is the animation effect component

export default function SmartOn_ReuseText({ title, description }) {
  return (
    <section>
      <AosEffect/>
    <div className="text-center max-w-full mx-auto py-12" data-aos="fade-up">
      <span className="font-manrope text-[#ED5428] uppercase text-[17px] tracking-widest block mb-1 font-semibold">
        {title}
      </span>
      <h2 className="JakartaSans-font text-[45px] font-semibold text-gray-800 tracking-[-1px] leading-tight max-w-md mx-auto">
        {description}
      </h2>
    </div>
    </section>
  );
}
