import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <input
        type="checkbox"
        className="menu__btn"
        id="menu__btn"
        checked={isMenuOpen}
        onChange={toggleMenu}
      />
      <label htmlFor="menu__btn" className="menu__toggle">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <ul className={`menu__nav ${isMenuOpen ? "open" : ""}`}>
        <h2>MENU</h2>
        <li className="menu__element">
          <Link
            to="/jaktodziala"
            onClick={() => setMenuOpen(false)}
          >
            Jak działa test harcerski
          </Link>
        </li>
        <li className="menu__element">
          <Link
            to="/zasady"
            onClick={() => setMenuOpen(false)}
          >
            Ważne zasady testu
          </Link>
        </li>
        <li className="menu__element">
          <Link
            to="/przykladoweoceny"
            onClick={() => setMenuOpen(false)}
          >
            Przykładowe oceny innych
          </Link>
        </li>
        <li className="menu__element">
          <Link
            to="/zrobtest"
            onClick={() => setMenuOpen(false)}
          >
            Wykonaj test dla siebie
          </Link>
        </li>
        <li className="menu__element">
          <Link
            to="/wesprzyjnas"
            onClick={() => setMenuOpen(false)}
          >
            Wesprzyj nas datkiem
          </Link>
        </li>
        <li className="menu__element">
          <Link
            to="/rodo"
            onClick={() => setMenuOpen(false)}
          >
            RODO
          </Link>
        </li>
        <li className="menu__element">
          <Link
            to="/onas"
            onClick={() => setMenuOpen(false)}
          >
            O nas
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
