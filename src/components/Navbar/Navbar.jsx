import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import toast,{Toaster} from "react-hot-toast"

import "./navbar.css";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/user";
const Navbar = ({ isAuthenticated = false, user }) => {
  const [state, setstate] = useState(false);
  const hs = () => {
    setstate(!state);
  };
  // const { isAuthenticated, user } = useSelector(
  //   (state) => state.user
  // );
  // const isAuthenticated = false;

  // const user = {
  //   role: "admin",
  // };
  const dispatch = useDispatch();
  const logouthandler = () => {
    setstate(!state);
    dispatch(logout());
  };

  return (
    <>
      <nav>
        <div className="logo">LOGO</div>
        <div className="bars" onClick={hs}>
          {state ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </div>
        <ul className={state ? "ul-one" : "ul-one active"}>
          <Link to="/" className="link-pd" onClick={hs}>
            Home
          </Link>
          <Link to="/about" className="link-pd" onClick={hs}>
            About
          </Link>
          <Link to="/request" className="link-pd" onClick={hs}>
            Request-Course
          </Link>
          <Link to="/courses" className="link-pd" onClick={hs}>
            All-Course
          </Link>
          <Link to="/contact" className="link-pd" onClick={hs}>
            Contact
          </Link>
          {isAuthenticated ? (
            <>
              <Link to="/profile" className="link" onClick={hs}>
                <button className="nav-bt">Profile</button>
              </Link>
              <p className="or">OR</p>
              <button onClick={logouthandler} className="nav-bt nav-logout">
                Logout
              </button>
              {user && user.role === "admin" && (
                <Link to="/admin/admincourses" className="link" onClick={hs}>
                  <button className="nav-bt">Dashboard</button>
                </Link>
              )}
            </>
          ) : (
            <>
              <Link to="/login" className="link" onClick={hs}>
                <button className="nav-bt">Login</button>
              </Link>
              <p className="or">OR</p>
              <Link to="/register" className="link" onClick={hs}>
                <button className="nav-bt">Sign-Up</button>
              </Link>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
