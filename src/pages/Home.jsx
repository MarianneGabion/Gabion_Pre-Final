import ProductList from "../components/ProductList";
import TotalsBar from "../components/TotalsBar";

function Home({ products, setProducts }) {
  return (
    <div className="app-container">
      <ProductList products={products} setProducts={setProducts} />
      <TotalsBar products={products} />
    </div>
  );
}

export default Home;
