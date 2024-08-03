import React from "react";
import StatisticsPackage from "./StatisticsPackage";

import people from "../public/people.png";
import brief_case from "../public/brief_case.png";
import building from "../public/building.png";

const Statistics = () => {
  return (
    <section className="h-full w-full bg-b500 bg-statistics-bg flex flex-col xl:flex-row items-center justify-between py-32 gap-16">
      <div className="flex flex-row justify-center items-start gap-16 xl:flex-col xl:items-center xl:justify-between w-full gap-y-32 ">
        <StatisticsPackage
          packageIco={people}
          packageText="56.5 million"
          packageTitle="Population"
        />
        <StatisticsPackage
          packageIco={people}
          packageText="1500+"
          packageTitle="Number pf ports"
        />
      </div>

      <div className="flex flex-row justify-center items-start gap-16 xl:flex-col xl:items-center xl:justify-between w-full gap-y-32">
        <StatisticsPackage
          packageIco={brief_case}
          packageText="1500+"
          packageTitle="Jobs"
        />
        <StatisticsPackage
          packageIco={brief_case}
          packageText="1200+"
          packageTitle="Hotels"
        />
      </div>

      <div className="flex flex-row justify-center items-start gap-16 xl:flex-col xl:items-center xl:justify-between w-full gap-y-32 ">
        <StatisticsPackage
          packageIco={building}
          packageText="56.5 million"
          packageTitle="Industrial cities"
        />
        <StatisticsPackage
          packageIco={building}
          packageText="12"
          packageTitle="University hospitals"
        />
      </div>
    </section>
  );
};

export default Statistics;
