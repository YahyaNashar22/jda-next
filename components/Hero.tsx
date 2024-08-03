import React from "react";
import CtaForm from "./CtaForm";
import HeroNav from "./HeroNav";

const Hero = () => {
  return (
    <main
      id="hero_section"
      className="h-full pt-44 bg-hero-bg bg-cover bg-no-repeat flex flex-col justify-between items-stretch"
    >
      <div className="flex justify-around items-center pb-40">
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
