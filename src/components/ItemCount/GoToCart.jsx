import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../Context/Context';

const GoToCart = ({ productID, setCartState }) => {
  const { setCartObj } = useContext(Context);
  const { cartObj } = useContext(Context);

  const removeProductByID = (id) => {
    return cartObj.products.filter((obj) => {
      return obj.id !== id;
    });
  };
  const editAmount = () => {
    setCartState(false);
    setCartObj({
      products: removeProductByID(productID),
    });
  };
  return (
    <div className='row row-cols-1 g-2 justify-content-center'>
      <div className='col'>
        <button className='btn btn-danger edit-to-cart' onClick={editAmount}>
          Editar Compra
        </button>
      </div>
      <div className='col'>
        <Link to={`/cart`} className='btn btn-warning go-to-cart'>
          Ir al Carrito
        </Link>
      </div>
    </div>
  );
};

export default GoToCart;
