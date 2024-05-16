import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../slices/cartSlice';
import { CAKES } from '../constants/products';

const AddProduct = () => {
  const [form, setForm] = useState({ cakeId: '', pounds: '', quantity: 1 });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cake = CAKES.find(cake => cake.id === form.cakeId);
    const newProduct = { 
      id: cake.id, 
      name: cake.name, 
      price: cake.price, 
      pounds: form.pounds, 
      quantity: form.quantity 
    };
    dispatch(addItem(newProduct));
    setForm({ cakeId: '', pounds: '', quantity: 1 });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>ประเภทเค้ก</label>
        <select name="cakeId" value={form.cakeId} onChange={handleChange} required>
          <option value="">เลือกเค้ก</option>
          {CAKES.map(cake => (
            <option key={cake.id} value={cake.id}>{cake.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label>น้ำหนัก (ปอนด์)</label>
        <input type="number" name="pounds" value={form.pounds} onChange={handleChange} required />
      </div>
      <div>
        <label>จำนวน</label>
        <input type="number" name="quantity" value={form.quantity} onChange={handleChange} min="1" required />
      </div>
      <button type="submit">เพิ่มสินค้า</button>
    </form>
  );
};

export default AddProduct;
