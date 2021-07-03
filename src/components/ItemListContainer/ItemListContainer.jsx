import React from "react";

const ItemListContainer = ({ mensajeBienvenida }) => {
  return (
    <div className="container">
      <h1 className="text-center my-3">{mensajeBienvenida}</h1>
    </div>
  );
};

export default ItemListContainer;
