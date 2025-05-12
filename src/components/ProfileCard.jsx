import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';

export default function ProfileCard({ name, role, image, linkedin, index }) {
  return (
    <div
      className="text-center"
      data-aos="fade-up"
      data-aos-delay={index * 200}
    >
      <div className="overflow-hidden shadow-md bg-white group transition-all duration-300">
        <Image
          src={image}
          alt={name}
          width={300}
          height={300}
          className="w-full h-[300px] object-cover"
        />
        <div className="p-4">
          <div className="transition-transform duration-300 group-hover:-translate-y-1">
            <h4 className="font-bold text-[19px] text-gray-800">{name}</h4>
            <p className="uppercase text-[16px] text-gray-700">{role}</p>
          </div>
          {linkedin && (
            <div className="mt-2 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2">
              <Link
                href={linkedin}
                target="_blank"
                className="inline-block text-black-600 hover:text-black-800"
              >
                <FaLinkedin size={20} />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
