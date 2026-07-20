export const testimonials = [
  {
    id: 1,

    name: "Ravi Kumar",

    company: "Real Estate",

    review:
      "Professional service with an amazing modern website that increased our customer enquiries.",

    image: require("../../Assets/Electrician_Service.avif"),
  },

  {
    id: 2,

    name: "Daniel",

    company: "Church",

    review:
      "The team understood every requirement and delivered a beautiful responsive website.",

    image: require("../../Assets/Catering_Website.png"),
  },

  {
    id: 3,

    name: "Anjali",

    company: "Beauty Salon",

    review:
      "Excellent communication, fast delivery and premium design quality throughout the project.",

    image: require("../../Assets/Car_Rental_Services.avif"),
  },
];
export const whyChooseItems = [
  {
    id: 1,

    title: "100% Responsive",

    icon: "fa-solid fa-mobile-screen-button",

    description: "Looks perfect on desktop, tablet and mobile.",
  },

  {
    id: 2,

    title: "SEO Optimized",

    icon: "fa-solid fa-chart-line",

    description: "Built to rank better on Google Search.",
  },

  {
    id: 3,

    title: "Lightning Fast",

    icon: "fa-solid fa-bolt",

    description: "Optimized for speed and Core Web Vitals.",
  },

  {
    id: 4,

    title: "Premium UI Design",

    icon: "fa-solid fa-palette",

    description: "Modern interfaces that impress customers.",
  },

  {
    id: 5,

    title: "Secure Development",

    icon: "fa-solid fa-lock",

    description: "Secure coding practices and SSL integration.",
  },

  {
    id: 6,

    title: "Lifetime Guidance",

    icon: "fa-solid fa-headset",

    description: "Support and consultation whenever needed.",
  },
];
export const technologies = [
  {
    id: 1,

    title: "React JS",

    icon: "fa-brands fa-react",

    level: 98,

    description: "Fast interactive UI",
  },

  {
    id: 2,

    title: "Bootstrap",

    icon: "fa-brands fa-bootstrap",

    level: 95,

    description: "Responsive Framework",
  },

  {
    id: 3,

    title: "Node JS",

    icon: "fa-brands fa-node-js",

    level: 92,

    description: "Backend Development",
  },

  {
    id: 4,

    title: "MongoDB",

    icon: "fa-solid fa-database",

    level: 90,

    description: "Database",
  },

  {
    id: 5,

    title: "WordPress",

    icon: "fa-brands fa-wordpress",

    level: 97,

    description: "CMS Websites",
  },

  {
    id: 6,

    title: "Figma",

    icon: "fa-brands fa-figma",

    level: 94,

    description: "UI / UX Design",
  },

  {
    id: 7,

    title: "SEO",

    icon: "fa-solid fa-chart-line",

    level: 96,

    description: "Search Optimization",
  },

  {
    id: 8,

    title: "Hosting",

    icon: "fa-solid fa-server",

    level: 95,

    description: "Cloud Deployment",
  },
];

export const categories = [
  "All",

  "Business",

  "Church",

  "Restaurant",

  "Hospital",

  "Portfolio",

  "Real Estate",

  "Education",
];

export const sampleCategories = [
  "All",
  "Business",
  "Healthcare",
  "Real Estate",
  "E-Commerce",
  "Restaurant",
  "Home Services",
  "Education",
  "Architecture",
  "Interior Design",
  "Photography",
  "Portfolio",
  "Automotive",
  "Food & Catering",
];

// export const sampleProjects = [
//   {
//     id: 1,

//     title: "Luxury Restaurant",

//     category: "Restaurant",

//     description: "Modern restaurant website UI concept.",

//     image: require("../../Assets/Custome_Solutions.avif"),

//     tech: ["React", "Bootstrap", "UI"],
//   },

//   {
//     id: 2,

//     title: "Dental Clinic",

//     category: "Healthcare",

//     description: "Professional clinic landing page.",

//     image: require("../../Assets/Beaty_Parlelle_service.avif"),

//     tech: ["React", "SEO", "Bootstrap"],
//   },

//   {
//     id: 3,

//     title: "Creative Portfolio",

//     category: "Portfolio",

//     description: "Premium freelancer portfolio.",

//     image: require("../../Assets/AC_Service.png"),

//     tech: ["React", "Animation", "CSS"],
//   },
// ];

