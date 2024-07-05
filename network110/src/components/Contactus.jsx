import React, { useEffect } from "react";
import "../css/contactForm.css";
import "../css/aboutUs.css";
import "animate.css/animate.min.css"; // Import animate.css
import ScrollReveal from "scrollreveal";

const ContactForm = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "bottom",
      distance: "200px",
      duration: 1000,
      delay: 200,
      reset: true,
    });

    sr.reveal(".contact-form", {
      interval: 200,
    });
    sr.reveal(".form-group", {
      interval: 300,
      origin: "left",
    });
  }, []);

  return (
    <div>
      <div className="card-heading-service about-us" id="form">
        <h1>
          {" "}
          <span>اتصل بنا</span>
        </h1>
      </div>
      <div className="contactForm-container">
        <div className="form-container container">
          <form className="contact-form">
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                name="phone"
                maxLength="13"
                className="form-control"
                placeholder="Phone"
              />
            </div>
            <div className="form-group">
              <textarea
                name="address"
                className="form-control full-width"
                placeholder="Your physical address."
                required
              ></textarea>
            </div>
            <div className="btn-container animate__animated">
              <button type="submit">
                <span>أرسل رسالة</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
