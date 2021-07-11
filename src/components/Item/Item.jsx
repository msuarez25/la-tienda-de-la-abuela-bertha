import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({ id, price, picture, name_of_product, tags, stock }) => {
  return (
    <li className="col d-flex align-content-stretch">
      <div className="card mb-4 w-100">
        <div className="img-wrap">
          <Link to={`/producto/${id}`}>
            <img src={picture} alt={`Imagen de ${name_of_product}`} />
          </Link>
        </div>
        <div className="card-body d-flex flex-column">
          <div className="content mb-4">
            <h2>
              <Link to={`/producto/${id}`}>{name_of_product}</Link>
            </h2>
            <div className="row">
              <div className="col">
                <span className="tags">
                  {tags.map((tag, index) => (
                    <Link key={index} to={`/categoria/${tag}`}>
                      <span className="badge bg-warning text-dark">{tag}</span>
                    </Link>
                  ))}
                </span>
              </div>
              <div className="col text-end">
                <strong className="price">{price}</strong>
              </div>
            </div>
          </div>
          <div className="counter mt-auto">
            <ItemCount stock={stock} initial={1} productID={id} />
          </div>
        </div>
      </div>
    </li>
  );
};

export default Item;
