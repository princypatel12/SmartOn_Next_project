import  Link  from 'next/link';
import FooterPolicyReuseSection from './FooterPolicyReuseSection';

export default function PrivacyPolicy(){
  return (
    <section className="max-w-3xl mx-auto px-4 py-10 text-sm sm:text-base text-gray-900">
      <h1 className="font-bold mb-2 text-center privacy-title rubik-font">Privacy Policy</h1>
      <p className="text-center text-gray-500 mb-8 fs-14">Last updated at: 15/04/2024</p>

      <FooterPolicyReuseSection title="Introduction">
        <p>
          Sunbots Innovations LLP. ("we," "us," or "our") is dedicated to safeguarding your privacy. This Privacy Policy details our practices regarding the collection, use, disclosure, and protection of your personal information through your interaction with the Smarton AI-enabled smart assistive device ("Smarton") and its associated Android application (together, the "Services"). By engaging with the Services, you consent to the processing of your information as described in this policy.        
          </p>
      </FooterPolicyReuseSection>

      <FooterPolicyReuseSection title="Information We Collect">
        <p className="mb-4">In addition to personal, device, and usage information, and location data, we also collect: </p>
        <ul className="list-disc pl-5 space-y-3 marker:text-[#ff5500] fs-17 text-gray-800">
          <li><strong>Interaction Data: </strong>Queries and commands inputted into Smarton, including educational requests and document summaries.</li>
          <li><strong>Gesture Data: </strong>Information related to the gestures used to interact with Smarton's features.</li>
        </ul>
      </FooterPolicyReuseSection>

      <FooterPolicyReuseSection title="How We Use Your Information">
        <p className="mb-4">We further elaborate on the use of your information to include: </p>
        <ul className="list-disc pl-5 space-y-3 marker:text-[#ff5500] fs-17 text-gray-800">
          <li><strong>Customizing Educational Content:</strong>Leveraging AI Tutor capabilities to tailor educational assistance according to your queries and interaction history.</li>
          <li><strong>Document Interaction: </strong>Utilizing Doc AI to create summaries of documents you interact with and to answer related questions based on these summaries.</li>
        </ul>
      </FooterPolicyReuseSection>

      <FooterPolicyReuseSection title="Disclosure of Your Information">
        <p className="mb-4">Clarifications are added to ensure transparency about third-party data sharing: </p>
        <p className="space-y-3"><strong>Anonymized Data Sharing: </strong> For the purpose of improving Smarton's functionalities, some non-personally identifiable information may be shared with research partners.</p>
        <p><strong>Compliance and Safety: </strong>Highlighting our commitment to disclose information when necessary for safety, compliance with legal obligations, or to protect our rights and those of our users.</p>
      </FooterPolicyReuseSection>

      <FooterPolicyReuseSection title="Your Rights">
        <p className="mb-4">We detail the rights you possess over your data, including: </p>
        <ul className="list-disc marker:text-[#ff5500] pl-5 space-y-3 fs-17 text-gray-800">
          <li><strong>Access, Correction, Deletion: </strong>You can request access to, correction of, or deletion of your personal information..</li>
          <li><strong>Data Portability: </strong>Where applicable, you have the right to be provided with your personal data in a structured, commonly used, and machine-readable format.</li>
          <li><strong>Objection & Restriction: </strong>You have the right to object to certain processing activities and to request restrictions on how your personal information is used.</li>
        </ul>
      </FooterPolicyReuseSection>

      <FooterPolicyReuseSection title="Data Security and Retention">
        <p className="mb-4">Enhancements are made to outline our data retention policy and security measures more precisely: </p>
        <p><strong>Retention Period: </strong>Clarification that personal information is retained only for as long as necessary for the purposes set out in this policy, plus any additional period as required by law or to resolve disputes.</p>
        <p><strong>Enhanced Measures: </strong>We detail the advanced security measures in place to protect your data against unauthorized access, including encryption and access controls.</p>
      </FooterPolicyReuseSection>

      <FooterPolicyReuseSection title="Changes to This Privacy Policy">
        <p className="mb-4">We specify the process for notifying users of policy updates to ensure clarity: </p>
        <p><strong>Notification of Changes: </strong>Users will be notified of significant changes to the Privacy Policy through email or a prominent notice within the Service, along with an updated effective date.</p>
      </FooterPolicyReuseSection>

      <FooterPolicyReuseSection title="Contact Us">
        <p lassName="mb-4">We invite users to contact us with any questions, concerns, or requests regarding their personal information <Link href="mailto:support@sunbots.in" className="text-[#ff5500] font-bold hover:underline">support@sunbots.in</Link>.</p>
        <p>This updated Privacy Policy is part of our commitment to transparency, compliance with global data protection laws, and dedication to safeguarding the privacy and security of our users' information.</p>
      </FooterPolicyReuseSection>
      <DataDeletionPolicy/>
    </section>
    
  );
};
// privacy policy section ends here 

// data deletion part starts here 
export function DataDeletionPolicy(){
    return(
       <section className="max-w-3xl mx-auto px-4 py-10 text-sm sm:text-base text-gray-900">
      <h1 className="font-bold mb-2 text-center privacy-title rubik-font">Data Deletion Policy</h1>
      <p className="text-center text-gray-500 mb-8 fs-14">Last updated at: 15/04/2024</p>

      <FooterPolicyReuseSection title="Introduction">
        <p>
          Sunbots Innovations LLP. ("we," "us," or "our") is dedicated to safeguarding your privacy. This Privacy Policy details our practices regarding the collection, use, disclosure, and protection of your personal information through your interaction with the Smarton AI-enabled smart assistive device ("Smarton") and its associated Android application (together, the "Services"). By engaging with the Services, you consent to the processing of your information as described in this policy.          </p>
      </FooterPolicyReuseSection>

      <FooterPolicyReuseSection title="Information We Collect">
        <p className="mb-4">In addition to personal, device, and usage information, and location data, we also collect: </p>
        <ul className="list-disc pl-5 space-y-3 marker:text-[#ff5500] fs-17 text-gray-800">
          <li><strong>Interaction Data: </strong>Queries and commands inputted into Smarton, including educational requests and document summaries.</li>
          <li><strong>Gesture Data: </strong>Information related to the gestures used to interact with Smarton's features.</li>
        </ul>
      </FooterPolicyReuseSection>

      <FooterPolicyReuseSection title="How We Use Your Information">
        <p className="mb-4">We further elaborate on the use of your information to include: </p>
        <ul className="list-disc pl-5 space-y-3 marker:text-[#ff5500] fs-17 text-gray-800">
          <li><strong>Customizing Educational Content:</strong>Leveraging AI Tutor capabilities to tailor educational assistance according to your queries and interaction history.</li>
          <li><strong>Document Interaction: </strong>Utilizing Doc AI to create summaries of documents you interact with and to answer related questions based on these summaries.</li>
        </ul>
      </FooterPolicyReuseSection>
      </section>
    );
};

