import React from "react";
import { assets } from "../assets/assets";
import { IoIosStar } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const Product = ({ product, addToCart }) => {
  const navigate = useNavigate();
  return (
    <div class="pro">
      <img src={product.image} alt="Product's Img" />
      <div class="des" onClick={() => navigate(`/product/${product.id}`)}>
        <span> {product.brand} </span>
        <h5>{product.title}</h5>
        <div class="stars">
          <i>
            {" "}
            <IoIosStar />{" "}
          </i>
          <i>
            {" "}
            <IoIosStar />{" "}
          </i>
          <i>
            {" "}
            <IoIosStar />{" "}
          </i>
          <i>
            {" "}
            <IoIosStar />{" "}
          </i>
          <i>
            {" "}
            <IoIosStar />{" "}
          </i>
        </div>
        <h4>$ {product.price} </h4>
      </div>
      <a onClick={() => addToCart(product)}>
        <i className="cart">
          <IoBagHandleOutline />
        </i>
      </a>
    </div>
  );
};

export default Product;
