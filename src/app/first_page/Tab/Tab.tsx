"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { PiStudent } from "react-icons/pi";
import { TfiWrite } from "react-icons/tfi";
// import { button } from "../ui/button";
import { FaLongArrowAltRight } from "react-icons/fa";
import { WiStars } from "react-icons/wi";
import Image from "next/image";
import { SlBookOpen } from "react-icons/sl";
import { TbTargetArrow } from "react-icons/tb";
import { SiGoogledocs } from "react-icons/si";

interface Tab {
  id: string;
  label: JSX.Element;
}

const tabs: Tab[] = [
  {
    id: "1",
    label: (
      <div className="flex flex-col justify-normal h-32 w-80 sm:w-auto  g3 bg--300 overflow-hidden bg--400  group">
        <div className="flex items-center text-left w-full gap-3  bg--400  ">
          <div className="text-3xl p-1 bg-[#F0E1F9] rounded-lg text-[#9D34DA]">
            <WiStars />
          </div>
          <p className="text-2xl top-0 font-bold duration-700 ease-in-out ">
            AI
          </p>
          <div className="bg-[#F0E1F9] text-sm font-semibold text-[#9D34DA] rounded-full px-2 ">
            Now with Q&A
          </div>
        </div>
        <div className="text-md flex flex-col items-start  justify-end translate-y-5 sm:group-hover:translate-y-3  sm:translate-y-11 bg--400 flex-wrap font-medium text-left w-full duration-300 ease-in-out  gap-y-2 ">
          Ask literally anything. Notion will answer .
          <div className="flex items-center justify-center text-[#9D34DA] overflow-hidden transition delay-700 duration-300 ease-in-out pt-4 sm:group-hover:pt-0 sm:pt-4 font-bold gap-2 ">
            Learn more
            <div>
              <FaLongArrowAltRight />
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "2",
    label: (
      <div className="flex flex-col justify-normal h-32 w-80 sm:w-auto  g3 bg--300 overflow-hidden bg--400  group">
        <div className="flex items-center text-left w-full gap-3  bg--400  ">
          <div className="text-2xl rounded-lg p-2 bg-[#FCE9E8] text-[#EF7C74]">
            <SlBookOpen />
          </div>
          <p className="text-2xl top-0 font-bold duration-700 ease-in-out ">
            Wikis
          </p>
        </div>
        <div className="text-md flex flex-col items-start  justify-end translate-y-3 sm:group-hover:translate-y-3  sm:translate-y-10 bg--400 flex-wrap font-medium text-left w-full duration-300 ease-in-out px-1 gap-y-2 ">
          Centralize your knowledge. No more hunting for answer.
          <div className="flex items-center text-[#EF7C74] overflow-hidden transition delay-700 duration-300 ease-in-out pt-0 sm:group-hover:pt-0 sm:pt-4 gap-2 font-bold ">
            Learn more
            <div>
              <FaLongArrowAltRight />
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "3",
    label: (
      <div className="flex flex-col justify-normal h-32 w-80 sm:w-auto  g3 bg--300 overflow-hidden  group">
        <div className="flex items-center text-left w-full gap-3  bg--400  ">
          <div className="text-3xl p-1 rounded-lg bg-[#E2ECF3] text-[#0A85D1]">
            <TbTargetArrow />
          </div>
          <p className="text-2xl top-0 font-bold duration-700 ease-in-out ">
            Projects
          </p>
        </div>
        <div className="text-md flex flex-col items-start  justify-end translate-y-3 sm:group-hover:translate-y-3  sm:translate-y-11 bg--400 flex-wrap font-medium text-left w-full duration-300 ease-in-out  gap-y-2 ">
          Manage complex projects without the chaos.
          <div className="flex items-center justify-center text-[#0A85D1] overflow-hidden transition delay-700 duration-300  ease-in-out pt-0 sm:group-hover:pt-0 sm:pt-4 font-bold gap-2 ">
            Learn more
            <div>
              <FaLongArrowAltRight />
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "4",
    label: (
      <div className="flex flex-col justify-normal h-32 w-80 sm:w-auto  g3 bg--300 overflow-hidden  group">
        <div className="flex items-center text-left w-full gap-3  bg--400  ">
          <div className="text-2xl p-2 rounded-lg bg-[#FFF6D6] text-[#f1c663]">
            <SiGoogledocs />
          </div>
          <p className="text-2xl top-0 font-bold duration-700 ease-in-out ">
            Docs
          </p>
        </div>
        <div className="text-md flex flex-col items-start  justify-end translate-y-3 sm:group-hover:translate-y-3  sm:translate-y-10 bg--400 flex-wrap font-medium text-left w-full duration-300 ease-in-out  gap-y-2 ">
          Simple, powerful, beautiful. Next-gen notes & docs.
          <div className="flex items-center justify-center text-[#f1c663] overflow-hidden transition delay-700 duration-300 ease-in-out pt-0 sm:group-hover:pt-0 sm:pt-4 font-bold gap-2 ">
            Learn more
            <div>
              <FaLongArrowAltRight />
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

const tabContents: { [key: string]: JSX.Element } = {
  "1": (
    <div className="w-full h-full flex justify-center items-center text-3xl mx-auto">
      <Image
        src="/ai.webp"
        alt="done"
        width={2000}
        height={2000}
        className="w-full h-full object-cover  "
      />
    </div>
  ),
  "2": (
    <div className="w-full h-full flex justify-center items-center text-3xl mx-auto">
      <Image
        src="/wiki.webp"
        alt="done"
        width={2000}
        height={2000}
        className="w-full h-full object-cover  "
      />
    </div>
  ),
  "3": (
    <div className="w-full h-full flex justify-center items-center text-3xl mx-auto">
      <Image
        src="/project.webp"
        alt="done"
        width={2000}
        height={2000}
        className="w-full h-full object-cover  "
      />
    </div>
  ),
  "4": (
    <div className="w-full h-full flex justify-center items-center text-3xl mx-auto">
      <Image
        src="/docs.webp"
        alt="done"
        width={2000}
        height={2000}
        className="w-full h-full object-cover"
      />
    </div>
  ),
};

const Tabs = () => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);
  const ref = useRef();
  const handleTabHover = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div className="w-[51vw]  mx-auto flex flex-col -mt-28 sm:-mt-12 bg--300  items-center justify-between ">
      <div className="flex gap-4 sm:gap-8 justify-between items-center bg--400 w-full overflow-y-hidden overflow-x-auto  sm:overflow-hidden bg--400 h-44 p-4 sm:p-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onMouseEnter={() => handleTabHover(tab.id)}
            className={`${
              activeTab === tab.id
                ? "bg-white "
                : "bg-neutral-100/80 rounded-xl"
            } p-4 rounded-xl h-40 sm:h-max  w-[800px] sm:w-[270px] bg--400  shadow shadow-gray-400/80 `}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-6 mx-1 w-[88vw] sm:w-full shadow-lg shadow-gray-300 rounded-xl overflow-hidden">
        {tabContents[activeTab]}
      </div>
    </div>
  );
};

export default Tabs;
