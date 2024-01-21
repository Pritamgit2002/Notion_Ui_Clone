"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const option = [
  { path: "/engineering-v2.webp", name: "Engineering" },
  { path: "/design-v2.webp", name: "Design" },
  { path: "/product.webp", name: "Product" },
  { path: "/marketing.webp", name: "Marketing" },
  { path: "/operations.webp", name: "Operations" },
  { path: "/hr-v2.webp", name: "Hr" },
];
const Side = () => {
  const [currentImage, setCurrentImage] = useState(1);
  const totalImages = 6;
  const carouselIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [activeButton, setActiveButton] = useState<number | null>(null);

  const handleButtonClick = (imageNumber: number) => {
    setCurrentImage(imageNumber);
    setActiveButton(imageNumber);
    if (carouselIntervalRef.current) {
      clearInterval(carouselIntervalRef.current);
    }
  };

  useEffect(() => {
    carouselIntervalRef.current = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage % totalImages) + 1);
      setActiveButton(null);
    }, 2500);

    return () => {
      if (carouselIntervalRef.current) {
        clearInterval(carouselIntervalRef.current);
      }
    };
  }, []);

  return (
    <div className=" flex flex-col gap-y-6">
      <div className="text-[50px] font-bold text-center">
        Every team, side-by-side
      </div>
      <div className=" flex flex-col gap-y-5">
        <div className="flex items-center justify-center gap-3">
          {option.map((item, index) => (
            <div
              className={`bg-${
                activeButton === index + 1 ? "[#ffffff]" : "[#F6F5F4]"
              }  ${
                activeButton === index + 1
                  ? "border-[3.1px] border-gray-200"
                  : ""
              } 
            ${activeButton === index + 1 ? "" : "hover:bg-[#efeeee]"}
            px-10 py-6 rounded-2xl bg-  cursor-pointer flex flex-col items-center justify-center gap-y-2`}
              onClick={() => handleButtonClick(index + 1)}
            >
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
        <div>
          {/* <div>{currentImage}</div> */}
          <div>
            <Image
              src={`/col${currentImage}.png`}
              alt={`Image-${currentImage}`}
              width={80000}
              height={80000}
              className="w-[1150px] h-full object-contain rounded-2xl border border-gray-200 shadow-xl shadow-gray-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Side;
