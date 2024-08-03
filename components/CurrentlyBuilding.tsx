import React from "react";
import BigCarousel from "./BigCarousel";

const CurrentlyBuilding = () => {
  return (
    <section className="flex flex-col w-full h-full gap-10 items-start justify-between px-28 py-36">
      <div className="flex flex-col h-max">
        <p className="font-semibold font-serif text-[14px] mb-10">
          Current investments in the city
        </p>
        <h1 className="leading-[74px] font-volkhov text-[64px]">
          See what is actually
          <br />
          being built
        </h1>
      </div>
      <BigCarousel />
    </section>
  );
};

export default CurrentlyBuilding;
