import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogBanner from "../components/BlogBanner";
import Pagenation from "../components/Pagenation";
import NewsLetter from "../components/NewsLetter";
import Blogs from "../components/Blogs";

const Blog = () => {
  return (
    <div>
      <Header />
        <BlogBanner/>
        <Blogs/>
        <Pagenation/>
        <NewsLetter/>
      <Footer />
    </div>
  );
};

export default Blog;
