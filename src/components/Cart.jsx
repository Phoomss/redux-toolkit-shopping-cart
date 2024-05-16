import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, clearCart } from '../slices/cartSlice';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleClear = () => {
    dispatch(clearCart());
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => 
      total + (item.price * item.pounds * item.quantity), 0
    );
  };

  return (
    <div>
      <h2>ตะกร้าสินค้า</h2>
      {cartItems.length === 0 ? (
        <p>ไม่มีสินค้าในตะกร้า</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.name} - {item.price} บาท x {item.pounds} ปอนด์ x {item.quantity} ก้อน
              <button onClick={() => handleRemove(item.id)}>ลบ</button>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <>
          <p>ยอดรวม: {calculateTotal()} บาท</p>
          <button onClick={handleClear}>ล้างตะกร้า</button>
        </>
      )}
    </div>
  );
};

export default Cart;
