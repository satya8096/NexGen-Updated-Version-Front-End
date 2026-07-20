import React, { useMemo, useState } from "react";

import "./SupportForm.css";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const SupportForm = () => {
  const [attachments, setAttachments] = useState([]);
  const handleAttachmentChange = (e) => {
    const files = Array.from(e.target.files);

    const validFiles = [];

    files.forEach((file) => {
      if (file.size > 10 * 1024 * 1024) {
        toast.error(`${file.name} exceeds 10MB`);

        return;
      }

      validFiles.push(file);
    });

    setAttachments((prev) => [...prev, ...validFiles]);
  };
  const removeAttachment = (index) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index));
  };
  const initialState = {
    fullName: "",
    email: "",
    phone: "",
    company: "",
    website: "",

    category: "",
    priority: "",

    issueTitle: "",
    issueDescription: "",

    pageUrl: "",

    device: "",
    browser: "",

    contactMethod: "",

    attachment: null,

    agree: false,
  };

  const [formData, setFormData] = useState(initialState);

  const [errors, setErrors] = useState({});

  const [loading, setLoading] = useState(false);

  const [dragActive, setDragActive] = useState(false);

  const supportCategories = [
    {
      id: 1,
      title: "Bug Report",
      icon: "fa-solid fa-bug",
    },
    {
      id: 2,
      title: "Design Changes",
      icon: "fa-solid fa-pen-ruler",
    },
    {
      id: 3,
      title: "Content Update",
      icon: "fa-solid fa-file-lines",
    },
    {
      id: 4,
      title: "Performance",
      icon: "fa-solid fa-gauge-high",
    },
    {
      id: 5,
      title: "Hosting",
      icon: "fa-solid fa-server",
    },
    {
      id: 6,
      title: "Domain",
      icon: "fa-solid fa-globe",
    },
    {
      id: 7,
      title: "Business Email",
      icon: "fa-solid fa-envelope-circle-check",
    },
    {
      id: 8,
      title: "SEO",
      icon: "fa-solid fa-chart-line",
    },
    {
      id: 9,
      title: "Payment Gateway",
      icon: "fa-solid fa-credit-card",
    },
    {
      id: 10,
      title: "Security",
      icon: "fa-solid fa-shield-halved",
    },
    {
      id: 11,
      title: "General Support",
      icon: "fa-solid fa-headset",
    },
    {
      id: 12,
      title: "Other",
      icon: "fa-solid fa-circle-question",
    },
  ];

  const progress = useMemo(() => {
    const values = [
      formData.fullName,
      formData.email,
      formData.phone,
      formData.company,
      formData.website,
      formData.category,
      formData.priority,
      formData.issueTitle,
      formData.issueDescription,
      formData.contactMethod,
    ];

    const completed = values.filter(
      (item) => item && item.toString().trim() !== "",
    ).length;

    return Math.round((completed / values.length) * 100);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.fullName.trim())
      newErrors.fullName = "Full name is required.";

    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Please enter a valid email address.";

    if (!/^[6-9]\d{9}$/.test(formData.phone))
      newErrors.phone = "Please enter a valid mobile number.";

    if (!formData.company.trim())
      newErrors.company = "Business name is required.";

    if (!formData.category)
      newErrors.category = "Please select a support category.";

    if (!formData.priority)
      newErrors.priority = "Please select the issue priority.";

    if (!formData.issueTitle.trim())
      newErrors.issueTitle = "Issue title is required.";

    if (formData.issueDescription.trim().length < 30)
      newErrors.issueDescription =
        "Please explain the issue in at least 30 characters.";

    if (!formData.contactMethod)
      newErrors.contactMethod = "Please select your preferred contact method.";

    if (!formData.agree)
      newErrors.agree = "Please accept the confirmation before submitting.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const supportMessage = `

🛠️ *NEW SUPPORT REQUEST*

━━━━━━━━━━━━━━━━━━━━

👤 Client
${formData.fullName}

🏢 Business
${formData.company}

🌐 Website
${formData.website || "Not Provided"}

📧 Email
${formData.email}

📱 Phone
${formData.phone}

━━━━━━━━━━━━━━━━━━━━

📂 Category
${formData.category}

🚨 Priority
${formData.priority}

📝 Issue

${formData.issueTitle}

${formData.issueDescription}

━━━━━━━━━━━━━━━━━━━━

💻 Device
${formData.device || "-"}

🌍 Browser
${formData.browser || "-"}

📄 Page URL
${formData.pageUrl || "-"}

☎ Preferred Contact
${formData.contactMethod}

📎 Attachments
${attachments.length}

━━━━━━━━━━━━━━━━━━━━

Submitted From

Support Page

━━━━━━━━━━━━━━━━━━━━

NexGen Web Designs
`;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      const form = new FormData();

      form.append("access_key", "YOUR_WEB3FORM_ACCESS_KEY");

      form.append("subject", "New Client Support Request");

      form.append("from_name", "NexGen Web Designs Support");

      form.append("message", supportMessage);

      attachments.forEach((file) => {
        form.append("attachment", file);
      });

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Support request submitted successfully.");

        openWhatsAppDialog();

        setFormData(initialState);

        setAttachments([]);
      } else {
        toast.error("Unable to submit your request.");
      }
    } catch (error) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const openWhatsAppDialog = () => {
    Swal.fire({
      icon: "question",

      title: "Share via WhatsApp?",

      text: "Do you also want to send this support request through WhatsApp?",

      showCancelButton: true,

      confirmButtonText: "Yes",

      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        window.open(
          `https://wa.me/918331889448?text=${encodeURIComponent(
            supportMessage,
          )}`,

          "_blank",
        );
      }
    });
  };

  const resetForm = () => {
    setFormData(initialState);

    setAttachments([]);

    setErrors({});
  };

  return (
    <section className="nxSupportPortal">
      <div className="container">
        {/* ============================ */}
        {/* HEADER */}
        {/* ============================ */}

        <div className="nxSupportPortal__header">
          <span className="nxSupportPortal__badge">CLIENT SUPPORT CENTER</span>

          <h2>
            Tell us what's happening.
            <br />
            We'll help you resolve it quickly.
          </h2>

          <p>
            Already a NexGen Web Designs client? Submit your issue below and our
            team will investigate it as soon as possible.
          </p>
        </div>

        {/* ============================ */}
        {/* PROGRESS */}
        {/* ============================ */}

        <div className="nxSupportPortal__progressWrapper">
          <div className="nxSupportPortal__progressTop">
            <h5>Support Request Progress</h5>

            <span>{progress}% Complete</span>
          </div>

          <div className="nxSupportPortal__progress">
            <div
              className="nxSupportPortal__progressFill"
              style={{
                width: `${progress}%`,
              }}
            ></div>
          </div>
        </div>

        {/* ============================ */}
        {/* FORM */}
        {/* ============================ */}

        <form onSubmit={handleSubmit}>
          <div className="nxSupportPortal__card">
            <div className="nxSupportPortal__cardTitle">
              <div className="nxSupportPortal__icon">
                <i className="fa-solid fa-user"></i>
              </div>

              <div>
                <h3>About You</h3>

                <p>
                  Please enter your contact details so we can identify your
                  account and reach you quickly.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div className="nxSupportPortal__field">
                  <label>
                    Full Name
                    <span>*</span>
                  </label>

                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                  />

                  {errors.fullName && <small>{errors.fullName}</small>}
                </div>
              </div>

              <div className="col-lg-6">
                <div className="nxSupportPortal__field">
                  <label>
                    Email Address
                    <span>*</span>
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                  />

                  {errors.email && <small>{errors.email}</small>}
                </div>
              </div>

              <div className="col-lg-6">
                <div className="nxSupportPortal__field">
                  <label>
                    Mobile Number
                    <span>*</span>
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                  />

                  {errors.phone && <small>{errors.phone}</small>}
                </div>
              </div>

              <div className="col-lg-6">
                <div className="nxSupportPortal__field">
                  <label>
                    Business Name
                    <span>*</span>
                  </label>

                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Business / Company Name"
                  />

                  {errors.company && <small>{errors.company}</small>}
                </div>
              </div>

              <div className="col-lg-12">
                <div className="nxSupportPortal__field">
                  <label>Website URL</label>

                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://yourwebsite.com"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* ==========================================================
SUPPORT CATEGORY
========================================================== */}

          <div className="nxSupportPortal__card">
            <div className="nxSupportPortal__cardTitle">
              <div className="nxSupportPortal__icon">
                <i className="fa-solid fa-layer-group"></i>
              </div>

              <div>
                <h3>Support Category</h3>

                <p>Select the type of issue you're experiencing.</p>
              </div>
            </div>

            <div className="nxSupportPortal__categoryGrid">
              {supportCategories.map((item) => (
                <div
                  key={item.id}
                  className={`nxSupportPortal__categoryCard ${
                    formData.category === item.title
                      ? "nxSupportPortal__categoryActive"
                      : ""
                  }`}
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      category: item.title,
                    }))
                  }
                >
                  <div className="nxSupportPortal__categoryIcon">
                    <i className={item.icon}></i>
                  </div>

                  <h5>{item.title}</h5>
                </div>
              ))}
            </div>

            {errors.category && (
              <small className="nxSupportPortal__error">
                {errors.category}
              </small>
            )}
          </div>

          {/* ==========================================================
PRIORITY
========================================================== */}

          <div className="nxSupportPortal__card">
            <div className="nxSupportPortal__cardTitle">
              <div className="nxSupportPortal__icon">
                <i className="fa-solid fa-bolt"></i>
              </div>

              <div>
                <h3>Issue Priority</h3>

                <p>Tell us how urgent this issue is.</p>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-lg-4">
                <div
                  className={`nxSupportPortal__priorityCard ${
                    formData.priority === "Low"
                      ? "nxSupportPortal__priorityActive"
                      : ""
                  }`}
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      priority: "Low",
                    }))
                  }
                >
                  <div className="nxSupportPortal__priorityTop">
                    <i className="fa-solid fa-face-smile"></i>

                    <span>Low</span>
                  </div>

                  <p>General questions or minor improvements.</p>
                </div>
              </div>

              <div className="col-lg-4">
                <div
                  className={`nxSupportPortal__priorityCard ${
                    formData.priority === "Medium"
                      ? "nxSupportPortal__priorityActive"
                      : ""
                  }`}
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      priority: "Medium",
                    }))
                  }
                >
                  <div className="nxSupportPortal__priorityTop">
                    <i className="fa-solid fa-triangle-exclamation"></i>

                    <span>Medium</span>
                  </div>

                  <p>
                    Something isn't working correctly but business is still
                    running.
                  </p>
                </div>
              </div>

              <div className="col-lg-4">
                <div
                  className={`nxSupportPortal__priorityCard ${
                    formData.priority === "High"
                      ? "nxSupportPortal__priorityActive"
                      : ""
                  }`}
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      priority: "High",
                    }))
                  }
                >
                  <div className="nxSupportPortal__priorityTop">
                    <i className="fa-solid fa-fire"></i>

                    <span>High</span>
                  </div>

                  <p>Website down, payment issue or business interruption.</p>
                </div>
              </div>
            </div>

            {errors.priority && (
              <small className="nxSupportPortal__error">
                {errors.priority}
              </small>
            )}
          </div>

          {/* ==========================================================
PREFERRED CONTACT METHOD
========================================================== */}

          <div className="nxSupportPortal__card">
            <div className="nxSupportPortal__cardTitle">
              <div className="nxSupportPortal__icon">
                <i className="fa-solid fa-headset"></i>
              </div>

              <div>
                <h3>Preferred Contact Method</h3>

                <p>How would you like us to contact you?</p>
              </div>
            </div>

            <div className="nxSupportPortal__contactMethods">
              <div
                className={`nxSupportPortal__contactCard ${
                  formData.contactMethod === "WhatsApp"
                    ? "nxSupportPortal__contactActive"
                    : ""
                }`}
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    contactMethod: "WhatsApp",
                  }))
                }
              >
                <i className="fa-brands fa-whatsapp"></i>

                <h5>WhatsApp</h5>

                <small>Fastest Response</small>
              </div>

              <div
                className={`nxSupportPortal__contactCard ${
                  formData.contactMethod === "Phone Call"
                    ? "nxSupportPortal__contactActive"
                    : ""
                }`}
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    contactMethod: "Phone Call",
                  }))
                }
              >
                <i className="fa-solid fa-phone"></i>

                <h5>Phone Call</h5>

                <small>Talk with our team</small>
              </div>

              <div
                className={`nxSupportPortal__contactCard ${
                  formData.contactMethod === "Email"
                    ? "nxSupportPortal__contactActive"
                    : ""
                }`}
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    contactMethod: "Email",
                  }))
                }
              >
                <i className="fa-solid fa-envelope"></i>

                <h5>Email</h5>

                <small>Detailed communication</small>
              </div>
            </div>

            {errors.contactMethod && (
              <small className="nxSupportPortal__error">
                {errors.contactMethod}
              </small>
            )}
          </div>
          {/* ==========================================================
ISSUE DETAILS
========================================================== */}

          <div className="nxSupportPortal__card">
            <div className="nxSupportPortal__cardTitle">
              <div className="nxSupportPortal__icon">
                <i className="fa-solid fa-file-circle-exclamation"></i>
              </div>

              <div>
                <h3>Issue Details</h3>

                <p>
                  Give us as much information as possible so we can resolve your
                  issue faster.
                </p>
              </div>
            </div>

            <div className="row">
              {/* Issue Title */}

              <div className="col-lg-12">
                <div className="nxSupportPortal__field">
                  <label>
                    Issue Title
                    <span>*</span>
                  </label>

                  <input
                    type="text"
                    name="issueTitle"
                    value={formData.issueTitle}
                    onChange={handleChange}
                    placeholder="Example : Homepage slider not loading"
                  />

                  {errors.issueTitle && <small>{errors.issueTitle}</small>}
                </div>
              </div>

              {/* Issue Description */}

              <div className="col-lg-12">
                <div className="nxSupportPortal__field">
                  <label>
                    Describe your issue
                    <span>*</span>
                  </label>

                  <textarea
                    rows={8}
                    maxLength={1200}
                    name="issueDescription"
                    value={formData.issueDescription}
                    onChange={handleChange}
                    placeholder="Please explain the issue clearly...

• What happened?
• When did it happen?
• Can you reproduce it?
• What did you expect to happen?
• Any error messages?"
                  ></textarea>

                  <div className="nxSupportPortal__textareaFooter">
                    <small>
                      More details help us resolve issues much faster.
                    </small>

                    <span>{formData.issueDescription.length}/1200</span>
                  </div>

                  {errors.issueDescription && (
                    <small>{errors.issueDescription}</small>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* ==========================================================
TECHNICAL INFORMATION
========================================================== */}

          <div className="nxSupportPortal__card">
            <div className="nxSupportPortal__cardTitle">
              <div className="nxSupportPortal__icon">
                <i className="fa-solid fa-laptop-code"></i>
              </div>

              <div>
                <h3>Technical Information</h3>

                <p>
                  These details help our developers identify the issue much
                  faster.
                </p>
              </div>
            </div>

            <div className="row">
              {/* Page URL */}

              <div className="col-lg-12">
                <div className="nxSupportPortal__field">
                  <label>Affected Page URL</label>

                  <input
                    type="text"
                    name="pageUrl"
                    value={formData.pageUrl}
                    onChange={handleChange}
                    placeholder="https://yourwebsite.com/contact"
                  />
                </div>
              </div>

              {/* Device */}

              <div className="col-lg-6">
                <div className="nxSupportPortal__field">
                  <label>Device</label>

                  <select
                    name="device"
                    value={formData.device}
                    onChange={handleChange}
                  >
                    <option value="">Select Device</option>

                    <option>Desktop</option>

                    <option>Laptop</option>

                    <option>Tablet</option>

                    <option>Android Phone</option>

                    <option>iPhone</option>
                  </select>
                </div>
              </div>

              {/* Browser */}

              <div className="col-lg-6">
                <div className="nxSupportPortal__field">
                  <label>Browser</label>

                  <select
                    name="browser"
                    value={formData.browser}
                    onChange={handleChange}
                  >
                    <option value="">Select Browser</option>

                    <option>Google Chrome</option>

                    <option>Microsoft Edge</option>

                    <option>Mozilla Firefox</option>

                    <option>Safari</option>

                    <option>Opera</option>

                    <option>Other</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* ==========================================================
SUPPORT TIPS
========================================================== */}

          <div className="nxSupportPortal__tips">
            <div className="nxSupportPortal__tipsIcon">
              <i className="fa-solid fa-lightbulb"></i>
            </div>

            <div>
              <h5>Tips for Faster Resolution</h5>

              <ul>
                <li>Provide the exact page where the issue occurs.</li>

                <li>Explain what you expected to happen.</li>

                <li>Mention if the issue happens every time.</li>

                <li>Add screenshots in the next step.</li>
              </ul>
            </div>
          </div>
          {/* ==========================================================
ATTACHMENTS
========================================================== */}

          <div className="nxSupportPortal__card">
            <div className="nxSupportPortal__cardTitle">
              <div className="nxSupportPortal__icon">
                <i className="fa-solid fa-paperclip"></i>
              </div>

              <div>
                <h3>Attachments</h3>

                <p>Upload screenshots, error images or supporting documents.</p>
              </div>
            </div>

            <label
              htmlFor="supportAttachment"
              className="nxSupportPortal__uploadArea"
            >
              <input
                id="supportAttachment"
                type="file"
                hidden
                multiple
                accept=".jpg,.jpeg,.png,.webp,.pdf"
                onChange={handleAttachmentChange}
              />

              <div className="nxSupportPortal__uploadIcon">
                <i className="fa-solid fa-cloud-arrow-up"></i>
              </div>

              <h4>Drag & Drop Files Here</h4>

              <p>or click to browse files</p>

              <small>
                JPG • PNG • WEBP • PDF
                <br />
                Maximum 10MB per file
              </small>
            </label>

            {attachments.length > 0 && (
              <div className="nxSupportPortal__attachmentList">
                {attachments.map((file, index) => (
                  <div className="nxSupportPortal__attachmentCard" key={index}>
                    <div className="nxSupportPortal__attachmentLeft">
                      <div className="nxSupportPortal__attachmentIcon">
                        {file.type.includes("image") ? (
                          <i className="fa-solid fa-image"></i>
                        ) : (
                          <i className="fa-solid fa-file-pdf"></i>
                        )}
                      </div>

                      <div>
                        <h5>{file.name}</h5>

                        <span>{(file.size / 1024 / 1024).toFixed(2)} MB</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeAttachment(index)}
                    >
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* ==========================================================
LIVE SUPPORT SUMMARY
========================================================== */}

          <div className="row g-4">
            {/* LEFT */}

            <div className="col-lg-8">
              <div className="nxSupportPortal__card">
                <div className="nxSupportPortal__cardTitle">
                  <div className="nxSupportPortal__icon">
                    <i className="fa-solid fa-file-circle-check"></i>
                  </div>

                  <div>
                    <h3>Support Request Summary</h3>

                    <p>
                      Review the information before submitting your request.
                    </p>
                  </div>
                </div>

                <div className="nxSupportPortal__summaryGrid">
                  <div className="nxSupportPortal__summaryItem">
                    <span>Business</span>
                    <h6>{formData.company || "-"}</h6>
                  </div>

                  <div className="nxSupportPortal__summaryItem">
                    <span>Support Type</span>
                    <h6>{formData.category || "-"}</h6>
                  </div>

                  <div className="nxSupportPortal__summaryItem">
                    <span>Priority</span>
                    <h6>{formData.priority || "-"}</h6>
                  </div>

                  <div className="nxSupportPortal__summaryItem">
                    <span>Preferred Contact</span>
                    <h6>{formData.contactMethod || "-"}</h6>
                  </div>

                  <div className="nxSupportPortal__summaryItem">
                    <span>Attachments</span>
                    <h6>{attachments.length}</h6>
                  </div>

                  <div className="nxSupportPortal__summaryItem">
                    <span>Website</span>
                    <h6>{formData.website || "-"}</h6>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}

            <div className="col-lg-4">
              <div className="nxSupportPortal__responseCard">
                <div className="nxSupportPortal__responseIcon">
                  <i className="fa-solid fa-headset"></i>
                </div>

                <h4>Estimated Response</h4>

                <h2>&lt; 2 Hours</h2>

                <p>During our business hours.</p>

                <ul>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Dedicated Support
                  </li>

                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Technical Investigation
                  </li>

                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Progress Updates
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ==========================================================
SECURITY
========================================================== */}

          <div className="nxSupportPortal__security">
            <i className="fa-solid fa-shield-halved"></i>

            <div>
              <h4>Your Information is Secure</h4>

              <p>
                All submitted information is encrypted and used only for
                resolving your support request.
              </p>
            </div>
          </div>

          {/* ==========================================================
AGREEMENT
========================================================== */}

          <div className="nxSupportPortal__agree">
            <label>
              <input
                type="checkbox"
                checked={formData.agree}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    agree: e.target.checked,
                  }))
                }
              />

              <span>
                I confirm that all the information provided above is correct,
                and I authorize NexGen Web Designs to contact me regarding this
                support request.
              </span>
            </label>

            {errors.agree && <small>{errors.agree}</small>}
          </div>

          {/* ==========================================================
SUBMIT BUTTON
========================================================== */}

          <div className="nxSupportPortal__submitWrapper">
            <button
              type="submit"
              className="nxSupportPortal__submitBtn"
              disabled={loading}
            >
              {loading ? (
                <>
                  <i className="fa-solid fa-spinner fa-spin"></i>
                  Sending Request...
                </>
              ) : (
                <>
                  <i className="fa-solid fa-paper-plane"></i>
                  Submit Support Request
                </>
              )}
            </button>
          </div>

          {/* ==========================================================
EMERGENCY SUPPORT
========================================================== */}

          <div className="nxSupportPortal__emergency">
            <div className="nxSupportPortal__emergencyIcon">
              <i className="fa-solid fa-phone-volume"></i>
            </div>

            <div>
              <h4>Need Immediate Help?</h4>

              <p>
                If your website is completely down or your business is affected,
                contact us immediately.
              </p>
            </div>

            <a
              href="https://wa.me/918331889448"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-whatsapp"></i>
              WhatsApp Now
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SupportForm;
