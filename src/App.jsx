import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/styles.css";
import "bootstrap/dist/js/bootstrap.bundle";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
const nombreTienda = "La Tienda de la Abuela Bertha";

function App() {
  return (
    <>
      <div className="App">
        <header className="header">
          <NavBar navTheme="navbar-dark bg-dark" logoAlt={nombreTienda} />
        </header>
        <ItemListContainer mensajeBienvenida={`Bienvenido a ${nombreTienda}`} />
        <ItemCount stock={9} initial={1} />
      </div>
    </>
  );
}

export default App;
