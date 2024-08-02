import React from "react";
import StatisticsPackage from "./StatisticsPackage";

import people from "../public/people.png";
import brief_case from "../public/brief_case.png";
import building from "../public/building.png";

const Statistics = () => {
  return (
    <section className="h-[80vh] w-full bg-b500 bg-statistics-bg flex items-center justify-between">
      <div className="flex flex-col items-center justify-between w-[80vw] gap-y-32 ">
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

      <div className="flex flex-col items-center justify-between w-[80vw] gap-y-32">
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

      <div className="flex flex-col items-center justify-between w-[80vw] gap-y-32 ">
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
