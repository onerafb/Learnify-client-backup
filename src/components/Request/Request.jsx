import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import "./request.css";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import toast from "react-hot-toast";
import { courseRequest } from "../../redux/actions/other";

const request = () => {
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [course, setcourse] = useState("");
  const dispatch = useDispatch();
  const { error, message: stateMessage } = useSelector((state) => state.other);

  const submitHandler = (e) => {
    e.preventDefault();

 
    dispatch(courseRequest(name, email, course));
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
    <section className="request-section">
      <Navbar />
      <h2 className="request-h2"> REQUEST</h2>
      <form className="request-form" onSubmit={submitHandler}>
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
