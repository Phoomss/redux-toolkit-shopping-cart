import React from 'react';
import AddProduct from './components/AddProduct';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  return (
    <div>
      <h1>ร้านขายเค้ก</h1>
      <AddProduct />
      <Cart />
      <Checkout />
    </div>
  );
}

export default App;
