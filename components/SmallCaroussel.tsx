"use client";

import React, { useState } from "react";
import Image from "next/image";

import hero from "../public/hero.png";
import caroussel2 from "../public/caroussel2.png";
import caroussel3 from "../public/caroussel3.png";

import arrow_left from "../public/arrow_left.png";
import arrow_right1 from "../public/arrow_right1.png";

const SmallCaroussel = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const images = [hero, caroussel2, caroussel3];
  const titles = ["Strategy", "Raport 2023", "Raport 2023"];

  const next = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prevIndex) => prevIndex + 1);
      setFade(true);
    }, 300);
  };

  const previous = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prevIndex) => prevIndex - 1);
      setFade(true);
    }, 300);
  };

  return (
    <div className="flex items-center justify-between w-[45vw]">
      <div
        className={`h-[430px] w-[308px] relative text-white transition-opacity duration-300 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src={images[index]}
          alt={`image - ${index}`}
          layout="fill"
          objectFit="cover"
          className="hover:scale-110 transition duration-300 ease-in-out"
        />
        <p className="text-[32px] font-volkhov absolute top-[20px] left-10">
          {titles[index]}
        </p>
        <p className="text-[16px] font-serif absolute top-[100px] left-10">
          Total are of urban land
        </p>
      </div>
      <div className="flex flex-col items-start justify-between gap-10">
        <div className="flex items-start justify-between gap-10">
          {images.map((image, current) => {
            console.log(image);

            if (current != index) {
              return (
                <div
                  key={current}
                  className="w-[223px] h-[312px] relative opacity-70 text-white transition-opacity duration-100"
                >
                  <Image
                    src={images[current]}
                    alt={`image - ${current}`}
                    layout="fill"
                    objectFit="cover"
                    className="hover:scale-105 transition duration-300 ease-in-out"
                  />
                  <p className="text-[24px] font-volkhov absolute top-[20px] left-10 opacity-70">
                    {titles[current]}
                  </p>
                  <p className="text-[12px] font-serif absolute top-[80px] left-10 opacity-70">
                    Total are of urban land
                  </p>
                </div>
              );
            }
          })}
        </div>
        <div className="flex items-center justify-between gap-5">
          {index > 0 && (
            <Image
              src={arrow_left}
              alt="arrow left"
              width={32}
              height={32}
              className="cursor-pointer opacity-80 hover:opacity-100 transition duration-300 ease-in-out"
              onClick={previous}
            />
          )}
          {index < images.length - 1 && (
            <Image
              src={arrow_right1}
              alt="arrow right"
              width={32}
              height={32}
              className="cursor-pointer opacity-80 hover:opacity-100 transition duration-300 ease-in-out"
              onClick={next}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SmallCaroussel;
