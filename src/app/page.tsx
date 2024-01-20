import Company from "@/components/Company/Company";
import Hero from "@/components/Hero/page";
import Tabs from "@/components/Tab/Tab";
// import Movement from "@/components/Movement/page";
import React from "react";
import Endless from "@/components/Endless/page";
import Powerful from "@/components/Powerful/page";
import Side from "@/components/Side/page";
//import CarouselApp from "@/components/CarouselApp/page";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center mb-10 gap-y-6 ">
      <Hero />
      <Tabs />
      <Company />
      <Powerful />
      <Side />
      {/* <Movement /> */}
      <Endless />
      {/* <CarouselApp /> */}
    </div>
  );
};

export default Home;
//Hero -> Done
//Powerful -> Done
//Endless -> Done
//Movement -> Done [Not the Image(avatars)]
//Footer -> Done
