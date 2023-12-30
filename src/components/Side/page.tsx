import Image from "next/image";
import React from "react";

const option = [
  { path: "/engineering-v2.webp", name: "Engineering" },
  { path: "/design-v2.webp", name: "Design" },
  { path: "/product.webp", name: "Product" },
  { path: "/marketing.webp", name: "Marketing" },
  { path: "/operations.webp", name: "Operations" },
  { path: "/hr-v2.webp", name: "Hr" },
];
const Side = () => {
  return (
    <div className=" flex flex-col gap-y-6">
      <div className="text-[50px] font-bold text-center">
        Every team, side-by-side
      </div>
      <div className="flex items-center justify-center gap-3">
        {option.map((item) => (
          <div className=" px-9 py-6 rounded-2xl bg-[#F6F5F4] hover:bg-[#efeeee] cursor-pointer flex flex-col items-center justify-center gap-y-2 ">
            <Image
              src={item.path}
              alt="pic"
              width={2000}
              height={2000}
              className="w-[100px] h-[85px] object-contain"
            />
            <div className="font-bold text-lg">{item.name}</div>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Side;
