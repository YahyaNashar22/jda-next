import Footer from "@/components/Footer/Footer";
import GeneralInformation from "@/components/GeneralInformation";
import Hero from "@/components/Hero";
import Image from "next/image";
import React from "react";

import sea_scenery from "../public/sea_scenery.png";
import Statistics from "@/components/Statistics";
import ServiceForInvestors from "@/components/ServiceForInvestors";
import InvestingInTheCity from "@/components/InvestingInTheCity";
import CurrentlyBuilding from "@/components/CurrentlyBuilding";
import StrategicSectors from "@/components/StrategicSectors";
import LinksForInvestors from "@/components/LinksForInvestors";
import AvailableOpportunities from "@/components/AvailableOpportunities";
import RegionAtAGlance from "@/components/RegionAtAGlance";

const Home = () => {
  return (
    <main className="font-volkhov text-b300 flex flex-col">
      <Hero />
      <GeneralInformation />
      <Image
        src={sea_scenery}
        alt="sea scenery"
        className="w-screen h-[90vh]"
      />
      <Statistics />
      <InvestingInTheCity />
      <CurrentlyBuilding />
      <StrategicSectors />
      <LinksForInvestors />
      <AvailableOpportunities />
      <RegionAtAGlance />
      <ServiceForInvestors />
    </main>
  );
};

export default Home;
