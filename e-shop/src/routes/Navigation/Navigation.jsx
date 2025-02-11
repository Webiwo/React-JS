import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { signOutUser } from "../../utils/firebase/firebaseUtils";
import ShopLogo from "../../assets/shop-logo.svg?react";
import "./Navigation.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    //setCurrentUser(null);
  };

  return (
    <>
      <header className="header-bar">
        <Link className="logo-link" to="/">
          <ShopLogo className="logo" />
        </Link>
        <nav className="nav-links-container">
          <Link className="nav-link" to="/shop">
            shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              sign out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              sign in
            </Link>
          )}
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Navigation;
