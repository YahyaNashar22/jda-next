import React from "react";

import diamonds from "../public/diamonds.png";
import Image from "next/image";
import Accordion from "./Accordion";

import arrow_diagonal from "../public/arrow_diagonal.png";

const MostAsked = () => {
  return (
    <section className="flex flex-col w-screen h-[80%] items-center gap-52 bg-region-bg bg-cover text-white px-28 py-36">
      <div className="flex items-start justify-around w-full gap-5">
        <div className="flex flex-col gap-5 items-start justify-between">
          <p className="text-[14px] font-serif font-semibold text-gray-400">
            FAQ
          </p>
          <h1 className="text-[64px]">
            Most common <br />
            questions
          </h1>
        </div>
        <Image src={diamonds} alt="diamonds" width={248} height={75} />
      </div>
      <div className="flex items-start justify-around w-full gap-10">
        <p className="text-[20px] font-serif font-medium text-gray-400">
          FOR INVESTORS
        </p>
        <div className="flex flex-col items-start justify-between gap-16">
          <Accordion />
          <button
            type="button"
            className="bg-white px-7 py-4 flex items-center justify-between gap-5 text-b300"
          >
            <span>More FAQ</span>{" "}
            <Image
              src={arrow_diagonal}
              alt="diagonal arrow"
              width={12}
              height={14}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MostAsked;
