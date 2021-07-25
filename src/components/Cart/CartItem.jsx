import React, { useContext } from "react";
import PriceFormat from "../PriceFormat/PriceFormat";
import { Context } from "../../Context/Context";

const CartItem = ({ product }) => {
  const { cartObj } = useContext(Context);
  const { setCartObj } = useContext(Context);

  const removeProductByID = (id) => {
    return cartObj.products.filter((obj) => {
      return obj.id !== id;
    });
  };
  const deleteItem = (e) => {
    let itemID = e.target.id;
    itemID = itemID.replace("delete-", "");
    setCartObj({
      products: removeProductByID(itemID),
    });
  };

  const totalPerItem = (price, amount) => {
    return price * amount;
  };
  return (
    <div
      className="cartItem row align-items-center text-center"
      id={`product-${product.id}`}
    >
      <div className="col">
        <span className="picture">
          <img
            src={product.picture}
            alt={`Foto de ${product.name_of_product}`}
          />
        </span>
      </div>
      <div className="col">
        <span className="name">
          <strong>{product.name_of_product}</strong>
        </span>
      </div>
      <div className="col">
        <span className="amount">{product.amount}</span>
      </div>
      <div className="col">
        <span className="amount">
          <PriceFormat number={product.price} />
        </span>
      </div>
      <div className="col">
        <span className="amount">
          <PriceFormat number={totalPerItem(product.price, product.amount)} />
        </span>
      </div>
      <div className="col">
        <button
          id={`delete-${product.id}`}
          onClick={deleteItem}
          className="btn btn-danger"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CartItem;
