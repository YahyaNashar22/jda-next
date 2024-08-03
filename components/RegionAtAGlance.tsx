import React from "react";
import Image from "next/image";

import diamonds from "../public/diamonds.png";

const RegionAtAGlance = () => {
  return (
    <section className="flex flex-col w-screen h-[80%] items-center gap-52 bg-region-bg bg-cover text-white px-28 py-36">
      <div className="flex w-full items-center justify-around gap-5">
        <Image
          src={diamonds}
          alt="diamonds"
          width={248}
          height={75}
          className="self-start"
        />
        <div className="flex flex-col items-start justify-between gap-5">
          <p className="text-14[px] font-serif font-semibold text-gray-200">
            Jeddah in numbers
          </p>
          <h1 className="text-[64px]">Region at a glance</h1>
          <p className="text-[20px] text-gray-100">
            Increase sales by expanding and engaging your user base, and
            streamlining the customer experience.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-around w-full gap-5">
        <div className="flex flex-col items-start justify-center pt-16 border-t-2 border-white w-1/3">
          <p className="text-[64px]">56.5 million</p>
          <p className="text-[16px]">
            Tourists visiting the city of Jeddah annually
          </p>
        </div>
        <div className="flex flex-col items-start justify-center pt-16 border-t-2 border-white w-1/3">
          <p className="text-[64px]">778.2 km²</p>
          <p className="text-[16px]">Total area of urban land</p>
        </div>
        <div className="flex flex-col items-start justify-center pt-16 border-t-2 border-white w-1/3">
          <p className="text-[64px]">56.5 million</p>
          <p className="text-[16px]">Current population status for 2023</p>
        </div>
      </div>
    </section>
  );
};

export default RegionAtAGlance;
