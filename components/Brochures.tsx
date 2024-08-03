import React from "react";
import SmallCaroussel from "./SmallCaroussel";

const Brochures = () => {
  return (
    <section className="w-full h-[80%] flex flex-col items-center justify-around py-36 gap-16">
      <div className="flex items-center justify-around">
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-[60px] font-volkhov">
            Brochures for <br /> investors
          </h1>
          <p className="text-[20px] font-serif font-semibold w-[40vw]">
            Download for more informations
          </p>
        </div>
        <SmallCaroussel />
      </div>
      <div className="bg-breaker-bg bg-contain bg-no-repeat h-24 w-[80%] mt-auto" />
    </section>
  );
};

export default Brochures;
