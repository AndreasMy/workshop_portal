/* eslint-disable react/prop-types */
import "./navBar.styles.css";
import { Link } from "react-router-dom";
import { navItems } from "../../data/headerData";
import { Nav } from "../nav/nav.component";
import { Button } from "../button/button.component";

export const NavBar = ({ toggleMenu }) => {
  return (
    <div className="header-content">
      <div className="title-container">
        <h2 className="header_title">
          <Link to="/" className="header-title-desktop">
            Andreas Myklebust <span className="header-title-accent">Art</span>
          </Link>
        </h2>
        <h2 className="header-title-mobile">
          <Link to="/" className="header-title">
            AM<span className="header-title-accent">Art</span>
          </Link>
        </h2>
      </div>
      <Nav
        data={navItems}
        isNavLink={true}
        ulClassName={"header-nav-links"}
        itemClassName={"header-link"}
        liClassName={"header-link-li"}
      />
      <Button className="burger-button" onClick={toggleMenu}>
        <img
          src="/workshop_portal/assets/burger-menu.svg"
          alt="Menu"
          className="burger-svg"
        />
      </Button>
    </div>
  );
};
