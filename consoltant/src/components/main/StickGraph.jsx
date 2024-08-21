import { useState } from "react";

function StickGraph({ data }) {
  const [show, setShow] = useState(false);
  return (
    <div className="flex">
      {data.map((asset, index) => (
        <div
          key={index}
          className={`relative group h-[1.3rem] w-[${asset.percent}%] bg-[#${
            asset.type === "입출금" ? "4E59C3" : asset.type === "적금" ? "39C4C0" : "CAD9FF"
          }]`}
        >
          <span className="absolute flex items-center bg-[#F7F7F7] rounded-[0.5rem] w-fill px-[0.3rem] top-[1rem] text-[0.6rem] scale-0 group-hover:scale-100 ">
            <div
              className={`mr-[0.2rem] w-[0.3rem] h-[0.3rem] rounded-full bg-[#${
                asset.type === "입출금" ? "4E59C3" : asset.type === "적금" ? "39C4C0" : "CAD9FF"
              }]`}
            >
              {" "}
            </div>
            {asset.type} {asset.percent}%
          </span>
        </div>
      ))}
    </div>
  );
}
export default StickGraph;
