import React from "react";
// import { useParams } from "react-router";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({
  id,
  price,
  picture,
  name_of_product,
  tags,
  stock,
  description,
  autor,
}) => {
  return (
    <div className="container">
      <div className="card p-5 m-5">
        <div className="row">
          <div className="col-md-6">
            <div className="img-wrap">
              <img src={picture} alt={`Imagen de ${name_of_product}`} />
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-stretch">
            <div className="card-body d-flex flex-column">
              <div className="producto">
                <div className="row align-items-center">
                  <div className="col">
                    <h1>{name_of_product}</h1>
                  </div>
                  <div className="col">
                    <h2 className="price text-end fw-bolder">{price}</h2>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="tags">
                    Categorias: <em>{tags}</em>
                  </span>
                  <span className="author">
                    Autor: <em>{autor}</em>
                  </span>
                </div>
              </div>
              <div className="mt-auto">
                <ItemCount stock={stock} initial={1} productID={id} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mx-5" />
      <div className="description mx-5">
        <h3>Descripción:</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
