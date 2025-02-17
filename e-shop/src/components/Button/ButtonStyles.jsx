import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 20px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "Roboto Flex", serif;
  font-weight: bolder;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #1a89f1;
  color: white;
  padding-right: 1px;

  &:hover {
    background-color: #1877d0;
    border: none;
  }
`;

export const FacebookSignInButton = styled(BaseButton)`
  background-color: #1a89f1;
  color: white;
  padding-right: 1px;

  &:hover {
    background-color: #1877d0;
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

export const GoogleIcon = styled(FcGoogle)`
  align-self: center;
  background-color: #fff;
  height: 48px;
  width: 48px;
  padding: 7px;
  margin-left: 20px;
  border-radius: 2px;
`;
