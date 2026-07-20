// import React from "react";
// import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation

// const Error404 = () => {
//   return (
//     <div className="error-page container-fluid d-flex justify-content-center align-items-center">
//       <div className="text-center error-container">
//         <h1 className="display-1 text-shadow text-danger">404</h1>
//         <h2 className="error-message">Oops! Page not found</h2>
//         <p className="mb-4">
//           Sorry, the page you're looking for doesn't exist. It might have been
//           moved or deleted.
//         </p>

//         {/* Button to navigate back to homepage */}
//         <Link to="/" className="btn btn-primary shadow-lg error-button">
//           <i className="fa-solid fa-house"></i> Go Home
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Error404;

import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="notfound-section">
      <div className="notfound-overlay">
        <div className="notfound-content">
          {/* <h1 className="text-danger" style={{fontSize:"3.9rem"}}>404</h1> */}
          <h1>Oops! Page Not Found</h1>
          <p>The page you're looking for doesn't exist or has been moved.</p>
          <div className="notfound-buttons">
            <button onClick={() => navigate("/")} className="btn-primary">
              Go Home
            </button>
            <button
              onClick={() => navigate("/contact-us")}
              className="btn-outline"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
