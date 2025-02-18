import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import CartItem from "../CartItem/CartItem";
import { useNavigate } from "react-router-dom";
import "./CartDropdownStyles.jsx";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./CartDropdownStyles.jsx";
import { BaseButton } from "../Button/ButtonStyles.jsx";

const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const checkoutHandler = () => {
    setIsCartOpen(false);
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <BaseButton onClick={checkoutHandler}>checkout</BaseButton>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
