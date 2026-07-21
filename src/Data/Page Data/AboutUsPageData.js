import {
  address,
  address2,
  emailAddress,
  phoneNumber,
  whatsappLink,
  whatsappLink1,
} from "../BrandData";

export const missionData = [
  {
    id: 1,
    title: "Empower Innovation",
    description:
      "We seek to promote creativity and innovation in all of our projects.",
    imgSrc: require("./../../Assets/Empower_innovation.jpg"),
    altText: "Mission Image 1",
  },
  {
    id: 2,
    title: "Enhance Growth",
    description:
      "Our mission is to help your business flourish through personalized digital tactics.",
    imgSrc: require("./../../Assets/Empower_Growth.avif"),
    altText: "Mission Image 2",
  },
  {
    id: 3,
    title: "Deliver Excellence",
    description:
      "We are devoted to providing excellence and quality in all of our services.",
    imgSrc: require("./../../Assets/Delivery_Excellence.avif"),
    altText: "Mission Image 3",
  },
];

// Our VIsion Data
export const visionDetails = [
  {
    id: 1,
    icon: "fas fa-bullseye fa-3x",
    title: "Customer-Centric",
    description:
      "We emphasize our clients' demands to ensure their pleasure and success on every assignment.",
  },
  {
    id: 2,
    icon: "fas fa-rocket fa-3x",
    title: "Innovative Solutions",
    description:
      "We want to transform the digital environment with innovative and effective solutions.",
  },
  {
    id: 3,
    icon: "fas fa-globe fa-3x",
    title: "Global Impact",
    description:
      "We envisage a world in which our solutions drive worldwide success for all enterprises.",
  },
];

// Gaols Data
export const goals = [
  {
    title: "Expand Services",
    description:
      "Introducing innovative services to meet various company demands and increase client satisfaction.",
    icon: require("./../../Assets/rocket.gif"),
  },
  {
    title: "Innovate Technology",
    description:
      "Adopting cutting-edge technologies to increase productivity and provide high-quality solutions.",
    icon: require("./../../Assets/gears.gif"),
  },
  {
    title: "Global Reach",
    description:
      "Creating a global footprint in order to provide effective and efficient service to clients worldwide.",
    icon: require("./../../Assets/growth.gif"),
  },
];

// Contact data
export const contactInfo = [
  {
    id: 1,
    icon: require("./../../Assets/phone-contact.gif"),
    title: "Phone",
    detail: phoneNumber,
    btnText: "Call Now",
    btnLink: `tel:${phoneNumber}`,
    btnBtn: "btn-dark",
  },
  {
    id: 2,
    icon: require("./../../Assets/email-file.gif"),
    title: "Email",
    detail: `${emailAddress}`,
    btnText: "Email Now",
    btnLink: `mailto:${emailAddress}`,
    btnBtn: "btn-dark",
  },
  {
    id: 3,
    icon: require("./../../Assets/location.gif"),
    title: "Address - 1",
    detail: `${address}`,
    btnText: "Check Now",
    btnLink: "https://maps.app.goo.gl/TxPbUHBfLLbDRFk2A",
    btnBtn: "btn-dark",
  },
  {
    id: 4,
    icon: require("./../../Assets/location.gif"),
    title: "Address - 2",
    detail: `${address2}`,
    btnText: "Check Now",
    btnLink: "https://maps.app.goo.gl/2Vqf28ukwJFfEFkq9",
    btnBtn: "btn-dark",
  },
  {
    id: 5,
    icon: "https://cdn-icons-png.flaticon.com/128/2504/2504957.png",
    title: "Whatsapp 1",
    detail: "Chat with Us We are online",
    btnText: "Chat Now",
    btnLink: whatsappLink1,
    btnBtn: "btn-dark",
  },
  {
    id: 6,
    icon: "https://cdn-icons-png.flaticon.com/128/2504/2504957.png",
    title: "Whatsapp 2",
    detail: "Chat with Us We are online",
    btnText: "Chat Now",
    btnLink: whatsappLink,
    btnBtn: "btn-dark",
  },
];
