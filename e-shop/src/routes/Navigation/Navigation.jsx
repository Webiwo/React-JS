import { Outlet, Link } from "react-router-dom";
import ShopLogo from "../../assets/shop-logo.svg?react";
import "./Navigation.scss";

const Navigation = () => {
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
          <Link className="nav-link" to="/auth">
            sign in
          </Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Navigation;
