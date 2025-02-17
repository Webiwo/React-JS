/* eslint-disable react/prop-types */
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import "./ProductCard.scss";
import Button, { ButtonTypes } from "../Button/Button";

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { name, price, imageUrl } = product;

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="product-card-footer">
        <span className="product-name">{name}</span>
        <span className="product-price">{price}</span>
      </div>
      <Button buttonType={ButtonTypes.inverted} onClick={addProductToCart}>
        add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
