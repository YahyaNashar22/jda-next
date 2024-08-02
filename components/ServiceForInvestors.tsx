import Image from "next/image";
import Link from "next/link";
import React from "react";

import diagonal_arrow from "../public/diagonal_arrow.png";

const ServiceForInvestors = () => {
  return (
    <section className="h-[50vh] flex items-center justify-center">
      <div className="flex flex-col items-center justify-around ">
        <h1 className="text-[64px] font-volkhov mb-5">Service for investors</h1>
        <p className="text-[20px] font-serif mb-10">
          Discover more informations in Investments Hub
        </p>
        <Link
          href="#"
          className="bg-b300 rounded-full flex items-center justify-around px-5 py-2 gap-2"
        >
          <span className="text-[20px] text-white">Go to Investments Hub</span>
          <Image
            src={diagonal_arrow}
            alt="diagonal arrow"
            width={12}
            height={14}
          />
        </Link>
      </div>
    </section>
  );
};

export default ServiceForInvestors;
