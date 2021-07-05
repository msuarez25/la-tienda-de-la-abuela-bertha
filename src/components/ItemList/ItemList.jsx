import React, { useState, useEffect } from "react";
import Item from "../Item/Item";

const ItemList = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [productos, setItems] = useState([]);

  useEffect(() => {
    fetch("/assets/productos/productos.json")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Nota: es importante manejar errores aquí y no en
        // un bloque catch() para que no interceptemos errores
        // de errores reales en los componentes.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul className="product-list row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4">
        {productos.map((producto) => (
          <Item
            price={producto.price}
            picture={producto.picture}
            name_of_product={producto.name_of_product}
            tags={producto.tags}
            stock={producto.stock}
          />
        ))}
      </ul>
    );
  }
};
export default ItemList;
