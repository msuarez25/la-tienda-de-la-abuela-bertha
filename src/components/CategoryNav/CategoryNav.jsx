import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";
import { Link } from "react-router-dom";

const CategoryNav = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [categorias, setCategorias] = useState([]);
  const url = "/assets/productos/categorias.json";

  const getCategory = () => {
    fetch(url)
      .then((response) => response.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setCategorias(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };
  useEffect(() => {
    getCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <li className="nav-item mx-lg-3 mb-2 mb-lg-0 dropdown">
        <Link
          className="nav-link dropdown-toggle"
          to="/categorias"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Categorias
        </Link>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          {categorias.map((categoria, index) => (
            <li key={index}>
              <Link
                className="dropdown-item"
                to={`/categoria/${categoria.name}`}
              >
                {categoria.name}
              </Link>
            </li>
          ))}
        </ul>
      </li>
    );
  }
};

export default CategoryNav;
