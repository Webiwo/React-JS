import { useState, useContext } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "../../utils/firebase/firebaseUtils";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import { UserContext } from "../../contexts/UserContext";
import "./SignUp.scss";

const signUpFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(signUpFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const { setCurrentUser } = useContext(UserContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(signUpFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    //check if the password meets the specified rules
    //...
    //check if the password and confirmPassword are identical
    if (password !== confirmPassword) {
      alert("The passwords provided are not identical");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      setCurrentUser(user);
      await createUserDocFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      console.error(
        "User creation process encountered an error",
        error.message
      );
    }
  };

  return (
    <div className="sign-up-container">
      <h2>{"Don't have an account?"}</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button buttonType="inverted" type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
