import './App.css';
import CardBag from './components/CardBag/CardBag';
import Cards from './components/Cards/Cards';
import Carrito from './components/Carrito/Carrito';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu'


function App() {
  return (
    <div className="App">
      <Menu/>
      <Footer />
      <CardBag/>
    </div>
  );
}

export default App;
