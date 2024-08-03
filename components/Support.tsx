import React from "react";
import Image from "next/image";

import building2 from "../public/building2.png";

const Support = () => {
  return (
    <section className="flex flex-col w-[100%] h-[80%] items-start justify-between px-28 py-36">
      <p className="text-[14px] font-serif font-semibold">business support</p>
      <h1 className="text-[64px] leading-[74px] mb-24">
        This is how we
        <br />
        support business
      </h1>

      <div className="flex flex-wrap items-center justify-between mx-auto">
        <div className="flex flex-col items-center justify-between h-[340px] w-[304px] px-5 py-3 border-r-2">
          <Image
            src={building2}
            className="self-start"
            alt="industry"
            height={40}
            width={40}
          />
          <div className="flex flex-col self-end mt-auto">
            <h1 className="text-[24px]">Management</h1>
            <p className="text-[14px] font-serif">
              The most important element that it determines receiving the full
              amount of funding
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-5 h-[340px] w-[304px] px-5 py-3 border-r-2">
          <Image
            src={building2}
            className="self-start"
            alt="industry"
            height={40}
            width={40}
          />
          <div className="flex flex-col self-end mt-auto">
            <h1 className="text-[24px]">Support</h1>
            <p className="text-[14px] font-serif">
              The most important element that it determines receiving the full
              amount of funding
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-5 h-[340px] w-[304px] px-5 py-3 border-r-2">
          <Image
            src={building2}
            className="self-start"
            alt="industry"
            height={40}
            width={40}
          />
          <div className="flex flex-col self-end mt-auto">
            <h1 className="text-[24px]">Strategy</h1>
            <p className="text-[14px] font-serif">
              The most important element that it determines receiving the full
              amount of funding
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-5 h-[340px] w-[304px] px-5 py-3 border-r-2">
          <Image
            src={building2}
            className="self-start"
            alt="industry"
            height={40}
            width={40}
          />
          <div className="flex flex-col self-end mt-auto">
            <h1 className="text-[24px]">Financial resources</h1>
            <p className="text-[14px] font-serif">
              The most important element that it determines receiving the full
              amount of funding
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
