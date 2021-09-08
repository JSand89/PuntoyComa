import './App.css';
import Cards from './components/Cards/Cards';
import Carrito from './components/Carrito/Carrito';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu'


function App() {
  return (
    <div className="App">
      <Menu/>
      <Footer />
      <Carrito/>
    </div>
  );
}

export default App;
