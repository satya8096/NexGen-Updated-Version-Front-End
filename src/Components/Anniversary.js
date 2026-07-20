import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function Anniversary() {
  return (
    <section className="anniversary">
      <div className="gradient one"></div>
      <div className="gradient two"></div>
      <div className="gradient three"></div>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="badge-premium">✨ CELEBRATING OUR FIRST YEAR</div>

              <h1>
                <span>365 Days</span>
                Building Digital Success
              </h1>

              <p>
                One year ago, NexGen Web Designs started with a mission to help
                businesses establish a premium online presence. Today we're
                proud to build modern, fast and conversion-focused websites
                trusted by startups and growing brands.
              </p>

              <div className="buttons">
                <a href="#portfolio" className="btn-primary-custom">
                  View Portfolio
                  <FaArrowRight />
                </a>

                <a href="#contact" className="btn-secondary-custom">
                  Start Project
                </a>
              </div>
            </motion.div>
          </div>

          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="hero-number"
            >
              <div className="ring"></div>

              <h2>01</h2>

              <div className="glass-card">
                <h4>Years of Excellence</h4>

                <p>Premium Websites Modern Design Trusted Partnership</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
