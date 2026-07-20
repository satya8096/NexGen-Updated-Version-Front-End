// import React, { useEffect } from "react";
// import { brandName, emailAddress, phoneNumber } from "./../Data/BrandData";
// import { Link } from "react-router-dom";
// import {
//   services,
//   whyChooseUsData,
//   processSteps,
//   aboutUsData,
// } from "./../Data/Page Data/HomePageData";
// import { clientsData } from "./../Data/Page Data/PortfolioPageData";
// import AcheivementsCount from "../Components/AcheivementsCount";
// import Testimonials from "../Components/Testimonials";
// import { BlogsData } from "../Data/Page Data/BlogsPageData";
// import { faqs } from "./../Components/FrequentlyAskedQuestions";
// import { HomePageSEO } from "../Data/AllPageSEOs";
// import Anniversary from "../Components/Anniversary";
// import Timeline from "../Components/TimeLine";
// import ServiceCard from "../Components/ServiceCard";


// const HomePage = () => {
//   // const futureDate = offerExpireDate;
//   // const now = new Date().getTime();
//   useEffect(() => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   }, []);

//   return (
//     <div className="home-page">
//       {HomePageSEO}
//       <section className="hero-section overflow-hidden">
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
//               <h3
//                 data-aos="fade-right"
//                 data-aos-duration="500"
//                 className="my-2 mb-3 home-welcome-heading overflow-hidden"
//                 style={{
//                   position: "relative",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                 }}
//               >
//                 Welcome to {brandName}!
//               </h3>
//               <h4 className="home-main-slogan text-warning">
//                 Your Trusted Partner in Professional Web Design
//               </h4>
//               <p className="mb-3 mt-3">
//                 We design, develop, and scale modern websites for growing
//                 businesses. We help startups and businesses transform their
//                 ideas into powerful digital experiences—offering end-to-end
//                 solutions from web development to brand identity.
//               </p>
//               <div className="d-flex mb-2">
//                 <Link
//                   to="/services"
//                   className="ps-2 pe-2 rounded me-3 home-get-started-btn bg-warning text-dark d-flex align-items-center justify-content-center"
//                   style={{ width: "9rem" }}
//                 >
//                   Our Services <i className="fa-solid fa-angle-right ms-2"></i>
//                 </Link>
//                 <Link
//                   to="/portfolio"
//                   className="home-get-started-btn d-flex align-items-center justify-content-center"
//                   style={{ width: "9rem" }}
//                 >
//                   View Portfolio{" "}
//                   <i className="fa-solid fa-angle-right ms-2"></i>
//                 </Link>
//               </div>
//               <div className="mt-4">
//                 <div className="d-flex flex-column flex-sm-row align-items-center justify-content-start rounded-3 py-3">
//                   <div className="me-sm-4 mb-2 mb-sm-0 text-center text-sm-start">
//                     <div className="d-flex align-items-center mb-1">
//                       <i className="fa-solid fa-star text-warning me-1 fs-5"></i>
//                       <i className="fa-solid fa-star text-warning me-1 fs-5"></i>
//                       <i className="fa-solid fa-star text-warning me-1 fs-5"></i>
//                       <i className="fa-solid fa-star text-warning me-1 fs-5"></i>
//                       <i className="fa-solid fa-star text-warning me-1 fs-5"></i>
//                       <span
//                         className="fw-bold mt-2 ms-2"
//                         style={{ fontSize: "1.2rem" }}
//                       >
//                         5.0
//                       </span>
//                     </div>
//                     <div className="text-muted small">
//                       Based on 1+ Google Reviews
//                     </div>
//                   </div>

//                   <div className="text-center text-sm-start border-start ps-sm-4">
//                     <div className="d-flex align-items-center justify-content-center">
//                       <img
//                         src={require("./../Assets/google_logo.png")}
//                         alt="logo"
//                         className="me-2"
//                         style={{ width: "2rem" }}
//                       />
//                       <Link
//                         to={"https://maps.app.goo.gl/7R8oQqPeimiCke8L7"}
//                         className="fw-semibold text-dark small"
//                       >
//                         Verified by Google
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-6 text-center" data-aos="fade-left">
//               <img
//                 src={require("./../Assets/home-hero-right-img.jpg")}
//                 // src={require("./../Assets/ChatGPT Image Jul 6, 2026, 02_02_01 PM.png")}
//                 alt="Startup Team"
//                 loading="lazy"
//                 className="home-main-section-img"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* <section
//         className="anniversary-poster"
//         // style={{ display: `${futureDate - now < 0 ? "none" : "flex"}` }}
//       >
//         <video className="poster-video w-100 h-50" autoPlay loop muted>
//           <source src="./year_celebrations.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <div className="poster-content text-center">
//           <h1 className="celebration-title">
//             🎉 1 Year of NexGen Web Designs! 🎉
//           </h1>
//           <p className="celebration-subtitle">
//             Celebrating a year of innovation, creativity, and successful
//             projects.
//           </p>
//           <Link to={"/services"} className="btn btn-warning">
//             View Our Offers
//           </Link>
//         </div>
//       </section> */}

