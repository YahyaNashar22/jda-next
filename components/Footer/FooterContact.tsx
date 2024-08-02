import Image from "next/image";
import React from "react";
import saudi_tree from "../../public/saudi_tree.png";

const FooterContact = () => {
  return (
    <section className="flex justify-around w-[70%] bg-b500 text-gray-200 px-10 py-10">
      <div className="flex flex-col gap-5">
        <Image
          src={saudi_tree}
          alt="saudi_tree"
          height={300}
          width={300}
          className="mx-auto mb-3"
        />
        <p className="text-[20px]">
          7051 Prince Sultan - As Salamah
          <br />
          Unit No 9959, Jeddah 23525 - 2661
        </p>
        <p className="text-[20px]">contact@jda.com</p>
        <p className="text-[20px]">+966 12 638 4000</p>
        <p className="text-[14px]">
          Our advisors are available during the hours:
          <br />
          Mon - Fri: 09:00 - 16:00.
        </p>
      </div>
      <div className="flex items-end justify-end h-full">
        <ul className="flex items-center justify-between gap-12 text-[14px]">
          <li>Privacy Policy</li>
          <li>Cookie Policy</li>
          <li>Site Map</li>
        </ul>
      </div>
    </section>
  );
};

export default FooterContact;
