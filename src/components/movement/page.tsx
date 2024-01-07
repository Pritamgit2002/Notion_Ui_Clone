"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { MdArrowForward } from "react-icons/md";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Movement = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
    console.log(count);
  };

  const handleDecrement = () => {
    setCount(count - 1);
    console.log(count);
  };

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });

    // console.log("current" + current);
    // console.log("count" + count);
  }, [api]);
  return (
    <div className="flex flex-col items-center bg--300  justify-center w-auto sm:w-[650px] xl:w-auto overflow-x-hidden">
      <div className="mx-auto flex flex-col items-center justify-center gap-y-4  overflow-x-hidden ">
        <div className=" xl:w-[600px] mx-auto bg--300 text-[33px] xl:text-[50px] font-bold leading-10 xl:leading-[60px] bg--300 ">
          <div>Join a global movement.</div>
          <div>Unleash your creativity.</div>
        </div>
        <div className="bg--400 w-[400px] xl:w-[720px] text-center text-lg mx-auto ">
          Our vibrant community produces content, teaches courses, and leads
          events all over the world.
        </div>
        <div className="flex items-center justify-center gap-2 text-cyan-400 cursor-pointer group text-lg xl:text-xl mb-4">
          <div className="group-hover:underline ">Learn more</div>
          <div className="group-hover:underline">
            <MdArrowForward />
          </div>
        </div>
        {/* <div className=" bg--300 w-[1200px] mx-auto overflow-x-hidden bg-pink-400 ">
          <Image
            src="/avatars.webp"
            alt="done"
            width={8000}
            height={8000}
            className=" w-[1000px] sm:w-[1000px] xl:w-[1200px] h-36 xl:h-[200px] overflow-x-hidden"
          />
        </div> */}
      </div>
      {/* <div className="grid grid-rows-3"> */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap xl:flex-col gap-y-10 xl:w-[1200px] ">
        <div className="flex flex-col sm:flex-row sm:flex-wrap xl:flex-row items-center justify-center sm:justify-between w-full mx-auto bg--300 gap-y-5 xl:gap-y-10 bg--400">
          <div className="text-blue-400 w-[365px] sm:w-[310px] xl:w-96 pl-10 py-4 flex flex-col leading-tight rounded-xl bg-[#F6F5F4]">
            <div className="text-[60px] font-bold">1M+</div>
            <div className="text-black font-medium">community members</div>
          </div>
          <div className="text-blue-400 w-[365px] sm:w-[310px] xl:w-96 pl-10 py-4 flex flex-col leading-tight rounded-xl bg-[#F6F5F4]">
            <div className="text-[60px] font-bold">150+</div>
            <div className="text-black font-medium">community groups</div>
          </div>
          <div className="text-blue-400 w-[365px] sm:w-[310px] xl:w-96 h-auto sm:h-[500px] xl:h-auto pl-10 py-4 flex flex-col leading-tight rounded-xl bg-[#F6F5F4]">
            <div className="text-[60px] font-bold">50+</div>
            <div className="text-black font-medium">community represented</div>
          </div>

          <div className="bg-[#F6F5F4]  flex flex-col w-[360px] sm:w-[310px] xl:w-[610px] h-[480px] sm:h-[500px] xl:h-[520px] pt-10 p-6 rounded-2xl relative ">
            <div className="flex flex-col gap-y-2">
              <div className="text-xl font-bold">
                An always-on support network
              </div>
              <div className=" text-base xl:text-lg font-medium w-[340px] sm:w-[260px] xl:w-[505px]">
                Swap setups and share tips in over 149 online communities.
              </div>
            </div>
            <Image
              src="/com.webp"
              alt="done"
              width={2500}
              height={2500}
              className="w-[330px] sm:w-[300px] xl:w-[360px] h-[300px] xl:h-[400px] object-contain bg--400 absolute right-0 bottom-0 "
            />
          </div>
          <div className=" bg-[#F6F5F4] w-[360px] sm:w-[300px] xl:w-[560px] h-[420px] xl:h-[520px] pl-8 pt-9 relative  rounded-2xl ">
            <div className="flex flex-col gap-y-[95px] ">
              <div className="flex flex-col gap-y-3">
                <div className="text-xl font-bold">Choose your language</div>
                <div className="text-base xl:text-lg font-medium w-[340px] sm:w-[240px] xl:w-[505px]">
                  Notion currently supports English, Korean, Japanese, French,
                  German, Spanish, and Portuguese. With more to come!
                </div>
              </div>
              <Image
                src="/lang.webp"
                alt="done"
                width={2500}
                height={2500}
                className=" w-[330px] sm:w-[280px] xl:w-full  h-[180px] sm:h-[150px] xl:h-fit object-contain rounded-xl pr-1 absolute bottom-0 right-0"
              />
            </div>
          </div>
        </div>

        <div className="text-black w-full mx-auto flex flex-col xl:flex-row items-center justify-between ">
          <div className="flex flex-col xl:flex-row items-center justify-center w-full mx-auto gap-10 bg--400 ">
            <div className="bg-[#F6F5F4] flex items-center justify-center w-[392px] sm:w-full xl:w-[2250px]  p-10 xl:min-h-lvh rounded-2xl xl:mx-auto overflow-hidden ">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 2000,
                  }),
                ]}
                setApi={setApi}
              >
                <CarouselContent className=" h-full mx-auto">
                  <CarouselItem className=" flex flex-col items-center justify-center w-full h-max xl:h-[758px] mx-auto ">
                    <Image
                      src="/slider1.webp"
                      alt="done"
                      width={2000}
                      height={2000}
                      className="w-full xl:w-[650px] h-auto xl:h-[650px] object-fit mx-auto p-4 bg--400"
                    />
                    <div className=" text-base xl:text-lg ">
                      Community meet-up in Tokyo
                    </div>
                  </CarouselItem>

                  <CarouselItem className=" flex flex-col items-center justify-center w-full xl:h-[758px] mx-auto bg--300  ">
                    <Image
                      src="/slider2.webp"
                      alt="done"
                      width={2000}
                      height={2000}
                      className="w-full xl:w-[650px] h-auto xl:h-[650px] object-fit  mx-auto p-4 bg--400"
                    />
                    <div className=" text-base xl:text-lg ">
                      Notion ambassador event in New York
                    </div>
                  </CarouselItem>
                  <CarouselItem className=" flex flex-col items-center justify-center w-full xl:h-[758px] mx-auto bg--300  ">
                    <Image
                      src="/slider3.webp"
                      alt="done"
                      width={2000}
                      height={2000}
                      className="w-full xl:w-[650px] h-auto xl:h-[650px] object-fit  mx-auto p-4 bg--400"
                    />
                    <div className=" text-base xl:text-lg ">
                      Notion ambassador event in New York
                    </div>
                  </CarouselItem>
                  <CarouselItem className=" flex flex-col items-center justify-center w-full xl:h-[758px] mx-auto  bg--300 ">
                    <Image
                      src="/slider2.webp"
                      alt="done"
                      width={2000}
                      height={2000}
                      className="w-full xl:w-[650px] h-auto xl:h-[650px] object-fit  mx-auto p-4 bg--400"
                    />
                    <div className=" text-base xl:text-lg ">
                      Notion ambassador event in New York
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <div className="w-full text-center hidden xl:inline-block">
                  {current} to 4 slides
                </div>
                <div onClick={handleDecrement}>
                  <CarouselPrevious />
                </div>
                <div onClick={handleIncrement}>
                  <CarouselNext />
                </div>
              </Carousel>
            </div>
            <div className="bg- w-full relative flex  items-center justify-center ">
              <div className="flex flex-col sm:flex-row sm:flex-wrap xl:flex-col items-center sm:items-start xl:items-center justify-center sm:justify-between xl:justify-center sm:gap-x-6 gap-y-4 w-auto sm:w-[650px] xl:w-auto ">
                <div className="bg-[#F6F5F4] w-96 sm:w-[312px] lg:w-96 h-auto sm:h-[315px] lg:h-auto flex flex-col sm:flex-wrap xl:flex-col gap-y-5 px-4 pt-6 pb-12 rounded-2xl">
                  <div className="flex items-center justify-start gap-3  w-full">
                    <Image
                      src="/a.webp"
                      alt="done"
                      width={2000}
                      height={2000}
                      className=" w-12 xl:w-16 h-12 xl:h-16 object-contain"
                    />
                    <div className="flex flex-col gap-y-1">
                      <div className=" text-base xl:text-xl font-bold">
                        Deborah Mecca
                      </div>
                      <div className=" text-base xl:text-xl text-gray-400">
                        @DebMecca
                      </div>
                    </div>
                  </div>
                  <div className=" font-medium text-base xl:text-lg">
                    I used to HATE documenting things. And then I started using{" "}
                    <span style={{ color: "#1B95E0" }}>@NotionHQ</span> and I
                    document a lot. A LOT A LOT. Now I just realize that it
                    wasn't that I hated documenting, I just hated Google Docs.
                  </div>
                </div>

                <div className="bg-[#F6F5F4] w-96 sm:w-[312px] lg:w-96 h-auto sm:h-[315px] lg:h-auto flex flex-col gap-y-5 px-4 pt-6 pb-12 rounded-2xl">
                  <div className="flex items-center justify-start gap-3  w-full">
                    <Image
                      src="/b.webp"
                      alt="done"
                      width={2000}
                      height={2000}
                      className=" w-12 xl:w-16 h-12 xl:h-16 object-contain"
                    />
                    <div className="flex flex-col gap-y-1">
                      <div className="text-base xl:text-xl font-bold">
                        André Blackman
                      </div>
                      <div className="text-base xl:text-xl text-gray-400">
                        @mindofandre
                      </div>
                    </div>
                  </div>
                  <div className=" font-medium text-base xl:text-lg">
                    {" "}
                    One of the most incredible things about{" "}
                    <span style={{ color: "#1B95E0" }}>@NotionHQ</span> is the
                    dynamic community being built - creating and sharing at its
                    best.
                  </div>
                </div>

                <div className="bg-[#F6F5F4] w-96 sm:w-[312px] lg:w-96 h-auto sm:h-[315px] lg:h-auto flex flex-col gap-y-5 px-4 pt-6 pb-12 rounded-2xl">
                  <div className="flex items-center justify-start gap-3  w-full">
                    <Image
                      src="/c.webp"
                      alt="done"
                      width={2000}
                      height={2000}
                      className=" w-12 xl:w-16 h-12 xl:h-16 object-contain"
                    />
                    <div className="flex flex-col gap-y-1">
                      <div className="text-base xl:text-xl font-bold">
                        Oliver Peyre
                      </div>
                      <div className="text-base xl:text-xl text-gray-400">
                        @opeyre
                      </div>
                    </div>
                  </div>
                  <div className=" font-medium text-base xl:text-lg">
                    <span style={{ color: "#1B95E0" }}>@NotionHQ</span> Truly
                    impressed by the velocity and quality of your work. Making
                    using Notion even more fun week after week!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movement;
