import React from "react";
import SmallCaroussel from "./SmallCaroussel";

const InvestingInTheCity = () => {
  return (
    <section className="w-full h-full flex flex-col items-start justify-between px-28 py-36">
      <div className="flex flex-wrap items-center justify-around gap-16 pb-36">
        <p className="text-[64px] font-volkhov">
          All the necessary
          <br /> information on
          <br /> investing in the city
        </p>
        <SmallCaroussel />
      </div>
      <div className="bg-breaker-bg bg-contain bg-no-repeat h-24 w-full mt-auto" />
    </section>
  );
};

export default InvestingInTheCity;
