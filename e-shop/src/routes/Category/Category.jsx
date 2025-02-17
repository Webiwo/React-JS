import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CategoriesContext } from "../../contexts/CategoriesContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Category.scss";

const Category = () => {
  const { category } = useParams();
  const { categoryMap } = useContext(CategoriesContext);
  console.log(category, categoryMap);

  const [products, setProducts] = useState(categoryMap[category]);

  useEffect(() => {
    setProducts(categoryMap[category]);
  }, [category, categoryMap]);

  return (
    <>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default Category;
