import React from "react";

const HeroNav = () => {
  return (
    <nav className="w-full bg-white h-20 self-end flex flex-wrap items-center justify-center shadow-lg">
      <ul className="flex items-center justify-around align-middle w-full lg:w-1/2 m-auto bg-white text-[16px] font-volkhov">
        <li className="pb-5 cursor-pointer hover:text-y200 hover:border-b-2 border-b-y200 transition duration 300 ease-in-out">
          Invest in Jeddah
        </li>
        <li className="pb-5 cursor-pointer hover:text-y200 hover:border-b-2 border-b-y200 transition duration 300 ease-in-out">
          Investments sectors
        </li>
        <li className="pb-5 cursor-pointer hover:text-y200 hover:border-b-2 border-b-y200 transition duration 300 ease-in-out">
          Investment Opportunities
        </li>
        <li className="pb-5 cursor-pointer hover:text-y200 hover:border-b-2 border-b-y200 transition duration 300 ease-in-out">
          Brochures
        </li>
        <li className="pb-5 cursor-pointer hover:text-y200 hover:border-b-2 border-b-y200 transition duration 300 ease-in-out">
          Bussiness support
        </li>
      </ul>
    </nav>
  );
};

export default HeroNav;
