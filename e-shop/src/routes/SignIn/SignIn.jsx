import SignUp from "../../components/SignUp/SignUp";
import Button from "../../components/Button/Button";
import { FcGoogle } from "react-icons/fc";

import {
  signInWithGooglePopup,
  createUserDocFromAuth,
} from "../../utils/firebase/firebaseUtils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <Button buttonType="google" onClick={logGoogleUser}>
        Sign in with
        <FcGoogle />
      </Button>
      <SignUp />
    </div>
  );
};

export default SignIn;
