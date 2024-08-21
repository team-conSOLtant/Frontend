import ProductHistoryItem from "./ProductHistoryItem";

function ProductHistory({ products }) {
  return (
    <div className="flex flex-col">
      {products.map((product, index) => [
        <ProductHistoryItem key={index} product={product} />,
      ])}
    </div>
  );
}
export default ProductHistory;
