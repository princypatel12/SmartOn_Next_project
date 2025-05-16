// partnerwithsmarton page and contact us page 
// partnerwithsmarton page 
// 3.getintouch.jsx
// contactus page 
// 4.getintouch.jsx
'use client';
import HighlightText from './HighlightText';
import {useState} from 'react';
import Button from './Button';
// import Link from 'next/link';

export default function GetInTouchForm({title,highlightText}){
    const[formData,setFormData]=useState({
        name:'',
        email:'',
        phone:'',
        subject:'',
        comment:'',
    });
    const [submitted, setSubmitted] = useState(false);
  // this triggers when user type any thing in the form 
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();//stop to reloading page
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
              {/* form section  */}
                <form action=""  onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 rubik-font fs-16">
                    <input className="form-input border border-sm rounded p-3" type="text" name="name"placeholder="Your name*" value={formData.name} onChange={handleChange} required/>
                    <input className="form-input border border-sm rounded p-3" type="email" name="email" placeholder="Your email address*" value={formData.email} onChange={handleChange} required/>
                    <input className="form-input border border-sm rounded p-3" type="phone" name="phone" placeholder="Your phone" value={formData.phone} onChange={handleChange}/>
                    <input className="form-input border border-sm rounded p-3" type="text" name="subject" placeholder="Your subject" value={formData.subject} onChange={handleChange}/>
                    <textarea
                    className="form-textarea border border-sm p-3 rounded md:col-span-2 w-full"
                    rows="4"
                    name="comment"
                    placeholder="Your message"
                    value={formData.comment}
                    onChange={handleChange}
                   />
                   <div className="md:col-span-1 text-sm text-[15px] leading-5 rubik-font">
            We are committed to protecting your privacy. We will never collect
            information about you without your explicit consent.
            </div>
            <div className="md:col-span-1 justify-center flex md:justify-end">
            {/* <button
              type="submit"
              className="px-5 py-3 rounded bg-[#D63E13] text-[16px] text-white shadow-md hover:shadow-lg transition"
            >
              Send message
            </button> */}
            <Button href="/" ariaLabel="Go to home page">
             Send message
            </Button>
            
          </div>
          
            {submitted && (
            <div className="col-span-2 text-green-600 font-medium mt-4 text-center">
              Message sent successfully!
            </div>
          )}
          </form>
        </div>
        </div>
        </section>
        );
}