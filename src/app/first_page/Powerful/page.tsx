"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { LuEye } from "react-icons/lu";
import { IoColorPaletteOutline } from "react-icons/io5";
import { PiShuffleAngularBold } from "react-icons/pi";

const Powerful = () => {
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
    <div className=" flex flex-col items-center justify-center gap-y-10 bg--400 ">
      <div className="flex flex-col items-center justify-center gap-y-0 bg--300 w-full ">
        <div className="flex flex-col-reverse xl:flex-row items-start xl:items-end justify-center mx-auto gap-y-8 xl:gap-4 w-full bg--300">
          <Image
            src="/together.webp"
            alt="pic"
            width={2000}
            height={2000}
            className=" h-[120px] xl:h-[180px] w-[180px] xl:w-[260px]"
          />
          <div className=" text-[30px] sm:text-[40px] xl:text-[60px] font-bold bg--400 w-full text-center">
            Powerful building blocks
          </div>
        </div>
        <div className=" w-96 sm:w-[670px] xl:w-full xl:h-[920px] rounded-2xl bg-[#F6F5F4] p-4 xl:p-10 flex flex-col gap-y-6">
          <div className=" text-2xl xl:text-3xl text-[#0A85D1] font-semibold">
            <PiShuffleAngularBold />
          </div>
          <div className="flex flex-col gap-y-2">
            <div className="text-[20px] font-bold w-96 sm:w-auto">
              Visualize, filter & sort any way you want
            </div>
            <div className=" text-[17px] xl:text-[18px] font-medium  w-72 sm:w-[550px] xl:w-[620px]">
              Show only tasks assigned to you, or items marked as urgent. Break
              down any project in the way that’s most helpful to you.
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-y-8 ">
            <div>
              <Image
                src={`/col${currentImage}.png`}
                alt={`Image-${currentImage}`}
                width={2000}
                height={2000}
                className="w-96 sm:w-[600px] xl:w-[1020px] border border-gray-200 shadow-lg shadow-gray-200
                 object-contain rounded-xl xl:rounded-2xl "
              />
            </div>
            <div className=" flex flex-wrap xl:flex-row items-center justify-center gap-6 xl:gap-10 ">
              {option.map((item, index) => (
                <div
                  className={`${
                    activeButton === index + 1 ? "bg-[#d1d1d1]" : "[#F6F5F4]"
                  }
                ${activeButton === index + 1 ? "" : "hover:bg-[#e4e2e2]"}
                flex items-center justify-between px-1 sm:px-2 py-1 sm:py-[2px] rounded-lg  cursor-pointer font-medium text-md sm:border border-gray-300`}
                  onClick={() => handleButtonClick(index + 1)}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row  items-center justify-center gap-6 ">
        <div className="rounded-2xl flex flex-col gap-y-10 w-[380px]  sm:w-80 xl:w-[550px] pt-8 pl-8 bg-[#F6F5F4] h-auto sm:h-[455px] xl:h-auto ">
          <div className="flex flex-col gap-y-4 ">
            <div className="text-[#0A85D1] text-4xl">
              <LuEye />
            </div>
            <div className="flex flex-col gap-y-2">
              <div className="text-xl font-bold">
                Customize the info you track
              </div>
              <div className="xl:text-lg">
                Create your own labels, tags, owners, and more, so everyone has
                context and everything stays organized.
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/pow1.webp"
              alt="done"
              width={2000}
              height={2000}
              className="xl:h-[400px] w-[550px] object-contain"
            />
          </div>
        </div>

        <div className="rounded-2xl flex flex-col gap-y-10 w-[380px] sm:w-80 xl:w-[550px] h-auto sm:h-[455px] xl:h-auto pt-8 pl-8 bg-[#F6F5F4] ">
          <div className="flex flex-col gap-y-4  ">
            <div className="text-[#0A85D1] text-4xl">
              <IoColorPaletteOutline />
            </div>
            <div className="flex flex-col gap-y-2">
              <div className="text-xl font-bold">
                Build any page, communicate any idea
              </div>
              <div className="xl:text-lg pr-6">
                Everything is drag and drop in Notion — images, toggles,
                to-do’s, even embedded databases.
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/pow2.webp"
              alt="done"
              width={2000}
              height={2000}
              className="xl:h-[400px] w-[550px] object-contain"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-y-2">
        <div className=" text-[25px] sm:text-[30px] font-serif w-96 sm:w-[700px] text-center">
          "Notion adapts to your needs. It’s as minimal or as powerful as you
          need it to be."
        </div>
        <div className=" flex flex-col sm:flex-row items-center justify-center gap-2">
          <Image
            src="/fire.webp"
            alt="fire"
            width={2000}
            height={2000}
            className="h-12 w-12 object-contain"
          />
          <div className="flex flex-col items-center sm:items-start justify-normal">
            <div className="text-md font-bold">Rahim Makani</div>
            <div className="font-medium">Director of Product, Matchgroup</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Powerful;
