import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { CartContext } from "../../contexts/CartContext";
import { signOutUser } from "../../utils/firebase/firebaseUtils";
import CartIcon from "../../components/CartIcon/CartIcon";
import CartDropdown from "../../components/CartDropdown/CartDropdown";
import ShopLogo from "../../assets/shop-logo.svg?react";
import "./Navigation.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

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
          <CartIcon />
        </nav>
        {isCartOpen && <CartDropdown />}
      </header>
      <Outlet />
    </>
  );
};

export default Navigation;
