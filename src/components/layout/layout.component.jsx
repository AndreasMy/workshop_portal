/* eslint-disable react/prop-types */
import { useState } from "react";
import { HamburgerMenu } from "../hamburgerMenu/hamburgerMenu.component";
import { NavBar } from "../navBar/navBar.component";

import './layout.styles.css'
import './LayoutMQueries.styles.css'

export const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header>
        <NavBar toggleMenu={() => setMenuOpen(!menuOpen)} />
      </header>
      <main>
        <div className="main-content">
          {children}
          <HamburgerMenu
            isOpen={menuOpen}
            toggleMenu={() => setMenuOpen(!menuOpen)}
          />
        </div>
      </main>
      <footer>
        <p>amykle85@gmail.com</p>
      </footer>
    </>
  );
};
