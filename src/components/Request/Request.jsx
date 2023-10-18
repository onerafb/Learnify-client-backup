import React,{useState} from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import "./request.css";
const request = () => {
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [course, setcourse] = useState("");
  return (
    <section className="request-section">
      <Navbar />
      <h2 className="request-h2"> REQUEST</h2>
      <form className="request-form">
        <input
          type="text"
          onChange={(e) => setname(e.target.value)}
          placeholder="Enter Name"
          value={name}
          className="request-input"
          required
        />
        <input
          type="email"
          onChange={(e) => setemail(e.target.value)}
          placeholder="Enter Email"
          value={email}
          className="request-input"
          required
        />
        <input
          type="text"
          onChange={(e) => setcourse(e.target.value)}
          placeholder="Enter course name"
          value={course}
          className="request-input"
          required
        />
        <button type="submit" className="request-bt">
          {" "}
          Send Mail
        </button>

        <Link to="/courses" className="request-sign">
          See available courses ? <span>Click</span> here
        </Link>
      </form>
    </section>
  );
};

export default request;
