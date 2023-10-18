import React from "react";
import "./pay-style/subscribe.css";
import Navbar from "../Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { server } from "../../redux/store";
import { buySubscription } from "../../redux/actions/user";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import logo from "../../assets/images/logo.jpg";
import axios from "axios";
const Subscribe = ({ user }) => {
  const dispatch = useDispatch();

  const [key, setkey] = useState("");

  const { error, subscriptionId } = useSelector((state) => state.subscription);
  const { error: courseError } = useSelector((state) => state.course);

  const subscribeHandler = async () => {
    const { data } = await axios.get(`${server}/razorpaykey`);
    setkey(data.key);
    dispatch(buySubscription());
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    if (courseError) {
      toast.error(courseError);
      dispatch({ type: "clearError" });
    }
    if (subscriptionId) {
      const opoenPopUp = () => {
        const options = {
          key,
          name: "Learnify",
          image: logo,
          subscription_id: subscriptionId,
          callback_url: `${server}/paymentverification`,
          prefill: {
            name: user.name,
            email: user.email,
            contact: "",
          },
          notes: {
            address: "Learnify",
          },
          theme: {
            color: "#FFC800",
          },
        };

        const razor = new window.Razorpay(options);
        razor.open();
      };
      opoenPopUp();
    }
  }, [dispatch, error,courseError, user.name, user.email, key, subscriptionId]);

  return (
    <section className="sub-con">
      <Navbar />
      <h2>WELCOME</h2>
      <div className="sub-mid">
        <div className="sub-mid-one">
          <p>Pro Pack : 999rs</p>
        </div>
        <div className="sub-mid-two">
          <p>Join pro program and get access to all exclusive content.</p>
          <h3>999rs Only</h3>
          <button onClick={subscribeHandler}>Buy Now</button>
        </div>
        <div className="sub-mid-three">100% REFUND ON CANCELLATION</div>
      </div>
    </section>
  );
};

export default Subscribe;
