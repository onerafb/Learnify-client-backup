import React from "react";
import "./pay-style/paymentfail.css";
import { Link } from "react-router-dom";
const PaymentFail = () => {
  return (
    <section className="paymentfail">
      <div className="paymentfail-con">
        <h2 className="paymentfailh2">Payment Fail !</h2>
        <Link to="/" className="paymentfaillink">
          <button>Go to home</button>
        </Link>
      </div>
    </section>
  );
};

export default PaymentFail;
