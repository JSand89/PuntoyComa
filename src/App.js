
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
  
import React, { useState } from "react";
import './App.css';
import CardBag from './components/CardBag/CardBag';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu'
import List from './productList.json'







//-------App---------------------------------
function App() {

  // let obt=List.map(item=>[{id:item.id,size:0,number:0}])
  //  const [memoryStatus,memoryChanges]=useState(obt)
  // console.log(obt,'obt')
  // const MemoryContext=React.createContext()
  //--------------Function Rutes--------------------
  function Home() {
    return  <div className="App">
    {/* <MemoryContext.Provider value={objet}> */}
    <Menu />
    <Footer />
    {/* </MemoryContext.Provider> */}
  </div>
  }
  
  function About() {
    return <div className="App"> 
    <CardBag/>
    <Footer/>
  </div>
  }
  
  function Users() {
    return <h2>Users</h2>;
  }
  return (

    <Router>
 <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Tienda</Link>
            </li>
            <li>
              <Link to="/about">Carrito</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )}
 

export default App;
