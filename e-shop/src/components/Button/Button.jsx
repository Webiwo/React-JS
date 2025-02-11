/* eslint-disable react/prop-types */
import "./Button.scss";

const ButtonTypes = {
  google: "google-sign-in",
  facebook: "facebbok-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${ButtonTypes[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
