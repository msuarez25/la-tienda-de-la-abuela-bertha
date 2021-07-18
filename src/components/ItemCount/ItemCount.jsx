import React, { useState } from "react";
// import { Context } from "../../Context/Context";
import AddAmount from "./AddAmount";
import GoToCart from "./GoToCart";

const ItemCount = ({ initial, stock, productID }) => {
  const [cartState, setCartState] = useState(false);

  return (
    <div className="col-sm-12 p-2 mx-auto text-center">
      {!cartState ? (
        <AddAmount
          initial={initial}
          stock={stock}
          productID={productID}
          setCartState={setCartState}
        />
      ) : (
        <GoToCart productID={productID} setCartState={setCartState} />
      )}
    </div>
  );
};

export default ItemCount;
