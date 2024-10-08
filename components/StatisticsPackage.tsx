import React from "react";
import Image, { StaticImageData } from "next/image";

const StatisticsPackage = ({
  packageIco,
  packageText,
  packageTitle,
}: {
  packageIco: string | StaticImageData;
  packageText: string;
  packageTitle: string;
}) => {
  return (
    <div className="w-full flex flex-col items-center justify-between">
      <Image src={packageIco} alt="package ico" width={48} height={48} />
      <h2 className="text-[64px] font-volkhov text-white">{packageText}</h2>
      <p className="text-[16px] font-serif text-white">{packageTitle}</p>
    </div>
  );
};

export default StatisticsPackage;
