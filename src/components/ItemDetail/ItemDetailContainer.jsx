import React, { useState, useEffect } from 'react';
import { database } from '../../firebase/firebase';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router';

const ItemDetailContainer = () => {
  const [productos, setProductos] = useState([]);
  const { id } = useParams();
  const getProduct = () => {
    let products;
    if (id !== undefined) {
      products = database.collection('productos').doc(id);
    }

    products.get().then((query) => {
      setProductos({ ...query.data(), id: query.id });
    });
  };

  useEffect(() => {
    getProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='product-detail mb-5'>
      <ItemDetail
        key={productos.id}
        id={productos.id}
        price={productos.price}
        picture={productos.picture}
        name_of_product={productos.name_of_product}
        tags={productos.tags}
        stock={productos.stock}
        description={productos.description}
        autor={productos.author}
      />
    </div>
  );
};
export default ItemDetailContainer;
