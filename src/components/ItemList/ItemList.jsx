import React, { useState, useEffect } from "react";
import { database } from "../../firebase/firebase";
import Item from "../Item/Item";
import { useParams } from "react-router";

const ItemList = () => {
  const [order, setOrder] = useState("desc");
  const [orderBy, setOrderBy] = useState("price");
  const [productos, setProductos] = useState([]);
  const [title, setTitle] = useState("Bienvenid@");
  const { tags } = useParams();

  const changeOrder = (e) => {
    setOrder(e.target.value);
  };
  const changeOrderBy = (e) => {
    setOrderBy(e.target.value);
  };

  const getProductos = () => {
    let products;
    if (tags !== undefined) {
      products = database
        .collection("productos")
        .where("tags", "array-contains", tags)
        .orderBy(orderBy, order);
      setTitle(tags);
    } else {
      products = database.collection("productos").orderBy(orderBy, order);
      setTitle("Bienvenid@");
    }

    products.get().then((query) => {
      setProductos(
        query.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  };

  useEffect(() => {
    getProductos();
    // eslint-disable-next-line
  }, [tags, order, orderBy]);

  return (
    <div className="container">
      <div className="wrapper">
        <h1 className="text-center mt-5">{title}</h1>
        {tags === undefined && (
          <div className="d-flex justify-content-end py-3">
            <span className="d-inline-block me-2">Ordenar por:</span>
            <select
              className="orderBy me-1"
              value={orderBy}
              onChange={changeOrderBy}
            >
              <option value="price">Precio</option>
              <option value="name_of_product">Nombre</option>
            </select>
            <select className="order" value={order} onChange={changeOrder}>
              <option value="asc">Asc</option>
              <option value="desc">Desc</option>
            </select>
          </div>
        )}
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
    </div>
  );
};
export default ItemList;
