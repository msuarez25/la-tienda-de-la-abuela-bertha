import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router";

const ItemDetailContainer = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [productos, setProduct] = useState([]);
  const url = "/assets/productos/productos.json";
  const { id } = useParams();

  const getProduct = () => {
    fetch(url)
      .then((response) => response.json())
      .then(
        (data) => {
          setIsLoaded(true);
          let product = data.filter((producto) => getProductByID(producto, id));
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
      <div className="product-detail mb-5">
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
            autor={producto.author}
          />
        ))}
      </div>
    );
  }
};
export default ItemDetailContainer;
