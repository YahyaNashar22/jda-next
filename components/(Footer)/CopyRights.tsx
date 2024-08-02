import Image from "next/image";
import React from "react";
import arrow_up from "../../public/arrow_up.png";

const CopyRights = () => {
  return (
    <section className="flex items-end w-[30%] px-20 py-10 text-center bg-white relative">
      <div className="bg-y100 rounded-full w-[56px] h-[56px] flex justify-center items-center absolute bottom-[65px] right-5 z-20">
        <Image src={arrow_up} height={21} width={26} alt="arrow-up" />
      </div>
      <p className="text-[14px] text-b500 font-semibold tracking-3p opacity-50">© COPYRIGHT JDA 2024</p>
    </section>
  );
};

export default CopyRights;
