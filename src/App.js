import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContent from './components/CartContent/CartContent';
import './App.css';
import Item from './components/Item/Item';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:categoryId' element={<ItemListContainer />} />
        <Route path='/items/:itemId' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<Item />} />
      </Routes>
    </BrowserRouter >
  )
}

export default App;
