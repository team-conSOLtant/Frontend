function ProductHistoryItem({ product }) {
  return (
    <div className="border rounded-[0.5rem] p-[0.8rem] my-[0.1rem] flex items-center justify-between">
      <div>
        {product.type} | {product.amount}
      </div>
      <div className="">{product.nums}</div>
    </div>
  );
}
export default ProductHistoryItem;
