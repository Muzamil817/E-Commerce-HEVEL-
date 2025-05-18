import React, { createContext, useState } from "react";
import { assets } from "../assets/assets";

export const StoreContext = createContext(null);

const ContextapiStore = (props) => {
  const [name, setName] = useState("");
  const [res, setRes] = useState([]);
  const [cartItems, setCartItems] = useState([]); // To manage cart items

  // Task management
  const del = (index) => {
    const newRes = res.filter((item) => item.name !== index);
    setRes(newRes);
  };

  const add = () => {
    if (name.length === 0) {
      return alert("Please enter Task");
    }
    setRes([{ name }, ...res]);
    setName("");
  };

  // Add product to cart
  const addToCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);
    if (exists) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Remove product from cart
  const removeFromCart = (productId) => {
    const exists = cartItems.find((item) => item.id === productId);
    if (exists && exists.quantity > 1) {
      setCartItems(cartItems.filter((item) => item.id !== productId));
    }
  };

  const contextValue = {
    res,
    add,
    name,
    setName,
    del,
    productList,
    cartItems,
    addToCart,
    removeFromCart,
    setCartItems,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default ContextapiStore;

const productList = [
  {
    id: "1",
    brand: "HAVAL",
    title: "H6 HEV",
    price: "43,990",
    image: assets.pro1,
    des:"This is Description"
  },
  {
    id: "2",
    brand: "HAVAL",
    title: "H6 HAV",
    price: "43,990",
    image: assets.pro2,
  },
  {
    id: "3",
    brand: "HAVAL",
    title: "H6 HEV",
    price: "41,990",
    image: assets.pro3,
  },
  {
    id: "4",
    brand: "HAVAL",
    title: "H6 HEV",
    price: "39,780",
    image: assets.pro4,
  },
];
