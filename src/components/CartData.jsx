import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import CartItem from "./CartItem";
import { StoreContext } from "../context/ContextapiStore";
import { Link } from "react-router-dom";

const CartData = () => {
  const [quantity, setQuantity] = useState(1);
  const { removeFromCart, cartItems, setCartItems } = useContext(StoreContext);

  const shippingFee = 200;

  // Calculate the subtotal and total price
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * quantity,
    0
  );
  const totalPrice = subtotal + shippingFee;

  const handleQuantityChange = (id, value) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: value > 0 ? value : 1 } // Prevent quantity from being zero or less
        : item
    );
    setCartItems(updatedCartItems); // Update the cart items
  };

  return (
    <>
      <section id="cart" className="section-p1">
        <table>
          <thead>
            <tr>
              <th>Remove</th>
              <th>Image</th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.length === 0 ? (
              <h3
                style={{
                  textAlign: "center",
                  marginTop: "20px",
                  width: "100%",
                }}
              >
                {" "}
                No Item In The Cart <Link to="/shop">Shop now</Link>
              </h3>
            ) : (
              cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  quantity={quantity}
                  handleQuantityChange={handleQuantityChange}
                  removeItem={removeFromCart}
                />
              ))
            )}
          </tbody>
        </table>
      </section>

      <section id="cart-add" className="section-p1">
        <div id="coupon">
          <h3>Apply Coupon</h3>
          <div>
            <input type="text" placeholder="Enter your coupon" />
            <button className="normal">Apply</button>
          </div>
        </div>
        <div id="subtotal">
          <h3>Cart totals</h3>
          <table>
            <tbody>
              <tr>
                <td>Cart Subtotal</td>
                <td>
                  $ <span className="cst">{subtotal.toFixed(2)}</span>
                </td>
              </tr>
              <tr>
                <td>Shipping Fee</td>
                <td>
                  $ <span className="sfee">{shippingFee.toFixed(2)}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Total</strong>
                </td>
                <td>
                  <strong>
                    $ <span className="total">{totalPrice.toFixed(2)}</span>
                  </strong>
                </td>
              </tr>
            </tbody>
          </table>
          <button className="normal">Proceed to checkout</button>
        </div>
      </section>
    </>
  );
};

export default CartData;
