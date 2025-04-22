import ImageCards from './ImageCards';

const cardData = [
  {
    imageSrc: "/images/ImageCards/app_image.png",
    title: "AI-enabled Assistive App",
    description: "A smart application that recognizes and interprets visual information while providing real-time auditory feedback to enhance user experience.",
  },
  {
    imageSrc: "/images/ImageCards/app_image.png",
    title: "Seamless Two-Way Communication",
    description: "Designed to facilitate smooth interaction, allowing users to receive and respond to information effortlessly, improving accessibility and independence.",
  },
  {
    imageSrc: "/images/ImageCards/app_image.png",
    title: "Smart Glass Attachment",
    description: "An innovative add-on that enhances visual and auditory assistance, enabling better navigation, text reading, and real-world interaction.",
  },
];

export default function CardSection() {
  return (
    <section className="pb-6 px-6">
      <div className="flex flex-wrap justify-start">
        {cardData.map((card, index) => (
          <ImageCards
            key={index}
            imageSrc={card.imageSrc}
            title={card.title}
            description={card.description}
            delay={index * 200}
          />
        ))}
      </div>
    </section>
  );
}
