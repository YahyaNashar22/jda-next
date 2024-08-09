"use client";
import { builder, Builder } from "@builder.io/react";
import BigCarousel from "./components/BigCarousel";
import Counter from "./components/Counter/Counter";
import UpperNav from "./components/NavBar/UpperNav";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(UpperNav, {
  name: "UpperNav",
});

Builder.registerComponent(BigCarousel, {
  name: "BigCarousel",
});
