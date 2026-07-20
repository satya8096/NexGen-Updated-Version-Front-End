import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { clientProjects } from "../Data/Page Data/PortfolioPageData";

const ProjectDetail = () => {
  const navigate = useNavigate();
  const [project, setProject] = useState({});
  const [techs, setTechs] = useState([]);
  const params = useParams();
  const GetProjectFunc = async () => {
    const project1 = await clientProjects.filter((each) => {
      return each.id === +params.id;
    });
    if (project1.length !== 0) {
      setProject(project1[0]);
      setTechs(project1[0].technologiesUsed);
    } else {
      return navigate("/portfolio");
    }
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    GetProjectFunc();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="project-detail-main-background d-flex align-items-center justify-content-center flex-column gap-3">
        <h4 className="text-center text-white">Project Overview</h4>
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
              <Link className="text-info" to={"/portfolio"}>
                Portfolio
              </Link>
            </li>
            <li className="breadcrumb-item text-white">
              Project - {params.id}
            </li>
          </ol>
        </nav>
        <h4 className="text-white">{project.title}</h4>
        <p className="text-white p-3 text-center">{project.description}</p>
      </div>
      <div className="project-detail" style={{ marginTop: "5.5rem" }}>

        <div className="d-flex justify-content-around project-sub-container flex-wrap">
          <div className="project-image-detail">
            <img src={project.image} className="" alt={project.title} />
          </div>
          <div className="project-details-content">
            <h4 className="">Project Information</h4>
            <ul className="list-unstyled d-flex flex-column gap-3">
              {/* <li>
                <strong>Client Name:</strong> {project.clientName}
              </li> */}
              {/* <li>
                <strong>Delivery Date:</strong> {project.deliveryDate}
              </li> */}
              <li>
                <strong>Technologies Used:</strong>
                <div className="d-flex flex-wrap justify-content-start">
                  {techs.map((tech, index) => (
                    <span
                      key={index}
                      className="list-unstyled bg-dark text-white  p-2"
                      style={{
                        borderRadius: "5px",
                        margin: "0.5rem 1rem 0.5rem 0rem",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </li>
              <li>
                <strong>Live Link:</strong>{" "}
                <Link
                  to={project.liveLink}
                  target="_blank"
                  style={{fontSize:"1rem"}}
                  rel="noopener noreferrer"
                >
                  {project.liveLink}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Long Description Section */}
        <div className="project-long-description">
          <h2 className="text-center mb-4 section-heading">Project Details</h2>
          <p>{project.longDescription}</p>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;
