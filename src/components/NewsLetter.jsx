import React from "react";

const NewsLetter = () => {
  return (
    <section id="newsletter" className="section-p1 section-m1">
      <div className="newstext">
        <h4>Sign Up</h4>
        <p>
          Updates about our latest Product and /
          <span>special offers</span>
        </p>
      </div>
      <div className="form">
        <input type="text" placeholder="Your email address" />
        <button className="normal">SEND-Mail</button>
      </div>
    </section>
  );
};

export default NewsLetter;
