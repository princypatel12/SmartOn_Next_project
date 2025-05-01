'use client';
import HighlightText from './HighlightText';
import {useState} from 'react';
export default function GetInTouchForm({title,highlightText}){
    const[formData,setFormData]=useState({
        name:'',
        email:'',
        phone:'',
        subject:'',
        comment:'',
    });
    const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You would typically send `formData` to your backend API here
    console.log('Submitted:', formData);
    setSubmitted(true);
  };

    
    return(
        <section id="down-section" className="py-12 px-4 max-w-2xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="uppercase text-sm font-semibold tracking-wider text-gray-500">
        Feel free to get in touch!
        </span>
        <HighlightText title={title} highlight={highlightText} />
        </div>
        <div className="w-full flex justify-center">
            <div className="w-full max-w-3xl">
                <form action=""  onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 rubik-font fs-16">
                    <input className="form-input border border-sm rounded p-3" type="text" name="name"placeholder="Your name*" value={formData.name} onChange={handleChange} required/>
                    <input className="form-input border border-sm rounded p-3" type="email" name="email" placeholder="Your email address*" value={formData.email} onChange={handleChange} required/>
                    <input className="form-input border border-sm rounded p-3" type="phone" name="phone" placeholder="Your phone" value={formData.phone} onChange={handleChange}/>
                    <input className="form-input border border-sm rounded p-3" type="text" name="subject" placeholder="Your subject" value={formData.subject} onChange={handleChange}/>
                    </form>
                    <div className="mt-6 ">
                    <textarea className="form-textarea border border-sm p-3 rounded md:col-span-2 rubik-font fs-16" rows="4"cols="96" name="comment" placeholder="Your message" value={formData.comment} onChange={handleChange}/>
                    </div>
                    <div className="grid grid-cols-2 mt-2">
                    <div className="md:col-span-1 w-[400px] text-sm text-[15px] leading-5 rubik-font inline-block">
            We are committed to protecting your privacy. We will never collect
            information about you without your explicit consent.
            </div>
            <div className="md:col-span-1 text-center md:text-right">
            <button
              type="submit"
              className="px-5 py-3 rounded bg-[#ED5428] text-[15px] text-white font-semibold shadow-md hover:shadow-lg transition"
            >
              Send message
            </button>
          </div>
          
          </div>
         
          {submitted && (
            <div className="col-span-2 text-green-600 font-medium mt-4 text-center">
              Message sent successfully!
            </div>
          )}
                
            </div>
        </div>

        
        </section>

      
    );
}