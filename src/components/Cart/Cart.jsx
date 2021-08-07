import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../Context/Context';
import CartItem from './CartItem';
import PriceFormat from '../PriceFormat/PriceFormat';
import Form from '../Form/Form';

const Cart = () => {
  const { cartObj } = useContext(Context);

  const totalCart = (plain) => {
    let total = 0;
    cartObj.products.map(
      (product) => (total = total + product.price * product.amount)
    );
    return plain ? total : <PriceFormat number={total} />;
  };

  return (
    <div className='container py-5'>
      <h1 className='text-center mb-3'>Carrito</h1>
      {cartObj.products.length > 0 ? (
        <>
          <div className='row fw-bold text-center'>
            <div className='col'></div>
            <div className='col'>Nombre del Producto</div>
            <div className='col'>Cantidad</div>
            <div className='col'>Precio x Unidad</div>
            <div className='col'>Precio Total</div>
            <div className='col'>Acciones</div>
          </div>
          {cartObj.products.map((product, index) => (
            <CartItem key={index} product={product} />
          ))}
          <div className='totalCart py-5 text-center row justify-content-end fw-bold align-items-center'>
            <div className='col-2'>TOTAL A PAGAR</div>
            <div className='col-2'>{totalCart(false)}</div>
            <div className='col-2'>
              <Form />
              {/* <Link
                to={{
                  pathname:
                    `https://www.paypal.com/paypalme/msuarez25/` +
                    totalCart(true),
                }}
                target="_blank"
              >
                <button className="btn btn-warning">PAGAR</button>
              </Link> */}
            </div>
          </div>
        </>
      ) : (
        <div className='text-center'>
          <p>No hay items en el carrito</p>
          <Link className='btn btn-dark' aria-current='page' to='/'>
            Inicio
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
