import Company from "@/components/Company/Company";
import Hero from "@/components/Hero/page";
import Navbar from "@/components/Navbar/page";
import Tabs from "@/components/Tab/Tab";
import React from "react";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center mb-10  ">
      <Navbar />
      <Hero />
      <Tabs />
      <Company />
    </div>
  );
};

export default Home;
