"use client";

import React, { useEffect, useState } from "react";
import UpperNav from "./UpperNav";
import LowerNav from "./LowerNav";

const NavBar = () => {
  const [navBg, setNavBg] = useState("transparent");

  useEffect(() => {
    let lastScrollTop = 0;
    const navbar = document.getElementById("navbar");
    const heroSection = document.getElementById("hero_section");

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

    const observerOptions = {
      root: null,
      threshold: 0,
    };

    const observerCallback = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setNavBg("transparent");
        } else {
          setNavBg("b500");
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    if (heroSection) {
      observer.observe(heroSection);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (heroSection) {
        observer.unobserve(heroSection);
      }
    };
  }, []);

  return (
    <nav
      id="navbar"
      className={`flex flex-col w-full bg-${navBg} h-[160px] fixed top-0 transition-transform duration-300 transform z-50`}
    >
      <UpperNav />
      <LowerNav />
    </nav>
  );
};

export default NavBar;
