import Image from "next/image";
import React from "react";

import nav_logo from "../../public/nav_logo.png";
import diagonal_arrow from "../../public/diagonal_arrow.png";

const LowerNav = () => {
  return (
    <div className="flex h-[120px] w-full bg-transparent items-center px-10 justify-between">
      <div>
        <Image src={nav_logo} alt="website logo" height={77} width={283} />
      </div>
      <ul className="flex items-center text-[16px] text-white font-volkhov font-normal gap-14">
        <li className="cursor-pointer hover:text-y200 transition duration 300 ease-in-out">
          Governorate
        </li>
        <li className="cursor-pointer hover:text-y200 transition duration 300 ease-in-out">
          Authority
        </li>
        <li className="cursor-pointer hover:text-y200 transition duration 300 ease-in-out">
          Invest in Jeddah
        </li>
        <li className="cursor-pointer hover:text-y200 transition duration 300 ease-in-out">
          Projects & initiatives
        </li>
        <li className="cursor-pointer hover:text-y200 transition duration 300 ease-in-out">
          Media
        </li>
        <li className="cursor-pointer hover:text-y200 transition duration 300 ease-in-out">
          Downloads
        </li>
        <li className="cursor-pointer hover:text-y200 transition duration 300 ease-in-out">
          Careers
        </li>
        <li className="cursor-pointer hover:text-y200 transition duration 300 ease-in-out">
          Contact us
        </li>
        <li className="border border-white px-5 py-3 flex items-center justify-between gap-5 cursor-pointer hover:bg-y200 hover:border-y200 transition duration 300 ease-in-out">
          <span> Latest Brochure</span>
          <Image
            src={diagonal_arrow}
            alt="diagonal arrow"
            height={14}
            width={12}
          />
        </li>
      </ul>
    </div>
  );
};

export default LowerNav;
