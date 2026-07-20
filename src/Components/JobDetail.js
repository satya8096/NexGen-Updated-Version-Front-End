import React, { useState ,useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";

const JobApplyModal = ({ show, onClose, job }) => {
  if (!show) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application submitted!");
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <h3 className="modal-title">Apply for {job?.title}</h3>
        <p className="modal-subtitle">{job?.company}</p>

        <form className="modal-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="file" accept=".pdf,.doc,.docx" required />
          <button type="submit" className="btn-submit">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

const JobDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const { state } = useLocation();
  const job = state?.job;
  const navigate = useNavigate();

   useEffect(() => {
           window.scrollTo({
             top: 0,
             behavior: "smooth",
           });
         }, []);

  if (!job) {
    return (
      <>
        <section className="job-hero-section">
          <div className="job-hero-overlay">
            <div className="job-hero-content">
              <p className="">With this ID job not found...</p>
            </div>
          </div>
        </section>
        <div
          style={{ padding: "40px", textAlign: "center" }}
          data-aos="fade"
        >
          <h2 className="text-danger">Job not found</h2>
          <p>
            Sorry, the job you're looking for doesn't exist or may have been
            removed recently.
          </p>
          <button
            onClick={() => navigate("/careers")}
            className="back-btn btn btn-dark"
          >
            Go Back
          </button>
        </div>
      </>
    );
  }

  return (
    <div>
      <section className="job-hero-section">
        <div className="job-hero-overlay">
          <div className="job-hero-content">
            <h3 className="text-warning">{job.title}</h3>
            <h5>{job.company}</h5>
            <p>{job.location}</p>
          </div>
        </div>
      </section>
      <div className="job-detail-wrapper" data-aos="fade">
        <button className="btn-back" onClick={() => navigate("/careers")}>
          ← Back
        </button>
        <h3 className="job-title">{job.title}</h3>
        <h4 className="job-company">{job.company}</h4>

        <div className="job-section">
          <h5 className="section-heading">Overview</h5>
          <p>
            <strong>Location:</strong> {job.location}
          </p>
          <p>
            <strong>Experience:</strong> {job.experience}
          </p>
          <p>
            <strong>Industry:</strong> {job.industry}
          </p>
          <p>
            <strong>Job Type:</strong> {job.type}
          </p>
        </div>

        <div className="job-section">
          <h5 className="section-heading">Job Description</h5>
          <p>{job.description}</p>
        </div>

        <div className="job-section">
          <h5 className="section-heading">Responsibilities</h5>
          <p>{job.fullDetails?.role}</p>
        </div>

        <div className="job-section">
          <h5 className="section-heading">Skills Required</h5>
          <ul className="skills-list">
            {job.fullDetails?.skills?.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="job-section">
          <h5 className="section-heading">About Company</h5>
          <p>{job.fullDetails?.aboutCompany}</p>
        </div>

        <div className="job-section">
          <p>
            <strong>Date Posted:</strong> {job.fullDetails?.datePosted}
          </p>
          <p>
            <strong>Job ID:</strong> {job.fullDetails?.jobId}
          </p>
        </div>
        <button
          className="btn-apply btn btn-info"
          onClick={() => setShowModal(true)}
        >
          Apply Now
        </button>
      </div>

      <JobApplyModal
        show={showModal}
        onClose={() => setShowModal(false)}
        job={job}
      />
    </div>
  );
};

export default JobDetails;
