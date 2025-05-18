import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CartBanner from "../components/CartBanner";
import CartData from "../components/CartData";

const Cart = () => {
  return (
    <div>
      <Header />
      <CartBanner />
      <CartData />
      <Footer />
    </div>
  );
};

export default Cart;
