import Footer from "@/components/Footer/Footer";
import GeneralInformation from "@/components/GeneralInformation";
import Hero from "@/components/Hero";
import Image from "next/image";
import React from "react";

import sea_scenery from "../public/sea_scenery.png";
import Statistics from "@/components/Statistics";
import ServiceForInvestors from "@/components/ServiceForInvestors";

const Home = () => {
  return (
    <main className="font-volkhov text-b300">
      <Hero />
      <GeneralInformation />
      <Image
        src={sea_scenery}
        alt="sea scenery"
        className="w-screen h-[90vh]"
      />
      <Statistics />
      <ServiceForInvestors />
    </main>
  );
};

export default Home;
