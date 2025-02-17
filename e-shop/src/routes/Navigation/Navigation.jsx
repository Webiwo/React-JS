import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { CartContext } from "../../contexts/CartContext";
import { signOutUser } from "../../utils/firebase/firebaseUtils";
import CartIcon from "../../components/CartIcon/CartIcon";
import CartDropdown from "../../components/CartDropdown/CartDropdown";
import ShopLogo from "../../assets/shop-logo.svg?react";
import {
  HeaderBar,
  LogoLink,
  NavLinksContainer,
  NavLink,
} from "./NavigationStyles";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutUser();
    //setCurrentUser(null);
  };

  return (
    <>
      <HeaderBar>
        <LogoLink to="/">
          <ShopLogo className="logo" />
        </LogoLink>
        <NavLinksContainer>
          <NavLink to="/shop">shop</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutHandler}>
              sign out
            </NavLink>
          ) : (
            <NavLink to="/auth">sign in</NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </HeaderBar>
      <Outlet />
    </>
  );
};

export default Navigation;
