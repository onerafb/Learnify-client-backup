import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import "./profilestyle/changepassword.css";
import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "../../redux/actions/profile";
import toast from "react-hot-toast";

const ChangePassword = () => {
  const [oldpassword, setoldpassword] = useState("");
  const [newpassword, setnewpassword] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(changePassword(oldpassword, newpassword));
  };

  const { loading, message, error } = useSelector((state) => state.profile);
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
    <section className="ch-pass">
      <Navbar />
      <h2 className="ch-pass-h2">ChangePassword</h2>
      <form className="ch-pass-form" onSubmit={submitHandler}>
        <input
          type="password"
          onChange={(e) => setoldpassword(e.target.value)}
          placeholder="Enter Password"
          value={oldpassword}
          className="ch-pass-input"
          required
        />
        <input
          type="password"
          onChange={(e) => setnewpassword(e.target.value)}
          placeholder="Enter New Password"
          value={newpassword}
          className="ch-pass-input"
          required
        />
        <button type="submit" className="ch-pass-bt" >
          Change
        </button>
      </form>
    </section>
  );
};

export default ChangePassword;
