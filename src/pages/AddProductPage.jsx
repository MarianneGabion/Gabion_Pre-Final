import AddProductForm from "../components/AddProductForm";

function AddProductPage({ products, setProducts }) {
  return (
    <div className="app-container">
      <AddProductForm products={products} setProducts={setProducts} />
    </div>
  );
}

export default AddProductPage;
