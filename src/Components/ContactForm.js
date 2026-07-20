import React, { useState } from "react";
import {
  emailAddress,
  fullAddress1,
  fullAddress2,
  phoneNumber,
  whatsappLink,
  whatsappLink1,
  whatsappNumber,
  whatsappNumber1,
} from "../Data/BrandData";
import { Link } from "react-router-dom";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
    address: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = async (event) => {
    event.preventDefault();
    setIsSending(true);
    try {
      const formDataUpdated = new FormData(event.target);
      formDataUpdated.append(
        "access_key",
        "4f552bd2-7e64-4d32-8a81-c151b74a0340"
      );
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataUpdated,
      });
      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setIsSending(false);
        setFormData({
          name: "",
          email: "",
          message: "",
          phone: "",
          address: "",
        });
      } else {
        console.log("Error", data);
        setIsSending(false);
        setStatus("fail");
      }
    } catch (error) {
      setIsSending(false);
      console.log(error.message);
    }
  };

  return (
    <div className="contact-page container py-5 overflow-hidden">
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        {/* Contact Section 1 */}
        <div className="col-md-6">
          <img
            src={require("./../Assets/contact_illustration.avif")}
            alt="contact_illusration"
            width={"100%"}
          />
        </div>

        {/* Contact Section 2 */}
        <div className="col-md-6 contact-section-2 p-4" data-aos="fade-left">
          <h6 className="section-title mb-4" style={{ fontSize: "1.4rem" }}>
            Get in Touch For A Free Consultation!
          </h6>
          <p className="" style={{ opacity: "0.5" }}>
            Note : We will respond with in 2 hour.
          </p>
          <form onSubmit={sendEmail}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email <span className="text-danger">*</span>
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone Number<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="phone"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Address <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                placeholder="Your Address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message <span className="text-danger">*</span>
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-block w-100"
              disabled={isSending}
            >
              {isSending ? (
                <div>
                  <span
                    class="spinner-border spinner-border-sm"
                    role="status"
                  ></span>{" "}
                  Sending...
                </div>
              ) : (
                <span>
                  {" "}
                  Send Message <i className="fa-solid fa-paper-plane"></i>
                </span>
              )}
            </button>
          </form>
          {status === "success" && (
            <p className="text-center m-4 text-success">
              <i className="fa-solid fa-circle-check"></i> Success! Your message
              has been sent.
            </p>
          )}
          {status === "fail" && (
            <p className="text-center m-4 text-danger">
              <i className="fa-solid fa-circle-xmark"></i> Failed to send the
              message. Please try again.
            </p>
          )}
        </div>
      </div>
      <h6
        className="section-tite text-center mb-4 mt-4"
        style={{ fontSize: "1.4rem" }}
      >
        Contact Details
      </h6>
      <div className="contact-information ">
        <div className="mt-4 mb-4 contact-box" data-aos="zoom-in">
          <h6>
            <i className="fa-solid fa-phone-volume"></i> Phone Number
          </h6>
          <p>{phoneNumber}</p>
          <Link className="btn btn-info" to={`tel:${phoneNumber}`}>
            <i className="fa-solid fa-phone-volume"></i> Call Now
          </Link>
        </div>
        <div className="mt-4 mb-4 contact-box" data-aos="zoom-in">
          <h6>
            <i className="fa-brands fa-whatsapp"></i> Whatsapp 1
          </h6>
          <p>{whatsappNumber1}</p>
          <Link
            className="btn text-white"
            style={{ backgroundColor: "#727cf5" }}
            to={whatsappLink1}
          >
            <i className="fa-brands fa-rocketchat"></i> Chat Now
          </Link>
        </div>
        <div className="mt-4 mb-4 contact-box" data-aos="zoom-in">
          <h6>
            <i className="fa-brands fa-whatsapp"></i> Whatsapp 2
          </h6>
          <p>{whatsappNumber}</p>
          <Link className="btn btn-dark" to={whatsappLink}>
            <i className="fa-brands fa-rocketchat"></i> Chat Now
          </Link>
        </div>
        <div className="mt-4 mb-4 contact-box" data-aos="zoom-in">
          <h6>
            <i className="fa-solid fa-envelope"></i> Email
          </h6>
          <p>{emailAddress}</p>
          <Link className="btn btn-warning" to={`mailto:${emailAddress}`}>
            <i className="fa-solid fa-envelope"></i> Email Now
          </Link>
        </div>
        <div className="mt-4 mb-4 contact-box" data-aos="zoom-in">
          <h6>
            <i className="fa-solid fa-location-dot"></i> Address - 1
          </h6>
          <p>{fullAddress1}</p>
          <Link
            className="btn btn-success"
            to={"https://maps.app.goo.gl/yzq8pHPbCtnAb9F77"}
            target="blanck"
          >
            <i className="fa-solid fa-location-dot"></i> Visit Address
          </Link>
        </div>
        <div className="mt-4 mb-4 contact-box" data-aos="zoom-in">
          <h6>
            <i className="fa-solid fa-location-dot"></i> Address - 2
          </h6>
          <p>{fullAddress2}</p>
          <Link
            className="btn btn-primary"
            to={"https://maps.app.goo.gl/2Vqf28ukwJFfEFkq9"}
            target="blanck"
          >
            <i className="fa-solid fa-location-dot"></i> Visit Address
          </Link>
        </div>
        <div className="mt-4 mb-4 contact-box" data-aos="zoom-in">
          <h6>
            <i className="fa-solid fa-hourglass-start"></i> Working Hours
          </h6>
          <p>
            Every Day <br></br> 07:00AM to 10:00PM
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
