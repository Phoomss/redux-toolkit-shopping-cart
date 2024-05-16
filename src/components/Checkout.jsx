import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../slices/cartSlice';

const Checkout = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleCheckout = () => {
    alert('คำสั่งซื้อได้รับการดำเนินการเรียบร้อย!');
    dispatch(clearCart());
  };

  return (
    <div>
      <h2>เช็คเอาท์</h2>
      {cartItems.length === 0 ? (
        <p>ไม่มีสินค้าในตะกร้า</p>
      ) : (
        <div>
          <ul>
            {cartItems.map(item => (
              <li key={item.id}>
                {item.name} - {item.price} บาท x {item.pounds} ปอนด์ x {item.quantity} ก้อน
              </li>
            ))}
          </ul>
          <button onClick={handleCheckout}>สั่งซื้อ</button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
