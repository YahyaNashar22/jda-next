import React from "react";
import SmallCaroussel from "./SmallCaroussel";

const InvestingInTheCity = () => {
  return (
    <section className="w-full h-[80%] flex flex-col items-center justify-around py-24 gap-16">
      <div className="flex items-center justify-around">
        <p className="text-[64px] font-volkhov w-[40vw]">
          All the necessary information on investing in the city
        </p>
        <SmallCaroussel />
      </div>
      <div className="bg-breaker-bg bg-contain bg-no-repeat h-24 w-[80%] mt-auto" />
    </section>
  );
};

export default InvestingInTheCity;
