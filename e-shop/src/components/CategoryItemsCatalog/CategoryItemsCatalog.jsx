/* eslint-disable react/prop-types */
import "./CategoryItemsCatalog.scss";
import CategoryItem from "../CategoryItem/CategoryItem";

const CategoryItemsCatalog = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map(({ id, ...category }) => (
        <CategoryItem key={id} category={category} />
      ))}
    </div>
  );
};


export default CategoryItemsCatalog;
