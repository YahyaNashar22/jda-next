import React from "react";

import location from "../public/location.png";
import Image from "next/image";

const AvailableOpportunities = () => {
  const data = [
    {
      img: "/img1.png",
      sector: "Sector 1",
      title: "Investment",
      location: "7051 Prince Sultan - As Salamah",
    },
    {
      img: "/img2.png",
      sector: "Sector 1",
      title: "Investment",
      location: "7051 Prince Sultan - As Salamah",
    },
    {
      img: "/img3.png",
      sector: "Sector 1",
      title: "Investment",
      location: "7051 Prince Sultan - As Salamah",
    },
    {
      img: "",
      sector: "Sector 1",
      title: "Investment",
      location: "7051 Prince Sultan - As Salamah",
    },
    {
      img: "/img4.png",
      sector: "Sector 1",
      title: "Investment",
      location: "7051 Prince Sultan - As Salamah",
    },
    {
      img: "",
      sector: "Sector 1",
      title: "Investment",
      location: "7051 Prince Sultan - As Salamah",
    },
  ];

  return (
    <section className="flex flex-col w-full h-[80%] items-start justify-between px-28 py-36 gap-5">
      <p className="text-[14px] font-semibold font-serif">
        investment opportunities
      </p>
      <h1 className="text-[64px] leading-[72px] mb-5">
        Available <br /> opportunities
      </h1>
      <ul className="flex items-start justify-between gap-5 mb-10">
        <li className=" cursor-pointer py-2 px-4 rounded-full text-[16px] bg-b50 hover:bg-b300 hover:text-white transition duration-300 ease-in-out">
          All
        </li>
        <li className=" cursor-pointer p-2 rounded-full text-[16px] bg-b50 hover:bg-b300 hover:text-white transition duration-300 ease-in-out">
          Sector 1
        </li>
        <li className=" cursor-pointer p-2 rounded-full text-[16px] bg-b50 hover:bg-b300 hover:text-white transition duration-300 ease-in-out">
          Sector 2
        </li>
        <li className=" cursor-pointer p-2 rounded-full text-[16px] bg-b50 hover:bg-b300 hover:text-white transition duration-300 ease-in-out">
          Sector 3
        </li>
      </ul>
      <div className="flex flex-wrap items-center justify-between gap-10">
        {data.map((item, index) => {
          return (
            <div key={index} className="flex flex-col items-start justify-between shadow-lg">
              <div className="h-72 w-80 xl:w-[420px] flex items-start justify-center">
                {item.img && (
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={420}
                    height={274}
                  />
                )}
              </div>
              <div className="flex flex-col items-start justify-center py-5 px-10">
                <p className="text-[14px] font-serif">{item.sector}</p>
                <h1 className="text-[32px]">{item.title}</h1>
                <p className="text-[14px] font-serif flex items-start justify-between gap-3">
                  <Image src={location} alt="location" height={24} width={24} />
                  <span>{item.location}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <p className="text-[20px] font-semibold cursor-pointer text-y300 hover:text-y200 transition duration-300 ease-in-out text-center mx-auto mt-24">
        Show more
      </p>
    </section>
  );
};

export default AvailableOpportunities;
