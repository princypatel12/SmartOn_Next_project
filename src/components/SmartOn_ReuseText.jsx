export default function SectionHeading({title,description }) {
    return (
      <div className="text-center max-w-4xl mx-auto px-4 py-12">
        <span className="font-manrope text-[#ED5428] uppercase text-[17px] font-semibold tracking-widest block mb-1">
          {title}
        </span>
        <h2 className="text-base sm:text-2xl md:text-3xl font-semibold text-gray-900 leading-tight max-w-md mx-auto shadow-none shadow-in" data-shadow-animation="true" data-animation-delay="1000">
          {description}
        </h2>
      </div>
    );
  }
  