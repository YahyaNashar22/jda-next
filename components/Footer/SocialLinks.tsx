import Image from "next/image";
import React from "react";

import linkedin from "../../public/linkedin.png";
import twitter from "../../public/twitter.png";
import youtube from "../../public/youtube.png";
import arrow_right from "../../public/arrow_right.png";
import jeddah_chamber_logo from "../../public/jeddah_chamber_logo.png";
import saudi_flag_logo from "../../public/saudi_flag_logo.png";

const SocialLinks = () => {
  return (
    <section className="flex flex-col gap-5 rounded-bl-xl absolute -top-3 right-0 bg-footerLightBG px-20 z-10">
      <div className="flex space-between items-center pb-5 pt-16 w-full text-b500 ">
        <p className="w-1/3 text-[16px]">
          The <span className="font-bold">Jeddah Development Authority</span>{" "}
          tasks and powers are designed to achieve its objective lorem ipsum
          dolor amet.
        </p>
        <ul className="flex justify-end items-center ml-auto mt-auto gap-5">
          <li>
            <Image src={linkedin} alt="linkedin" height={16} width={16} />
          </li>
          <li>
            <Image src={twitter} alt="twitter" height={16} width={16} />
          </li>
          <li>
            <Image src={youtube} alt="youtube" height={16} width={16} />
          </li>
        </ul>
      </div>

      <hr className="bg-b500 w-full h-[2px] opacity-20" />

      <div className="text-b500 flex justify-between items-start w-2/3 pt-10 pb-16">
        <ul className="flex flex-col gap-5 ">
          <li className="flex items-center justify-start gap-2 font-volkhov font-semibold text-[14px]">
            Tenders{" "}
            <span>
              <Image src={arrow_right} alt="arrow right" height={7} width={7} />
            </span>
          </li>
          <li className="flex items-center justify-start gap-2 font-volkhov font-semibold text-[14px]">
            Annual report{" "}
            <span>
              <Image src={arrow_right} alt="arrow right" height={7} width={7} />
            </span>
          </li>{" "}
          <li className="flex items-center justify-start gap-2 font-volkhov font-semibold text-[14px]">
            Visit Jeddah{" "}
            <span>
              <Image src={arrow_right} alt="arrow right" height={7} width={7} />
            </span>
          </li>
          <li className="flex items-center justify-start gap-2 font-volkhov font-semibold text-[14px]">
            Publications{" "}
            <span>
              <Image src={arrow_right} alt="arrow right" height={7} width={7} />
            </span>
          </li>
        </ul>
        <div className="flex flex-col gap-2">
          <p className="font-volkhov font-semibold text-b500">Our partners:</p>
          <div className="flex gap-5">
            <Image
              src={jeddah_chamber_logo}
              alt="jeddah chamber"
              height={116}
              width={78}
            />
            <Image
              src={saudi_flag_logo}
              alt="saudi flag"
              height={61}
              width={61}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
