import React from 'react';
//children is reserved prop 
export default function FooterPolicyReuseSection({ title, children }){
  return(
  <section className="mb-8 rubik-font">
    <h2 className="text-xl font-semibold mb-2 text-gray-800 privacy-heading mb-6">{title}</h2>
    <div className="text-gray-600 space-y-2 text-justify fs-16">{children}</div>
  </section>
);
};
