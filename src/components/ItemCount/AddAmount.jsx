import React, { useContext, useState } from 'react';
import { Context } from '../../Context/Context';

const AddAmount = ({
  initial,
  stock,
  productID,
  setCartState,
  picture,
  name_of_product,
  price,
}) => {
  const { setCartObj } = useContext(Context);
  const { cartObj } = useContext(Context);
  const btnDisabled = 'btn btn-secondary';
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

  const productExist = (id) => {
    return cartObj.products.some((obj) => {
      return obj.id === id;
    });
  };

  const addToCart = () => {
    setCartState(true);
    if (!productExist(productID)) {
      setCartObj({
        products: [
          ...cartObj.products,
          {
            id: productID,
            picture: picture,
            name_of_product: name_of_product,
            price: price,
            amount: amount,
          },
        ],
      });
    } else {
      alert(
        'Ya tienes este producto en tu carrito. Si deseas modificar la cantidad presiona el boton de editar compra.'
      );
    }
  };

  if (stock === 0) {
    return (
      <div className='alert alert-secondary' role='alert'>
        No hay stock de este producto
      </div>
    );
  } else {
    return (
      <>
        <div className='item-count d-flex text-center form-control justify-content-between'>
          <button
            className={amount === initial ? btnDisabled : 'btn btn-danger'}
            onClick={onSubtract}
          >
            <img
              className='d-flex align-items-center'
              src='/assets/images/minus-solid.svg'
              alt='minus icon'
              width='15'
              height='15'
            />
          </button>
          <span className='amount text-center mx-2 border-0 d-inline-block'>
            {amount}
          </span>
          <button
            className={amount === stock ? btnDisabled : 'btn btn-success'}
            onClick={onAdd}
          >
            <img
              className='d-flex align-items-center'
              src='/assets/images/plus-solid.svg'
              alt='plus icon'
              width='15'
              height='15'
            />
          </button>
        </div>
        <div className='add-to-cart-container mt-3'>
          <button className='btn btn-dark add-to-cart' onClick={addToCart}>
            Agregar al Carrito
          </button>
        </div>
      </>
    );
  }
};

export default AddAmount;
