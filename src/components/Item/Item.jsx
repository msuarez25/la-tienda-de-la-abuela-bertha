import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({ price, picture, name_of_product, tags, stock }) => {
  return (
    <li className="col">
      <div className="card mb-4">
        <div className="img-wrap">
          <img src={picture} alt={`Imagen de ${name_of_product}`} />
        </div>
        <div className="card-body">
          <h2>{name_of_product}</h2>
          <span className="tags">{tags}</span>
          <strong className="price">{price}</strong>
          <ItemCount stock={stock} initial={1} />
        </div>
      </div>
    </li>
  );
};

export default Item;
