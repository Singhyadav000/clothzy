
import React from "react";
import "./Shop.css";

function Shopcart() {
  const cartItems = []; // You can later fetch this from context or props
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shippingFee = 10;
  const total = subtotal + shippingFee;

  return (
    <div className="cart-container">
      <div className="cart-left">
        <h2 className="cart-title">YOUR <span className="highlight">CART</span> <span className="line">—</span></h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <strong>{item.name}</strong> - Rs.{item.price} × {item.quantity}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="cart-right">
        <h2 className="cart-title">CART <span className="highlight">TOTALS</span> <span className="line">—</span></h2>
        <table>
          <tbody>
            <tr>
              <td>Subtotal</td>
              <td>Rs. {subtotal.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Shipping Fee</td>
              <td>Rs. {shippingFee.toFixed(2)}</td>
            </tr>
            <tr>
              <td><strong>Total</strong></td>
              <td><strong>Rs. {total.toFixed(2)}</strong></td>
            </tr>
          </tbody>
        </table>
        <button className="checkout-button">PROCEED TO CHECKOUT</button>
      </div>
    </div>
  );
}

export default Shopcart;
