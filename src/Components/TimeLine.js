import { motion } from "framer-motion";

const timeline = [
  {
    year: "2025",
    title: "Founded NexGen",
    desc: "Started with a vision to create modern websites for growing businesses.",
    icon: "fa-solid fa-rocket",
  },
  {
    year: "2025",
    title: "First Client",
    desc: "Successfully delivered our first professional business website.",
    icon: "fa-solid fa-handshake",
  },
  {
    year: "2025",
    title: "Growing Portfolio",
    desc: "Expanded with multiple projects across different industries.",
    icon: "fa-solid fa-laptop-code",
  },
  {
    year: "2026",
    title: "Trusted Partner",
    desc: "Built long-term relationships through reliable support and quality.",
    icon: "fa-solid fa-users",
  },
  {
    year: "2026",
    title: "1 Year Completed",
    desc: "Celebrating our first milestone and preparing for even greater achievements.",
    icon: "fa-solid fa-award",
  },
];

export default function Timeline() {
  return (
    <section className="timeline-section">
      <div className="container">
        <motion.div
          className="timeline-heading text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span>OUR JOURNEY</span>

          <h2>
            One Year of
            <br />
            Building Trust
          </h2>
        </motion.div>

        <div className="timeline-wrapper">
          <div className="timeline-line"></div>

          {timeline.map((item, index) => (
            <motion.div
              className="timeline-item"
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="timeline-dot">
                <i className={item.icon}></i>
              </div>

              <div className="timeline-card">
                <small>{item.year}</small>

                <h4>{item.title}</h4>

                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
