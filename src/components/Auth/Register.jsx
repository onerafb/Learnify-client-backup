import React, { useState } from "react";
// import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import "./auth-style/register.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/actions/user";
// import { BiSolidUser } from "react-icons/bi";
// import { BiLogoGmail } from "react-icons/bi";
// import { BiSolidLockAlt } from "react-icons/bi";
const Register = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");
  const [imagePrev, setimagePrev] = useState("");
  const [image, setimage] = useState("");

  const dispatch = useDispatch();

  const changeImageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setimagePrev(reader.result);
      setimage(file);
    };
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append("name", name);
    myForm.append("email", email);
    myForm.append("password", password);
    myForm.append("file", image);
    dispatch(register(myForm));
  };
  return (
    <>
      <section className="register-section">
        {/* <Navbar /> */}
        <h2 className="reg-h2"> Register</h2>
        <form className="register-form" onSubmit={submitHandler}>
          <div className="reg-img">
            <img src={imagePrev} alt="" />
          </div>
          <i>{/* <BiSolidUser /> */}</i>
          <input
            type="text"
            onChange={(e) => setname(e.target.value)}
            placeholder="Enter Name"
            value={name}
            className="register-input"
            required
          />
          <i>{/* <BiLogoGmail /> */}</i>
          <input
            type="email"
            onChange={(e) => setemail(e.target.value)}
            placeholder="Enter Email"
            value={email}
            className="register-input"
            required
          />
          <i>{/* <BiSolidLockAlt /> */}</i>
          <input
            type="password"
            onChange={(e) => setpassword(e.target.value)}
            placeholder="Enter Password"
            value={password}
            className="register-input"
            required
          />
          <div className="avatar-div">
            <label htmlFor="avatar" className="label">
              Choose Avatar
            </label>
            <input
              type="file"
              accept="image/*"
              className="choose"
              onChange={changeImageHandler}
              required
            />
          </div>

          <button type="submit" className="register-bt">
            {" "}
            Sign-up
          </button>

          <Link to="/login" className="register-sign">
            <span> Already a user?</span>
            <button>Login</button>
          </Link>
        </form>
      </section>
    </>
  );
};

export default Register;
