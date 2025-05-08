import ImageCards from '@/components/ImageCards';

const productCardData = [
{
    imageSrc: "/images/ImageCards/app_image.png",
    title: "Read Printed and Handwritten content",
    description: "SMARTON helps blind and visually impaired users read text from books, documents, and more, supporting professionals, students, and lifelong learning." 
},
{
    imageSrc: "/images/ImageCards/app_image.png",
    title: "Identify Products",
    description: "SMARTON captures product labels, extracts text, and reads details aloud, helping users make informed choices. This is a very handy feature for the real world." 
},
{
    imageSrc: "/images/ImageCards/app_image.png",
    title: "Verified Cash Transaction",
    description: "SMARTON's currency recognition detects denominations using image analysis, empowering visually impaired users to manage money independently and confidently."  
},
];

export default function ProductCardSection() {
  return( 
    <section id="down-section">
        <ImageCards cardsData={productCardData} 
    />
  </section>
  );
}
