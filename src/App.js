import './App.css';
import Home from './Home';
import About from './About';
import Cart from './Cart';
import NavBar from './components/NavBar';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import itemContainer from './components/ItemList';
import itemList from './components/ItemListContainer';
import itemCount from './components/ItemCount';
import CartContext from './components/CartContext';



function App() {
  return (
    <>
    <CartContext.Provider>
    <BrowserRouter>
    <NavBar/>
    <itemCount />
    {
    itemList.map(item => 
      <itemContainer
      key={item.id}
      thumbnail={item.thumbnail}
      brand={item.brand}
      size={item.size}
      price={item.price}

      />
      )
    }
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/Cart' element={<Cart />} />
    <div className='App'>
    <h2>Hola</h2>
    </div>
    </Routes>
    </BrowserRouter>
    </CartContext.Provider>
    </>
  );
}



export default App;
