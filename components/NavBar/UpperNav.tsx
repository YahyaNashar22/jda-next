import Image from "next/image";
import React from "react";

import magnifier from "../../public/search.png";
import earth from "../../public/earth.png";
import cloudy from "../../public/cloudy.png";

const UpperNav = () => {
  return (
    <>
      <ul className="flex gap-5 justify-end items-center bg-transparent px-10 py-5 mt-5 text-white font-inter font-normal h-[40px]">
        <li className="flex items-center justify-between w-14">
          <Image src={cloudy} alt="cloudy" height={25} width={25} />
          <span className="text-[14px]">24&deg;C</span>
        </li>
        <li className="text-[14px]">City Cam</li>
        <li className="text-[14px]">Upcoming events: Mar 24, 2024</li>
        <li>
          <Image src={earth} alt="earth" height={25} width={25} />
        </li>
        <li>
          <Image src={magnifier} alt="magnifier" height={25} width={25} />
        </li>
      </ul>
      <hr className="opacity-20" />
    </>
  );
};

export default UpperNav;
