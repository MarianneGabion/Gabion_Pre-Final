import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import defaultProducts from "./data/products.js";
import Home from "./pages/Home.jsx";
import AddProductPage from "./pages/AddProductPage.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
import FrontPage from "./pages/FrontPage.jsx";
import Header from "./components/Header.jsx";

function App() {
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem("products");
    return saved ? JSON.parse(saved) : defaultProducts;
  });

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  return (
    <BrowserRouter>
      <Routes>
        {/* 🏠 New front page route */}
        <Route path="/" element={<FrontPage />} />

        {/* Product routes */}
        <Route
          path="/home"
          element={<>
            <Header />
            <Home products={products} setProducts={setProducts} />
          </>}
        />
        <Route
          path="/add"
          element={<>
            <Header />
            <AddProductPage products={products} setProducts={setProducts} />
          </>}
        />
        <Route
          path="/product/:id"
          element={<>
            <Header />
            <ProductDetail products={products} />
          </>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
