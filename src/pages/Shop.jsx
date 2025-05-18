import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ShopBanner from "../components/ShopBanner";
import Products from "../components/Products";
import Pagenation from "../components/Pagenation";
import NewsLetter from "../components/NewsLetter";

const Shop = () => {
  return (
    <div>
      <Header />
      <ShopBanner />
      <Products />
      <Pagenation />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Shop;
