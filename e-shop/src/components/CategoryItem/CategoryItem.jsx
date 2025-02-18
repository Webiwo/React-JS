/* eslint-disable react/prop-types */
import {
  BackgroundImage,
  CategoryItemBody,
  CategoryItemContainer,
} from "./CategoryItemStyles.jsx";

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;

  return (
    <CategoryItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <CategoryItemBody>
        <h2>{title}</h2>
        <p>shop now</p>
      </CategoryItemBody>
    </CategoryItemContainer>
  );
};

export default CategoryItem;
