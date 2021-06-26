import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/styles.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <>
    <div className="App">
      <header className="header">
      <NavBar navTheme="navbar-dark bg-dark" />
      </header>
    </div>
    </>
  );
}

export default App;
