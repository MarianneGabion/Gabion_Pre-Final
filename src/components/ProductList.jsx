import { useState } from "react";
import ProductCard from "./ProductCard";

function ProductList({ products, setProducts }) {
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...new Set(products.map(p => p.category))];

  function handleChangeQty(id, delta) {
    setProducts(prev =>
      prev.map(p =>
        p.id === id ? { ...p, quantity: Math.max(0, p.quantity + delta) } : p
      )
    );
  }

  // 🧹 New: delete function
  function handleDelete(id) {
    setProducts(prev => prev.filter(p => p.id !== id));
  }

  const visible = products.filter(p =>
    filter === "All" ? true : p.category === filter
  );

  return (
    <div>
      <div className="filter">
        <label>Filter:</label>
        <select value={filter} onChange={e => setFilter(e.target.value)}>
          {categories.map(c => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>

      <div className="grid">
        {visible.map(p => (
          <ProductCard
            key={p.id}
            product={p}
            onChangeQty={handleChangeQty}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
