import React, { useState, useEffect } from "react";
import Item from "../Item/Item";

const ItemList = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [productos, setProductos] = useState([]);
  const url = "/assets/productos/productos.json";

  const getProductos = () => {
    fetch(url)
      .then((response) => response.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setProductos(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };

  useEffect(() => {
    getProductos();
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
            key={producto.id}
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
