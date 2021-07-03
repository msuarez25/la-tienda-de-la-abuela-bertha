import React, { useState } from "react";
import minus from "../../assets/images/minus-solid.svg";
import plus from "../../assets/images/plus-solid.svg";

const ItemCount = ({ stock, initial }) => {
  const btnDisabled = "btn btn-secondary";
  const [amount, updateAmount] = useState(initial);

  const onAdd = () => {
    if (amount > 0 && amount < stock) {
      updateAmount(parseInt(amount) + 1);
    }
  };
  const onSubtract = () => {
    if (amount > 1 && amount <= stock) {
      updateAmount(parseInt(amount) - 1);
    }
  };

  const addToCart = () => {
    updateAmount(initial);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-4 col-lg-3 mx-auto text-center">
          <div className="item-count d-flex text-center form-control justify-content-between">
            <button
              className={amount == initial ? btnDisabled : "btn btn-danger"}
              onClick={onSubtract}
            >
              <img
                className="d-flex align-items-center"
                src={minus}
                alt="minus icon"
                width="15"
                height="15"
              />
            </button>
            <span className="amount text-center mx-2 border-0 d-inline-block">
              {amount}
            </span>
            <button
              className={amount == stock ? btnDisabled : "btn btn-success"}
              onClick={onAdd}
            >
              <img
                className="d-flex align-items-center"
                src={plus}
                alt="plus icon"
                width="15"
                height="15"
              />
            </button>
          </div>
          <div className="add-to-cart-container mt-3">
            <button className="btn btn-dark add-to-cart" onClick={addToCart}>
              Agregar al Carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
