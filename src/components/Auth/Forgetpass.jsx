import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./auth-style/forgetpass.css";
import { useDispatch, useSelector } from "react-redux";
import { forgetPassword } from "../../redux/actions/profile";
import { useEffect } from "react";
import toast from "react-hot-toast";
const Forgetpass = () => {
  const [email, setemail] = useState("");
  const { loading, message, error } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(forgetPassword(email));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message]);
  return (
    <>
      <section className="forget-pass">
        <Navbar />

        <form className="forget-form" onSubmit={submitHandler}>
          <input
            type="email"
            onChange={(e) => setemail(e.target.value)}
            placeholder="Enter Email"
            value={email}
            className="forget-input"
            required
          />
          <button type="submit" className="forget-bt">
            Send reset link
          </button>
        </form>
      </section>
    </>
  );
};

export default Forgetpass;
