import React, { useState } from 'react';
// import { Context } from "../../Context/Context";
import AddAmount from './AddAmount';
import GoToCart from './GoToCart';

const ItemCount = ({
  initial,
  stock,
  productID,
  picture,
  name_of_product,
  price,
}) => {
  const [cartState, setCartState] = useState(false);

  return (
    <div className='col-sm-12 p-2 mx-auto text-center'>
      {!cartState ? (
        <AddAmount
          initial={initial}
          stock={stock}
          productID={productID}
          picture={picture}
          name_of_product={name_of_product}
          price={price}
          setCartState={setCartState}
        />
      ) : (
        <GoToCart productID={productID} setCartState={setCartState} />
      )}
    </div>
  );
};

export default ItemCount;
