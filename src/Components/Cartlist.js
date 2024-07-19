import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import './Cartlist.css'

function Cartlist({ cart }) {
  const [CART, setCART] = useState([]);

  useEffect(() => {
    setCART(cart);
  }, [cart]);

  return (
    <div>
      {CART.map((cartItems, CartIndex) => {
        return (
          <div>
            <img src={cartItems.url} width="40%" />
            <span> {cartItems.name} </span>
            <span> {cartItems.qty}</span>
            <button
              onClick={() => {
                const _CART = CART.map((item, index) => {
                  return CartIndex === index
                    ? { ...item, qty: item.qty > 0 ? item.qty - 1 : 0 }
                    : item;
                });
                setCART(_CART);
              }}
            >
              -
            </button>
            <span> {cartItems.quantity} </span>
            <button
              onClick={() => {
                const _CART = CART.map((item, index) => {
                  return CartIndex === index
                    ? { ...item, qty: item.qty + 1 }
                    : item;
                });
                setCART(_CART);
              }}
            >
              +
            </button>{" "}
            
            <span>
              {" "}
              Rs.{cartItems.price} * {cartItems.qty}
            </span>
          </div>
        );
      })}
      <div className='cart'>
      <p>
        {CART.map((item) => item.price * item.qty).reduce(
          (total, value) => total + value,
          0
        )}
      </p>
      </div>
      
    </div>
  );
}

export default Cartlist;
