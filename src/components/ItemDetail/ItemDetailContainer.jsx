import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [productos, setProduct] = useState([]);
  const url = "/assets/productos/productos.json";

  const getProduct = () => {
    fetch(url)
      .then((response) => response.json())
      .then(
        (data) => {
          setIsLoaded(true);
          let product = data.filter((producto) =>
            getProductByID(producto, "60e37ffeb93bb10eebc3619c")
          );
          setProduct(product);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };

  const getProductByID = (product, productID) => {
    return product.id === productID;
  };

  useEffect(() => {
    getProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="product-detail">
        {productos.map((producto) => (
          <ItemDetail
            key={producto.id}
            id={producto.id}
            price={producto.price}
            picture={producto.picture}
            name_of_product={producto.name_of_product}
            tags={producto.tags}
            stock={producto.stock}
            description={producto.description}
          />
        ))}
      </div>
    );
  }
};
export default ItemDetailContainer;
