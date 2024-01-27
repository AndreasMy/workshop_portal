/* eslint-disable react/prop-types */
import "../../styles/Header.css";
import { Link } from "react-router-dom";
import { navItems } from "../../data/headerData";
import { Nav } from "./Nav";
import { Button } from "./ButtonComponent";

export const NavBar = ({ toggleMenu }) => {
  return (
    <div className="header-content">
      <div className="title-container">

      <h2 className="header_title">
        <Link to="/" className="header-title">
          Andreas Myklebust Art
        </Link>
      </h2>
{/*       <h2 className="header-title-accent"> :artist</h2> */}
      </div>
      <Nav
        data={navItems}
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