//       <Anniversary />
//       <Timeline />

//       <ServiceCard/>

//       <section className="services-section py-5">
//         <div className="container">
//           <div className="section-header text-white text-center mb-5">
//             <h3 className="section-heading text-dark">Our Core Services</h3>
//             <p className="fw-bold text-dark">
//               Boost Your Brand with Our Expertise
//             </p>
//           </div>
//           <div className="row g-4 justify-content-center">
//             {services.map((service, index) => (
//               <div
//                 className={`col-md-4 ${
//                   index === 1 ? "highlighted-service" : ""
//                 }`}
//                 key={service.id}
//               >
//                 <div
//                   className={`service-card d-flex flex-column p-4 h-100 ${
//                     index === 1
//                       ? "bg-highlight flex-column-reverse"
//                       : "bg-dark-card"
//                   }`}
//                   data-aos={service.aos}
//                 >
//                   <div className="d-flex justify-content-around align-items-center flex-wrap mt-3">
//                     <img
//                       src={service.icon}
//                       alt={service.title}
//                       className="home-main-service-img mb-3 rounde"
//                     />
//                     <h5 className="text-dark w-50">{service.title}</h5>
//                   </div>
//                   <div
//                     style={{
//                       border: "1px solid white",
//                       borderRadius: "0.4rem",
//                       padding: "1rem",
//                     }}
//                   >
//                     <p className="text-dark">{service.description}</p>
//                     <hr style={{ color: "black" }} />
//                     <Link to={service.link} className="learn-more">
//                       Learn more →
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="web-process-section py-5 text-center">
//         <div className="container">
//           <h3 className="fw-bold mb-3 section-heading">
//             Our Web Development Process
//           </h3>
//           <p className="text-muted mb-5">
//             To deploy thriving web solutions that power your business to scale,
//             we abide by a few rules.
//           </p>
//           <div className="row justify-content-center">
//             {processSteps.map((step, index) => (
//               <div
//                 key={index}
//                 className="col-12 col-md-6 col-lg-2 process-col mb-4"
//                 data-aos="fade-up"
//                 data-aos-delay={(index + 1) * 100}
//               >
//                 <div className="process-box shadow-sm p-3 rounded-4 text-center h-100 position-relative">
//                   <p className="process-box-count text-white">{index + 1}</p>
//                   <i
//                     className={`${step.icon} mt-4 mb-3`}
//                     style={{ fontSize: "1.5rem" }}
//                   ></i>
//                   <h6 className="fw-bold">{step.title}</h6>
//                   <p className="text-muted">{step.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us section */}
//       <div className="text-center py-5">
//         <h2 className="mb-4 section-heading">Why Choose Us</h2>
//         <p className="mb-5">
//           We provide innovative web solutions tailored to your business needs.
//         </p>
//         <div className="d-flex justify-content-around flex-wrap">
//           {whyChooseUsData.map((item, index) => (
//             <div
//               data-aos="fade-up"
//               data-aos-delay={`${(index + 1) * 100}`}
//               key={index}
//             >
//               <div className={`serviceBox`}>
//                 <div className="service-icon">
//                   <span>
//                     <i className={`${item.icon} mb-3`}></i>
//                   </span>
//                   <img src={item.icon} width={"30%"} alt={item.title} />
//                 </div>
//                 <h3 className="title">{item.title}</h3>
//                 <p className="description">{item.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* About Us Section */}
//       <div className="text-center my-5">
//         <h2 className="mb-4 section-heading">About Us</h2>
//         <p className="mb-5">
//           We are dedicated to providing web development services that deliver
//           exceptional results.
//         </p>
//         <div className="d-flex justify-content-around flex-wrap ">
//           {aboutUsData.map((item, index) => (
//             <div
//               data-aos="fade-up"
//               data-aos-delay={`${(index + 1) * 100}`}
//               key={index}
//               style={{
//                 margin: "2rem 0.5rem",
//               }}
//             >
//               <div className={`home-aboutus-card h-100 ${item.bgColor}`}>
//                 <h5>{item.title}</h5>
//                 <p>{item.description}</p>
//                 <div className="service-icon overflow-hidden">
//                   <span>
//                     <img
//                       src={item.icon}
//                       alt={item.title}
//                       width={"80%"}
//                       style={{ marginBottom: "2rem" }}
//                     />
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Featured Projects section */}
//       <section className="py-5 portfolio-section">
//         <h2 className="text-center mb-4 section-heading">
//           Our Featured Projects
//         </h2>
//         <div
//           className="d-flex justify-content-around flex-wrap gap-4"
//           style={{ paddingBottom: "3rem" }}
//         >
//           {clientsData.slice(0, 4).map((item, index) => (
//             <div
//               key={item.id}
//               className=""
//               data-aos="fade-up"
//               data-aos-delay={`${(index + 1) * 100}`}
//             >
//               <div className="portfolio-item shadow-sm">
//                 <img
//                   src={item.image}
//                   className="card-img-top portfolio-image"
//                   alt={item.title}
//                 />
//                 <div className="text-center p-2 mt-3">
//                   <h5 className="card-title">{item.title}</h5>
//                   <p className="card-text">{item.description}</p>
//                   <Link to={`/portfolio/${item.id}`} className="">
//                     View Project{" "}
//                     <i className="fa-solid fa-arrow-right-long"></i>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="text-center mt-2">
//           <Link to={"/portfolio"} className="btn btn-outline-dark">
//             <i className="fa-solid fa-arrow-up-right-from-square"></i> See More
//             Projects
//           </Link>
//         </div>
//       </section>

