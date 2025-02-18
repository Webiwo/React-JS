import styled from "styled-components";

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CategoryItemBody = styled.div`
  height: 90px;
  padding: 0 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.8;
  position: absolute;

  h2 {
    letter-spacing: 2px;
    font-weight: 800;
    margin: 0 0.4rem;
    font-size: 2.25rem;
    text-transform: uppercase;
  }

  p {
    letter-spacing: 1px;
    font-weight: 600;
    font-size: 1rem;
  }
`;

export const CategoryItemContainer = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0.5rem;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 3s linear;
    }

    & ${CategoryItemBody} {
      opacity: 1;
    }
  }
`;
