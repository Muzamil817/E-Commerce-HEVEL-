import React, { useContext } from "react";
import SingleProductGel from "./SingleProductGel";
import { StoreContext } from "../context/ContextapiStore";
import { useParams } from "react-router-dom";

const SingleProductDetails = () => {
  const { productList, addToCart } = useContext(StoreContext);

  const { id } = useParams();
  const product = productList.find((item) => item.id === id);

  // Handle case where product is not found
  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <section id="pro-details" className="section-p1">
      <SingleProductGel product={product} />
      <div className="single-pro-details">
        <h6>YOUR DREAM</h6>
        <h4> {product.title} </h4>
        <h2>$ {product.price} </h2>
        <select>
          <option>select Model</option>
          <option>HAVAL</option>
          <option>HEV</option>
          <option>H6 HEV</option>
          <option>HAVAL H6</option>
        </select>
        <input type="number" value="1" />
        <button className="normal" onClick={() => addToCart(product)}>
          Add To Cart
        </button>
        <h4>details</h4>
        <span>{product.des}</span>
      </div>
    </section>
  );
};

export default SingleProductDetails;
