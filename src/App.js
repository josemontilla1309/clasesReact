import './App.css';
import Home from './Home';
import About from './About';
import NavBar from './components/NavBar';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import itemContainer from './components/itemList';
import itemList from './components/itemListContainer';



function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
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
    <div className='App'>
    <h2>Hola</h2>
    </div>
    </Routes>
    </BrowserRouter>
    </>
  );
}



export default App;
