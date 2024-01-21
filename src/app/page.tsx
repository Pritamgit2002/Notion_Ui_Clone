import Company from "@/app/first_page/Company/Company";
import Hero from "@/app/first_page/Hero/page";
import Tabs from "@/app/first_page/Tab/Tab";
import Movement from "@/app/first_page/Movement/page";
import React from "react";
import Endless from "@/app/first_page/Endless/page";
import Powerful from "@/app/first_page/Powerful/page";
import Side from "@/app/first_page/Side/page";
import Navbar from "@/components/Navbar/page";
//import CarouselApp from "@/components/CarouselApp/page";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center mb-10 gap-y-6 ">
      <Navbar/>
      <Hero />
      <Tabs />
      <Company />
      <Powerful />
      <Side />
      <Movement />
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