export const sampleProjects = [
  {
    id: 1,
    title: "Real Estate Website",
    category: "Real Estate",
    description:
      "Developed a real estate website with property listings and virtual tours.",
    image: require("./../../Assets/Real_Estate_Website.png"),
    icon: "fas fa-building",
    buttonLabel: "View Project",
    buttonClass: "btn-primary",
    longDescription:
      "This real estate website provides property listings, advanced search filters, and virtual tours to enhance the buying and renting experience. It features an admin panel for easy property management, secure user authentication, and an integrated contact system to connect buyers with sellers.",
    clientName: "Elite Realty",
    deliveryDate: "2024-03-10",
    technologiesUsed: ["React.js", "Javascript", "CSS3", "Bootstrap 5"],
    liveLink: "https://dharanirealestate.netlify.app/",
  },
  {
    id: 2,
    title: "Architecture Website",
    category: "Architecture",
    description:
      "Designed an architecture website showcasing projects with stunning visuals.",
    image: require("./../../Assets/Architecture_Website.png"),
    icon: "fas fa-drafting-compass",
    buttonLabel: "View Project",
    buttonClass: "btn-primary",
    longDescription:
      "This website is tailored for architecture firms, featuring high-quality project showcases, 3D design integration, and an intuitive portfolio section. It provides smooth navigation, interactive galleries, and a contact section for client inquiries.",
    clientName: "Visionary Architects",
    deliveryDate: "2024-03-20",
    technologiesUsed: ["React.js", "Javasript", "CSS3", "Bootstrap 5"],
    liveLink: "https://architects-by-nexgen.netlify.app//",
  },
  {
    id: 3,
    title: "Catering Website",
    category: "Food & Catering",
    description:
      "Built a catering website with online menu ordering and event booking.",
    image: require("./../../Assets/Catering_Website.png"),
    icon: "fas fa-utensils",
    buttonLabel: "View Project",
    buttonClass: "btn-primary",
    longDescription:
      "This catering website provides an online menu with customizable options for events. Customers can book catering services, view packages, and place online orders effortlessly. Secure payment integration ensures a smooth transaction experience.",
    clientName: "Tasty Bites Catering",
    deliveryDate: "2024-04-05",
    technologiesUsed: ["React.js", "Javasript", "CSS3", "Bootstrap 5"],
    liveLink: "https://catering-website-by-nexgen.netlify.app/",
  },
  {
    id: 4,
    title: "Interior Designs Website",
    category: "Interior Design",
    description:
      "Designed a modern interior design website featuring project showcases.",
    image: require("./../../Assets/Interior_Website.png"),
    icon: "fas fa-couch",
    buttonLabel: "View Project",
    buttonClass: "btn-primary",
    longDescription:
      "This website highlights interior design projects with high-quality images and video tours. It includes a portfolio section, client testimonials, and a consultation booking system.",
    clientName: "Elegance Interiors",
    deliveryDate: "2024-04-15",
    technologiesUsed: ["React.js", "Javasript", "CSS3", "MongoDB"],
    liveLink: "https://interiors-by-nexgen.netlify.app/",
  },
  {
    id: 5,
    title: "Plumbing Website",
    category: "Home Services",
    description:
      "Created a plumbing services website with service booking and pricing details.",
    image: require("./../../Assets/Plumbing_Website.png"),
    icon: "fas fa-wrench",
    buttonLabel: "View Project",
    buttonClass: "btn-primary",
    longDescription:
      "This website allows users to book plumbing services, check service pricing, and read customer reviews. The contact system ensures direct communication between clients and service providers.",
    clientName: "Swift Plumbing Services",
    deliveryDate: "2024-04-25",
    technologiesUsed: ["React.js", "Javasript", "CSS3", "Bootstrap 5"],
    liveLink: "https://plumber-by-nexgen.netlify.app/",
  },
  {
    id: 6,
    title: "Car Rental Website",
    category: "Automotive",
    description:
      "Developed a car rental website with booking system and vehicle listings.",
    image: require("./../../Assets/Car_Rental_Website.png"),
    icon: "fas fa-car",
    buttonLabel: "View Project",
    buttonClass: "btn-primary",
    longDescription:
      "This car rental website provides vehicle listings with real-time availability and online booking functionality. Secure payment processing and rental agreements are integrated for a seamless experience.",
    clientName: "Quick Ride Rentals",
    deliveryDate: "2024-05-05",
    technologiesUsed: ["React.js", "Javasript", "CSS3", "Bootstrap 5"],
    liveLink: "https://car-rental-project-by-nexgen.netlify.app/```",
  },
  {
    id: 7,
    title: "Dance Class Website",
    category: "Education",
    description:
      "Designed a website for a dance class with class schedules and online booking.",
    image: require("./../../Assets/Dance_Class_Website.png"),
    icon: "fas fa-music",
    buttonLabel: "View Project",
    buttonClass: "btn-primary",
    longDescription:
      "This website features a dynamic class schedule, instructor profiles, and an online booking system for dance classes. Users can register for classes and view performance galleries.",
    clientName: "Rhythm Dance Academy",
    deliveryDate: "2024-05-15",
    technologiesUsed: ["React.js", "Javasript", "CSS3", "MongoDB"],
    liveLink: "https://dance-class-by-nexgen.netlify.app/",
  },
  {
    id: 8,
    title: "Laundry Business Website",
    category: "Home Services",
    description:
      "Built a laundry service website with pickup scheduling and pricing calculator.",
    image: require("./../../Assets/Laundry_Website.png"),
    icon: "fas fa-soap",
    buttonLabel: "View Project",
    buttonClass: "btn-primary",
    longDescription:
      "This laundry business website allows customers to schedule pickups, calculate service costs, and track order status. It includes a membership system for repeat customers.",
    clientName: "Fresh Clean Laundry",
    deliveryDate: "2024-05-25",
    technologiesUsed: ["React.js", "Javasript", "CSS3", "Bootstrap 5"],
    liveLink: "https://laundry-website-by-nexgen.netlify.app/",
  },
  {
    id: 9,
    title: "Health Care Website",
    category: "Healthcare",
    description:
      "Created a healthcare website that includes patient management and appointment booking.",
    image: require("./../../Assets/Health_Care_Project.png"),
    icon: "fas fa-heartbeat",
    buttonLabel: "View Project",
    buttonClass: "btn-primary",
    longDescription:
      "This healthcare website was designed to make patient management easier by including features such as appointment scheduling, record management, and health tracking. We concentrated on developing an intuitive and user-friendly interface to make medical services available to patients online. To protect privacy and confidentiality, the website offers a secure login for both patients and healthcare professionals, real-time appointment scheduling, and patient data encryption. Integration with healthcare systems promotes efficient workflow and improved communication between physicians and patients. The project's goal was to improve patient happiness while also boosting healthcare delivery efficiency.",
    clientName: "MediCare Solutions",
    deliveryDate: "2024-02-15",
    technologiesUsed: ["React.js", "Node.js", "MongoDB", "Bootstrap 5"],
    liveLink: "https://konaseemahospital.netlify.app/",
  },
  {
    id: 10,
    title: "Photography Website",
    category: "Photography",
    description:
      "We created a wonderful photography portfolio website with gorgeous photographs and galleries.",
    image: require("./../../Assets/Photography_Project.png"),
    icon: "fas fa-camera",
    buttonLabel: "View Project",
    buttonClass: "btn-success",
    longDescription:
      "This photography portfolio website is intended to display high-resolution photos and custom-designed galleries. The project focuses on visual aesthetics and responsive design, ensuring that the photographs appear great on any platform. We improved the user experience by adding a gallery slider and lightbox capabilities. The project also contains a blog for sharing photography advice and a contact page for booking photographic services. The customer intended to use the portfolio to promote their abilities and attract future clients. SEO optimization was used to increase online presence, and a fast-loading interface was provided.",
    clientName: "LensCraft Studios",
    deliveryDate: "2024-03-20",
    technologiesUsed: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5"],
    liveLink: "https://photography-project1.netlify.app/",
  },
  {
    id: 11,
    title: "Portfolio Website",
    category: "Portfolio",
    description:
      "Designed a personal portfolio website that effectively showcases work and talents.",
    image: require("./../../Assets/Portfolio_Project.png"),
    icon: "fas fa-user",
    buttonLabel: "View Project",
    buttonClass: "btn-warning",
    longDescription:
      "The personal portfolio website was designed to allow a professional to showcase their work, abilities, and talents in an interactive style. The design is sleek and modern, with a focus on visual storytelling via projects, case studies, and a CV area. The website also has sections titled 'About Me', 'My Work', and 'Contact'. A blog was created to provide thoughts and updates on professional activities. We made sure the site was fully responsive, SEO-optimized, and connected with social media channels to increase visibility. The objective was to establish a digital presence that differentiates the individual from competition.",
    clientName: "John Doe",
    deliveryDate: "2024-01-10",
    technologiesUsed: ["React.js", "CSS3", "Node.js"],
    liveLink: "https://kattasatyanarayana.netlify.app/",
  },
  {
    id: 12,
    title: "Business Website",
    category: "Business",
    description:
      "Created a professional company website with services, testimonials, and contact information.",
    image: require("./../../Assets/Business_Project.png"),
    icon: "fas fa-briefcase",
    buttonLabel: "View Project",
    buttonClass: "btn-info",
    longDescription:
      "The business website was created for a professional corporation seeking to increase its internet presence. The website has a thorough services section, client testimonials, and an easy-to-use contact form. We aimed to create a user-friendly layout that clearly expresses the company's value proposition. Google Maps was integrated for location, a blog was created to share business news, and social media connections were included for networking. Furthermore, the website has a secure client login zone for accessing confidential business documents and communication. The project was completed with performance and security optimizations to provide a smooth user experience.",
    clientName: "Global Ventures",
    deliveryDate: "2024-04-05",
    technologiesUsed: ["Wordpress"],
    liveLink: "https://real.nexgenwebdesigns.com/",
  },
  {
    id: 13,
    title: "Dental Clinic Website",
    category: "Healthcare",
    description:
      "Built a modern dental clinic website with appointment scheduling and patient record management.",
    image: require("./../../Assets/Dental_Clinic.png"),
    icon: "fas fa-tooth",
    buttonLabel: "View Project",
    buttonClass: "btn-danger",
    longDescription:
      "This dental clinic website focuses on providing patients with the ability to schedule appointments, manage patient records, and access dental health services online. We implemented a user-friendly appointment system, secure patient data management, and information on dental services. The design emphasizes a clean and professional look, along with dental care resources and treatment guides. The goal was to streamline patient interaction and provide an efficient way to access clinic services while ensuring the highest level of security for patient data.",
    clientName: "SmileCare Dental",
    deliveryDate: "2024-05-10",
    technologiesUsed: ["Wordpress"],
    liveLink: "https://medical.nexgenwebdesigns.com/",
  },
  {
    id: 14,
    title: "AC Repair Website",
    category: "Home Services",
    description:
      "Created a responsive website for AC repair services with booking options and service details.",
    image: require("./../../Assets/AC_Service.png"),
    icon: "fas fa-fan",
    buttonLabel: "View Project",
    buttonClass: "btn-secondary",
    longDescription:
      "This AC repair services website was designed to help customers book repair services online and view available service packages. We incorporated a service booking system, detailed descriptions of repair services, and customer testimonials. The project also focuses on local SEO optimization to enhance search engine visibility for nearby customers. The website offers mobile responsiveness, a modern design, and clear call-to-action buttons to improve the user experience. The aim was to make the process of booking and managing AC repair services simple and efficient.",
    clientName: "CoolFix Services",
    deliveryDate: "2024-06-05",
    technologiesUsed: ["Wordpress"],
    liveLink: "https://dummy.nexgenwebdesigns.com/",
  },
  {
    id: 15,
    title: "Restaurant Website",
    category: "Restaurant",
    description:
      "Developed a feature-rich restaurant website with online food ordering, menu display, and reservations.",
    image: require("./../../Assets/Restaurant_Website.png"),
    icon: "fas fa-utensils",
    buttonLabel: "View Project",
    buttonClass: "btn-success",
    longDescription:
      "This restaurant website was built to allow customers to view the menu, order food online, and make reservations easily. We integrated a secure payment gateway, responsive menu display, and table booking system. Special attention was paid to creating a mobile-friendly design that ensures a seamless experience for users ordering food or reserving tables from any device. The project also includes location-based SEO optimization and social media integration to boost customer engagement and online visibility.",
    clientName: "DineSmart",
    deliveryDate: "2024-07-20",
    technologiesUsed: [
      "ReactJs",
      "NodeJs",
      "MongoDB",
      "ExpressJs",
      "Javascript",
      "CSS3",
    ],
    liveLink: "https://konaseema-ruchulu.netlify.app/",
  },
  {
    id: 16,
    title: "E-Commerce Website",
    category: "E-Commerce",
    description:
      "Built a robust e-commerce platform with product browsing, shopping cart, and secure checkout features.",
    image: require("./../../Assets/E-Commerce_Website.png"),
    icon: "fas fa-shopping-cart",
    buttonLabel: "View Project",
    buttonClass: "btn-primary",
    longDescription:
      "This e-commerce platform was designed for seamless shopping experiences with features like product catalogs, a shopping cart, and a secure checkout system. We integrated various payment methods and shipping options, focusing on user security and ease of navigation. The platform also includes a customer login system for order tracking, a product review section, and a wishlist feature. The goal was to provide an all-in-one solution for online retail businesses, ensuring scalability and performance for high traffic.",
    clientName: "ShopEase",
    deliveryDate: "2024-08-15",
    technologiesUsed: [
      "ReactJs",
      "NodeJs",
      "MongoDB",
      "ExpressJs",
      "Javascript",
      "CSS3",
    ],
    liveLink: "https://shopykit.netlify.app/",
  },
];
