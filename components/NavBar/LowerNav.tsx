import Image from "next/image";
import React from "react";

import nav_logo from "../../public/nav_logo.png";
import diagonal_arrow from "../../public/diagonal_arrow.png";

const LowerNav = () => {
  return (
    <div className="flex h-[120px] bg-transparent items-center px-10 justify-between">
      <div>
        <Image src={nav_logo} alt="website logo" height={77} width={283} />
      </div>
      <ul className="flex items-center text-[16px] text-white font-volkhov font-normal gap-5">
        <li>Governorate</li>
        <li>Authority</li>
        <li>Invest in Jeddah</li>
        <li>Projects & initiatives</li>
        <li>Media</li>
        <li>Downloads</li>
        <li>Careers</li>
        <li>Contact us</li>
        <li className="border border-white px-5 py-3 flex items-center justify-between gap-5">
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
