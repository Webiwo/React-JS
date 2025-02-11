import { useState } from "react";
import {
  signInWithGooglePopup,
  signInWithFacebookPopup,
  createUserDocFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebaseUtils";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import { FcGoogle } from "react-icons/fc";
import "./SignIn.scss";

const signInFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(signInFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(signInFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log("Sign In: ", response);
      resetFormFields();
    } catch (error) {
      console.error("An error occurred while signing in", error);
      alert("An error occurred while signing in");
    }
  };

  const singInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocFromAuth(user);
  };

  const singInWithFacebook = async () => {
    const { user } = await signInWithFacebookPopup();
    await createUserDocFromAuth(user);
  };

  return (
    <div className="sign-in-container">
      <h2>{"Already have an account?"}</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
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
        <div className="buttons-container">
          <Button buttonType="inverted" type="submit">
            Sign in
          </Button>
          <Button type="button" buttonType="google" onClick={singInWithGoogle}>
            Sign in with
            <FcGoogle />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
