"use client";
import Image from "next/image";

import React, { useState, useEffect, useRef } from "react";

const CarouselApp: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(1);
  const totalImages = 6;
  const carouselIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleButtonClick = (imageNumber: number) => {
    setCurrentImage(imageNumber);
    if (carouselIntervalRef.current) {
      clearInterval(carouselIntervalRef.current);
    }
  };

  useEffect(() => {
    carouselIntervalRef.current = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage % totalImages) + 1);
    }, 1000);

    return () => {
      if (carouselIntervalRef.current) {
        clearInterval(carouselIntervalRef.current);
      }
    };
  }, []);

  return (
    <div className=" flex flex-col items-center justify-center">
      <h1>Image Carousel</h1>
      <div>{currentImage}</div>
      <div>
        <Image
          src={`/pro${currentImage}.jpg`}
          alt={`Image ${currentImage}`}
          width={80000}
          height={80000}
          className="w-[800px] h-[600px] object-contain"
        />
      </div>
      <div className="flex items-center justify-center gap-10 text-2xl font-bold">
        {[...Array(totalImages)].map((_, index) => (
          <button key={index} onClick={() => handleButtonClick(index + 1)}>
            Show Image {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CarouselApp;
