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
import Brochures from "@/components/Brochures";
import MostAsked from "@/components/MostAsked";
import Support from "@/components/Support";

const Home = () => {
  return (
    <main className="font-volkhov text-b300 flex flex-col flex-wrap">
      <Hero />
      <GeneralInformation />
      <Image src={sea_scenery} alt="sea scenery" className="w-[100%] h-[90%]" />
      <Statistics />
      <InvestingInTheCity />
      <CurrentlyBuilding />
      <StrategicSectors />
      <LinksForInvestors />
      <AvailableOpportunities />
      <RegionAtAGlance />
      <Brochures />
      <Support />
      <MostAsked />
      <ServiceForInvestors />
    </main>
  );
};

export default Home;
