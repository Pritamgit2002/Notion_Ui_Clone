import Image from "next/image";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

type Props = {};

const imageNames1 = [
  "/figma.png",
  "/pixar.png",
  "/doordash.png",
  "/nike.png",
  "/amazon.png",
  "/pinterest.png",
];

const imageNames2 = [
  "/gg.png",
  "/uber.png",
  "/plaid.png",
  "/toyota.png",
  "/snowflake.png",
  "/headspace.png",
];

const imageNames3 = ["/angellist.png", "/robinhood.png"];

const Company = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-10 mt-40">
      <div className="flex flex-col items-center justify-center gap-y-12 text-center ">
        <div>
          <div className="text-[50px] font-bold">
            Millions run on Notion every day
          </div>
          <div className="font-medium w-[500px] mx-auto">
            Powering the world’s best teams, from next-generation startups to
            established enterprises.
          </div>
          <div className="flex items-center justify-center gap-2 text-cyan-500 hover:underline w-max mx-auto cursor-pointer group">
            <span className="group-hover:underline">Read customer stories</span>
            <div className="group-hover:underline font-semibold">
              <FaLongArrowAltRight />
            </div>
          </div>
        </div>

        <div className="gap-y-10  flex flex-col ">
          <div className="flex items-center justify-center gap-12">
            {imageNames1.map((imageName, index) => (
              <div key={index} className="mx-auto bg--400">
                <Image
                  src={imageName}
                  alt={`Image ${index + 1}`}
                  width={4000}
                  height={4000}
                  className="w-28 h-16 object-contain flex items-center justify-center gap-3 mx-auto "
                />
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-8">
            {imageNames2.map((imageName, index) => (
              <div key={index} className="mx-auto bg--400">
                <Image
                  src={imageName}
                  alt={`Image ${index + 1}`}
                  width={4000}
                  height={4000}
                  className="w-28 h-16 object-contain flex items-center justify-center gap-3 mx-auto "
                />
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-20 ">
            {imageNames3.map((imageName, index) => (
              <div key={index} className="bg--400">
                <Image
                  src={imageName}
                  alt={`Image ${index + 1}`}
                  width={4000}
                  height={4000}
                  className="w-28 h-16 object-contain flex items-center justify-center mx-auto "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col justify-center items-center gap-y-"> */}
      <div className="w-[885px]">
        <div className="bg--400 flex items-center justify-end">
          <div className="flex items-center justify-end w-full h-auto bg--300">
            <div className="text-[50px] font-bold text-center flex flex-col items-center justify-center leading-tight">
              <div>Consolidate tools.</div>
              <div>Cut costs.</div>
            </div>
          </div>
          <Image
            src="/pencil.webp"
            alt="done"
            width={8000}
            height={8000}
            className="h-[280px] w-[300px] object-contain bg--300"
          />
        </div>
        <div className="relative flex items-start justify-center bg--300">
          <Image
            src="/tools.webp"
            alt="line"
            width={2000}
            height={2000}
            className="w-[600px] h-20 object-contain mx-auto"
          />
          <Image
            src="/line-removebg-preview.png"
            alt="line"
            width={2000}
            height={2000}
            className="w-[600px] h-20 object-contain mx-auto absolute"
          />
        </div>
      </div>
      {/* </div> */}
      <div className="text-[35px] font-serif bg--300 w-[900px] text-center">
        "We got rid of nearly a dozen different tools because of what Notion
        does for us."
      </div>
      <div className="flex items-center justify-center gap-6">
        <Image
          src="/metalab.webp"
          alt="done"
          width={2000}
          height={2000}
          className="w-[200px] h-[100px] object-contain"
        />
        <div className="flex flex-col items-start">
          <div className="font-bold">Justin Watt</div>
          <div>Director of Ops & Marketing, MetaLab</div>
        </div>
      </div>
    </div>
  );
};

export default Company;
