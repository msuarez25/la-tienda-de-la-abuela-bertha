import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/styles.css";
import "bootstrap/dist/js/bootstrap.bundle";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const nombreTienda = "La Tienda de la Abuela Bertha";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <header className="header">
            <NavBar navTheme="navbar-dark bg-dark" logoAlt={nombreTienda} />
          </header>
          <Switch>
            <Route exact path="/">
              <ItemDetailContainer />
              {/* <ItemListContainer /> */}
            </Route>
            <Route path="/sobre-la-abuela">
              <ItemListContainer />
            </Route>
            <Route path="/categorias">
              <ItemListContainer />
            </Route>
            <Route path="/pinturas">
              <ItemListContainer />
            </Route>
            <Route path="/orfebreria">
              <ItemListContainer />
            </Route>
            <Route path="/cart">
              <ItemListContainer />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
