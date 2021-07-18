import React, { useState, useEffect } from "react";
import Item from "../Item/Item";
import { useParams } from "react-router";

const ItemList = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [productos, setProductos] = useState([]);
  const [title, setTitle] = useState("Bienvenid@");
  const { tags } = useParams();
  const url = "/assets/productos/productos.json";

  const getProductos = () => {
    fetch(url)
      .then((response) => response.json())
      .then(
        (data) => {
          setIsLoaded(true);
          let productsByCategory;
          if (tags !== undefined) {
            productsByCategory = data.filter((producto) =>
              getProductByTag(producto, tags)
            );
            setTitle(tags);
          } else {
            productsByCategory = data;
            setTitle("Bienvenid@");
          }
          setProductos(productsByCategory);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };

  const getProductByTag = (product, tags) => {
    if (product.tags.indexOf(tags) !== -1) {
      return true;
    }
  };

  useEffect(() => {
    getProductos();
    // eslint-disable-next-line
  }, [tags]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="wrapper">
        <h1 className="text-center mt-5">{title}</h1>
        <ul className="product-list row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4">
          {productos.map((producto) => (
            <Item
              key={producto.id}
              id={producto.id}
              price={producto.price}
              picture={producto.picture}
              name_of_product={producto.name_of_product}
              tags={producto.tags}
              stock={producto.stock}
            />
          ))}
        </ul>
      </div>
    );
  }
};
export default ItemList;
