import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import CartWidget from "../CartWidget/CartWidget";
import CategoryNav from "../CategoryNav/CategoryNav";

const NavBar = ({ navTheme, logoAlt }) => {
  return (
    <nav className={`navbar navbar-expand-lg ${navTheme}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt={logoAlt} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 pt-2 pt-lg-0">
            <li className="nav-item mx-lg-3 mb-2 mb-lg-0">
              <Link className="nav-link active" aria-current="page" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item mx-lg-3 mb-2 mb-lg-0">
              <Link className="nav-link" to="/sobre-la-abuela">
                Sobre la Abuela
              </Link>
            </li>
            <CategoryNav />
          </ul>
          <CartWidget mensajeCarrito="Carrito Vacio" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
