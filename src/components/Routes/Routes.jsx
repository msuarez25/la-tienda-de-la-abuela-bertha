import React, { useState, useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import ItemDetailContainer from '../ItemDetail/ItemDetailContainer';
import Cart from '../Cart/Cart';
import SyncLoader from 'react-spinners/SyncLoader';
import { css } from '@emotion/react';

const Routes = () => {
  const override = css`
    display: flex;
    align-items: center;
    width: 100%;
    min-height: calc(100vh - 200px);
    justify-content: center;
  `;
  const [loading, setLoading] = useState(true);

  let location = useLocation();

  const timeLoader = () => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    setLoading(true);
    timeLoader();
  }, [location]);

  return (
    <Switch>
      <>
        {loading && (
          <SyncLoader
            color='#ffc107'
            loading={loading}
            css={override}
            size={15}
          />
        )}
        <div className='page-transition'>
          <Route exact path='/'>
            <ItemList />
          </Route>
          <Route path='/producto/:id'>
            <ItemDetailContainer />
          </Route>
          <Route path='/categoria/:tags'>
            <ItemList />
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
        </div>
      </>
    </Switch>
  );
};

export default Routes;
