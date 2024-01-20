"use client";
import { useConvexAuth } from "convex/react";
import Image from "next/image";
import React from "react";
import { MdArrowForward } from "react-icons/md";
import { Spinner } from "../spinner";
import { SignInButton } from "@clerk/clerk-react";
import Link from "next/link";

const page = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="bg--300 mt-16 pt-8 flex flex-col items-center justify-center">
      <div className=" flex bg--300 w-[300px] sm:w-[690px] leading-tight sm:leading-[75px] bg--300 items-center justify-center mx-auto text-[42px] sm:text-[65px] font-bold  text-center">
        Write, plan, share. With AI at your side.
      </div>

      <div className="flex flex-col items-center mt-4 gap-y-5">
        <span className=" text-2xl xl:text-3xl text-center font-medium xl:font-semibold  md:mx-40  w-[300px] sm:w-auto">
          Your workspace to write, organize, and collaborate. With AI by your
          side.
        </span>
        {isLoading && (
          <>
            <Spinner size="lg" />
          </>
        )}
        {!isAuthenticated && !isLoading && (
          <SignInButton>
            <div className="bg-black hover:bg-slate-800 px-4 py-2 rounded-lg text-white flex items-center justify-center gap-2 font-bold text-lg cursor-pointer">
              <span className="">Get Notion free</span>

              <div className="text-2xl">
                <MdArrowForward />
              </div>
            </div>
          </SignInButton>
        )}
        {isAuthenticated && !isLoading && (
          <Link href="/docs">
            <div className="bg-black hover:bg-slate-800 px-4 py-2 rounded-lg text-white flex items-center justify-center gap-2 font-bold text-lg cursor-pointer">
              <span className="">Enter Notion</span>

              <div className="text-2xl">
                <MdArrowForward />
              </div>
            </div>
          </Link>
        )}
      </div>

      <Image
        src={
          "https://www.notion.so/cdn-cgi/image/format=webp,width=2048/https://images.ctfassets.net/spoqsaf9291f/3csRrNi1u82ymVlwjfo2E6/02516e52af15501acd822d3e7a03baf9/home-hero.png"
        }
        alt="done"
        width={2000}
        height={2000}
        className=" sm:w-[610px] xl:w-[740px] sm:h-[300px] xl:h-[360px] object-contain"
      />
    </div>
  );
};

export default page;
