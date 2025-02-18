import styled from "styled-components";
import CartImg from "../../assets/shopping-bag.svg?react";

export const CartIconImg = styled(CartImg)`
  width: 35px;
  height: 35px;
`;

export const CartIconContainer = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  margin-right: 5px;
  margin-left: 10px;
`;

export const ItemCount = styled.span`
  position: absolute;
  bottom: 5px;
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: 1px;
`;
