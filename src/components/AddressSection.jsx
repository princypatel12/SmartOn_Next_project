import Link from 'next/link';
// import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';



export default function AddressSection(){
    const addressData=[
        {
            // icon:<FaMapMarkerAlt className="text-4xl text-[#ED5428] mb-3" />,
            title:"Registered Office",
            description:"13, Hariharashray Bungalows 1, Near Baghban Party Plot, 100ft road, Thaltej, Ahmedabad, Gujarat, 380 059",
            // btnLink:"#location",
            // btnText:"Location map",
        },
        {
            // icon:<FaPhoneAlt className="text-4xl text-[#ED5428] mb-3" />,
            title:"Let's talk with us",
            description:"Phone: +91 9104156317",
            // btnLink:"tel:+919104156317",
            // btnText:"Talk with us",
        },
        {
            // icon:<FaEnvelope className="text-4xl text-[#ED5428] mb-3" />,
            title:"Need live support?",
            description:"Committed staff members are ready to help you.",
            // btnLink:"mailto:support@sunbots.in",
            // btnText:"Support desk",
        },
    ];
    return(
        <section id="down-section" className="py-14 bg-white rubik-font flex justify-center items-center bg-color">
            <div className="container grid grid-cols-1 md:grid-cols-3 gap-7">
                {addressData.map((card,index) => (
                    <div key={index}
                    className="group perspective">
                        <div className="transition-transform duration-700 group-hover:rotate-y-180">
                            <div className="h-[250px] backface-hidden bg-white rounded shadow flex flex-col items-center justify-center text-center">
                                <i className={`${card.icon} text-4xl text-[#ED5428] mb-3`} />
                                <h3 className="fs-17 font-semibold mb-2">{card.title}</h3>
                                <p className="fs-14 mx-auto">{card.description}</p>
                            </div>
                            {/* <div className="inset-0 rounded"/>
                            <div className="z-10 flex items-center justify-center">
                                <Link 
                                href={card.btnLink}
                                className="bg-[#ED5428]">
                                    {card.btnText}
                                </Link>
                            </div> */}
                        </div>
                    </div>
                ))}
            </div>
        </section>

    );
}