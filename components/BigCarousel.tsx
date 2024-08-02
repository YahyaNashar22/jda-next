"use client";

import React, { useState } from "react";
import Image from "next/image";

import hero from "../public/hero.png";
import caroussel2 from "../public/caroussel2.png";
import caroussel3 from "../public/caroussel3.png";

import arrow_left from "../public/arrow_left.png";
import arrow_right1 from "../public/arrow_right1.png";

const BigCarousel = () => {
  const [index, setIndex] = useState(0);
  const [scrollX, setScrollX] = useState(0);

  const containerWidth = 1200;

  const images = [hero, caroussel2, caroussel3];

  const next = () => {
    setIndex((prevIndex) => prevIndex + 1);
    setScrollX((prev) =>
      Math.min(prev + containerWidth, (images.length - 1) * containerWidth)
    );
  };

  const previous = () => {
    setIndex((prevIndex) => prevIndex - 1);
    setScrollX((prev) => Math.max(prev - containerWidth, 0));
  };

  return (
    <div className="flex relative items-center justify-around gap-10">
      <Image
        src={arrow_left}
        alt="arrow left"
        width={32}
        height={32}
        onClick={previous}
        className="cursor-pointer hover:scale-125 transition duration-300 ease-in-out z-20"
      />
      <div className="absolute bottom-0 left-0 bg-b500 flex  items-start justify-between gap-10 z-10 p-10">
        <div className="flex flex-col items-start justify-between text-white w-full">
          <p className="text-[14px] text-gray-200 font-serif font-semibold">
            six exciting districts
          </p>
          <h2 className="text-[40px] font-volkhov">Marina District</h2>
          <p className="text[15px] font-serif text-gray-100">
            Connecting Jeddah Central to the Red Sea{" "}
          </p>
        </div>
        <div className="bg-y100 rounded-full h-[40px] w-[40px] text-b500 flex items-center justify-center text-[24px] align-middle">
          +
        </div>
      </div>
      {images.map((image, current) => {
        return (
          <>
            <div
              className="relative w-[1033px] h-[524px] ml-24 transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${scrollX}px)` }}
            >
              <Image
                src={images[current]}
                alt={`image - ${current}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <Image
              src={arrow_right1}
              alt="arrow right"
              width={32}
              height={32}
              onClick={next}
              className="cursor-pointer hover:scale-125 transition duration-300 ease-in-out z-20"
            />
          </>
        );
      })}
    </div>
  );
};

export default BigCarousel;
