import React, { useState } from "react";
import Navbar from "../Navbar/Navbar.jsx";
import { Link } from "react-router-dom";
import "./contact.css";
const Contact = () => {
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [message, setmessage] = useState("");
  return (
    <>
      <section className="contact-section">
        <Navbar />
        <h2 className="contact-h2"> CONTACT US</h2>
        <form className="contact-form">
          <input
            type="text"
            onChange={(e) => setname(e.target.value)}
            placeholder="Enter Name"
            value={name}
            className="contact-input"
            required
          />
          <input
            type="email"
            onChange={(e) => setemail(e.target.value)}
            placeholder="Enter Email"
            value={email}
            className="contact-input"
            required
          />
          <input
            type="text"
            onChange={(e) => setmessage(e.target.value)}
            placeholder="Enter Message"
            value={message}
            className="contact-input"
            required
          />
          <button type="submit" className="contact-bt">
            {" "}
            Send Mail
          </button>

          <Link to="/request" className="contact-sign">
            Request a course ? <span>Click</span> here
          </Link>
        </form>
      </section>
    </>
  );
};

export default Contact;
