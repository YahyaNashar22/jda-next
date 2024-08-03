import React from "react";
import SmallCaroussel from "./SmallCaroussel";

const InvestingInTheCity = () => {
  return (
    <section className="w-full h-full flex flex-col items-start justify-between px-28 py-36">
      <div className="flex items-center justify-around pb-36">
        <p className="text-[64px] font-volkhov w-[40vw]">
          All the necessary information on investing in the city
        </p>
        <SmallCaroussel />
      </div>
      <div className="bg-breaker-bg bg-contain bg-no-repeat h-24 w-full mt-auto" />
    </section>
  );
};

export default InvestingInTheCity;
