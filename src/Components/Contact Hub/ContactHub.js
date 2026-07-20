import {
  phoneNumber,
  whatsappNumber,
  whatsappNumber1,
  emailAddress,
  emailAddress1,
} from "./../../Data/BrandData";

import "./ContactHub.css";

const contactGroups = [
  {
    title: "Call Us",
    subtitle: "Speak directly with our team",
    icon: "fa-solid fa-phone-volume",
    color: "blue",
    items: [
      {
        label: "Sales",
        value: phoneNumber,
        link: `tel:${phoneNumber}`,
      },
      {
        label: "Support",
        value: phoneNumber,
        link: `tel:${phoneNumber}`,
      },
    ],
  },

  {
    title: "WhatsApp",

    subtitle: "Get a quick response",

    icon: "fa-brands fa-whatsapp",

    color: "green",

    items: [
      {
        label: "Sales",

        value: whatsappNumber,

        link: `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`,
      },

      {
        label: "Support",

        value: whatsappNumber1,

        link: `https://wa.me/${whatsappNumber1.replace(/\D/g, "")}`,
      },
    ],
  },

  {
    title: "Email",

    subtitle: "Send your requirements",

    icon: "fa-solid fa-envelope",

    color: "orange",

    items: [
      {
        label: "General",

        value: emailAddress,

        link: `mailto:${emailAddress}`,
      },

      {
        label: "Support",

        value: emailAddress1,

        link: `mailto:${emailAddress1}`,
      },
    ],
  },
];

export default function ContactHub() {
  return (
    <section className="contactHubSection">
      <div className="container">
        <div className="contactHub">
          {/* LEFT */}

          <div className="contactHubIntro">
            <span>Contact NexGen</span>

            <h2>Let's Build Something Amazing Together.</h2>

            <p>
              Whether you're planning a business website, redesigning an
              existing one, or simply looking for expert guidance, our team is
              ready to help.
            </p>

            <div className="contactStats">
              <div>
                <h3>24/7</h3>

                <span>Support</span>
              </div>

              <div>
                <h3>30 Minutes</h3>

                <span>Response</span>
              </div>
            </div>

            <button className="meetingBtn">
              <i className="fa-solid fa-calendar-check"></i>
              Schedule Free Consultation
            </button>
          </div>

          {/* RIGHT */}

          <div className="contactHubContent">
            {contactGroups.map((group, index) => (
              <div className={`contactRow ${group.color}`} key={index}>
                <div className="contactRowHeader">
                  <div className="contactRowIcon">
                    <i className={group.icon}></i>
                  </div>

                  <div>
                    <h3>{group.title}</h3>

                    <span>{group.subtitle}</span>
                  </div>
                </div>

                <div className="contactLinks">
                  {group.items.map((item, i) => (
                    <a key={i} href={item.link}>
                      <strong>{item.label}</strong>

                      <span>{item.value}</span>

                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
