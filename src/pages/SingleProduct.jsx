import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";
import SingleProductDetails from "../components/SingleProductDetails";

const SingleProduct = () => {
  return (
    <div>
      <Header />
      <SingleProductDetails />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default SingleProduct;
