import React, { useState } from 'react';
import firebase from 'firebase/app';
import { database } from '../../firebase/firebase';
import Confirmacion from './Confirmacion';

const Form = ({ cart, total }) => {
  const [newOrderNum, setNewOrderNum] = useState('');
  const [showModal, setShowModal] = useState('');

  const updateNewOrderNum = (orderNum) => {
    setNewOrderNum(orderNum);
    setShowModal('show');
  };

  // Mi carrito estuvo hecho como objecto en un principio asi que le paso solo el array de los productos para poder mapearlo
  const cartArray = cart['products'];

  const handleSubmit = (event) => {
    ///Evitamos el comportamiento default de los forms
    event.preventDefault();

    ///Capturamos la data del usuario
    const userData = {
      name: event.target.nombre.value + ' ' + event.target.apellido.value,
      phone: event.target.telefono.value,
      email: event.target.email.value,
    };

    ///Juntamos la data de la orden
    const newOrder = {
      Buyer: userData,
      items: cartArray,
      date: new Date().toString(),
      total: total,
    };

    ///Traemos la colección de firebase
    const orders = database.collection('orders');

    ///Creamos la variable que guardará el ID de la orden
    let orderId;

    ///Subimos la orden a nuestra base de datos
    orders
      .add(newOrder)
      .then((response) => {
        ///Si todo sale bien, nos va a devolver en la respuesta el ID de la orden
        orderId = response.id;
      })
      .catch((error) => {
        ///Si llega a haber cualquier otro error, notificamos al usuario
        alert('ERROR: ' + error);
      });

    ///Vamos a hacer el BATCH, es decir, una serie de instrucciones que SOLO se van a hacer si se cumple
    ///cierta condición

    ///Traemos SOLO los items de la colección que coinciden con los que el el usuario
    ///va a comprar

    ///Seleccionamos dichos items
    const itemsToCheck = database.collection('productos').where(
      firebase.firestore.FieldPath.documentId(),
      'in',
      cartArray.map((item) => item.id)
    );

    ///Traemos su data
    itemsToCheck.get().then((query) => {
      ///Creamos el batch -> El batch va a guardar todas las operaciones que hay que hacer para
      ///actualizar los stocks de los productos, PERO solo sed va a ejecutar al final
      ///si todo está OK (en nuestro caso si hay stock de todo lo que pidió el usuario)
      const batch = database.batch();
      ///Creamos un array que contendrá los items sin stock si los hay
      const outOfStockItems = []; ///Inicia como array vacío

      ///Ahora por CADA ITEM de los que el usuario quiere comprar, vamos a
      ///agregar al batch aquellos de los que SI hay stock

      query.docs.forEach((doc, index) => {
        ///Si hay stock, agregamos al batch la operación para RESTARLE al stock
        if (doc.data().stock >= newOrder.items[index].amount) {
          ///Si el stock es MAYOR o IGUAL a la cantidad solicitada, vamos a realizar una operación
          ///Con el doc.ref, basicamente le decimos que seleccione el mismo
          batch.update(doc.ref, {
            ///La operación que vamos a hacer es RESTAR al stock del item, la cantidad pedida
            ///por el usuario
            stock: doc.data().stock - newOrder.items[index].amount,
          });
        } else {
          ///SI NO HAY STOCK, vamos a pushear el item en cuestión al array de sin stock
          outOfStockItems.push({ ...doc.data(), id: doc.id });
        }
      });

      if (outOfStockItems.length === 0) {
        ///Si no hay items sin stock, significa que está todo OK,
        ///y vamos a EJECUTAR EL BATCH
        batch.commit().then(() => {
          ///Le avisamos al usuario que todo salió bien, y le damos el ID de su compra
          updateNewOrderNum(orderId);
        });
      } else {
        ///De lo contrario, notificamos al usuario que no puede realizar la compra:
        alert('ERROR: Hay items que ya no tienen stock suficiente.');
      }
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2 className='mb-4'>Finalizar Compra</h2>
        <div className='row'>
          <div className='col-md-6 offset-md-3'>
            <div className='row g-4'>
              <div className='col-md-6 form-floating'>
                <input
                  placeholder='Nombre'
                  type='text'
                  className='form-control px-3'
                  id='nombre'
                />
                <label className='px-4' forHTML='nombre'>
                  Nombre
                </label>
              </div>
              <div className='col-md-6 form-floating'>
                <input
                  placeholder='Apellido'
                  type='text'
                  className='form-control px-3'
                  id='apellido'
                />
                <label className='px-4' forHTML='apellido'>
                  Apellido
                </label>
              </div>
              <div className='col-md-6 form-floating'>
                <input
                  placeholder='Teléfono'
                  type='tel'
                  className='form-control px-3'
                  id='telefono'
                />
                <label className='px-4' forHTML='telefono'>
                  Teléfono
                </label>
              </div>
              <div className='col-md-6 form-floating'>
                <input
                  type='email'
                  className='form-control px-3'
                  id='email'
                  placeholder='E-mail'
                />
                <label className='px-4' forHTML='email'>
                  E-mail
                </label>
              </div>
            </div>
            <div className='col-md-12 mt-4'>
              <button className='btn btn-lg btn-warning' type='submit'>
                COMPRAR
              </button>
            </div>
          </div>
        </div>
      </form>
      <Confirmacion
        orderId={newOrderNum}
        total={total}
        show={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
};

export default Form;
