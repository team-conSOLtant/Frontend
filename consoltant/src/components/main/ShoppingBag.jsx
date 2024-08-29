import RoundButton from "../common/RoundButton";

function ShoppingBag({ products }) {
  const handleWheel = (event) => {
    event.stopPropagation();
  };
  return (
    <div>
      {/* container scroll */}
      <div className="relative border bg-[#EAF3FD] rounded-[0.5rem] h-[10rem]">
        {/* items */}
        {products && products.length > 0 ? (
          <>
            <div className="h-[7rem] overflow-auto" onWheel={handleWheel}>
              {products.map((product, index) => {
                return (
                  <div
                    key={index}
                    className="border bg-white rounded-[0.5rem] px-[0.5rem] py-[0.7rem] m-[0.5rem]"
                  >
                    <div className="text-[0.7rem]">
                      <span className="font-OneShinhanBold text-[0.9rem]">
                        {product.startDate} ~ {product.endDate}
                      </span>
                      에<br /> 가입을 추천하는 상품입니다.
                    </div>
                    <div className="font-OneShinhanBold text-[#005DF9] text-[0.9rem] mt-[0.5rem]">
                      {product.productInfo.accountName}
                    </div>
                    <div className="text-[0.7rem]">
                      <span>
                        {/* ({product.productInfo.duration}개월 기준) */}
                        ??개월 기준
                        <span className="text-[#005DF9]">
                          {/* 연 {product.productInfo.minInterest}% ~ */}연 ??%
                          ~
                          <span className="font-OneShinhanMedium text-[0.8rem]">
                            {/* {product.productInfo.maxInterest}% */}
                            ??%
                          </span>
                        </span>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <div className="w-[100%] h-[100%] flex flex-col justify-center items-center ">
            <img className="w-[3rem]" src="/main/Wastebasket.svg" alt="" />
            <div className="text-[0.9rem] font-OneShinhanMedium pt-[0.5rem] ">
              장바구니가 비어있습니다.
            </div>
          </div>
        )}
        <div className="absolute right-[0.5rem] bottom-[0.5rem]">
          <RoundButton />
        </div>
      </div>
    </div>
  );
}
export default ShoppingBag;
