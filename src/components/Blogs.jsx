import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <section id="blog">
      <div className="blog-box">
        <div className="img-box">
          <img src={assets.blog1} alt="" />
        </div>
        <div className="blog-details">
          <h4>Explore the World of Haval: Premium SUVs Designed for Adventure – Only on Haval</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
            explicabo cumque repellendus esse corporis minus numquam animi?
            Excepturi nesciunt perferendis numquam? Maxime in dignissimos
            repellendus totam quos sint temporibus molestiae quidem, aliquam
            blanditiis qui, esse obcaecati nisi omnis, minima nostrum magnam
            accusantium cumque mollitia culpa. Similique natus molestiae
            consectetur maiores.
          </p>
        </div>
      </div>

      <div className="blog-box">
        <div className="img-box">
          <img src={assets.blog2} alt="" />
        </div>
        <div className="blog-details">
          <h4>Discover Haval's Innovation and Power – Visit Haval Today!</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
            explicabo cumque repellendus esse corporis minus numquam animi?
            Excepturi nesciunt perferendis numquam? Maxime in dignissimos
            repellendus totam quos sint temporibus molestiae quidem, aliquam
            blanditiis qui, esse obcaecati nisi omnis, minima nostrum magnam
            accusantium cumque mollitia culpa. Similique natus molestiae
            consectetur maiores.
          </p>
        </div>
      </div>

      <div className="blog-box">
        <div className="img-box">
          <img src={assets.blog3} alt="" />
        </div>
        <div className="blog-details">
          <h4>Your Gateway to Luxury and Performance: Haval SUVs Await You</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
            explicabo cumque repellendus esse corporis minus numquam animi?
            Excepturi nesciunt perferendis numquam? Maxime in dignissimos
            repellendus totam quos sint temporibus molestiae quidem, aliquam
            blanditiis qui, esse obcaecati nisi omnis, minima nostrum magnam
            accusantium cumque mollitia culpa. Similique natus molestiae
            consectetur maiores.
          </p>
        </div>
      </div>

      <div className="blog-box">
        <div className="img-box">
          <img src={assets.blog4} alt="" />
        </div>
        <div className="blog-details">
          <h4>Drive into the Future with Haval SUVs – Browse Now on Haval</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
            explicabo cumque repellendus esse corporis minus numquam animi?
            Excepturi nesciunt perferendis numquam? Maxime in dignissimos
            repellendus totam quos sint temporibus molestiae quidem, aliquam
            blanditiis qui, esse obcaecati nisi omnis, minima nostrum magnam
            accusantium cumque mollitia culpa. Similique natus molestiae
            consectetur maiores.
          </p>
        </div>
      </div>

    </section>
  );
};

export default Blogs;
