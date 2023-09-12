import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <h2 className="contact-heading" id="credits">
        CONNECT WITH ME
      </h2>
      <div className="contact-links">
        <a href="https://www.linkedin.com/in/nehan-sudasinghe/" target="_blank">
          <img
            src="/assets/images/linked_logo.png"
            width="40"
            className="contact-images"
          />
        </a>
        <a href="https://github.com/8xNehanSS" target="_blank">
          <img
            src="/assets/images/gitlogo.png"
            width="40"
            className="contact-images"
          />
        </a>
      </div>
      <p className="contact-description">
        Feel free to reach out to me via email anytime. I'm here to connect and
        engage in meaningful conversations. Please be assured that I have no
        intentions of sending spam. For any work-related inquiries, direct them
        to below Email.<br></br>
        <br></br>
        Email:
      </p>
      <p className="contact-email">nehan.sudasinghe@gmail.com</p>
    </>
  );
};

export default Contact;
