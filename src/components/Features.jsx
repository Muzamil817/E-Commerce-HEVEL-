import React from "react";
import { assets } from "../assets/assets";

const Features = () => {
  return (
    <section id="feature" className="section-p1">
      <div className="fe-box">
        <img src={assets.fea1} alt="feature" />
        <h6>Free Shipping</h6>
      </div>
      <div className="fe-box">
        <img src={assets.fea2} alt="feature" />
        <h6>Online Booking</h6>
      </div>
      <div className="fe-box">
        <img src={assets.fea3} alt="feature" />
        <h6>Save Money</h6>
      </div>
      <div className="fe-box">
        <img src={assets.fea4} alt="feature" />
        <h6>Promotions</h6>
      </div>
      <div className="fe-box">
        <img src={assets.fea5} alt="feature" />
        <h6>Happy Sell</h6>
      </div>
      <div className="fe-box">
        <img src={assets.fea6} alt="feature" />
        <h6>F24/7 Support</h6>
      </div>
    </section>
  );
};

export default Features;
