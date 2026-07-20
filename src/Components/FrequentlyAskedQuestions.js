import React, { useEffect } from "react";
import { brandName, emailAddress, phoneNumber } from "../Data/BrandData";
import { Helmet } from "react-helmet";

// Array of FAQs
export const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We provide a range of services including web development, website maintenance, web hosting, and business website solutions.",
  },
  {
    question: "How long does a project take?",
    answer:
      "The project timeframe varies according on complexity, however it typically spans from 2 to 6 weeks.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes, we provide continuous support and maintenance for all of our projects.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We use current web technologies such as React.js, Node.js, Express, and MongoDB to create scalable apps.",
  },
  {
    question: "Can you help with SEO?",
    answer:
      "Absolutely! We provide SEO services to assist boost your website's exposure in search engines.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "Our price is tailored to the individual demands of each project, ensuring that you receive the best value.",
  },
  {
    question: "Do you work with small businesses?",
    answer:
      "Yes, we specialize in offering bespoke solutions to small and medium-sized organizations.",
  },
  {
    question: "How can I get a quote?",
    answer:
      "You can contact us through our website, and we will give you an estimate depending on your specifications.",
  },
  {
    question: "Is a deposit required to start?",
    answer:
      "Yes, we demand a deposit before beginning any job to cover the initial charges.",
  },
  {
    question: "What if I need to make changes during the project?",
    answer:
      "We appreciate comments and are willing to make changes as necessary during the project.",
  },
  {
    question: `What services does ${brandName} offer?`,
    answer:
      "We provide website creation, design, hosting, and maintenance services.",
  },
  {
    question: `How can I contact ${brandName}?`,
    answer: `You may reach us by email at ${emailAddress} or phone at ${phoneNumber}.`,
  },
  {
    question: "What is the typical turnaround time for a project?",
    answer:
      "The turnaround time depends with the project size. Most modest tasks take two to four weeks.",
  },
  {
    question: "What platforms do you work with?",
    answer:
      "We specialize on MERN Stack development, but we also work on WordPress, Shopify, and bespoke platforms.",
  },
  {
    question: "Do you provide ongoing website maintenance?",
    answer:
      "Yes, we provide continuous website maintenance services to keep your site up to date.",
  },
  {
    question: "Do you provide website hosting?",
    answer:
      "Yes, we offer both website hosting and domain registration services.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely! We provide comprehensive redesign services to improve the operation and appearance of your existing website.",
  },
  {
    question: "Do you offer SEO services?",
    answer:
      "Yes, we provide basic SEO optimization for the websites we create.",
  },
  {
    question: `How do I start a project with ${brandName}?`,
    answer:
      "Simply fill out our form, and we'll set up a session to better understand your project requirements.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major Payments.",
  },
  {
    question: "Do you provide eCommerce solutions?",
    answer:
      "Yes, we design completely working eCommerce websites that are suited to your specific business needs.",
  },
  {
    question: "Can I update my website after it’s built?",
    answer:
      "Yes, we can either handle updates for you or give training so you can administer the site yourself.",
  },
  {
    question: "What’s the difference between a static and dynamic website?",
    answer:
      "A static website has fixed material, but a dynamic website may display updated and interactive content.",
  },
  {
    question: "Can you help me with branding and design?",
    answer:
      "Yes, we provide design services for logos, branding, and marketing materials.",
  },
  {
    question: `Is my website secure with ${brandName}?`,
    answer:
      "We employ industry-standard security methods to protect your website and user data.",
  },
  {
    question: "Do you offer mobile app development?",
    answer:
      "We now specialize on online development, however we can link you with reliable mobile app partners.",
  },
  {
    question: "What is your refund and cancellation policy?",
    answer:
      "Our policy is detailed in the Refund and Cancellation section. Refunds are often given within two days after the project's launch.",
  },
  {
    question: "Do you provide content for the website?",
    answer:
      "Yes, we provide article writing services, or you may supply your own material.",
  },
  {
    question: "Do I own the rights to my website once it’s completed?",
    answer:
      "Yes, after the project is done and full payment is received, the website is completely yours.",
  },
  {
    question: "How long have you been in business?",
    answer: `${brandName} has offered web development services since 2024.`,
  },
];

const FrequentlyAskedQuestions = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);


  return (
    <section className="faqs-section">
      <Helmet>
        <title>
          FAQs – NexGen Web Designs | Web Design & Development Support in
          Hyderabad & Andhra Pradesh
        </title>
        <meta
          name="description"
          content="Have questions about our web design and development services? Find answers to the most common FAQs about pricing, timelines, SEO, support, and more at NexGen Web Designs—serving Hyderabad and Andhra Pradesh."
        />
        <meta
          name="keywords"
          content="web design FAQs Hyderabad, website development questions Andhra Pradesh, NexGen Web Designs support, SEO help Hyderabad, pricing for web design AP, web development service queries, responsive website FAQ, Hyderabad website maintenance support"
        />
      </Helmet>

      <div className="faqs-main-background d-flex align-items-center justify-content-center ">
        <h2 className="text-center section-heading text-white">
          Frequently Asked Questions
        </h2>
      </div>
      <div className="container py-5">
        <div className="accordion" id="faqAccordion">
          {faqs.slice(11).map((faq, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded="false"
                  aria-controls={`collapse${index}`}
                  style={{ backgroundColor: "transparent", color: "#000" }}
                >
                  <i
                    className="fa-solid fa-angles-right me-2 position-absolute me-3"
                    style={{ top: "0.8rem" }}
                  ></i>{" "}
                  <span className="" style={{ marginLeft: "1.5rem" }}>
                    {faq.question}
                  </span>
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading${index}`}
                data-bs-parent="#faqAccordion"
              >
                <p className="accordion-body">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;
