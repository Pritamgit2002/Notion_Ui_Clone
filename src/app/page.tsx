import Company from "@/components/Company/Company";
import Hero from "@/components/Hero/page";
import Navbar from "@/components/Navbar/page";
import Tabs from "@/components/Tab/Tab";
import Movement from "@/components/Movement/page";
import React from "react";
import Endless from "@/components/Endless/page";
import Footer from "@/components/Footer/Footer";
import Powerful from "@/components/Powerful/page";
import Side from "@/components/Side/page";
//import CarouselApp from "@/components/CarouselApp/page";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center mb-10  ">
      <Navbar />
      <Hero />
      <Tabs />
      <Company />
      <Powerful />
      <Side />
      <Movement />
      <Endless />
      <Footer />
      {/* <CarouselApp /> */}
    </div>
  );
};

export default Home;
