import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/styles.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import React from 'react';
import { DataProvider } from './Context/Context';
import NavBar from './components/NavBar/NavBar';
import Routes from './components/Routes/Routes';

const nombreTienda = 'La Tienda de la Abuela Bertha';

function App() {
  return (
    <DataProvider>
      <div className='App'>
        <header className='header'>
          <NavBar navTheme='navbar-dark bg-dark' logoAlt={nombreTienda} />
        </header>
        <Routes />
        <footer className='footer text-center py-5 bg-dark text-light'>
          Todos los derechos reservados ©{' '}
          {new Date().toLocaleString('es-AR', { year: 'numeric' })}
        </footer>
      </div>
    </DataProvider>
  );
}

export default App;
