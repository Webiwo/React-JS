import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Shop.css";

const Shop = () => {
    const { products } = useContext(ProductsContext);

    return (
        <div className="products-container">
            {products.map(({ id, ...product }) => (
                <ProductCard key={id} product={product} />
            ))}
        </div>
    )
}

export default Shop; 