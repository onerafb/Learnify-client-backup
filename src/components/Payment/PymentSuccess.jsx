import React from "react";
import "./pay-style/paymentsuccess.css";
import Navbar from "../Navbar/Navbar";
import { Link,useSearchParams } from "react-router-dom";
const PymentSuccess = () => {
  const reference=useSearchParams()[0].get('reference')
  return (
    <section className="pay-suc">
      <Navbar/>
      <h2 className="pay-suc-h2">Congratulations..</h2>
      <div className="pay-suc-con">
        <div className="pay-suc-one">
          <p>Payment Successful.</p>
        </div>
        <div className="pay-suc-two">
        <p className="p1"> Congratulation you'r a premium member. You have access to exclusive
          content.</p> 
          <p className="p2">correct symbol</p>
          <Link to='/profile' className="pay-suc-link">
          <button>Go to Profile</button>
          </Link>
          <h4>Reference:{reference}</h4>
        </div>
      </div>
    </section>
  );
};

export default PymentSuccess;
 