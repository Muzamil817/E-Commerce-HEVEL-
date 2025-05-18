import React from "react";
import { IoMdClose } from "react-icons/io";

const CartItem = ({ item, removeItem, handleQuantityChange, quantity }) => {
  return (
    <tr key={item.id}>
      <td>
        <button onClick={() => removeItem(item.id)} className="close-btn">
          <i>
            <IoMdClose />
          </i>
        </button>
      </td>
      <td>
        <img src={item.image} alt={item.name} />
      </td>
      <td>{item.title}</td>
      <td>
        $ <span className="price">{Number(item.price).toFixed(2)}</span>
      </td>
      <td>
        <input
          type="number"
          min="1"
          value={item.quantity}
          className="in-price"
          onChange={(e) =>
            handleQuantityChange(item.id, parseInt(e.target.value, 10))
          }
        />
      </td>
      <td className="sprice">${(item.price * quantity).toFixed(2)}</td>
    </tr>
  );
};

export default CartItem;
