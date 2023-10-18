import React from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import "./home.css";
const Home = () => {
  return (
    <>
      <section className="home-section">
        <Navbar />
        <div className="left">
          <div className="left-content">
            <h1>LEARN FROM THE EXPERTS.</h1>
            <p>With Our Valuable Content.</p>
            <Link to="/">
              <button>Explore</button>
            </Link>
          </div>
        </div>
        <div className="right"></div>
      </section>
    </>
  );
};

export default Home;
