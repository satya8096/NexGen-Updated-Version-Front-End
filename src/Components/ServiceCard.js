import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    number: "01",
    title: "Website Development",
    description:
      "We create fast, responsive, and conversion-focused websites tailored to your business goals using the latest web technologies.",

    icon: "fa-solid fa-code",
    color: "#2563EB",

    featured: true,

    tags: [
      "React.js",
      "Bootstrap",
      "Node.js",
      "Responsive",
      "Performance",
      "SEO Ready",
    ],
  },

  {
    id: 2,
    number: "02",
    title: "Website Redesign",
    description:
      "Transform your outdated website into a modern, user-friendly experience that strengthens your brand and increases customer engagement.",

    icon: "fa-solid fa-pen-ruler",
    color: "#7C3AED",

    tags: ["Modern UI", "UX Design", "Branding", "Responsive", "Accessibility"],
  },

  {
    id: 3,
    number: "03",
    title: "Website Maintenance",
    description:
      "Keep your website secure, updated, optimized, and running smoothly with proactive monitoring and ongoing maintenance.",

    icon: "fa-solid fa-screwdriver-wrench",
    color: "#F59E0B",

    tags: ["Bug Fixes", "Updates", "Security", "Backups", "Monitoring"],
  },

  {
    id: 4,
    number: "04",
    title: "SEO Optimization",
    description:
      "Improve your search engine rankings with technical SEO, on-page optimization, faster loading speeds, and structured content.",

    icon: "fa-solid fa-chart-line",
    color: "#10B981",

    tags: [
      "Technical SEO",
      "On-Page SEO",
      "Google Ranking",
      "Analytics",
      "Performance",
    ],
  },

  {
    id: 5,
    number: "05",
    title: "Web Hosting & Domain",
    description:
      "Reliable hosting solutions with domain management, SSL certificates, email setup, backups, and high-speed performance.",

    icon: "fa-solid fa-server",
    color: "#EC4899",

    tags: ["Hosting", "Domain", "SSL", "Business Email", "Backups"],
  },

  {
    id: 6,
    number: "06",
    title: "Business Landing Pages",
    description:
      "High-converting landing pages designed to capture leads, promote campaigns, and maximize your marketing ROI.",

    icon: "fa-solid fa-bullseye",
    color: "#06B6D4",

    tags: [
      "Lead Generation",
      "Marketing",
      "Campaign",
      "Fast Loading",
      "Conversion",
    ],
  },
];

function ServiceCard() {
  return (
    <section className="services-section py-5">
      <div className="container">
        <div className="row g-4">
          {services.map((service) => (
            <div className="col-lg-4 col-md-6" key={service.id}>
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`service-card ${service.featured ? "featured" : ""}`}
              >
                <div
                  className="service-border"
                  style={{ background: service.color }}
                ></div>

                <div className="service-content">
                  <div className="top-row">
                    <div
                      className="service-icon"
                      style={{
                        boxShadow: `0 0 35px ${service.color}`,
                      }}
                    >
                      <i className={service.icon}></i>
                    </div>

                    <span className="service-number">{service.number}</span>
                  </div>

                  <h3>{service.title}</h3>

                  <div
                    className="heading-line"
                    style={{
                      background: service.color,
                    }}
                  ></div>

                  <p>{service.description}</p>

                  <div className="tag-wrapper">
                    {service.tags.map((tag, index) => (
                      <span key={index}>{tag}</span>
                    ))}
                  </div>

                  <button className="service-btn">
                    Explore Service
                    <i className="fa-solid fa-arrow-right ms-2"></i>
                  </button>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceCard;
