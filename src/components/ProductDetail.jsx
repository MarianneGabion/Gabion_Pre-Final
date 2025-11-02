import { useParams, Link } from "react-router-dom";

function ProductDetail({ products }) {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  if (!product) return <p>Product not found.</p>;

  return (
    <div className="detail">
      <img src={product.image} alt={product.name} />
      <h2>🍵 {product.name}</h2>
      <p><strong>Category:</strong> {product.category}</p>
      <p>{product.description}</p>
      <p><strong>Specs:</strong> {product.specs}</p>
      <p><strong>Rating:</strong> {product.rating}⭐</p>
      <p><strong>Price:</strong> ₱{product.price}</p>
      <p><strong>Quantity:</strong> {product.quantity}</p>
      <Link to="/">← Back</Link>
    </div>
  );
}

export default ProductDetail;
