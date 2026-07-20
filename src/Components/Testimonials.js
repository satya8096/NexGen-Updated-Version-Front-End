import React from "react";
// Testimonials Data
const testimonials = [
  {
    profilePic: require("./../Assets/Testmonial_User_Profile_Icon.jpg"),
    name: "Rajesh Bodapati",
    rating: 5,
    projectTitle: "Amrutha Salon",
    link: "https://maps.app.goo.gl/zyqCcpyviKEJtQx98",
    testimonial:
      "I got my websites Designed & Hosted by NexGen Web Designs and it was flawless Mr. Satyanarayana was very supportive & helped me with patience. I would definitely recommend them.",
  },
  {
    profilePic: require("./../Assets/Testmonial_User_Profile_Icon.jpg"),
    name: "V Dileep Kumar",
    rating: 5,
    projectTitle: "Portfolio Website",
    link: "",
    testimonial:
      "Professional, prompt, and responsive to our needs. We are quite pleased with the finished outcome.",
  },
  {
    profilePic: require("./../Assets/Testmonial_User_Profile_Icon.jpg"),
    name: "Ch Nagendra",
    rating: 5,
    projectTitle: "Agency",
    link: "",
    testimonial:
      "NexGen’s designs boosted my business visibility remarkably. Simple, effective, and customer-focused!",
  },
  {
    profilePic: require("./../Assets/Testmonial_User_Profile_Icon.jpg"),
    name: "Ch Satyanarayana",
    rating: 4.5,
    projectTitle: "Portfolio Website",
    link: "",
    testimonial:
      "Impressed by the expert design and functionality. NexGen Web Designs truly understands our needs!",
  },
  {
    profilePic: require("./../Assets/Testmonial_User_Profile_Icon.jpg"),
    name: "Ram Kumar",
    rating: 5,
    projectTitle: "Digital Solutions",
    link: "",
    testimonial:
      "Outstanding service! Our website’s traffic surged, thanks to NexGen’s exceptional digital solutions. True experts!",
  },
];
const StarRating = ({ rating }) => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          className={index < rating ? "star filled m-1 mt-0" : "star m-1 mt-0"}
        >
          <i className="fa-solid fa-star"></i>
        </span>
      ))}
    </div>
  );
};
const Testimonials = () => {
  return (
    <section className="testimonials-section py-5 text-center overflow-hidden">
      <div className="container">
        <h3 className="section-heading">
          What Our Customers Say
        </h3>
        <p className="text-mute">
          Real feedback from the people we’re proud to serve.
        </p>
        <div className="testimonial-wrapper">
          {testimonials.map((client, index) => (
            <div
              className="col-md-6 col-lg-4 m-3"
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${index * 150}`}
            >
              <div className="testimonial-box p-4 rounded-4 bg-white h-100 shadow-sm">
                <a href={client.link}>
                  <img
                    src={client.profilePic}
                    alt={client.name}
                    className="rounded-circle mb-3"
                    style={{
                      width: "70px",
                      height: "70px",
                      objectFit: "cover",
                    }}
                  />
                </a>
                <p className="testimonial-text fst-italic text-dark">
                  <i className="fa-solid fa-quote-left me-2 text-success"></i>
                  {client.testimonial}
                  <i className="fa-solid fa-quote-right ms-2 text-success"></i>
                </p>
                <hr className="w-25 mx-auto my-3" />
                <h6 className="mb-1 fw-semibold">
                  -{" "}
                  <a
                    href={client.link}
                    className="text-success text-decoration-none"
                  >
                    {client.name}
                  </a>
                </h6>
                <StarRating rating={client.rating} />
                <p className="text-muted small mt-2">{client.projectTitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