//       {/* acheivements section */}
//       <AcheivementsCount />

//       {/* Testimonials Section */}
//       <Testimonials />

//       {/* Call to Action Section */}
//       <section
//         className="py-5 text-center"
//         style={{ backgroundColor: "#9CBBFC" }}
//       >
//         <div className="container">
//           <h4>Ready to Start Your Project?</h4>
//           <p>Please contact us immediately to discuss your requirements.</p>
//           <Link to={`tel:${phoneNumber}`} className="btn btn-primary me-2">
//             <i className="fa-solid fa-phone"></i> Contact Us
//           </Link>
//           <Link to={`mailto:${emailAddress}`} className="btn btn-primary ms-2">
//             <i className="fa-solid fa-envelope"></i> Email Us
//           </Link>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-5">
//         <div className="container">
//           <h2 className="text-center mb-4 section-heading">
//             Frequently Asked Questions
//           </h2>
//           <div className="accordion overflow-hidden" id="faqAccordion">
//             {faqs.slice(1, 11).map((faq, index) => (
//               <div
//                 className="accordion-item"
//                 key={index}
//                 data-aos="fade-up"
//                 data-aos-delay={`${(index + 1) * 20}`}
//               >
//                 <h2 className="accordion-header" id={`heading${index}`}>
//                   <button
//                     className="accordion-button collapsed text-dark outline-none"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target={`#collapse${index}`}
//                     aria-expanded="false"
//                     aria-controls={`collapse${index}`}
//                   >
//                     <i
//                       className="fa-solid fa-angles-right position-absolute me-3"
//                       style={{ top: "0.8rem" }}
//                     ></i>{" "}
//                     <span className="" style={{ marginLeft: "1.5rem" }}>
//                       {faq.question}
//                     </span>
//                   </button>
//                 </h2>
//                 <div
//                   id={`collapse${index}`}
//                   className="accordion-collapse collapse"
//                   aria-labelledby={`heading${index}`}
//                   data-bs-parent="#faqAccordion"
//                 >
//                   <p className="accordion-body"> {faq.answer}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="text-center py-3">
//           <Link to={"/frequently-asked-questions"} className="btn btn-dark">
//             More FAQs <i className="fa-solid fa-arrow-right-long"></i>
//           </Link>
//         </div>
//       </section>

//       {/* Blog Highlights Section */}
//       <section className="py-5">
//         <h4 className="text-center mb-4 section-heading">Latest Blog Posts</h4>
//         <div className="d-flex justify-content-around flex-wrap overflow-hidden">
//           {BlogsData.slice(4, 7).map((blog, index) => (
//             <div
//               className=""
//               key={index}
//               data-aos="fade-up"
//               data-aos-delay={`${(index + 1) * 100}`}
//             >
//               <div className="border-0 home-blog-post-container">
//                 <img
//                   src={blog.image}
//                   alt={blog.title}
//                   style={{ height: "40%", width: "100%" }}
//                 />
//                 <div className="p-3">
//                   <h5 className="card-title">{blog.title}</h5>
//                   <p className="">{blog.smallDescription}</p>
//                   <Link
//                     to={`/blogs/${blog.title
//                       .split(" ")
//                       .join("-")
//                       .toLowerCase()}`}
//                     className="btn btn-primary"
//                   >
//                     Read More <i className="fa-solid fa-angle-right"></i>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="text-center mt-4">
//           {" "}
//           <Link to={"/blogs"} className="btn btn-info">
//             More Latest Blogs <i className="fa-solid fa-arrow-right-long"></i>
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HomePage;


import React from 'react'

const Home = () => {
  return (
    <div>
      {/* <h1>heading</h1> */}
    </div>
  )
}

export default Home
