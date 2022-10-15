import Navbar from './components/NavBar/Navbar.jsx';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.css';
import Styles from './App.css'
import itemCount from './components/itemCount/itemCount'
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer.jsx';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Cart from './components/Cart/Cart.jsx';
import CartContextProvider from './components/CartContext/CartContext.jsx';
import { useEffect, useState } from 'react';



function App() {

const [loading, setLoading ] = useState(true);

useEffect (() => {
      setTimeout(() => {
            setLoading(false);
      },5000)
}, []);

  return (
 <>
 {

loading ?
<div className='Loading'>
 <h2>Bienvenido a la caja de las dulzuras</h2>
 <h3>Aguarde, nuestra pagina esta cargando</h3>
 <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
 </div>
 
  : 
 
 <CartContextProvider>
<Router>
      <Navbar>
      </Navbar>
<Routes>
      <Route exact path="/" element={<ItemListContainer/>}/>
      <Route path="/:cat" element={<ItemListContainer/>}/>
      <Route path="/Item/:id" element ={<ItemDetailContainer/>}/>
      <Route path="/cart" element ={<Cart/>}/>
      
</Routes>
</Router>
</CartContextProvider>
}
      </>
  );
}

export default App;
