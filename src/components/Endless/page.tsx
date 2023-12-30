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
    <div className="flex flex-col items-center justify-center gap-y-28 mt-20 w-full border-b-2 border-gray-400 ">
      <div>
        <div className="text-[50px] font-bold">Endless ways to use it</div>
        <div className="flex items-center justify-center gap-2 group ">
          <div className="text-xl text-cyan-400 group-hover:underline cursor-pointer">
            Browse all templates
          </div>
          <div className="text-xl text-cyan-400 group-hover:underline cursor-pointer">
            <CgArrowRight />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-8 h-auto ">
        <div className="bg-[#F6F5F4]  h-auto w-[500px] rounded-2xl flex flex-col items-start justify-center gap-y-40 pt-10 pl-10 ">
          <div className="flex flex-col gap-y-7 ">
            <div className="text-3xl text-[#EA4E43]">
              <IoHomeSharp />
            </div>
            <div className="text-xl font-bold">Company wiki</div>
            <div className="flex items-center justify-start text-cyan-500 cursor-pointer hover:underline text-xl gap-2">
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
            className="w-[510px] h-[380px] object-contain rounded-tl-2xl rounded-br-2xl mb-0  "
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-y-6">
          <div className="flex flex-col  gap-y-5 pl-8 pt-8 bg-[#F6F5F4] w-72 h-56 rounded-2xl">
            <div className="text-3xl text-cyan-400">
              <FaFlagCheckered />
            </div>
            <div className="flex flex-col gap-y-10">
              <div className="text-xl font-bold">Product roadmap</div>
              <div className="flex items-center justify-start gap-2 text-cyan-350 hover:underline cursor-pointer  w-full text-left text-xl text-cyan-500  ">
                Get template
                <div>
                  <CgArrowRight />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-5 pl-8 pt-8 bg-[#F6F5F4] w-72 h-56 rounded-2xl">
            <div className="text-3xl text-yellow-500">
              <FaClipboardList />
            </div>
            <div className="flex flex-col gap-y-10">
              <div className="text-xl font-bold">Meeting notes</div>
              <div className="flex items-center justify-start gap-2 text-cyan-500 hover:underline cursor-pointer w-full text-left text-xl  ">
                Get template
                <div>
                  <CgArrowRight />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-5 pl-8 pt-8 bg-[#F6F5F4] w-72 h-56 rounded-2xl">
            <div className="text-3xl text-[#2A9D99]">
              <FaCalendarAlt />
            </div>
            <div className="flex flex-col gap-y-10">
              <div className="text-xl font-bold">Editorial calendar</div>
              <div className="flex items-center justify-start gap-2 text-cyan-500 hover:underline cursor-pointer w-full text-left text-xl  ">
                Get template
                <div>
                  <CgArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-6">
          <div className="flex flex-col gap-y-5 pl-8 pt-8 bg-[#F6F5F4] w-72 h-56 rounded-2xl">
            <div className="text-3xl text-[#F8792A]">
              <FaCircleCheck />
            </div>
            <div className="flex flex-col gap-y-10">
              <div className="text-xl font-bold">OKRs</div>
              <div className="flex items-center justify-start gap-2 text-cyan-500 hover:underline cursor-pointer w-full text-left text-xl  ">
                Get template
                <div>
                  <CgArrowRight />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-5 pl-8 pt-8 bg-[#F6F5F4] w-72 h-56 rounded-2xl">
            <div className="text-3xl text-[#EA4E43]">
              <FaPlane />
            </div>
            <div className="flex flex-col gap-y-10">
              <div className="text-xl font-bold">vacation planner</div>
              <div className="flex items-center justify-start gap-2 text-cyan-500 hover:underline cursor-pointer w-full text-left text-xl  ">
                Get template
                <div>
                  <CgArrowRight />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-5 pl-8 pt-8 bg-[#F6F5F4] w-72 h-56 rounded-2xl">
            <div className="text-3xl text-[#9D34DA]">
              <FaInbox />
            </div>
            <div className="flex flex-col gap-y-10">
              <div className="text-xl font-bold">Habit tracker</div>
              <div className="flex items-center justify-start gap-2 text-cyan-500 hover:underline cursor-pointer w-full text-left text-xl  ">
                Get template
                <div>
                  <CgArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col items-center justify-center gap-y-4">
          <div className="text-[65px] font-bold">Get started for free</div>
          <div className="text-lg">
            Play around with it first. Pay and add your team later.
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="px-4 py-2 bg-black text-xl font-semibold text-white rounded-lg">
              Try Notion free
            </div>
            <div className="flex items-center justify-center gap-2 group ">
              <div className="text-xl text-cyan-400 group-hover:underline cursor-pointer">
                Browse all templates
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
            className="w-[730px] h-[360px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Endless;
