import { emailAddress, phoneNumber, whatsappSupportLink } from "../BrandData";

export const supportCards = [
  {
    icon: "fa-brands fa-whatsapp",
    title: "Live WhatsApp",
    text: "Average reply in under 10 minutes",
    color: "#25D366",
  },
  {
    icon: "fa-solid fa-headset",
    title: "Premium Support",
    text: "Technical & business assistance",
    color: "#6C63FF",
  },
  {
    icon: "fa-solid fa-phone-volume",
    title: "Call Support",
    text: phoneNumber,
    color: "#00B8D9",
  },
];

export const quickActions = [
  {
    icon: "fa-brands fa-whatsapp",
    title: "Chat on WhatsApp",
    desc: "Fastest way to contact us",
    link: whatsappSupportLink,
  },
  {
    icon: "fa-solid fa-phone",
    title: "Request a Call",
    desc: "We'll call you back",
    link: `tel:${phoneNumber}`,
  },
  {
    icon: "fa-solid fa-envelope",
    title: "Email Support",
    desc: "Business enquiries",
    link: `mailto:${emailAddress}`,
  },
  {
    icon: "fa-solid fa-calendar-days",
    title: "Book a Meeting",
    desc: "Schedule consultation",
  },
];

export const supportServices = [
  {
    icon: "fa-solid fa-laptop-code",
    title: "New Website",
    desc: "Need a modern website for your business or startup?",
    badge: "Most Popular",
  },
  {
    icon: "fa-solid fa-screwdriver-wrench",
    title: "Website Maintenance",
    desc: "Fix bugs, update content and keep your website secure.",
    badge: "24/7",
  },
  {
    icon: "fa-solid fa-server",
    title: "Hosting & Domain",
    desc: "Need help with hosting, domains or SSL certificates?",
    badge: "Support",
  },
  {
    icon: "fa-solid fa-mobile-screen-button",
    title: "Website Redesign",
    desc: "Transform your old website into a premium experience.",
    badge: "Trending",
  },
  {
    icon: "fa-solid fa-chart-line",
    title: "SEO Optimization",
    desc: "Improve search rankings and website performance.",
    badge: "Growth",
  },
  {
    icon: "fa-solid fa-headset",
    title: "Technical Support",
    desc: "Facing technical issues? We're here to help.",
    badge: "Priority",
  },
];

export const supportProcess = [
  {
    number: "01",
    icon: "fa-solid fa-paper-plane",
    title: "Submit Request",
    text: "Complete the support form with your project details or technical issue.",
  },
  {
    number: "02",
    icon: "fa-solid fa-magnifying-glass",
    title: "Review & Analysis",
    text: "Our team carefully reviews your request and identifies the best solution.",
  },
  {
    number: "03",
    icon: "fa-solid fa-comments",
    title: "We Contact You",
    text: "A support specialist contacts you through WhatsApp, email or phone.",
  },
  {
    number: "04",
    icon: "fa-solid fa-rocket",
    title: "Project Starts",
    text: "After confirmation, we begin working and keep you updated throughout.",
  },
];

export const faqCategories = [
  {
    icon: "fa-solid fa-laptop-code",
    title: "Website Development",
    total: "12 Articles",
    color: "#6C63FF",
  },
  {
    icon: "fa-solid fa-globe",
    title: "Domains & Hosting",
    total: "8 Articles",
    color: "#00B8D9",
  },
  {
    icon: "fa-solid fa-chart-line",
    title: "SEO & Marketing",
    total: "9 Articles",
    color: "#22C55E",
  },
  {
    icon: "fa-solid fa-lock",
    title: "Security",
    total: "6 Articles",
    color: "#F97316",
  },
];

export const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Most business websites are completed within 1–3 weeks depending on project complexity.",
  },
  {
    question: "Do you provide domain and hosting?",
    answer:
      "Yes. We help you purchase, configure and manage domains, hosting and SSL certificates.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely. We modernize outdated websites while improving speed, responsiveness and SEO.",
  },
  {
    question: "Do you provide ongoing maintenance?",
    answer:
      "Yes. We offer website maintenance, backups, updates and security monitoring.",
  },
];

export const supportPromises = [
  {
    icon: "fa-solid fa-clock",
    title: "Fast Response",
    text: "Most enquiries receive a response within a few business hours.",
  },
  {
    icon: "fa-solid fa-user-shield",
    title: "Dedicated Support",
    text: "You'll communicate directly with experienced developers, not a chatbot.",
  },
  {
    icon: "fa-solid fa-lock",
    title: "Secure & Confidential",
    text: "Your project details and business information remain private.",
  },
  {
    icon: "fa-solid fa-award",
    title: "Quality Focused",
    text: "Every solution is designed with performance, usability and long-term growth in mind.",
  },
];
