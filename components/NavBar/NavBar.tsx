"use client";

import React, { useEffect } from "react";
import UpperNav from "./UpperNav";
import LowerNav from "./LowerNav";

const NavBar = () => {
  useEffect(() => {
    let lastScrollTop = 0;
    const navbar = document.getElementById("navbar");

    const handleScroll = () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (navbar) {
        if (scrollTop > lastScrollTop) {
          // Downscroll
          navbar.style.transform = "translateY(-100%)";
        } else {
          // Upscroll
          navbar.style.transform = "translateY(0)";
        }
        lastScrollTop = scrollTop;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      id="navbar"
      className="flex flex-col w-full bg-transparent h-[160px] fixed top-0 transition-transform duration-300 transform"
    >
      <UpperNav />
      <LowerNav />
    </nav>
  );
};

export default NavBar;
