import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({ id, price, picture, name_of_product, tags, stock }) => {
  return (
    <li className="col">
      <div className="card mb-4">
        <div className="img-wrap">
          <Link to={`/producto/${id}`}>
            <img src={picture} alt={`Imagen de ${name_of_product}`} />
          </Link>
        </div>
        <div className="card-body">
          <h2>
            <Link to={`/producto/${id}`}>{name_of_product}</Link>
          </h2>
          <span className="tags">{tags}</span>
          <strong className="price">{price}</strong>
          <ItemCount stock={stock} initial={1} productID={id} />
        </div>
      </div>
    </li>
  );
};

export default Item;
