function ProductHistoryItem({ product }) {
  return (
    <div className="border rounded-[0.5rem] p-[0.8rem] my-[0.1rem] flex items-center justify-between">
      <div className="font-OneShinhanMedium text-[#005DF9] text-[0.9rem]">
        {product.name} | {product.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원
      </div>
      <div className="w-[1.5rem] h-[1.5rem] flex justify-center items-center rounded-full bg-[#F7F7F7] text-[#6B6B6B]">
        {/* {product.nums} */}0
      </div>
    </div>
  );
}
export default ProductHistoryItem;
