/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

import {
  BackgroundImage,
  CategoryItemBody,
  CategoryItemContainer,
} from "./CategoryItemStyles.jsx";

const CategoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <CategoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <CategoryItemBody>
        <h2>{title}</h2>
        <p>shop now</p>
      </CategoryItemBody>
    </CategoryItemContainer>
  );
};

export default CategoryItem;
