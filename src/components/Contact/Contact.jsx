import React, { useState } from "react";
import Navbar from "../Navbar/Navbar.jsx";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { contactUs } from "../../redux/actions/other";
import "./contact.css";
import toast from "react-hot-toast";
import { useEffect } from "react";
const Contact = () => {
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [message, setmessage] = useState("");

  const dispatch = useDispatch();
  const { error, message:stateMessage } = useSelector((state) => state.other);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(contactUs(name, email, message));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    if (stateMessage) {
      toast.success(stateMessage);
      dispatch({ type: "clearMessage" });
    }
 
  }, [dispatch, error, stateMessage]);
  return (
    <>
      <section className="contact-section">
        <Navbar />
        <h2 className="contact-h2"> CONTACT US</h2>
        <form className="contact-form" onSubmit={submitHandler}>
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
