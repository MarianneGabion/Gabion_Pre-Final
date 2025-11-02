function TotalsBar({ products }) {
  const total = products.reduce((sum, p) => sum + p.price * p.quantity, 0);

  return (
    <div className="totals">
      <p>
        Total Sales Value: <strong>₱{total.toLocaleString()}</strong>
      </p>
    </div>
  );
}


export default TotalsBar;
