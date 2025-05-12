import Link from 'next/link';
import FooterPolicyReuseSection from './FooterPolicyReuseSection';

export default function CancellationRefundPolicy(){
    return(
    <section className="max-w-3xl mx-auto px-4 py-10 text-sm sm:text-base text-gray-900">
      <h1 className="font-bold mb-2 text-center privacy-title rubik-font">Cancellation and Refund Policy</h1>
      <p className="text-center text-gray-500 mb-8 fs-14">Last updated at: 08/04/2024</p>

      <FooterPolicyReuseSection title="Introduction">
        <p>
          At Smarton, we are committed to ensuring the satisfaction and happiness of our customers. The following Cancellation and Refund Policy outlines the terms under which purchases of Smarton glasses and subscriptions to our mobile application may be canceled and/or refunded.
        </p>
      </FooterPolicyReuseSection>

      <FooterPolicyReuseSection title="Cancellation Policy">
        <ul className="list-disc pl-5 space-y-3 marker:text-[#ff5500] fs-17 text-gray-800">
          <li><strong>Pre-Shipment Cancellations: </strong>Customers may cancel their order at no charge before it has been shipped. To cancel an order, please contact our customer support team with your order details.</li>
          <li><strong>Post-Shipment Cancellations:  </strong>Once an order has been shipped, it cannot be canceled. However, customers may choose to return the product according to the Return Policy outlined below.</li>
        </ul>
      </FooterPolicyReuseSection>

      <FooterPolicyReuseSection title="How We Use Your Information">
        <p className="mb-4">We further elaborate on the use of your information to include: </p>
        <ul className="list-disc pl-5 space-y-3 marker:text-[#ff5500] fs-17 text-gray-800">
          <li><strong>Customizing Educational Content:</strong>Leveraging AI Tutor capabilities to tailor educational assistance according to your queries and interaction history.</li>
          <li><strong>Document Interaction: </strong>Utilizing Doc AI to create summaries of documents you interact with and to answer related questions based on these summaries.</li>
        </ul>
      </FooterPolicyReuseSection>

      <FooterPolicyReuseSection title="Return Policy">
        <p className="mb-4">Customers have 30 days from the date of delivery to return the Smarton glasses for any reason.</p>
        <p classname="space-y-3"><strong>To be eligible for a return:</strong> the product must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging. You’ll also need the receipt or proof of purchase.</p>
        <p><strong>Customers are responsible for the return shipping costs: </strong>unless the return is due to a defect or incorrect product received.</p>
      </FooterPolicyReuseSection>

      <FooterPolicyReuseSection title="Refund Policy">
        <ul className="list-disc marker:text-[#ff5500] pl-5 space-y-3 fs-17 text-gray-800">
          <li><strong>Product Refunds: </strong>Upon receipt and inspection of the returned product, we will notify you of the approval or rejection of your refund. If approved, the refund will be processed, and a credit will automatically be applied to your original method of payment, within a certain number of days.</li>
          <li><strong>Subscription Refunds:</strong>For subscription services, customers may cancel their subscription at any time. A prorated refund will be issued for the unused portion of the service, where applicable.</li>
          <li><strong>Defective or Incorrect Products:</strong>If you received a defective or incorrect product, please contact us immediately to arrange a replacement or refund at no additional cost to you.</li>
        </ul>
      </FooterPolicyReuseSection>

      <FooterPolicyReuseSection title="Exceptions / Non-Returnable Items">
        <p className="mb-4">Certain types of items cannot be returned, such as custom products (such as special orders or personalized items). Please get in touch if you have questions or concerns about your specific item.</p>
      </FooterPolicyReuseSection>

      <FooterPolicyReuseSection title="Exchanges">
        <p className="mb-4">The fastest way to ensure you get what you want is to return the item you have, and once the return is accepted, make a separate purchase for the new item. </p>
      </FooterPolicyReuseSection>

      <FooterPolicyReuseSection title="Contact Us">
        <p lassName="mb-4">For more information about our cancellation and refund policy, if you have questions, or if you would like to make a complaint, please contact us by email at<Link href="mailto:support@sunbots.in" className="text-[#ff5500] font-bold hover:underline">support@sunbots.in</Link>.</p>
      </FooterPolicyReuseSection>
    </section>
    )
}