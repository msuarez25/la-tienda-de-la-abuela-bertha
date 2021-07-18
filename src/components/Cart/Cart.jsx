import React, { useContext } from "react";
// import { Link } from "react-router-dom";
import { Context } from "../../Context/Context";

const Cart = () => {
  const { cartObj } = useContext(Context);

  return (
    <div className="container py-5">
      <h1 className="text-center mb-3">Carrito</h1>
      {cartObj.products.length > 0
        ? cartObj.products.map((product, index) => (
            <ul>
              <li key={index}>
                <div className="cartItem row">
                  <div className="col">
                    <span className="id">
                      <strong>ID: </strong>
                      {product.id}
                    </span>
                  </div>
                  <div className="col">
                    <span className="amount">
                      <strong>Amount: </strong>
                      {product.amount}
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          ))
        : "No hay items en el carrito"}
    </div>
  );
};

export default Cart;
