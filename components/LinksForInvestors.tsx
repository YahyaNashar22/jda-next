import Image from "next/image";
import React from "react";

import diagonal_arrow_blue from "../public/diagonal_arrow_blue.png";

const LinksForInvestors = () => {
  const data = [
    {
      img: "/fursa.png",
      tag1: "Investor journeys",
      tag2: "Available incentives",
      title: "Furas Platform",
    },
    {
      img: "/mudn.png",
      tag1: "Investor journeys",
      tag2: "Available incentives",
      title: "Modon Platform",
    },
    {
      img: "",
      tag1: "Investor journeys",
      tag2: "Available incentives",
      title: "PIF",
    },
  ];

  return (
    <section className="flex flex-col w-[80vw] h-[80%] items-start justify-between mx-auto pt-32">
      <h1 className="text-[64px]">Links for investors</h1>
      <ul className="flex items-start justify-between gap-5 mb-24">
        <li className=" cursor-pointer py-2 px-4 rounded-full text-[16px] bg-b50 hover:bg-b300 hover:text-white transition duration-300 ease-in-out">
          All
        </li>
        <li className=" cursor-pointer p-2 rounded-full text-[16px] bg-b50 hover:bg-b300 hover:text-white transition duration-300 ease-in-out">
          Policy & Regulations
        </li>
        <li className=" cursor-pointer p-2 rounded-full text-[16px] bg-b50 hover:bg-b300 hover:text-white transition duration-300 ease-in-out">
          Available incentives
        </li>
        <li className=" cursor-pointer p-2 rounded-full text-[16px] bg-b50 hover:bg-b300 hover:text-white transition duration-300 ease-in-out">
          Investor journeys
        </li>
      </ul>
      <div className="flex flex-wrap items-start justify-between gap-10 mx-auto">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col w-96 p-5 items-start justify-center shadow-lg gap-5"
            >
              <div className="h-32 flex items-start justify-center">
                {item.img && (
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={150}
                    height={100}
                  />
                )}
              </div>
              <div className="flex items-center justify-between gap-5 text-[14px] font-serif">
                <p>{item.tag1}</p>
                <p> | </p>
                <p>{item.tag2}</p>
              </div>
              <h1 className="text-[32px]">{item.title}</h1>
              <Image
                src={diagonal_arrow_blue}
                alt="diagonal arrow"
                width={45}
                height={45}
                className="mt-auto self-end"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default LinksForInvestors;
