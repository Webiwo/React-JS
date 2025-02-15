import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import "./Checkout.scss";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-title">
          <span>Product</span>
        </div>
        <div className="header-title">
          <span>Description</span>
        </div>
        <div className="header-title">
          <span>Quantity</span>
        </div>
        <div className="header-title">
          <span>Price</span>
        </div>
        <div className="header-title">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((item) => {
        return <CheckoutItem key={item.id} cartItem={item} />;
      })}

      <span className="total">Total: {cartTotal}</span>
    </div>
  );
};

export default Checkout;
