import React from "react";

import hero from "../public/hero.png";
import Image from "next/image";

const StrategicSectors = () => {
  const data = [
    {
      id: "01",
      img: hero,
      title: "Logistic",
      text: "Total area of urban land",
      isPositive: true,
    },
    {
      id: "02",
      img: hero,
      title: "Trade & Commerce",
      text: "Total area of urban land Jeddah is distinguished by several tourists, cultural and historical sites. The Historic Area in Balad is listed in the World Heritage of UNESCO",
      isPositive: false,
    },
    {
      id: "03",
      img: hero,
      title: "Manufacturing",
      text: "Total area of urban land",
      isPositive: true,
    },
    {
      id: "04",
      img: hero,
      title: "Real-estate",
      text: "Total area of urban land",
      isPositive: true,
    },
    {
      id: "05",
      img: hero,
      title: "Tourism",
      text: "Total area of urban land",
      isPositive: true,
    },
  ];

  return (
    <section className="flex flex-col w-[80vw] h-[80vh] items-start justify-between mx-auto mb-32 py-20">
      <p className="text-[14px] font-serif font-semibold">
        Exploring diverse investments sectors
      </p>
      <h1 className="text-[64px] mb-20">Strategic sectors</h1>
      <div className="flex items-center justify-between gap-10 self-center ">
        {data.map((current, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-between h-[600px] w-[240px] relative text-white py-10 px-2"
            >
              <Image
                src={current.img}
                alt={current.title}
                layout="fill"
                objectFit="cover"
                className="-z-10"
              />
              <div className="absolute inset-0 bg-b500 bg-opacity-50 -z-10"></div>
              <p className="text-[32px]">{`{${current.id}}`}</p>
              <div className="mt-auto flex flex-col items-start justify-between">
                <h1 className="text-[28px]">{current.title}</h1>
                <p className="text-[16px] font-serif">{current.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default StrategicSectors;
