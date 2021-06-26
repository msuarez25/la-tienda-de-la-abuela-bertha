import React from "react";
import Logo from "../../assets/images/logo.png";

const NavBar = (props) => {
  return (
    <nav className={`navbar navbar-expand-lg ${props.navTheme}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={Logo} alt="La Tienda de la Abuela Bertha" />
        </a>
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
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item mx-lg-3 mb-2 mb-lg-0">
              <a className="nav-link" href="#">
                Sobre la Abuela
              </a>
            </li>
            <li className="nav-item mx-lg-3 mb-2 mb-lg-0 dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categorias
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Pinturas
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Orfebrería
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
