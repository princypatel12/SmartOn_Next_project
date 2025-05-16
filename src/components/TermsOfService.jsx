// this is the terms of service page
import Link from 'next/link';
import FooterPolicyReuseSection from './FooterPolicyReuseSection';//this is for all the footer privacypolicy section comman component
export default function TermsOfService(){
    return(
       <section className="max-w-3xl mx-auto px-4 py-10 text-sm sm:text-base text-gray-900">
      <h1 className="font-bold mb-2 text-center privacy-title rubik-font">Terms of Service</h1>
      <p className="text-center text-gray-500 mb-8 fs-14">Last updated at: 08/04/2024</p>

      <FooterPolicyReuseSection title="Introduction">
        <p>
          Welcome to Smarton by Sunbots Innovations LLP ("Sunbots," "we," "us," "our"), your premier destination for innovative wearable technology. This document, the Terms of Service ("Terms"), governs your access and use of Smarton's website (www.getsmartonai.com), our corporate website (www.sunbots.in), the Smarton wearable device ("Product"), and all associated services (collectively, "Service"). These Terms form a binding legal agreement between you, the user, and Sunbots.
        </p>
      </FooterPolicyReuseSection>

      <FooterPolicyReuseSection title="Acceptance of Terms">
        <p className="mb-4">IBy accessing or utilizing the Service, you confirm that you have read, understood, and agree to these Terms, including any additional policies and future amendments. If at any point you disagree with any part of these Terms, you must immediately cease using the Service.
        </p>
        </FooterPolicyReuseSection>

      <FooterPolicyReuseSection title="Purpose">
        <p className="mb-4">These Terms aim to clarify the rights and obligations of both Sunbots and you, the user, to ensure a seamless and secure experience. Our commitment is to provide top-quality service while adhering to legal and regulatory standards.</p>
      </FooterPolicyReuseSection>

      <FooterPolicyReuseSection title="User Rights and Responsibilities">
        <ul className="list-disc marker:text-[#ff5500] pl-5 space-y-3 fs-17 text-gray-800">
          <li><strong>Access Rights: </strong>You are granted a non-exclusive, non-transferable right to use the Service for your personal, non-commercial use, strictly in line with these Terms.</li>
          <li><strong>Usage Restrictions: </strong>The Service may not be used for any illegal purposes, to solicit illegal activities, or to breach any local, national, or international laws and regulations.</li>
          <li><strong>Content Conduct: </strong>You agree not to submit or transmit any content that violates laws, rights, or is otherwise harmful, offensive, or inappropriate. You are responsible for any content you provide.</li>
          <li><strong>Account Integrity: </strong>You must maintain the accuracy of your account information and safeguard your account password. You are solely responsible for all activities under your account.</li>
        </ul>
        </FooterPolicyReuseSection>

      <FooterPolicyReuseSection title="Intellectual Property">
        <p className="mb-4">The Service, including all intellectual property therein, is the exclusive property of Sunbots and its licensors. You may not use our trademarks, service marks, or copyrighted material without our prior written consent.</p>
      </FooterPolicyReuseSection>

      <FooterPolicyReuseSection title="Pricing and Payments">
        <ul className="list-disc marker:text-[#ff5500] pl-5 space-y-3 fs-17 text-gray-800">
          <li><strong>Fees:  </strong>Pricing for our Products and subscriptions is detailed on our websites. Prices are subject to change, but such changes will not affect orders already accepted.</li>
          <li><strong>Payment Methods: </strong>We accept various payment methods. You agree to provide accurate payment information and understand that failure to do so may result in service interruption.</li>
          <li><strong>Refunds and Cancellations:</strong>Our refund and cancellation policies are provided with the purchase terms. You agree to these terms upon making a purchase.</li>
        </ul>
        </FooterPolicyReuseSection>

      <FooterPolicyReuseSection title="Liabilities and Disclaimers">
        <p className="mb-4">The Service is provided "AS IS" without warranties of any kind. Sunbots is not liable for interruptions, data loss, or any damages resulting from the use of the Service. We do not guarantee the accuracy, reliability, or timeliness of any information on the Service. </p>
      </FooterPolicyReuseSection>


     <FooterPolicyReuseSection title="Privacy and Data Handling">
        <p className="mb-4">We value your privacy. Our Privacy Policy outlines our data collection, use, and protection practices. Your use of the Service signifies your consent to these practices.</p>
      </FooterPolicyReuseSection>

       <FooterPolicyReuseSection title="Dispute Resolution">
        <p className="mb-4">Should disputes arise, you agree to contact us directly for resolution. Unresolved disputes may be subject to mediation or legal action, as appropriate.</p>
      </FooterPolicyReuseSection>

       <FooterPolicyReuseSection title="Termination">
        <p className="mb-4">Sunbots reserves the right to terminate your access to the Service for any breach of these Terms. Upon termination, certain provisions of these Terms shall remain in effect.</p>
      </FooterPolicyReuseSection>

       <FooterPolicyReuseSection title="Modifications to Terms">
        <p className="mb-4">We may modify these Terms at our discretion. Material changes will be communicated to you in advance. Continuing to use the Service after such changes constitutes your acceptance of the new Terms.</p>
      </FooterPolicyReuseSection>
      
      <FooterPolicyReuseSection title="Contact Us">
        <p className="mb-4">For questions about these Terms, please contact us at<Link href="mailto:support@sunbots.in" className="text-[#D63E13] font-bold hover:underline">support@sunbots.in</Link></p>
      </FooterPolicyReuseSection>
    </section>
    );
}