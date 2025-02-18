/* eslint-disable react/prop-types */
import {
  BaseButton,
  GoogleSignInButton,
  FacebookSignInButton,
  InvertedButton,
  GoogleIcon,
} from "./ButtonStyles.jsx";

export const ButtonTypes = {
  base: "base",
  google: "google-sign-in",
  facebook: "facebbok-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = ButtonTypes.base) =>
  ({
    [ButtonTypes.base]: BaseButton,
    [ButtonTypes.google]: GoogleSignInButton,
    [ButtonTypes.facebook]: FacebookSignInButton,
    [ButtonTypes.inverted]: InvertedButton,
  }[buttonType]);

const DefaultIcon = () => <></>;
const getButtonIcon = (buttonType = ButtonTypes.base) =>
  ({
    [ButtonTypes.base]: DefaultIcon,
    [ButtonTypes.google]: GoogleIcon,
    [ButtonTypes.facebook]: DefaultIcon,
    [ButtonTypes.inverted]: DefaultIcon,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  const CustomIcon = getButtonIcon(buttonType);
  return (
    <CustomButton {...otherProps}>
      {children} <CustomIcon />
    </CustomButton>
  );
};

export default Button;
