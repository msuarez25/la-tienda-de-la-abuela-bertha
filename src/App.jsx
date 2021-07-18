import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/styles.css";
import "bootstrap/dist/js/bootstrap.bundle";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import { DataProvider } from "./Context/Context";
import Cart from "./components/Cart/Cart";

const nombreTienda = "La Tienda de la Abuela Bertha";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <BrowserRouter>
          <header className="header">
            <NavBar navTheme="navbar-dark bg-dark" logoAlt={nombreTienda} />
          </header>
          <Switch>
            <Route exact path="/">
              <ItemListContainer />
            </Route>
            <Route path="/producto/:id">
              <ItemDetailContainer />
            </Route>
            <Route path="/categoria/:tags">
              <ItemListContainer />
            </Route>
            <Route path="/sobre-la-abuela">
              <h1>Sobre La Abuela</h1>
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
          </Switch>
          <footer className="footer text-center py-5 bg-dark text-light">
            Todos los derechos reservados ©{" "}
            {new Date().toLocaleString("es-AR", { year: "numeric" })}
          </footer>
        </BrowserRouter>
      </div>
    </DataProvider>
  );
}

export default App;
