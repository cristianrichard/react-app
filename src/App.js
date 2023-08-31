import DataProvider from './components/DataContext/DataContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import CartContent from './components/CartContent/CartContent';
import './App.css';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<CartContent />} />
        </Routes>
      </BrowserRouter >
    </DataProvider>
  )
}

export default App;
