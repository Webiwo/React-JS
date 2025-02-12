import "./ProductCard.scss"
import Button from "../Button/Button";

const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product;
    return(
        <div className="product-card-container">
            <img src={imageUrl} alt={name}/>
            <div className="product-card-footer">
                <span className="product-name">{name}</span>
                <span className="product-price">{price}</span>
            </div>
            <Button buttonType="inverted">add to cart</Button>
        </div>
    );
}

export default ProductCard;