import SignUp from "../../components/SignUp/SignUp";

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
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <SignUp />
    </div>
  );
};

export default SignIn;
