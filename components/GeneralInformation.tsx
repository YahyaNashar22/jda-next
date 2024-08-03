import React from "react";

const GeneralInformation = () => {
  return (
    <section className="mx-auto flex flex-wrap items-start justify-between px-28 py-36 h-full w-full">
      <aside className="flex flex-col items-start justify-start w-max">
        <p className="text-[12px] font-serif font-semibold">Invest in Jeddah</p>
        <h1 className="font-volkhov text-[64px]">
          General
          <br />
          information
        </h1>
      </aside>

      <aside className="w-3/5 flex flex-col">
        <p className="text-[20px] font-serif leading-[32px] mb-10">
          Jeddah is distinguished by several tourists, cultural and historical
          sites. The Historic Area in Balad is listed in the World Heritage of
          UNESCO, and there are several historical palaces named after Khuzam,
          King Saud, and King Faisal.
        </p>
        <p className="text-[20px] font-serif leading-[32px]">
          {" "}
          Jeddah is distinguished by several tourists, cultural and historical
          sites. The Historic Area in Balad is listed in the World Heritage of
          UNESCO, and there are several historical palaces named after Khuzam,
          King Saud, and King Faisal.
        </p>
      </aside>
    </section>
  );
};

export default GeneralInformation;
