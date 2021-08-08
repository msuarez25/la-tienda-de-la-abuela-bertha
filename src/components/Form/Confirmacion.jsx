import React, { useContext } from 'react';
import { Context } from '../../Context/Context';

const Confirmacion = ({ orderId, total, show, setShowModal }) => {
  // traigo la funcion de actulizacion de useState del context para el objeto del carrito
  const { setCartObj } = useContext(Context);
  const pagarConPaypal = () => {
    window.open(`https://www.paypal.com/paypalme/msuarez25/${total}`);
  };

  // funciton para limpiar todo el carrito
  const clearCart = () => {
    setCartObj({ products: [] });
  };

  const cerrarLimpiarCarrito = () => {
    // Cerramos el modal
    setShowModal('');
    //Le limpiamos el carrito automáticamente
    clearCart();
  };

  return (
    <div
      className={`pop-up ${show}`}
      id='confirmation'
      tabindex='-1'
      aria-labelledby='confirmationLabel'
      aria-hidden='true'
    >
      <div className='pop-up-container'>
        <div className='pop-up-content'>
          <div className='pop-up-top'>
            <h5 className='pop-up-title'>ORDEN GENERADA CON EXITO!</h5>
            <button
              type='button'
              className='btn-close'
              aria-label='Close'
              onClick={cerrarLimpiarCarrito}
            ></button>
          </div>
          <div className='pop-up-center'>
            <p>
              Número de orden: #<span className='order-id'>{orderId}</span>
            </p>
          </div>
          <div className='pop-up-bottom'>
            <button
              type='button'
              className='btn btn-primary'
              onClick={pagarConPaypal}
            >
              Pagar con Paypal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmacion;
