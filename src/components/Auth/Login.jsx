import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useDispatch } from "react-redux";
// import {BiLogoGmail} from "react-icons/bi"
// import {BiSolidLockAlt} from "react-icons/bi"
import "./auth-style/login.css";
import { login } from "../../redux/actions/user";
const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email,password))
  };
  return (
    <>
      <section className="login-section">
        {/* <Navbar /> */}
        <h2> LOGIN</h2>
        <form className="login-form" onSubmit={submitHandler}>
          {/* <i><BiLogoGmail/></i> */}
          <input
            type="email"
            onChange={(e) => setemail(e.target.value)}
            placeholder="Enter Email"
            value={email}
            className="login-input"
            required
          />
          {/* <i><BiSolidLockAlt/></i> */}
          <input
            type="password"
            onChange={(e) => setpassword(e.target.value)}
            placeholder="Enter Password"
            value={password}
            className="login-input"
            required
          />
          <button type="submit" className="login-bt">
            {" "}
            Login
          </button>
          <Link to="/forgetpassword" className="forget-login">
            <button>Forget Password ?</button>
          </Link>

          <Link to="/register" className="login-sign">
            <span>New here?</span>
            <button>Sign-Up</button>
          </Link>
        </form>
      </section>
    </>
  );
};

export default Login;
