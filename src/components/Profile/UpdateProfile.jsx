import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./profilestyle/updateprofile.css";
import { useDispatch } from "react-redux";
import { updateProfile } from "../../redux/actions/profile";
import { loadUser } from "../../redux/actions/user";
import { useNavigate } from "react-router-dom";
const UpdateProfile = ({ user }) => {
  const [name, setname] = useState(user.name);
  const [email, setemail] = useState(user.email);
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const submitHandler = async (e) => {
    e.preventDefault();
   await dispatch(updateProfile(name, email));
    dispatch(loadUser());
    navigate('/profile')
  };
  return (
    <section className="up-p-sec">
      <Navbar />
      <h2 className="up-p-h2">UpdateProfile</h2>
      <form className="up-p-form" onSubmit={submitHandler}>
        <input
          type="text"
          onChange={(e) => setname(e.target.value)}
          placeholder="Enter name"
          value={name}
          className="up-p-input"
          required
        />
        <input
          type="text"
          onChange={(e) => setemail(e.target.value)}
          placeholder="Enter email"
          value={email}
          className="up-p-input"
          required
        />
        <button type="submit" className="up-p-bt">
          Change
        </button>
      </form>
    </section>
  );
};

export default UpdateProfile;
