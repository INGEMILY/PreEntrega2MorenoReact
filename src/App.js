import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartProvider } from './context/CartContext'; 
import Checkout from './components/Checkout'; 
import Cart from './components/cart'; 

const App = () => (
  <CartProvider> {}
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} /> {}
        <Route path="/checkout" element={<Checkout />} /> {}
      </Routes>
    </Router>
  </CartProvider>
);

export default App;
