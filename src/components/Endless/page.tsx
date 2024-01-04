import React from "react";
import { CgArrowRight } from "react-icons/cg";
import { FaFlagCheckered } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { FaPlane } from "react-icons/fa";
import { FaInbox } from "react-icons/fa6";
import { IoHomeSharp } from "react-icons/io5";
import Image from "next/image";

const Endless = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-32 sm:gap-y-28 mt-20 w-full border-b-2 border-gray-400 ">
      <div className="w-fit flex flex-col relative gap-y-9   ">
        <div className="text-center ">
          <div className=" text-[28px] xl:text-[50px] font-bold">
            Endless ways to use it
          </div>
          <div className="flex items-center justify-center gap-2 group ">
            <div className=" text-lg xl:text-xl text-cyan-400 group-hover:underline cursor-pointer">
              Browse all templates
            </div>
            <div className="text-xl text-cyan-400 group-hover:underline cursor-pointer">
              <CgArrowRight />
            </div>
          </div>
        </div>
        <div className="absolute right-0 ">
          <Image
            src="/peek.webp"
            alt="done"
            width={2000}
            height={2000}
            className=" w-32 xl:w-64 h-48 xl:h-52 object-contain"
          />
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center sm:justify-between xl:justify-center gap-8 h-auto  ">
          <div className="bg-[#F6F5F4] cursor-pointer hover:bg-[#eeeeee]  h-auto w-[360px] sm:w-[620px] xl:w-[550px] rounded-2xl flex flex-col items-start justify-center gap-y-16 xl:gap-y-40 pt-10 pl-12 ">
            <div className="flex flex-col gap-y-7 ">
              <div className=" text-2xl sm:text-3xl text-[#EA4E43]">
                <IoHomeSharp />
              </div>
              <div className="text-xl font-bold">Company wiki</div>
              <div className="flex items-center justify-start text-cyan-500 cursor-pointer hover:underline text-xl gap-2 w-max">
                Get template
                <div className="text-xl">
                  <CgArrowRight />
                </div>
              </div>
            </div>
            <Image
              src="/comp_wiki.webp"
              alt="vf"
              width={2000}
              height={2000}
              className=" w-[500px] sm:w-[630px] xl:w-[520px] h-[250px] sm:h-[455px] xl:h-[380px] object-contain rounded-tl-2xl rounded-br-2xl mb-0  "
            />
          </div>

          <div className=" w-full sm:w-full xl:w-auto flex flex-col sm:flex-row  items-center justify-center gap-6">
            <div className="flex flex-col items-center justify-center w-full xl:w-auto gap-y-6 bg--300">
              <div className="flex flex-col  gap-y-5 pl-8 pt-8 bg-[#F6F5F4] cursor-pointer hover:bg-[#eeeeee] mx-auto xl:px-auto xl:mx-auto w-full xl:w-72 h-56 rounded-2xl">
                <div className="text-3xl text-cyan-400">
                  <FaFlagCheckered />
                </div>
                <div className="flex flex-col gap-y-10">
                  <div className="text-xl font-bold">Product roadmap</div>
                  <div className="flex items-center justify-start gap-2 text-cyan-350 hover:underline cursor-pointer text-xl text-cyan-500 w-max  ">
                    Get template
                    <div>
                      <CgArrowRight />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col  gap-y-5 pl-8 pt-8 bg-[#F6F5F4] cursor-pointer hover:bg-[#eeeeee] mx-auto xl:px-auto xl:mx-auto w-full xl:w-72 h-56 rounded-2xl">
                <div className="text-3xl text-yellow-500">
                  <FaClipboardList />
                </div>
                <div className="flex flex-col gap-y-10">
                  <div className="text-xl font-bold">Meeting notes</div>
                  <div className="flex items-center justify-start gap-2 text-cyan-500 hover:underline cursor-pointer text-left text-xl w-max  ">
                    Get template
                    <div>
                      <CgArrowRight />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col  gap-y-5 pl-8 pt-8 bg-[#F6F5F4] cursor-pointer hover:bg-[#eeeeee] mx-auto xl:px-auto xl:mx-auto w-full xl:w-72 h-56 rounded-2xl">
                <div className="text-3xl text-[#2A9D99]">
                  <FaCalendarAlt />
                </div>
                <div className="flex flex-col gap-y-10">
                  <div className="text-xl font-bold">Editorial calendar</div>
                  <div className="flex items-center justify-start gap-2 text-cyan-500 hover:underline cursor-pointer text-left text-xl w-max  ">
                    Get template
                    <div>
                      <CgArrowRight />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full xl:w-auto gap-y-6 bg- ">
              <div className="flex flex-col  gap-y-5 pl-8 pt-8 bg-[#F6F5F4] cursor-pointer hover:bg-[#eeeeee] mx-auto xl:px-auto xl:mx-auto w-full xl:w-72 h-56 rounded-2xl">
                <div className="text-3xl text-[#F8792A]">
                  <FaCircleCheck />
                </div>
                <div className="flex flex-col gap-y-10">
                  <div className="text-xl font-bold">OKRs</div>
                  <div className="flex items-center justify-start gap-2 text-cyan-500 hover:underline cursor-pointer text-left text-xl w-max  ">
                    Get template
                    <div>
                      <CgArrowRight />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col  gap-y-5 pl-8 pt-8 bg-[#F6F5F4] cursor-pointer hover:bg-[#eeeeee] mx-auto xl:px-auto xl:mx-auto w-full xl:w-72 h-56 rounded-2xl">
                <div className="text-3xl text-[#EA4E43]">
                  <FaPlane />
                </div>
                <div className="flex flex-col gap-y-10">
                  <div className="text-xl font-bold">vacation planner</div>
                  <div className="flex items-center justify-start gap-2 text-cyan-500 hover:underline cursor-pointer text-left text-xl w-max  ">
                    Get template
                    <div>
                      <CgArrowRight />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col  gap-y-5 pl-8 pt-8 bg-[#F6F5F4] cursor-pointer hover:bg-[#eeeeee] mx-auto xl:px-auto xl:mx-auto w-full xl:w-72 h-56 rounded-2xl">
                <div className="text-3xl text-[#9D34DA]">
                  <FaInbox />
                </div>
                <div className="flex flex-col gap-y-10">
                  <div className="text-xl font-bold">Habit tracker</div>
                  <div className="flex items-center justify-start gap-2 text-cyan-500 hover:underline cursor-pointer text-left text-xl w-max  ">
                    Get template
                    <div>
                      <CgArrowRight />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <div className="flex flex-col items-center justify-center gap-y-4">
          <div className=" text-[45px] sm:text-[54px] xl:text-[65px] font-bold mx-10 leading-[50px] ">
            Get started for free
          </div>
          <div className=" mx-5 xl:mx-auto  xl:text-lg">
            Play around with it first. Pay and add your team later.
          </div>
          <div className="flex items-center justify-center gap-4 ">
            <div className="px-4 py-2 bg-black text-md xl:text-xl font-semibold text-neutral-200 rounded-lg">
              Try Notion free
            </div>
            <div className="flex items-center justify-center gap-2 group  ">
              <div className=" text-lg xl:text-xl text-cyan-400 group-hover:underline cursor-pointer">
                Request a demo
              </div>
              <div className="text-xl text-cyan-400 group-hover:underline cursor-pointer">
                <CgArrowRight />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/parade.webp"
            alt="parade"
            width={2500}
            height={2500}
            className=" w-[550px] sm:w-[700px] xl:w-[730px] h-[180px] sm:h-[280px] xl:h-[360px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Endless;
