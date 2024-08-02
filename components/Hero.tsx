import React from "react";
import CtaForm from "./CtaForm";
import HeroNav from "./HeroNav";

const Hero = () => {
  return (
    <main className="h-screen pt-44 bg-hero-bg bg-contain flex flex-col justify-between items-stretch">
      <div className="flex justify-around items-center">
        <div className="flex flex-col items-start justify-between text-white font-volkhov">
          <p className="text-[67px]">Invest</p>
          <p className="text-[112px]">in Jeddah</p>
        </div>
        <div>
          <CtaForm />
        </div>
      </div>
      <HeroNav />
    </main>
  );
};

export default Hero;
