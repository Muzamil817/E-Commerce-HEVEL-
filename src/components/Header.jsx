import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { IoBagHandleOutline } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";
import { StoreContext } from "../context/ContextapiStore";
import Login from "./Login";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const { cartItems } = useContext(StoreContext);
  const [isForm, setIsForm] = useState(false);
  const isActive = (path) => location.pathname === path;
  const [activeClass, setActiveClass] = useState("");

  return (
    <section id="header">
      <Link to="/">
        <img src={assets.logo} />
      </Link>
      <div>
        <ul id="navbar" className={activeClass}>
          <li>
            <Link to="/" className={isActive("/") ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className={isActive("/shop") ? "active" : ""}>
              Shop
            </Link>
          </li>
          <li>
            <Link to="/blogs" className={isActive("/blogs") ? "active" : ""}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/about" className={isActive("/about") ? "active" : ""}>
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={isActive("/contact") ? "active" : ""}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className={isActive("/cart") ? "active" : ""}
              id="lg-bag"
            >
              <i id="beg">
                <IoBagHandleOutline />
                {cartItems.length === 0 ? null : <div id="dot"></div>}
              </i>
            </Link>
          </li>
          <button className="white signUp" onClick={() => setIsForm(true)}>
            Login / Sign up
          </button>
          <Link to="" id="close" onClick={() => setActiveClass("")}>
            <i>
              {" "}
              <IoMdClose />{" "}
            </i>
          </Link>
        </ul>
      </div>
      <div id="hamburger">
        <Link to="/cart" className={isActive("/cart") ? "active" : ""}>
          <i id="beg">
            <IoBagHandleOutline />
            {cartItems.length === 0 ? null : <div id="dot"></div>}
          </i>
        </Link>
        <i id="bar" onClick={() => setActiveClass("active")}>
          <CiMenuBurger />
        </i>
      </div>
      <Login isForm={isForm} setIsForm={setIsForm} />
    </section>
  );
};

export default Header;
