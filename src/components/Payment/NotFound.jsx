import React from "react";
import "./pay-style/notfound.css";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <section className="pagenotfound">
      <div className="pagenotfound-con">
        <h2 className="pagenotfoundh2">Page Not Found !</h2>
        <Link to="/" className="pagenotfoundlink">
          <button>Go to home</button>
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
