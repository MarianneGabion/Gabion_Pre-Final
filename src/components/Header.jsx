import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1>🍵 Marianne’s Whisk & Leaf Café </h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/add">Add Product</Link>
      </nav>
    </header>
  );
}

export default Header;
