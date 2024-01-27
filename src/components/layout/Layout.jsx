/* eslint-disable react/prop-types */
import { useState } from "react";
import { HamburgerMenu } from "../UI/HamburgerMenu";
import { Header } from "../UI/Header";

export const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header>
        <Header toggleMenu={() => setMenuOpen(!menuOpen)} />
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
