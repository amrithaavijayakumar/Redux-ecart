import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import PageNotFound from './pages/PageNotFound'
import Home from './pages/Home'
function App() {
  return (
    <div className="App">   
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/wishlist' element={<Wishlist/>}></Route>
      <Route path='*' element={<PageNotFound/>}></Route>
    </Routes>
    <Footer/>

    </div>
  );
}

export default App;
