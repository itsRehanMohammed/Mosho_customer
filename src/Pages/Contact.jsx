import { color } from "@mui/system";
import React, { useReducer, useState } from "react";
import "./contact.css";

const Contact = () => {
  const [contactData, setcontactData] = useState({
    query: "",
    phone: "",
    email: "",
  });

  const [modal, setModal] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setcontactData({ query: "", phone: "", email: "" });
    console.log({
      query: data.get("contactQuery"),
      email: data.get("contactEmail"),
    });
    setModal(true);
    setTimeout(() => {
      setModal(false);
    }, 12000);
  };

  const contactImg =
    "data:image/jpeg;base64,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";
  const onChangeHandler = (e) => {
    setcontactData({ ...contactData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="contact">
        <div className="contact_wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-head">
              <h2>Contact Us</h2>
            </div>
            <div className="customer_query">
              <input
                onChange={(e) => onChangeHandler(e)}
                value={contactData.query}
                required
                autoComplete="true"
                type="text"
                placeholder="What's your query?"
                className="contact_Query"
                id="contactQuery"
                name="query"
              />
            </div>
            <div className="customer_email">
              <input
                onChange={(e) => onChangeHandler(e)}
                value={contactData.phone}
                required
                autoComplete="true"
                type="number"
                placeholder="enter your phone no."
                className="contact_email"
                id="contactEmail"
                name="phone"
              />
            </div>
            <div className="customer_email">
              <input
                onChange={(e) => onChangeHandler(e)}
                value={contactData.email}
                required
                autoComplete="true"
                type="email"
                placeholder="enter your email "
                className="contact_email"
                id="contactEmail"
                name="email"
              />
            </div>
            <button type="submit" className="contact_btn">
              Send{" "}
            </button>
          </form>
          <div className="contact_img">
            <img src={contactImg} alt="" />
          </div>
        </div>

        <div className="contact_details">
          <div className="company_working_hours">
            {" "}
            <h4>WORKING HOURS:</h4>
            <p>Mon: 11:00 AM – 1:00 AM </p>
            <p>Tue: 11:00 AM – 1:00 AM</p>
            <p>Wed: 11:00 AM – 1:00 AM</p>
            <p>Thu: 11:00 AM – 1:00 AM</p>
            <p>Fri: 11:00 AM – 1:00 AM</p>
            <p>Sat: 11:00 AM – 1:00 AM</p>
            <p>Sun: 11:00 AM – 1:00 AM</p>
          </div>

          <div className="company_phone">
            {" "}
            <h4>PHONE:</h4>
            <a href="tel:+918097167143" target={"_blank"}>
              {" "}
              +91 80971 67143
            </a>
            <a href="tel:+918097845143" target={"_blank"}>
              {" "}
              +91 80978 45143
            </a>
            <a
              href="tel:+918828330006
"
              target={"_blank"}
            >
              +91 88283 30006
            </a>
          </div>

          <div className="company_address">
            {" "}
            <h4>OUR ADDRESS</h4>
            <a href="https://goo.gl/maps/AXzA3HMU2Vxn8ezT7" target={"_blank"}>
              MOSHO, Shop 21,Mini Market Sector 10, Vashi Navi Mumbai,
              Maharashtra 400703 India
            </a>
          </div>
        </div>
      </div>
      <div
        className={
          modal ? "query_submit_modal modal_active" : "query_submit_modal"
        }
      >
        <p>
          Thank You for contacting us! We will be responding withing 24 hours to
          the email entered
        </p>
        <button onClick={() => setModal(false)}>OK</button>
      </div>
    </>
  );
};

export default Contact;
// https://img.freepik.com/free-vector/email-marketing-internet-chatting-24-hours-support_335657-3009.jpg?size=626&ext=jpg&ga=GA1.2.1777897027.1675625974&semt=ais

//  https://img.freepik.com/free-vector/contact-us-landing-page-illustration_52683-18236.jpg?size=626&ext=jpg&ga=GA1.2.1777897027.1675625974&semt=ais
