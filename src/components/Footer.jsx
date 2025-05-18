import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="section-p1">
      <div className="col">
        <img src={assets.logo} alt="Logo" className="logo" />
      </div>

      <div className="col">
        <h4>About</h4>
        <a href="#">About Us</a>
        <a href="#">Delivery Information</a>
        <a href="#">Privacy policy</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Contact US</a>
      </div>

      <div className="col">
      <h4>Contact</h4>
        <p>
          <b>Address:</b> Superior University of Lahore(IET)
        </p>
        <p>
          <b>Phone:</b> +923264732840
        </p>
        <p>
          <b>E-Mail:</b> su91-bietm-f22-008@superior.edu.pk
        </p>
      </div>
    </footer>
  );
};

export default Footer;
