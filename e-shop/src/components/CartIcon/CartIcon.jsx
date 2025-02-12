import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import CartImg from "../../assets/shopping-bag.svg?react";
import "./CartIcon.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <CartImg className="cart-icon" />
      <span className="item-count">10</span>
    </div>
  );
};

export default CartIcon;
