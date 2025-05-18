import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Products from "./components/Products";
// import Banner from "./components/Banner";
// import Sm_banner from "./components/Sm_banner";
// import Banner3 from "./components/Banner3";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Products />
      {/* <Banner /> */}
      {/* <Sm_banner /> */}
      {/* <Banner3 /> */}
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default App;
