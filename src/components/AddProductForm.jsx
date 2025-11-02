import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProductForm({ products, setProducts }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
    image: "",
    description: "",
    specs: "",
    rating: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.category || !form.price || !form.quantity) {
      alert("Please fill all required fields 🌿");
      return;
    }
    const newProduct = {
      ...form,
      id: Date.now(),
      price: Number(form.price),
      quantity: Number(form.quantity),
      rating: Number(form.rating || 0)
    };
    setProducts([...products, newProduct]);
    navigate("/");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add New Matcha Product 🍵</h2>

      <input name="name" placeholder="Product name (e.g., Iced Matcha Latte)" onChange={handleChange} />
      <input name="category" placeholder="Category (Beverages / Desserts / Pastries)" onChange={handleChange} />
      <input type="number" name="price" placeholder="Price (₱)" onChange={handleChange} />
      <input type="number" name="quantity" placeholder="Quantity" onChange={handleChange} />
      <input name="image" placeholder="Image URL (optional)" onChange={handleChange} />
      <textarea name="description" placeholder="Description" onChange={handleChange}></textarea>
      <textarea name="specs" placeholder="Specifications" onChange={handleChange}></textarea>
      <input type="number" step="0.1" name="rating" placeholder="Rating (0–5)" onChange={handleChange} />

      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddProductForm;
