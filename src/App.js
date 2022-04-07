import './App.css';
import NavBar from './components/NavBar';
import itemContein from './components/itemList';
import itemList from './components/itemListContainer';



function App() {
  return (
    <>
    <div className='App'>
    <NavBar/>
    <h2>Hola</h2>
    {
    itemList.map(item => 
      <itemList
      thumbnail={item.thumbnail}
      brand={item.brand}
      size={item.size}
      price={item.price}

      />
      )
    }
    
    </div>
    </>
  );
}



export default App;
