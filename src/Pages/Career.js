import React, { useState, useEffect } from "react";
import logo from "./../Assets/NexGen_Final_Black_Logo.png";
import image1 from "./../Assets/career_page_img1.avif";
import { Link, useNavigate } from "react-router-dom";
import { CareersPageSEO } from "../Data/AllPageSEOs";

// const jobData = [
//   {
//     id: 1,
//     title: "Key Account Manager- Bancassurance",
//     company: "Tata AIA Life Insurance",
//     location: "Ratlam",
//     type: "Permanent",
//     experience: "1-2 Years",
//     industry: "Insurance",
//     description:
//       "Visit partner branches and interact with Bank branch managers. Ensure sales targets assigned are met...",
//     fullDetails: {
//       datePosted: "12 hours ago",
//       jobId: "111048905",
//       role: "Salesforce Admin",
//       function: "Banking",
//       type: "Permanent Job",
//       skills: [
//         "Insurance",
//         "Target Achievement",
//         "Bancassurance",
//         "Customer Interaction",
//         "Sales",
//       ],
//       aboutCompany: `Tata AIA Life Insurance Company Limited is a joint venture between Tata Sons and AIA Group, offering insurance services across India. It provides a wide range of life insurance plans including protection, wealth, child, savings, group, and micro-insurance.`,
//     },
//   },
//   {
//     id: 2,
//     title: "Frontend Developer",
//     company: "NexGen Web Designs",
//     location: "Hyderabad, India",
//     type: "Full Time",
//     experience: "1+ Years",
//     industry: "IT Services",
//     description:
//       "Work on modern React projects using Bootstrap and API integration.",
//     fullDetails: {
//       datePosted: "2 days ago",
//       jobId: "NGWD102",
//       role: "Frontend Developer",
//       function: "Web Development",
//       type: "Full Time",
//       skills: [
//         "ReactJS",
//         "Bootstrap",
//         "API Integration",
//         "JavaScript",
//         "HTML/CSS",
//       ],
//       aboutCompany: `NexGen Web Designs is a modern web development agency delivering creative, responsive, and functional websites to businesses of all sizes.`,
//     },
//   },
//   {
//     id: 3,
//     title: "UI/UX Designer",
//     company: "NexGen Web Designs",
//     location: "Remote",
//     type: "Part Time",
//     experience: "1-3 Years",
//     industry: "IT Services",
//     description: "Design beautiful interfaces with Figma and Adobe XD.",
//     fullDetails: {
//       datePosted: "1 week ago",
//       jobId: "NGWD203",
//       role: "UI/UX Designer",
//       function: "Design",
//       type: "Part Time",
//       skills: [
//         "Figma",
//         "Adobe XD",
//         "User Experience",
//         "Wireframing",
//         "Prototyping",
//       ],
//       aboutCompany: `NexGen Web Designs specializes in intuitive UI/UX design and cutting-edge web development, helping clients build engaging digital experiences.`,
//     },
//   },
// ];
const jobData = [];

const HeroSection = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const filteredJobs = jobData.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="overflow-hidden">
      {CareersPageSEO}
      <div className="careers-hero-section d-flex justify-content-center align-items-center flex-column gap-3 text-center">
        <div className="hero-content">
          <h3 className="text-warning">Join Our Team</h3>
          <p>
            We are always looking for talented individuals to join our growing
            team. Check out our job openings!
          </p>
          <div className="text-center d-flex justify-content-center">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/" className="text-info">
                    Home
                  </Link>
                </li>
                <li
                  className="breadcrumb-item active text-white"
                  aria-current="page"
                >
                  Careers
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <section className="about-company-section">
        <div className="about-slide">
          <div className="logo-section" data-aos="fade-right">
            <img src={logo} alt="Company Logo" className="company-logo" />
          </div>
          <div className="text-section" data-aos="fade-left">
            <h4 className="">About Our Company</h4>
            <p>
              At NexGen Web Designs, we specialize in building cutting-edge
              websites that help businesses thrive online. With innovation,
              creativity, and dedication at our core, our team works to deliver
              top-quality digital solutions for clients worldwide.
            </p>
            <p>
              Join our team to be part of a collaborative, inclusive, and
              forward-thinking environment where your skills are valued and your
              ideas matter.
            </p>
          </div>
        </div>

        {/* Second Slide */}
        <div className="about-slide reverse">
          <div className="logo-section">
            <img
              src={image1}
              alt="Work Culture"
              className="company-logo"
              style={{ border: "2px solid black" }}
              data-aos="fade-right"
            />
          </div>
          <div className="text-section" data-aos="fade-left">
            <h4>Why Work With Us?</h4>
            <p>
              We’re not just building websites—we’re building futures. Whether
              you're a developer, designer, or marketer, you’ll get the
              opportunity to grow professionally with meaningful work and
              continuous learning.
            </p>
            <p>
              We foster a culture of respect, creativity, and work-life
              balance—because we believe a happy team builds the best products.
            </p>
          </div>
        </div>
      </section>
      <section
        className="job-section career-job-section"
        style={{ margin: "1rem" }}
      >
        <h4 className="section-title" data-aos="fade">
          Current Job Openings
        </h4>

        <input
          type="text"
          placeholder="Search by job title, company, or location..."
          className="search-input"
          onChange={(e) => setSearchTerm(e.target.value)}
          data-aos="fade"
        />

        {jobData.length === 0 && (
          <div className="text-center">
            <h4 data-aos="fade">Coming Soon....</h4>
            <div
              data-aos="fade"
              className="spinner-border text-info m-3"
              role="status"
            ></div>
          </div>
        )}

        <div className="job-list">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div className="job-card" key={job.id} data-aos="fade-up">
                <div className="job-card-header">
                  <h3>{job.title}</h3>
                  <span className="badge">{job.type}</span>
                </div>
                <p className="company">{job.company}</p>
                <p className="location">{job.location}</p>
                <p className="description">{job.description}</p>
                <button
                  className="view-btn"
                  onClick={() =>
                    navigate(`/careers/job/${job.id}`, { state: { job } })
                  }
                >
                  View More
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-danger" data-aos="fade">
              No jobs found.
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
