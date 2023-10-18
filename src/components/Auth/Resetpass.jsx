import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./auth-style/resetpass.css";
import Navbar from "../Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../redux/actions/profile";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Resetpass = () => {
  const [password, setpassword] = useState("");
  const params = useParams();
  const navigate = useNavigate();
  const { loading, message, error } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(resetPassword(params.token, password));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
      navigate("/login");
    }
  }, [dispatch, error, message]);
  return (
    <section className="reset-pass">
      <Navbar />
      <form className="reset-form" onSubmit={submitHandler}>
        <input
          type="password"
          onChange={(e) => setpassword(e.target.value)}
          placeholder="Enter new password"
          value={password}
          className="reset-input"
          required
        />
        <button type="submit" className="reset-bt">
          Update Password
        </button>
      </form>
    </section>
  );
};

export default Resetpass;
