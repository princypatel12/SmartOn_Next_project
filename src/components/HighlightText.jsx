// 9. HighlightText.jsx-->this is imported in CombinedComponent.jsx
export default function HighlightText({ title, highlight,customstyle='' }) {

    return (
      <div className={`text-center mb-2 mt-4 ${customstyle}`} data-aos="fade-up">
        {/* highlight title  */}
        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800">
          {title}{' '}
          {/* background line with content  */}
          <span className="font-extrabold relative">
            {highlight}
            <span className="highlight absolute bottom-[8px] left-0 w-full h-[8px] opacity-60 z-[-1]" />
          </span>
        </h3>
      </div>
    );
  }
  
