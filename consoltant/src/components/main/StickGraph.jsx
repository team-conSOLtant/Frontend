function StickGraph({ data }) {
  const getColorByType = (type) => {
    switch (type) {
      case "demandDeposit":
        return "#4E59C3";
      case "savings":
        return "#39C4C0";
      case "deposit":
        return "#CAD9FF";
      default:
        return "#D4F6EC";
    }
  };

  return (
    <div className="flex flex-row items-center border border-[#FFFFFF]">
      {data.map((asset, index) => (
        <div
          key={index}
          className="relative group h-[1.3rem]"
          style={{
            width: `${asset.percent}%`,
            backgroundColor: getColorByType(asset.type),
          }}
        >
          <span className="absolute flex items-center bg-[#F7F7F7] rounded-[0.5rem] w-fill min-w-[4.5rem] px-[0.3rem] top-[1rem] text-[0.6rem] scale-0 group-hover:scale-100 z-30 ">
            <div
              className="mr-[0.2rem] w-[0.3rem] h-[0.3rem] rounded-full"
              style={{
                backgroundColor: getColorByType(asset.type),
              }}
            ></div>
            <div className="flex justify-center w-[100%]">
              {asset.name} {asset.percent}%
            </div>
          </span>
        </div>
      ))}
    </div>
  );
}
export default StickGraph;
