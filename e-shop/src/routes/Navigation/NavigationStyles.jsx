import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderBar = styled.header`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoLink = styled(Link)`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const NavLinksContainer = styled.nav`
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  font-size: 1.5rem;
  letter-spacing: 2px;
  font-weight: 600;
  margin-top: 16px;
  padding: 10px 15px;
  cursor: pointer;
`;

/*
.header - bar {
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  .logo-link {
    height: 100%;
    width: 70px;
    display: block;
    margin: 10px;

    .logo {
      height: 70px;
    }
  }

  .nav-links-container {
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .nav-link {
      font-size: 1.5rem;
      letter-spacing: 2px;
      font-weight: 600;
      margin-top: 16px;
      padding: 10px 15px;
      cursor: pointer;
    }
  }
}

@media screen and (max-width: 768px) {
  .header-bar {
    .nav-links-container {
      width: 70%;
      .nav-link {
        font-size: 1.3rem;
        letter-spacing: 1px;
        padding-left: 10px;
        padding-right: 10px;
      }
    }
  }
}
*/
