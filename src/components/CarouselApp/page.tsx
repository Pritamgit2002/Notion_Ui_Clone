"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

const CarouselApp: React.FC = () => {
  const option = ["Board", "Table", "Timeline", "Calendar", "Gallery", "List"];

  const [currentImage, setCurrentImage] = useState(1);
  const [activeButton, setActiveButton] = useState<number | null>(null);
  const totalImages = 6;
  const carouselIntervalRef = useRef<NodeJS.Timeout | null>(null);

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
      setActiveButton(null); // Reset active button after each interval
    }, 2000);

    return () => {
      if (carouselIntervalRef.current) {
        clearInterval(carouselIntervalRef.current);
      }
    };
  }, []);

  return (
    <div>
      <h1>Image Carousel</h1>
      <div>
        <img
          src={`/col${currentImage}.png`}
          alt={`Image ${currentImage}`}
          style={{ maxWidth: "50%" }}
        />
      </div>
      <div className={`space-x-10 `}>
        {[...Array(totalImages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(index + 1)}
            className={`bg-${
              activeButton === index + 1 ? "red" : "blue"
            }-500 text-${
              activeButton === index + 1 ? "blue" : "gray"
            }-400 border-4 border-${
              activeButton === index + 1 ? "blue" : "gray"
            }-400 font-bold py-2 px-4 bg-yellow-400 `}
          >
            Show Image {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CarouselApp;
