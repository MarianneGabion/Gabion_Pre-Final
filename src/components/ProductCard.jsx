import { Link } from "react-router-dom";

function ProductCard({ product, onChangeQty, onDelete }) {
  const subtotal = product.price * product.quantity;

  return (
    <div className={`card ${product.quantity < 5 ? "low-stock" : ""}`}>
      <img src={product.image} alt={product.name} />
      <div>
        <h3>🍃 {product.name}</h3>
        <p className="muted">{product.category}</p>
        <p>₱{product.price} × {product.quantity} = <strong>₱{subtotal}</strong></p>

        <div className="actions">
          <button onClick={() => onChangeQty(product.id, -1)}>-</button>
          <button onClick={() => onChangeQty(product.id, +1)}>+</button>
          <Link to={`/product/${product.id}`}>View</Link>
          {/* 🧹 Delete Button */}
          <button
            onClick={() => {
              if (confirm(`Delete ${product.name}?`)) {
                onDelete(product.id);
              }
            }}
            style={{ background: "#e57373" }}
          >
            Delete
          </button>
        </div>

        {product.quantity < 5 && <div className="low-badge">⚠️ Low Stock</div>}
      </div>
    </div>
  );
}

export default ProductCard;
