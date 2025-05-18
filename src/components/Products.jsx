import React, { useContext } from "react";
import Product from "./Product";
import { StoreContext } from "../context/ContextapiStore";

const Products = () => {
  const { productList, addToCart } = useContext(StoreContext);

  return (
    <section id="product1" class="section-p1">
      <h2>Haval New Car Models Prices & Pictures</h2>
      <p>The prices of a Haval Car in Pakistan start from PKR 8,028,500.0 for a new Haval Jolion to PKR 11,866,500.0 for a new Haval H6.</p>
      <div class="pro-container">
        {productList.map((product) => (
          <Product addToCart={addToCart} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
