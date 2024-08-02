import React from "react";

const GeneralInformation = () => {
  return (
    <section className="mx-auto flex items-center justify-between h-[50vh] w-[80vw]">
      <aside className="flex flex-col items-start justify-start w-2/5">
        <p className="text-[12px] font-serif font-semibold">Invest in Jeddah</p>
        <h1 className="font-volkhov text-[64px]">
          General
          <br />
          information
        </h1>
      </aside>
      <aside className="w-3/5">
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
