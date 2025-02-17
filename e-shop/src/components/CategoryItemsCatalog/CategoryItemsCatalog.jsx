/* eslint-disable react/prop-types */
import "./CategoryItemsCatalog.scss";
import CategoryCatalogItem from "../CategoryCatalogItem/CategoryCatalogItem";

const CategoryItemsCatalog = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map(({ id, ...category }) => (
        <CategoryCatalogItem key={id} category={category} />
      ))}
    </div>
  );
};

export default CategoryItemsCatalog;
