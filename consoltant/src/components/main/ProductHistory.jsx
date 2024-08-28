import ProductHistoryItem from "./ProductHistoryItem";

function ProductHistory({ products }) {
  const handleWheel = (event) => {
    event.stopPropagation();
  };
  return (
    <div className="flex flex-col h-[10.2rem] overflow-auto" onWheel={handleWheel}>
      {products.map((product, index) => [
        <ProductHistoryItem key={index} product={product} />,
      ])}
    </div>
  );
}
export default ProductHistory;
