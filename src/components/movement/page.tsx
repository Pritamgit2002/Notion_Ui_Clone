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
    <div className="flex flex-col items-center  justify-center bg--300 w-auto">
      <div className="mx-auto flex flex-col gap-y-4 ">
        <div className=" w-[600px] mx-auto bg--300 text-[50px] font-bold leading-[60px] ">
          <div>Join a global movement.</div>
          <div>Unleash your creativity.</div>
        </div>
        <div className="bg--400 w-[720px] text-center text-lg mx-auto ">
          Our vibrant community produces content, teaches courses, and leads
          events all over the world.
        </div>
        <div className="flex items-center justify-center gap-2 text-cyan-400 cursor-pointer group  text-xl">
          <div className="group-hover:underline">Learn more</div>
          <div className="group-hover:underline">
            <MdArrowForward />
          </div>
        </div>
        <div>
          <Image
            src="/avatars.webp"
            alt="done"
            width={8000}
            height={8000}
            className="w-[1200px] h-[200px]"
          />
        </div>
      </div>
      {/* <div className="grid grid-rows-3"> */}
      <div className="flex flex-col gap-y-10 w-[1200px] bg-green-300">
        <div className="text-blue-400 bg-red-300 w-auto h-max  ">
          <div className="flex items-center justify-center mx-2 gap-10 bg-cyan-300">
            <div className="text-blue-400 w-80 pl-10 py-4 flex flex-col leading-tight rounded-xl bg-gray-200">
              <div className="text-[60px] font-bold">1M+</div>
              <div className="text-black font-medium">community members</div>
            </div>
            <div className="text-blue-400 w-80 pl-10 py-4 flex flex-col leading-tight rounded-xl bg-gray-200">
              <div className="text-[60px] font-bold">150+</div>
              <div className="text-black font-medium">community groups</div>
            </div>
            <div className="text-blue-400 w-80 pl-10 py-4 flex flex-col leading-tight rounded-xl bg-gray-200">
              <div className="text-[60px] font-bold">50+</div>
              <div className="text-black font-medium">
                community represented
              </div>
            </div>
          </div>
        </div>

        {/* <div className="text-blue-400 bg-green-300 w-auto h-40 mx-auto"> */}
        <div className="flex items-center justify-center gap-6 bg-yellow-300">
          <div className="bg-gray-200  flex flex-col w-[550px] h-[520px] pt-10 p-6 rounded-2xl ">
            <div className="flex flex-col gap-y-2">
              <div className="text-xl font-bold">
                An always-on support network
              </div>
              <div className="text-lg w-[505px]">
                Swap setups and share tips in over 149 online communities.
              </div>
            </div>
            <Image
              src="/com.webp"
              alt="done"
              width={2500}
              height={2500}
              className="w-[360px] h-[400px] object-contain bg--400"
            />
          </div>
          <div className=" bg-gray-200 w-[550px] h-[520px] pl-8 pt-9  rounded-2xl ">
            <div className="flex flex-col  gap-y-[95px] ">
              <div className="flex flex-col gap-y-3">
                <div className="text-xl font-bold">Choose your language</div>
                <div className="text-lg w-[505px]">
                  Notion currently supports English, Korean, Japanese, French,
                  German, Spanish, and Portuguese. With more to come!
                </div>
              </div>
              <Image
                src="/lang.webp"
                alt="done"
                width={2500}
                height={2500}
                className="w-full h-fit object-contain rounded-xl pr-1"
              />
            </div>
          </div>
        </div>
        {/* </div> */}

        <div className="text-black bg-green-300 w-full mx-auto">
          <div className="flex items-center justify-between gap-6 bg-yellow-300">
            <div className="bg-pink-200 flex items-center justify-center w-full">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                setApi={setApi}
              >
                <CarouselContent className="bg-green-400">
                  <CarouselItem className=" flex flex-col items-center justify-center">
                    <Image
                      src="/slider1.webp"
                      alt="done"
                      width={2000}
                      height={2000}
                      className="w-[1000px] h-[600px] object-contain"
                    />
                    <div className="text-lg">Community meet-up in Tokyo</div>
                  </CarouselItem>
                  <CarouselItem className=" flex flex-col items-center justify-center">
                    <Image
                      src="/slider2.webp"
                      alt="done"
                      width={2000}
                      height={2000}
                      className="w-[1000px] h-[600px] object-contain"
                    />
                    <div className="text-lg">
                      Notion ambassador event in New York
                    </div>
                  </CarouselItem>
                  <CarouselItem className=" flex flex-col items-center justify-center">
                    <Image
                      src="/slider3.webp"
                      alt="done"
                      width={2000}
                      height={2000}
                      className="w-[1000px] h-[600px] object-contain"
                    />
                    <div className="text-lg">
                      Sharing Notion setups in San Francisco
                    </div>
                  </CarouselItem>
                  <CarouselItem className=" flex flex-col items-center justify-center">
                    <Image
                      src="/slider4.webp"
                      alt="done"
                      width={2000}
                      height={2000}
                      className="w-[1000px] h-[600px] object-contain"
                    />
                    <div className="text-lg">Coffee pop-up in London</div>
                  </CarouselItem>
                </CarouselContent>
                <div className="w-full text-center">{current}</div>
                <div onClick={handleDecrement}>
                  <CarouselPrevious />
                </div>
                <div onClick={handleIncrement}>
                  <CarouselNext />
                </div>
              </Carousel>
            </div>
            <div className="bg-orange-300 w-max relative flex  items-center justify-center">
              <div className="flex flex-col items-center justify-center gap-y-4">
                <div className="bg-gray-200 w-96 flex flex-col gap-y-5 px-4 pt-6 pb-12 rounded-2xl">
                  <div className="flex items-center justify-start gap-3  w-full">
                    <Image
                      src="/a.webp"
                      alt="done"
                      width={2000}
                      height={2000}
                      className="w-16 h-16 object-contain"
                    />
                    <div className="flex flex-col gap-y-1">
                      <div className="text-xl font-bold">Deborah Mecca</div>
                      <div className="text-xl text-gray-400">@DebMecca</div>
                    </div>
                  </div>
                  <div className=" font-medium text-lg">
                    I used to HATE documenting things. And then I started using{" "}
                    <span style={{ color: "#1B95E0" }}>@NotionHQ</span> and I
                    document a lot. A LOT A LOT. Now I just realize that it
                    wasn't that I hated documenting, I just hated Google Docs.
                  </div>
                </div>

                <div className="bg-gray-200 w-96 flex flex-col gap-y-5 px-4 pt-6 pb-12 rounded-2xl">
                  <div className="flex items-center justify-start gap-3  w-full">
                    <Image
                      src="/b.webp"
                      alt="done"
                      width={2000}
                      height={2000}
                      className="w-16 h-16 object-contain"
                    />
                    <div className="flex flex-col gap-y-1">
                      <div className="text-xl font-bold">André Blackman</div>
                      <div className="text-xl text-gray-400">@mindofandre</div>
                    </div>
                  </div>
                  <div className=" font-medium text-lg">
                    {" "}
                    One of the most incredible things about{" "}
                    <span style={{ color: "#1B95E0" }}>@NotionHQ</span> is the
                    dynamic community being built - creating and sharing at its
                    best.
                  </div>
                </div>

                <div className="bg-gray-200 w-96 flex flex-col gap-y-5 px-4 pt-6 pb-12 rounded-2xl">
                  <div className="flex items-center justify-start gap-3  w-full">
                    <Image
                      src="/c.webp"
                      alt="done"
                      width={2000}
                      height={2000}
                      className="w-16 h-16 object-contain"
                    />
                    <div className="flex flex-col gap-y-1">
                      <div className="text-xl font-bold">Oliver Peyre</div>
                      <div className="text-xl text-gray-400">@opeyre</div>
                    </div>
                  </div>
                  <div className=" font-medium text-lg">
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
