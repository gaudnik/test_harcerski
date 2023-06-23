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
      <div
        className={`menu__toggle ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="menu__x">
          <span onClick={toggleMenu}></span>
          <span onClick={toggleMenu}></span>
          <span onClick={toggleMenu}></span>
        </div>
      </div>
      <ul className={`menu__nav ${isMenuOpen ? "open" : ""}`}>
        <h2>MENU</h2>
        <li className="menu__element">
          <Link to="/jaktodziala" onClick={() => setMenuOpen(false)}>
            Jak działa test harcerski
          </Link>
        </li>
        <li className="menu__element">
          <Link to="/zasady" onClick={() => setMenuOpen(false)}>
            Ważne zasady testu
          </Link>
        </li>
        <li className="menu__element">
          <Link to="/zaprosdotestu" onClick={() => setMenuOpen(false)}>
            Zaproś przyjaciół do testu
          </Link>
        </li>
        <li className="menu__element">
          <Link to="/wykonajtest" onClick={() => setMenuOpen(false)}>
            Wykonaj test dla siebie
          </Link>
        </li>
        <li className="menu__element">
          <Link to="/wesprzyjnas" onClick={() => setMenuOpen(false)}>
            Wesprzyj nas datkiem
          </Link>
        </li>
        <li className="menu__element">
          <Link to="/rodo" onClick={() => setMenuOpen(false)}>
            RODO
          </Link>
        </li>
        <li className="menu__element">
          <Link to="/onas" onClick={() => setMenuOpen(false)}>
            O nas
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
