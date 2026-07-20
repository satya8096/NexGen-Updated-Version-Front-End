import emailjs from "@emailjs/browser";

/*
=========================================
EmailJS Configuration
=========================================
Replace these values with your own
EmailJS dashboard values.
*/

const SERVICE_ID = "YOUR_SERVICE_ID";

const TEMPLATE_ID = "YOUR_TEMPLATE_ID";

const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

/*
=========================================
Send Project Inquiry
=========================================
*/

export const sendProjectInquiry = async (data) => {
  const templateParams = {
    fullName: data.fullName,

    company: data.company,

    email: data.email,

    phone: data.phone,

    websiteType: data.websiteType,

    budget: `₹${Number(data.budget).toLocaleString()}`,

    timeline: data.timeline,

    message: data.message,

    date: new Date().toLocaleString(),
  };

  return emailjs.send(
    SERVICE_ID,

    TEMPLATE_ID,

    templateParams,

    PUBLIC_KEY,
  );
};
