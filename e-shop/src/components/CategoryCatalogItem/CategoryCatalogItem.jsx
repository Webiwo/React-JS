/* eslint-disable react/prop-types */
import "./CategoryCatalogItem.scss";

const CategoryCatalogItem = ({ category }) => {
  const { imageUrl, title } = category;

  return (
    <div className="category-catalog-item-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-catalog-item-body">
        <h2>{title}</h2>
        <p>shop now</p>
      </div>
    </div>
  );
};

export default CategoryCatalogItem;
